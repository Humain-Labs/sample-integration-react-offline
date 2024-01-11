'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { useEventCallback, usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRPinCode } from '../dsr-components/pin-code.mjs';

const PPinCode = forwardRef(({ description = '', disabled = false, hideLabel = false, label = '', length = 4, loading = false, message = '', name, onUpdate, required = false, state = 'none', theme, type = 'number', value = '', className, children, ...rest }, ref) => {
    const elementRef = useRef();
    useEventCallback(elementRef, 'update', onUpdate);
    const WebComponentTag = usePrefix('p-pin-code');
    const propsToSync = [description, disabled, hideLabel, label, length, loading, message, name, required, state, theme || useTheme(), type, value];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['description', 'disabled', 'hideLabel', 'label', 'length', 'loading', 'message', 'name', 'required', 'state', 'theme', 'type', 'value'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsx(DSRPinCode, { description, disabled, hideLabel, label, length, loading, message, name, required, state, theme: theme || useTheme(), type, value, children })),
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

export { PPinCode };
