'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');
var multiSelectOption = require('../dsr-components/multi-select-option.cjs');

const PMultiSelectOption = react.forwardRef(({ disabled = false, value, className, children, ...rest }, ref) => {
    const elementRef = react.useRef();
    const WebComponentTag = hooks.usePrefix('p-multi-select-option');
    const propsToSync = [disabled, value];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['disabled', 'value'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsxRuntime.jsx(multiSelectOption.DSRMultiSelectOption, { disabled, value, children })),
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

exports.PMultiSelectOption = PMultiSelectOption;