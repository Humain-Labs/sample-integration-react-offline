'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { useEventCallback, usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRBanner } from '../dsr-components/banner.mjs';

const PBanner = forwardRef(({ description = '', dismissButton = true, heading = '', onDismiss, open = false, persistent, state = 'info', theme, width, className, children, ...rest }, ref) => {
    const elementRef = useRef();
    useEventCallback(elementRef, 'dismiss', onDismiss);
    const WebComponentTag = usePrefix('p-banner');
    const propsToSync = [description, dismissButton, heading, open, persistent, state, theme || useTheme(), width];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['description', 'dismissButton', 'heading', 'open', 'persistent', 'state', 'theme', 'width'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsx(DSRBanner, { description, dismissButton, heading, open, persistent, state, theme: theme || useTheme(), width, children })),
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

export { PBanner };