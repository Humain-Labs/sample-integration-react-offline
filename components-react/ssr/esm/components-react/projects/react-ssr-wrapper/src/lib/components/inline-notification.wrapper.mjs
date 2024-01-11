'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { useEventCallback, usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRInlineNotification } from '../dsr-components/inline-notification.mjs';

const PInlineNotification = forwardRef(({ actionIcon = 'arrow-right', actionLabel, actionLoading = false, description = '', dismissButton = true, heading = '', onAction, onDismiss, persistent, state = 'info', theme, className, children, ...rest }, ref) => {
    const elementRef = useRef();
    useEventCallback(elementRef, 'action', onAction);
    useEventCallback(elementRef, 'dismiss', onDismiss);
    const WebComponentTag = usePrefix('p-inline-notification');
    const propsToSync = [actionIcon, actionLabel, actionLoading, description, dismissButton, heading, persistent, state, theme || useTheme()];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['actionIcon', 'actionLabel', 'actionLoading', 'description', 'dismissButton', 'heading', 'persistent', 'state', 'theme'].forEach((propName, i) => (current[propName] = propsToSync[i]));
    }, propsToSync);
    // @ts-ignore
    if (!process.browser) {
        className = className ? `${className} ssr` : 'ssr';
    }
    const props = {
        ...rest,
        // @ts-ignore
        ...(!process.browser
            ? {
                children: (jsx(DSRInlineNotification, { actionIcon, actionLabel, actionLoading, description, dismissButton, heading, persistent, state, theme: theme || useTheme(), children })),
            }
            : {
                children,
                suppressHydrationWarning: true,
            }),
        class: useMergedClass(elementRef, className),
        ref: syncRef(elementRef, ref)
    };
    return jsx(WebComponentTag, { ...props });
});

export { PInlineNotification };