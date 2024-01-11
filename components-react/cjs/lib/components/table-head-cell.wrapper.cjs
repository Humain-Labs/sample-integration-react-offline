'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');

const PTableHeadCell = react.forwardRef(({ hideLabel = false, multiline = false, sort, className, ...rest }, ref) => {
    const elementRef = react.useRef();
    const WebComponentTag = hooks.usePrefix('p-table-head-cell');
    const propsToSync = [hideLabel, multiline, sort];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['hideLabel', 'multiline', 'sort'].forEach((propName, i) => (current[propName] = propsToSync[i]));
    }, propsToSync);
    const props = {
        ...rest,
        class: hooks.useMergedClass(elementRef, className),
        ref: utils.syncRef(elementRef, ref)
    };
    return jsxRuntime.jsx(WebComponentTag, { ...props });
});

exports.PTableHeadCell = PTableHeadCell;
