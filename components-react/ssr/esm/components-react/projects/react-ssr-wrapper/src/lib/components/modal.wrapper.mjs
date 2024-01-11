'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { useEventCallback, usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRModal } from '../dsr-components/modal.mjs';

const PModal = forwardRef(({ aria, disableBackdropClick = false, disableCloseButton, dismissButton = true, fullscreen = false, heading, onClose, onDismiss, open = false, theme, className, children, ...rest }, ref) => {
    const elementRef = useRef();
    useEventCallback(elementRef, 'close', onClose);
    useEventCallback(elementRef, 'dismiss', onDismiss);
    const WebComponentTag = usePrefix('p-modal');
    const propsToSync = [aria, disableBackdropClick, disableCloseButton, dismissButton, fullscreen, heading, open, theme || useTheme()];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['aria', 'disableBackdropClick', 'disableCloseButton', 'dismissButton', 'fullscreen', 'heading', 'open', 'theme'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsx(DSRModal, { aria, disableBackdropClick, disableCloseButton, dismissButton, fullscreen, heading, open, theme: theme || useTheme(), children })),
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

export { PModal };
