'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { usePrefix, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRStepperHorizontalItem } from '../dsr-components/stepper-horizontal-item.mjs';

const PStepperHorizontalItem = forwardRef((
// @ts-ignore
{ disabled = false, state, className, children, theme = 'light', ...rest }, ref) => {
    const elementRef = useRef();
    const WebComponentTag = usePrefix('p-stepper-horizontal-item');
    const propsToSync = [disabled, state];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['disabled', 'state'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                ...{ "role": "listitem" },
                children: (jsx(DSRStepperHorizontalItem, { disabled, state, theme, children })),
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

export { PStepperHorizontalItem };