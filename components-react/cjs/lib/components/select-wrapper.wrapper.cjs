'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');

const PSelectWrapper = react.forwardRef(({ description = '', dropdownDirection = 'auto', filter = false, hideLabel = false, label = '', message = '', native = false, state = 'none', theme, className, ...rest }, ref) => {
    const elementRef = react.useRef();
    const WebComponentTag = hooks.usePrefix('p-select-wrapper');
    const propsToSync = [description, dropdownDirection, filter, hideLabel, label, message, native, state, theme || hooks.useTheme()];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['description', 'dropdownDirection', 'filter', 'hideLabel', 'label', 'message', 'native', 'state', 'theme'].forEach((propName, i) => (current[propName] = propsToSync[i]));
    }, propsToSync);
    const props = {
        ...rest,
        class: hooks.useMergedClass(elementRef, className),
        ref: utils.syncRef(elementRef, ref)
    };
    return jsxRuntime.jsx(WebComponentTag, { ...props });
});

exports.PSelectWrapper = PSelectWrapper;
