'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { useEventCallback, usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRStepperHorizontal } from '../dsr-components/stepper-horizontal.mjs';

const PStepperHorizontal = forwardRef(({ onStepChange, onUpdate, size = 'small', theme, className, children, ...rest }, ref) => {
    const elementRef = useRef();
    useEventCallback(elementRef, 'stepChange', onStepChange);
    useEventCallback(elementRef, 'update', onUpdate);
    const WebComponentTag = usePrefix('p-stepper-horizontal');
    const propsToSync = [size, theme || useTheme()];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['size', 'theme'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsx(DSRStepperHorizontal, { size, theme: theme || useTheme(), children })),
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

export { PStepperHorizontal };
