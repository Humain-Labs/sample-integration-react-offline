'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { usePrefix, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';

/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Flex instead. */
const PFlex = forwardRef(({ alignContent = 'stretch', alignItems = 'stretch', direction = 'row', inline = false, justifyContent = 'flex-start', wrap = 'nowrap', className, ...rest }, ref) => {
    const elementRef = useRef();
    const WebComponentTag = usePrefix('p-flex');
    const propsToSync = [alignContent, alignItems, direction, inline, justifyContent, wrap];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['alignContent', 'alignItems', 'direction', 'inline', 'justifyContent', 'wrap'].forEach((propName, i) => (current[propName] = propsToSync[i]));
    }, propsToSync);
    const props = {
        ...rest,
        class: useMergedClass(elementRef, className),
        ref: syncRef(elementRef, ref)
    };
    return jsx(WebComponentTag, { ...props });
});

export { PFlex };
