'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';

const PSelectWrapper = forwardRef(({ description = '', dropdownDirection = 'auto', filter = false, hideLabel = false, label = '', message = '', native = false, state = 'none', theme, className, ...rest }, ref) => {
    const elementRef = useRef();
    const WebComponentTag = usePrefix('p-select-wrapper');
    const propsToSync = [description, dropdownDirection, filter, hideLabel, label, message, native, state, theme || useTheme()];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['description', 'dropdownDirection', 'filter', 'hideLabel', 'label', 'message', 'native', 'state', 'theme'].forEach((propName, i) => (current[propName] = propsToSync[i]));
    }, propsToSync);
    const props = {
        ...rest,
        class: useMergedClass(elementRef, className),
        ref: syncRef(elementRef, ref)
    };
    return jsx(WebComponentTag, { ...props });
});

export { PSelectWrapper };
