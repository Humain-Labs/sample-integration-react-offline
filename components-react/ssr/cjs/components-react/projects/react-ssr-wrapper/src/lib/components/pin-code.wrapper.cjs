'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');
var pinCode = require('../dsr-components/pin-code.cjs');

const PPinCode = react.forwardRef(({ description = '', disabled = false, hideLabel = false, label = '', length = 4, loading = false, message = '', name, onUpdate, required = false, state = 'none', theme, type = 'number', value = '', className, children, ...rest }, ref) => {
    const elementRef = react.useRef();
    hooks.useEventCallback(elementRef, 'update', onUpdate);
    const WebComponentTag = hooks.usePrefix('p-pin-code');
    const propsToSync = [description, disabled, hideLabel, label, length, loading, message, name, required, state, theme || hooks.useTheme(), type, value];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['description', 'disabled', 'hideLabel', 'label', 'length', 'loading', 'message', 'name', 'required', 'state', 'theme', 'type', 'value'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsxRuntime.jsx(pinCode.DSRPinCode, { description, disabled, hideLabel, label, length, loading, message, name, required, state, theme: theme || hooks.useTheme(), type, value, children })),
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

exports.PPinCode = PPinCode;
