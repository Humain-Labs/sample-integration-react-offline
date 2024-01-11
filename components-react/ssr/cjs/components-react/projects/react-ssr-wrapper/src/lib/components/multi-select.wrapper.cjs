'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');
var multiSelect = require('../dsr-components/multi-select.cjs');

const PMultiSelect = react.forwardRef(({ description = '', disabled = false, dropdownDirection = 'auto', hideLabel = false, label = '', message = '', name, onUpdate, required = false, state = 'none', theme, value = [], className, children, ...rest }, ref) => {
    const elementRef = react.useRef();
    hooks.useEventCallback(elementRef, 'update', onUpdate);
    const WebComponentTag = hooks.usePrefix('p-multi-select');
    const propsToSync = [description, disabled, dropdownDirection, hideLabel, label, message, name, required, state, theme || hooks.useTheme(), value];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['description', 'disabled', 'dropdownDirection', 'hideLabel', 'label', 'message', 'name', 'required', 'state', 'theme', 'value'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsxRuntime.jsx(multiSelect.DSRMultiSelect, { description, disabled, dropdownDirection, hideLabel, label, message, name, required, state, theme: theme || hooks.useTheme(), value, children })),
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

exports.PMultiSelect = PMultiSelect;
