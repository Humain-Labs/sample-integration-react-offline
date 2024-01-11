'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { usePrefix, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRGrid } from '../dsr-components/grid.mjs';

/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Grid instead. */
const PGrid = forwardRef(({ direction = 'row', gutter = { base: 16, s: 24, m: 36 }, wrap = 'wrap', className, children, ...rest }, ref) => {
    const elementRef = useRef();
    const WebComponentTag = usePrefix('p-grid');
    const propsToSync = [direction, gutter, wrap];
    useBrowserLayoutEffect(() => {
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
                children: (jsx(DSRGrid, { direction, gutter, wrap, children })),
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

export { PGrid };
