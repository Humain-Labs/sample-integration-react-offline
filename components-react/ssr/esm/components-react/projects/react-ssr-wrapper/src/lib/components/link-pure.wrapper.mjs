'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRLinkPure } from '../dsr-components/link-pure.mjs';

const PLinkPure = forwardRef(({ active = false, alignLabel = 'end', aria, download, hideLabel = false, href, icon = 'arrow-right', iconSource, rel, size = 'small', stretch = false, target = '_self', theme, underline = false, weight = 'regular', className, children, ...rest }, ref) => {
    const elementRef = useRef();
    const WebComponentTag = usePrefix('p-link-pure');
    const propsToSync = [active, alignLabel, aria, download, hideLabel, href, icon, iconSource, rel, size, stretch, target, theme || useTheme(), underline, weight];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['active', 'alignLabel', 'aria', 'download', 'hideLabel', 'href', 'icon', 'iconSource', 'rel', 'size', 'stretch', 'target', 'theme', 'underline', 'weight'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsx(DSRLinkPure, { active, alignLabel, aria, download, hideLabel, href, icon, iconSource, rel, size, stretch, target, theme: theme || useTheme(), underline, weight, children })),
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

export { PLinkPure };
