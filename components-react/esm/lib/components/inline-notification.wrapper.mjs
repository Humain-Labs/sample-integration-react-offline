'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { useEventCallback, usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';

const PInlineNotification = forwardRef(({ actionIcon = 'arrow-right', actionLabel, actionLoading = false, description = '', dismissButton = true, heading = '', onAction, onDismiss, persistent, state = 'info', theme, className, ...rest }, ref) => {
    const elementRef = useRef();
    useEventCallback(elementRef, 'action', onAction);
    useEventCallback(elementRef, 'dismiss', onDismiss);
    const WebComponentTag = usePrefix('p-inline-notification');
    const propsToSync = [actionIcon, actionLabel, actionLoading, description, dismissButton, heading, persistent, state, theme || useTheme()];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['actionIcon', 'actionLabel', 'actionLoading', 'description', 'dismissButton', 'heading', 'persistent', 'state', 'theme'].forEach((propName, i) => (current[propName] = propsToSync[i]));
    }, propsToSync);
    const props = {
        ...rest,
        class: useMergedClass(elementRef, className),
        ref: syncRef(elementRef, ref)
    };
    return jsx(WebComponentTag, { ...props });
});

export { PInlineNotification };
