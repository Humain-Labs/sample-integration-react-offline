'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');

const PTextareaWrapper = react.forwardRef(({ description = '', hideLabel = false, label = '', message = '', showCharacterCount, showCounter = true, state = 'none', theme, className, ...rest }, ref) => {
    const elementRef = react.useRef();
    const WebComponentTag = hooks.usePrefix('p-textarea-wrapper');
    const propsToSync = [description, hideLabel, label, message, showCharacterCount, showCounter, state, theme || hooks.useTheme()];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['description', 'hideLabel', 'label', 'message', 'showCharacterCount', 'showCounter', 'state', 'theme'].forEach((propName, i) => (current[propName] = propsToSync[i]));
    }, propsToSync);
    const props = {
        ...rest,
        class: hooks.useMergedClass(elementRef, className),
        ref: utils.syncRef(elementRef, ref)
    };
    return jsxRuntime.jsx(WebComponentTag, { ...props });
});

exports.PTextareaWrapper = PTextareaWrapper;