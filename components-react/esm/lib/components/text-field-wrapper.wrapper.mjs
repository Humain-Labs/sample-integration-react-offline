'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { useEventCallback, usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';

const PTextFieldWrapper = forwardRef(({ actionIcon, actionLoading = false, description = '', hideLabel = false, label = '', message = '', onAction, showCharacterCount, showCounter = true, showPasswordToggle = true, state = 'none', theme, unit = '', unitPosition = 'prefix', className, ...rest }, ref) => {
    const elementRef = useRef();
    useEventCallback(elementRef, 'action', onAction);
    const WebComponentTag = usePrefix('p-text-field-wrapper');
    const propsToSync = [actionIcon, actionLoading, description, hideLabel, label, message, showCharacterCount, showCounter, showPasswordToggle, state, theme || useTheme(), unit, unitPosition];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['actionIcon', 'actionLoading', 'description', 'hideLabel', 'label', 'message', 'showCharacterCount', 'showCounter', 'showPasswordToggle', 'state', 'theme', 'unit', 'unitPosition'].forEach((propName, i) => (current[propName] = propsToSync[i]));
    }, propsToSync);
    const props = {
        ...rest,
        class: useMergedClass(elementRef, className),
        ref: syncRef(elementRef, ref)
    };
    return jsx(WebComponentTag, { ...props });
});

export { PTextFieldWrapper };