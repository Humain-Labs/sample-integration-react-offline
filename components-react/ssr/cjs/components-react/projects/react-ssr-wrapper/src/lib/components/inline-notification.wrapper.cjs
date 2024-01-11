'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');
var inlineNotification = require('../dsr-components/inline-notification.cjs');

const PInlineNotification = react.forwardRef(({ actionIcon = 'arrow-right', actionLabel, actionLoading = false, description = '', dismissButton = true, heading = '', onAction, onDismiss, persistent, state = 'info', theme, className, children, ...rest }, ref) => {
    const elementRef = react.useRef();
    hooks.useEventCallback(elementRef, 'action', onAction);
    hooks.useEventCallback(elementRef, 'dismiss', onDismiss);
    const WebComponentTag = hooks.usePrefix('p-inline-notification');
    const propsToSync = [actionIcon, actionLabel, actionLoading, description, dismissButton, heading, persistent, state, theme || hooks.useTheme()];
    hooks.useBrowserLayoutEffect(() => {
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
                children: (jsxRuntime.jsx(inlineNotification.DSRInlineNotification, { actionIcon, actionLabel, actionLoading, description, dismissButton, heading, persistent, state, theme: theme || hooks.useTheme(), children })),
            }
            : {
                children,
                suppressHydrationWarning: true,
            }),
        class: hooks.useMergedClass(elementRef, className),
        ref: utils.syncRef(elementRef, ref)
    };
    return jsxRuntime.jsx(WebComponentTag, { ...props });
});

exports.PInlineNotification = PInlineNotification;