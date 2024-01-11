'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');
var tableCell = require('../dsr-components/table-cell.cjs');

const PTableCell = react.forwardRef(({ multiline = false, className, children, ...rest }, ref) => {
    const elementRef = react.useRef();
    const WebComponentTag = hooks.usePrefix('p-table-cell');
    hooks.useBrowserLayoutEffect(() => {
        elementRef.current.multiline = multiline;
    }, [multiline]);
    // @ts-ignore
    if (!process.browser) {
        className = className ? `${className} ssr` : 'ssr';
    }
    const props = {
        ...rest,
        // @ts-ignore
        ...(!process.browser
            ? {
                ...{ "role": "cell" },
                children: (jsxRuntime.jsx(tableCell.DSRTableCell, { multiline, children })),
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

exports.PTableCell = PTableCell;
