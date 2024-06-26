'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');
var grid = require('../dsr-components/grid.cjs');

/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Grid instead. */
const PGrid = react.forwardRef(({ direction = 'row', gutter = { base: 16, s: 24, m: 36 }, wrap = 'wrap', className, children, ...rest }, ref) => {
    const elementRef = react.useRef();
    const WebComponentTag = hooks.usePrefix('p-grid');
    const propsToSync = [direction, gutter, wrap];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['direction', 'gutter', 'wrap'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsxRuntime.jsx(grid.DSRGrid, { direction, gutter, wrap, children })),
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

exports.PGrid = PGrid;
