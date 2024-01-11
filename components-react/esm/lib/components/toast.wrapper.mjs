'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';

const PToast = forwardRef(({ theme, className, ...rest }, ref) => {
    const elementRef = useRef();
    const WebComponentTag = usePrefix('p-toast');
    const themeValue = useTheme();
    useBrowserLayoutEffect(() => {
        elementRef.current.theme = theme || themeValue;
    }, [theme, themeValue]);
    const props = {
        ...rest,
        class: useMergedClass(elementRef, className),
        ref: syncRef(elementRef, ref)
    };
    return jsx(WebComponentTag, { ...props });
});

export { PToast };
