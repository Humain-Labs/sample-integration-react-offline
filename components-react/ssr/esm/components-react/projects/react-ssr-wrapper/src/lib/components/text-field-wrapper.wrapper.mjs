'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { useEventCallback, usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRTextFieldWrapper } from '../dsr-components/text-field-wrapper.mjs';

const PTextFieldWrapper = forwardRef(({ actionIcon, actionLoading = false, description = '', hideLabel = false, label = '', message = '', onAction, showCharacterCount, showCounter = true, showPasswordToggle = true, state = 'none', theme, unit = '', unitPosition = 'prefix', className, children, ...rest }, ref) => {
    const elementRef = useRef();
    useEventCallback(elementRef, 'action', onAction);
    const WebComponentTag = usePrefix('p-text-field-wrapper');
    const propsToSync = [actionIcon, actionLoading, description, hideLabel, label, message, showCharacterCount, showCounter, showPasswordToggle, state, theme || useTheme(), unit, unitPosition];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['actionIcon', 'actionLoading', 'description', 'hideLabel', 'label', 'message', 'showCharacterCount', 'showCounter', 'showPasswordToggle', 'state', 'theme', 'unit', 'unitPosition'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsx(DSRTextFieldWrapper, { actionIcon, actionLoading, description, hideLabel, label, message, showCharacterCount, showCounter, showPasswordToggle, state, theme: theme || useTheme(), unit, unitPosition, children })),
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

export { PTextFieldWrapper };
