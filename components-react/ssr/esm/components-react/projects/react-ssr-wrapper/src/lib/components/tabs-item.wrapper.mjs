'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { usePrefix, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRTabsItem } from '../dsr-components/tabs-item.mjs';

const PTabsItem = forwardRef((
// @ts-ignore
{ label, className, children, theme = 'light', ...rest }, ref) => {
    const elementRef = useRef();
    const WebComponentTag = usePrefix('p-tabs-item');
    useBrowserLayoutEffect(() => {
        elementRef.current.label = label;
    }, [label]);
    // @ts-ignore
    if (!process.browser) {
        className = className ? `${className} ssr` : 'ssr';
    }
    const props = {
        ...rest,
        // @ts-ignore
        ...(!process.browser
            ? {
                children: (jsx(DSRTabsItem, { label, theme, children })),
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

export { PTabsItem };
