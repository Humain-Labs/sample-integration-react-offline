'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { usePrefix, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRButtonTile } from '../dsr-components/button-tile.mjs';

const PButtonTile = forwardRef(({ align = 'bottom', aria, aspectRatio = '4:3', background = 'dark', compact = false, description, disabled = false, gradient = true, icon = 'none', iconSource, label, loading = false, size = 'default', type = 'submit', weight = 'semi-bold', className, children, ...rest }, ref) => {
    const elementRef = useRef();
    const WebComponentTag = usePrefix('p-button-tile');
    const propsToSync = [align, aria, aspectRatio, background, compact, description, disabled, gradient, icon, iconSource, label, loading, size, type, weight];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['align', 'aria', 'aspectRatio', 'background', 'compact', 'description', 'disabled', 'gradient', 'icon', 'iconSource', 'label', 'loading', 'size', 'type', 'weight'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsx(DSRButtonTile, { align, aria, aspectRatio, background, compact, description, disabled, gradient, icon, iconSource, label, loading, size, type, weight, children })),
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

export { PButtonTile };
