'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');
var selectWrapperDropdown = require('../dsr-components/select-wrapper-dropdown.cjs');

const PSelectWrapperDropdown = react.forwardRef(({ description, direction = 'auto', disabled = false, filter = false, isOpenOverride = false, label, message, onOpenChange, required = false, selectRef, state, theme, className, ...rest }, ref) => {
    const elementRef = react.useRef();
    hooks.useEventCallback(elementRef, 'openChange', onOpenChange);
    const WebComponentTag = hooks.usePrefix('p-select-wrapper-dropdown');
    const propsToSync = [description, direction, disabled, filter, isOpenOverride, label, message, required, selectRef, state, theme || hooks.useTheme()];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['description', 'direction', 'disabled', 'filter', 'isOpenOverride', 'label', 'message', 'required', 'selectRef', 'state', 'theme'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsxRuntime.jsx(selectWrapperDropdown.DSRSelectWrapperDropdown, { description, direction, disabled, filter, isOpenOverride, label, message, required, selectRef, state, theme: theme || hooks.useTheme() })),
            }
            : {
                suppressHydrationWarning: true,
            }),
        class: hooks.useMergedClass(elementRef, className),
        ref: utils.syncRef(elementRef, ref)
    };
    return jsxRuntime.jsx(WebComponentTag, { ...props });
});

exports.PSelectWrapperDropdown = PSelectWrapperDropdown;