'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { useEventCallback, usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRMultiSelect } from '../dsr-components/multi-select.mjs';

const PMultiSelect = forwardRef(({ description = '', disabled = false, dropdownDirection = 'auto', hideLabel = false, label = '', message = '', name, onUpdate, required = false, state = 'none', theme, value = [], className, children, ...rest }, ref) => {
    const elementRef = useRef();
    useEventCallback(elementRef, 'update', onUpdate);
    const WebComponentTag = usePrefix('p-multi-select');
    const propsToSync = [description, disabled, dropdownDirection, hideLabel, label, message, name, required, state, theme || useTheme(), value];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['description', 'disabled', 'dropdownDirection', 'hideLabel', 'label', 'message', 'name', 'required', 'state', 'theme', 'value'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsx(DSRMultiSelect, { description, disabled, dropdownDirection, hideLabel, label, message, name, required, state, theme: theme || useTheme(), value, children })),
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

export { PMultiSelect };
