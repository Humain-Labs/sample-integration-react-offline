'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { useEventCallback, usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';

const PSwitch = forwardRef(({ alignLabel = 'end', checked = false, disabled = false, hideLabel = false, loading = false, onSwitchChange, onUpdate, stretch = false, theme, className, ...rest }, ref) => {
    const elementRef = useRef();
    useEventCallback(elementRef, 'switchChange', onSwitchChange);
    useEventCallback(elementRef, 'update', onUpdate);
    const WebComponentTag = usePrefix('p-switch');
    const propsToSync = [alignLabel, checked, disabled, hideLabel, loading, stretch, theme || useTheme()];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['alignLabel', 'checked', 'disabled', 'hideLabel', 'loading', 'stretch', 'theme'].forEach((propName, i) => (current[propName] = propsToSync[i]));
    }, propsToSync);
    const props = {
        ...rest,
        class: useMergedClass(elementRef, className),
        ref: syncRef(elementRef, ref)
    };
    return jsx(WebComponentTag, { ...props });
});

export { PSwitch };