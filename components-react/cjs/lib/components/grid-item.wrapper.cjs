'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');

/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Grid instead. */
const PGridItem = react.forwardRef(({ offset = 0, size = 1, className, ...rest }, ref) => {
    const elementRef = react.useRef();
    const WebComponentTag = hooks.usePrefix('p-grid-item');
    const propsToSync = [offset, size];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['offset', 'size'].forEach((propName, i) => (current[propName] = propsToSync[i]));
    }, propsToSync);
    const props = {
        ...rest,
        class: hooks.useMergedClass(elementRef, className),
        ref: utils.syncRef(elementRef, ref)
    };
    return jsxRuntime.jsx(WebComponentTag, { ...props });
});

exports.PGridItem = PGridItem;
