'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');
var tag = require('../dsr-components/tag.cjs');

const PTag = react.forwardRef(({ color = 'background-surface', icon, iconSource, theme, className, children, ...rest }, ref) => {
    const elementRef = react.useRef();
    const WebComponentTag = hooks.usePrefix('p-tag');
    const propsToSync = [color, icon, iconSource, theme || hooks.useTheme()];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['color', 'icon', 'iconSource', 'theme'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsxRuntime.jsx(tag.DSRTag, { color, icon, iconSource, theme: theme || hooks.useTheme(), children })),
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

exports.PTag = PTag;