'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { usePrefix, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRTableHeadCell } from '../dsr-components/table-head-cell.mjs';

const PTableHeadCell = forwardRef(({ hideLabel = false, multiline = false, sort, className, children, ...rest }, ref) => {
    const elementRef = useRef();
    const WebComponentTag = usePrefix('p-table-head-cell');
    const propsToSync = [hideLabel, multiline, sort];
    useBrowserLayoutEffect(() => {
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
                children: (jsx(DSRTableHeadCell, { hideLabel, multiline, sort, children })),
            }
            : {
                children,
                suppressHydrationWarning: true,
            }),
        class: useMergedClass(elementRef, className),
        ref: syncRef(elementRef, ref)
    };
    return jsx(WebComponentTag, { ...props });
});

export { PTableHeadCell };
