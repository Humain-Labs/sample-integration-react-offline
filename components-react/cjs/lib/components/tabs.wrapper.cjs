'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');

const PTabs = react.forwardRef(({ activeTabIndex = 0, gradientColor = 'background-base', gradientColorScheme, onTabChange, onUpdate, size = 'small', theme, weight = 'regular', className, ...rest }, ref) => {
    const elementRef = react.useRef();
    hooks.useEventCallback(elementRef, 'tabChange', onTabChange);
    hooks.useEventCallback(elementRef, 'update', onUpdate);
    const WebComponentTag = hooks.usePrefix('p-tabs');
    const propsToSync = [activeTabIndex, gradientColor, gradientColorScheme, size, theme || hooks.useTheme(), weight];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['activeTabIndex', 'gradientColor', 'gradientColorScheme', 'size', 'theme', 'weight'].forEach((propName, i) => (current[propName] = propsToSync[i]));
    }, propsToSync);
    const props = {
        ...rest,
        class: hooks.useMergedClass(elementRef, className),
        ref: utils.syncRef(elementRef, ref)
    };
    return jsxRuntime.jsx(WebComponentTag, { ...props });
});

exports.PTabs = PTabs;
