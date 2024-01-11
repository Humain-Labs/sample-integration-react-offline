'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { useEventCallback, usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';

const PTable = forwardRef(({ caption, onSortingChange, onUpdate, theme, className, ...rest }, ref) => {
    const elementRef = useRef();
    useEventCallback(elementRef, 'sortingChange', onSortingChange);
    useEventCallback(elementRef, 'update', onUpdate);
    const WebComponentTag = usePrefix('p-table');
    const propsToSync = [caption, theme || useTheme()];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['caption', 'theme'].forEach((propName, i) => (current[propName] = propsToSync[i]));
    }, propsToSync);
    const props = {
        ...rest,
        class: useMergedClass(elementRef, className),
        ref: syncRef(elementRef, ref)
    };
    return jsx(WebComponentTag, { ...props });
});

export { PTable };
