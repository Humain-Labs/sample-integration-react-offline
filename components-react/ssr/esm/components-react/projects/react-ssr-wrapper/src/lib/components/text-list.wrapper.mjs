'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRTextList } from '../dsr-components/text-list.mjs';

const PTextList = forwardRef(({ listType, orderType, theme, type = 'unordered', className, children, ...rest }, ref) => {
    const elementRef = useRef();
    const WebComponentTag = usePrefix('p-text-list');
    const propsToSync = [listType, orderType, theme || useTheme(), type];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['listType', 'orderType', 'theme', 'type'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsx(DSRTextList, { listType, orderType, theme: theme || useTheme(), type, children })),
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

export { PTextList };