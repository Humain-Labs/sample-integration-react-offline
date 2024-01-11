'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');
var banner = require('../dsr-components/banner.cjs');

const PBanner = react.forwardRef(({ description = '', dismissButton = true, heading = '', onDismiss, open = false, persistent, state = 'info', theme, width, className, children, ...rest }, ref) => {
    const elementRef = react.useRef();
    hooks.useEventCallback(elementRef, 'dismiss', onDismiss);
    const WebComponentTag = hooks.usePrefix('p-banner');
    const propsToSync = [description, dismissButton, heading, open, persistent, state, theme || hooks.useTheme(), width];
    hooks.useBrowserLayoutEffect(() => {
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
                children: (jsxRuntime.jsx(banner.DSRBanner, { description, dismissButton, heading, open, persistent, state, theme: theme || hooks.useTheme(), width, children })),
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

exports.PBanner = PBanner;