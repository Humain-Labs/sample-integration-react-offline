'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');

const PMultiSelect = react.forwardRef(({ description = '', disabled = false, dropdownDirection = 'auto', hideLabel = false, label = '', message = '', name, onUpdate, required = false, state = 'none', theme, value = [], className, ...rest }, ref) => {
    const elementRef = react.useRef();
    hooks.useEventCallback(elementRef, 'update', onUpdate);
    const WebComponentTag = hooks.usePrefix('p-multi-select');
    const propsToSync = [description, disabled, dropdownDirection, hideLabel, label, message, name, required, state, theme || hooks.useTheme(), value];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['description', 'disabled', 'dropdownDirection', 'hideLabel', 'label', 'message', 'name', 'required', 'state', 'theme', 'value'].forEach((propName, i) => (current[propName] = propsToSync[i]));
    }, propsToSync);
    const props = {
        ...rest,
        class: hooks.useMergedClass(elementRef, className),
        ref: utils.syncRef(elementRef, ref)
    };
    return jsxRuntime.jsx(WebComponentTag, { ...props });
});

exports.PMultiSelect = PMultiSelect;