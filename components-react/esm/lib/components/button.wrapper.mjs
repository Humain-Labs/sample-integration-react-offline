'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';

const PButton = forwardRef(({ aria, disabled = false, hideLabel = false, icon = 'none', iconSource, loading = false, name, theme, type = 'submit', value, variant = 'primary', className, ...rest }, ref) => {
    const elementRef = useRef();
    const WebComponentTag = usePrefix('p-button');
    const propsToSync = [aria, disabled, hideLabel, icon, iconSource, loading, name, theme || useTheme(), type, value, variant];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['aria', 'disabled', 'hideLabel', 'icon', 'iconSource', 'loading', 'name', 'theme', 'type', 'value', 'variant'].forEach((propName, i) => (current[propName] = propsToSync[i]));
    }, propsToSync);
    const props = {
        ...rest,
        class: useMergedClass(elementRef, className),
        ref: syncRef(elementRef, ref)
    };
    return jsx(WebComponentTag, { ...props });
});

export { PButton };
