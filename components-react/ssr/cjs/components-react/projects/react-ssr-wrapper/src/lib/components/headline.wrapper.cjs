'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');
var headline = require('../dsr-components/headline.cjs');

/** @deprecated since v3.0.0, will be removed with next major release. Please use "p-heading" instead. */
const PHeadline = react.forwardRef(({ align = 'start', color = 'primary', ellipsis = false, tag, theme, variant = 'headline-1', className, children, ...rest }, ref) => {
    const elementRef = react.useRef();
    const WebComponentTag = hooks.usePrefix('p-headline');
    const propsToSync = [align, color, ellipsis, tag, theme || hooks.useTheme(), variant];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['align', 'color', 'ellipsis', 'tag', 'theme', 'variant'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsxRuntime.jsx(headline.DSRHeadline, { align, color, ellipsis, tag, theme: theme || hooks.useTheme(), variant, children })),
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

exports.PHeadline = PHeadline;
