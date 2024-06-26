'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRIcon } from '../dsr-components/icon.mjs';

const PIcon = forwardRef(({ aria, color = 'primary', lazy, name = 'arrow-right', size = 'small', source, theme, className, ...rest }, ref) => {
    const elementRef = useRef();
    const WebComponentTag = usePrefix('p-icon');
    const propsToSync = [aria, color, lazy, name, size, source, theme || useTheme()];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['aria', 'color', 'lazy', 'name', 'size', 'source', 'theme'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsx(DSRIcon, { aria, color, lazy, name, size, source, theme: theme || useTheme() })),
            }
            : {
                suppressHydrationWarning: true,
            }),
        class: useMergedClass(elementRef, className),
        ref: syncRef(elementRef, ref)
    };
    return jsx(WebComponentTag, { ...props });
});

export { PIcon };
