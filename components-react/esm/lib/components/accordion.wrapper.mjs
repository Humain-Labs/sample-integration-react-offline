'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { useEventCallback, usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';

const PAccordion = forwardRef(({ compact, heading, onAccordionChange, onUpdate, open, size = 'small', tag = 'h2', theme, className, ...rest }, ref) => {
    const elementRef = useRef();
    useEventCallback(elementRef, 'accordionChange', onAccordionChange);
    useEventCallback(elementRef, 'update', onUpdate);
    const WebComponentTag = usePrefix('p-accordion');
    const propsToSync = [compact, heading, open, size, tag, theme || useTheme()];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['compact', 'heading', 'open', 'size', 'tag', 'theme'].forEach((propName, i) => (current[propName] = propsToSync[i]));
    }, propsToSync);
    const props = {
        ...rest,
        class: useMergedClass(elementRef, className),
        ref: syncRef(elementRef, ref)
    };
    return jsx(WebComponentTag, { ...props });
});

export { PAccordion };
