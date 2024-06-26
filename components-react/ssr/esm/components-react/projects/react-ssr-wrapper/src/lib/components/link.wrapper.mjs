'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRLink } from '../dsr-components/link.mjs';

const PLink = forwardRef(({ aria, download, hideLabel = false, href, icon = 'none', iconSource, rel, target = '_self', theme, variant = 'primary', className, children, ...rest }, ref) => {
    const elementRef = useRef();
    const WebComponentTag = usePrefix('p-link');
    const propsToSync = [aria, download, hideLabel, href, icon, iconSource, rel, target, theme || useTheme(), variant];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['aria', 'download', 'hideLabel', 'href', 'icon', 'iconSource', 'rel', 'target', 'theme', 'variant'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsx(DSRLink, { aria, download, hideLabel, href, icon, iconSource, rel, target, theme: theme || useTheme(), variant, children })),
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

export { PLink };
