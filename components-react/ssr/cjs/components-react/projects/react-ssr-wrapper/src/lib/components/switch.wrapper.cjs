'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');
var _switch = require('../dsr-components/switch.cjs');

const PSwitch = react.forwardRef(({ alignLabel = 'end', checked = false, disabled = false, hideLabel = false, loading = false, onSwitchChange, onUpdate, stretch = false, theme, className, children, ...rest }, ref) => {
    const elementRef = react.useRef();
    hooks.useEventCallback(elementRef, 'switchChange', onSwitchChange);
    hooks.useEventCallback(elementRef, 'update', onUpdate);
    const WebComponentTag = hooks.usePrefix('p-switch');
    const propsToSync = [alignLabel, checked, disabled, hideLabel, loading, stretch, theme || hooks.useTheme()];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['alignLabel', 'checked', 'disabled', 'hideLabel', 'loading', 'stretch', 'theme'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsxRuntime.jsx(_switch.DSRSwitch, { alignLabel, checked, disabled, hideLabel, loading, stretch, theme: theme || hooks.useTheme(), children })),
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

exports.PSwitch = PSwitch;