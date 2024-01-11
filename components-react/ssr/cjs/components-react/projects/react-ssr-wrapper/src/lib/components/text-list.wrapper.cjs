'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');
var textList = require('../dsr-components/text-list.cjs');

const PTextList = react.forwardRef(({ listType, orderType, theme, type = 'unordered', className, children, ...rest }, ref) => {
    const elementRef = react.useRef();
    const WebComponentTag = hooks.usePrefix('p-text-list');
    const propsToSync = [listType, orderType, theme || hooks.useTheme(), type];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['listType', 'orderType', 'theme', 'type'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsxRuntime.jsx(textList.DSRTextList, { listType, orderType, theme: theme || hooks.useTheme(), type, children })),
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

exports.PTextList = PTextList;