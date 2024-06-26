'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRHeading } from '../dsr-components/heading.mjs';

const PHeading = forwardRef(({ align = 'start', color = 'primary', ellipsis = false, size = 'xx-large', tag, theme, className, children, ...rest }, ref) => {
    const elementRef = useRef();
    const WebComponentTag = usePrefix('p-heading');
    const propsToSync = [align, color, ellipsis, size, tag, theme || useTheme()];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['align', 'color', 'ellipsis', 'size', 'tag', 'theme'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsx(DSRHeading, { align, color, ellipsis, size, tag, theme: theme || useTheme(), children })),
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

export { PHeading };
