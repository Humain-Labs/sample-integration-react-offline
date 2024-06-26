'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { useEventCallback, usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRTable } from '../dsr-components/table.mjs';

const PTable = forwardRef(({ caption, onSortingChange, onUpdate, theme, className, children, ...rest }, ref) => {
    const elementRef = useRef();
    useEventCallback(elementRef, 'sortingChange', onSortingChange);
    useEventCallback(elementRef, 'update', onUpdate);
    const WebComponentTag = usePrefix('p-table');
    const propsToSync = [caption, theme || useTheme()];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['caption', 'theme'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsx(DSRTable, { caption, theme: theme || useTheme(), children })),
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

export { PTable };
