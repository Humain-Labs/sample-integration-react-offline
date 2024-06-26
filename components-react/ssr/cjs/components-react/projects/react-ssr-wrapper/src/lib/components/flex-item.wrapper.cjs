'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');
var flexItem = require('../dsr-components/flex-item.cjs');

/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Flex instead. */
const PFlexItem = react.forwardRef(({ alignSelf = 'auto', flex = 'initial', grow = 0, offset = 'none', shrink = 1, width = 'auto', className, children, ...rest }, ref) => {
    const elementRef = react.useRef();
    const WebComponentTag = hooks.usePrefix('p-flex-item');
    const propsToSync = [alignSelf, flex, grow, offset, shrink, width];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['alignSelf', 'flex', 'grow', 'offset', 'shrink', 'width'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsxRuntime.jsx(flexItem.DSRFlexItem, { alignSelf, flex, grow, offset, shrink, width, children })),
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

exports.PFlexItem = PFlexItem;
