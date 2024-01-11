'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');
var tableHeadCell = require('../dsr-components/table-head-cell.cjs');

const PTableHeadCell = react.forwardRef(({ hideLabel = false, multiline = false, sort, className, children, ...rest }, ref) => {
    const elementRef = react.useRef();
    const WebComponentTag = hooks.usePrefix('p-table-head-cell');
    const propsToSync = [hideLabel, multiline, sort];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['hideLabel', 'multiline', 'sort'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                ...{ "scope": "col", "role": "columnheader" },
                children: (jsxRuntime.jsx(tableHeadCell.DSRTableHeadCell, { hideLabel, multiline, sort, children })),
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

exports.PTableHeadCell = PTableHeadCell;