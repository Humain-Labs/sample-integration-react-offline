'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');
var tagDismissible = require('../dsr-components/tag-dismissible.cjs');

const PTagDismissible = react.forwardRef(({ aria, color = 'background-surface', label, theme, className, children, ...rest }, ref) => {
    const elementRef = react.useRef();
    const WebComponentTag = hooks.usePrefix('p-tag-dismissible');
    const propsToSync = [aria, color, label, theme || hooks.useTheme()];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['aria', 'color', 'label', 'theme'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsxRuntime.jsx(tagDismissible.DSRTagDismissible, { aria, color, label, theme: theme || hooks.useTheme(), children })),
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

exports.PTagDismissible = PTagDismissible;