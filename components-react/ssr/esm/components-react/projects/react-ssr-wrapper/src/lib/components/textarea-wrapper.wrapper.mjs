'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRTextareaWrapper } from '../dsr-components/textarea-wrapper.mjs';

const PTextareaWrapper = forwardRef(({ description = '', hideLabel = false, label = '', message = '', showCharacterCount, showCounter = true, state = 'none', theme, className, children, ...rest }, ref) => {
    const elementRef = useRef();
    const WebComponentTag = usePrefix('p-textarea-wrapper');
    const propsToSync = [description, hideLabel, label, message, showCharacterCount, showCounter, state, theme || useTheme()];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['description', 'hideLabel', 'label', 'message', 'showCharacterCount', 'showCounter', 'state', 'theme'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsx(DSRTextareaWrapper, { description, hideLabel, label, message, showCharacterCount, showCounter, state, theme: theme || useTheme(), children })),
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

export { PTextareaWrapper };
