'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');

const PPinCode = react.forwardRef(({ description = '', disabled = false, hideLabel = false, label = '', length = 4, loading = false, message = '', name, onUpdate, required = false, state = 'none', theme, type = 'number', value = '', className, ...rest }, ref) => {
    const elementRef = react.useRef();
    hooks.useEventCallback(elementRef, 'update', onUpdate);
    const WebComponentTag = hooks.usePrefix('p-pin-code');
    const propsToSync = [description, disabled, hideLabel, label, length, loading, message, name, required, state, theme || hooks.useTheme(), type, value];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['description', 'disabled', 'hideLabel', 'label', 'length', 'loading', 'message', 'name', 'required', 'state', 'theme', 'type', 'value'].forEach((propName, i) => (current[propName] = propsToSync[i]));
    }, propsToSync);
    const props = {
        ...rest,
        class: hooks.useMergedClass(elementRef, className),
        ref: utils.syncRef(elementRef, ref)
    };
    return jsxRuntime.jsx(WebComponentTag, { ...props });
});

exports.PPinCode = PPinCode;
