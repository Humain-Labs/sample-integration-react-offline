'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRModelSignature } from '../dsr-components/model-signature.mjs';

const PModelSignature = forwardRef(({ color = 'primary', model = '911', size = 'small', theme, className, ...rest }, ref) => {
    const elementRef = useRef();
    const WebComponentTag = usePrefix('p-model-signature');
    const propsToSync = [color, model, size, theme || useTheme()];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['color', 'model', 'size', 'theme'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsx(DSRModelSignature, { color, model, size, theme: theme || useTheme() })),
            }
            : {
                suppressHydrationWarning: true,
            }),
        class: useMergedClass(elementRef, className),
        ref: syncRef(elementRef, ref)
    };
    return jsx(WebComponentTag, { ...props });
});

export { PModelSignature };