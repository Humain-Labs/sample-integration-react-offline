'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');

const PTextFieldWrapper = react.forwardRef(({ actionIcon, actionLoading = false, description = '', hideLabel = false, label = '', message = '', onAction, showCharacterCount, showCounter = true, showPasswordToggle = true, state = 'none', theme, unit = '', unitPosition = 'prefix', className, ...rest }, ref) => {
    const elementRef = react.useRef();
    hooks.useEventCallback(elementRef, 'action', onAction);
    const WebComponentTag = hooks.usePrefix('p-text-field-wrapper');
    const propsToSync = [actionIcon, actionLoading, description, hideLabel, label, message, showCharacterCount, showCounter, showPasswordToggle, state, theme || hooks.useTheme(), unit, unitPosition];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['actionIcon', 'actionLoading', 'description', 'hideLabel', 'label', 'message', 'showCharacterCount', 'showCounter', 'showPasswordToggle', 'state', 'theme', 'unit', 'unitPosition'].forEach((propName, i) => (current[propName] = propsToSync[i]));
    }, propsToSync);
    const props = {
        ...rest,
        class: hooks.useMergedClass(elementRef, className),
        ref: utils.syncRef(elementRef, ref)
    };
    return jsxRuntime.jsx(WebComponentTag, { ...props });
});

exports.PTextFieldWrapper = PTextFieldWrapper;
