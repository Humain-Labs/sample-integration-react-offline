'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { usePrefix, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRLinkTileModelSignature } from '../dsr-components/link-tile-model-signature.mjs';

const PLinkTileModelSignature = forwardRef(({ aspectRatio = '3:4', description, heading, headingTag = 'h2', linkDirection = { base: 'column', xs: 'row' }, model = '911', weight = 'semi-bold', className, children, ...rest }, ref) => {
    const elementRef = useRef();
    const WebComponentTag = usePrefix('p-link-tile-model-signature');
    const propsToSync = [aspectRatio, description, heading, headingTag, linkDirection, model, weight];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['aspectRatio', 'description', 'heading', 'headingTag', 'linkDirection', 'model', 'weight'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsx(DSRLinkTileModelSignature, { aspectRatio, description, heading, headingTag, linkDirection, model, weight, children })),
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

export { PLinkTileModelSignature };