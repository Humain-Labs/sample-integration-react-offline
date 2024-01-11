'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');

const PScroller = react.forwardRef(({ alignScrollIndicator = 'center', aria, gradientColor = 'background-base', gradientColorScheme, scrollIndicatorPosition, scrollToPosition, scrollbar = false, theme, className, ...rest }, ref) => {
    const elementRef = react.useRef();
    const WebComponentTag = hooks.usePrefix('p-scroller');
    const propsToSync = [alignScrollIndicator, aria, gradientColor, gradientColorScheme, scrollIndicatorPosition, scrollToPosition, scrollbar, theme || hooks.useTheme()];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['alignScrollIndicator', 'aria', 'gradientColor', 'gradientColorScheme', 'scrollIndicatorPosition', 'scrollToPosition', 'scrollbar', 'theme'].forEach((propName, i) => (current[propName] = propsToSync[i]));
    }, propsToSync);
    const props = {
        ...rest,
        class: hooks.useMergedClass(elementRef, className),
        ref: utils.syncRef(elementRef, ref)
    };
    return jsxRuntime.jsx(WebComponentTag, { ...props });
});

exports.PScroller = PScroller;