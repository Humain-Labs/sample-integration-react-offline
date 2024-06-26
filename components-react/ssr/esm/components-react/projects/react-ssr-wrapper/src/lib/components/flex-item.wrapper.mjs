'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { usePrefix, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRFlexItem } from '../dsr-components/flex-item.mjs';

/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Flex instead. */
const PFlexItem = forwardRef(({ alignSelf = 'auto', flex = 'initial', grow = 0, offset = 'none', shrink = 1, width = 'auto', className, children, ...rest }, ref) => {
    const elementRef = useRef();
    const WebComponentTag = usePrefix('p-flex-item');
    const propsToSync = [alignSelf, flex, grow, offset, shrink, width];
    useBrowserLayoutEffect(() => {
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
                children: (jsx(DSRFlexItem, { alignSelf, flex, grow, offset, shrink, width, children })),
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

export { PFlexItem };
