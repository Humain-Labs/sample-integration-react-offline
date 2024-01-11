'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { usePrefix, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';

/** @deprecated since v3.0.0, will be removed with next major release. Please use "p-wordmark" instead. */
const PMarque = forwardRef(({ aria, href, size = 'responsive', target = '_self', trademark = true, variant = 'default', className, ...rest }, ref) => {
    const elementRef = useRef();
    const WebComponentTag = usePrefix('p-marque');
    const propsToSync = [aria, href, size, target, trademark, variant];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['aria', 'href', 'size', 'target', 'trademark', 'variant'].forEach((propName, i) => (current[propName] = propsToSync[i]));
    }, propsToSync);
    const props = {
        ...rest,
        class: useMergedClass(elementRef, className),
        ref: syncRef(elementRef, ref)
    };
    return jsx(WebComponentTag, { ...props });
});

export { PMarque };
