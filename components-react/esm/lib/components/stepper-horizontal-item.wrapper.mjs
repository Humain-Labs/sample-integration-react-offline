'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { usePrefix, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';

const PStepperHorizontalItem = forwardRef(({ disabled = false, state, className, ...rest }, ref) => {
    const elementRef = useRef();
    const WebComponentTag = usePrefix('p-stepper-horizontal-item');
    const propsToSync = [disabled, state];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['disabled', 'state'].forEach((propName, i) => (current[propName] = propsToSync[i]));
    }, propsToSync);
    const props = {
        ...rest,
        class: useMergedClass(elementRef, className),
        ref: syncRef(elementRef, ref)
    };
    return jsx(WebComponentTag, { ...props });
});

export { PStepperHorizontalItem };