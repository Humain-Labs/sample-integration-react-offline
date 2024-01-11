'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { useEventCallback, usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';

const PMultiSelect = forwardRef(({ description = '', disabled = false, dropdownDirection = 'auto', hideLabel = false, label = '', message = '', name, onUpdate, required = false, state = 'none', theme, value = [], className, ...rest }, ref) => {
    const elementRef = useRef();
    useEventCallback(elementRef, 'update', onUpdate);
    const WebComponentTag = usePrefix('p-multi-select');
    const propsToSync = [description, disabled, dropdownDirection, hideLabel, label, message, name, required, state, theme || useTheme(), value];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['description', 'disabled', 'dropdownDirection', 'hideLabel', 'label', 'message', 'name', 'required', 'state', 'theme', 'value'].forEach((propName, i) => (current[propName] = propsToSync[i]));
    }, propsToSync);
    const props = {
        ...rest,
        class: useMergedClass(elementRef, className),
        ref: syncRef(elementRef, ref)
    };
    return jsx(WebComponentTag, { ...props });
});

export { PMultiSelect };