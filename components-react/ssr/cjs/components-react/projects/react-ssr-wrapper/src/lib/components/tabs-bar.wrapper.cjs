'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');
var tabsBar = require('../dsr-components/tabs-bar.cjs');

const PTabsBar = react.forwardRef(({ activeTabIndex, gradientColor = 'background-base', gradientColorScheme, onTabChange, onUpdate, size = 'small', theme, weight = 'regular', className, children, ...rest }, ref) => {
    const elementRef = react.useRef();
    hooks.useEventCallback(elementRef, 'tabChange', onTabChange);
    hooks.useEventCallback(elementRef, 'update', onUpdate);
    const WebComponentTag = hooks.usePrefix('p-tabs-bar');
    const propsToSync = [activeTabIndex, gradientColor, gradientColorScheme, size, theme || hooks.useTheme(), weight];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['activeTabIndex', 'gradientColor', 'gradientColorScheme', 'size', 'theme', 'weight'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsxRuntime.jsx(tabsBar.DSRTabsBar, { activeTabIndex, gradientColor, gradientColorScheme, size, theme: theme || hooks.useTheme(), weight, children })),
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

exports.PTabsBar = PTabsBar;
