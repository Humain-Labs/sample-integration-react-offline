'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');
var fieldsetWrapper = require('../dsr-components/fieldset-wrapper.cjs');

/** @deprecated since v3.0.0, will be removed with next major release. Please use "p-fieldset" instead. */
const PFieldsetWrapper = react.forwardRef(({ label = '', labelSize = 'medium', message = '', required = false, state = 'none', theme, className, children, ...rest }, ref) => {
    const elementRef = react.useRef();
    const WebComponentTag = hooks.usePrefix('p-fieldset-wrapper');
    const propsToSync = [label, labelSize, message, required, state, theme || hooks.useTheme()];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['label', 'labelSize', 'message', 'required', 'state', 'theme'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsxRuntime.jsx(fieldsetWrapper.DSRFieldsetWrapper, { label, labelSize, message, required, state, theme: theme || hooks.useTheme(), children })),
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

exports.PFieldsetWrapper = PFieldsetWrapper;
