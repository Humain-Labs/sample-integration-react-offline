'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';

const PScroller = forwardRef(({ alignScrollIndicator = 'center', aria, gradientColor = 'background-base', gradientColorScheme, scrollIndicatorPosition, scrollToPosition, scrollbar = false, theme, className, ...rest }, ref) => {
    const elementRef = useRef();
    const WebComponentTag = usePrefix('p-scroller');
    const propsToSync = [alignScrollIndicator, aria, gradientColor, gradientColorScheme, scrollIndicatorPosition, scrollToPosition, scrollbar, theme || useTheme()];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['alignScrollIndicator', 'aria', 'gradientColor', 'gradientColorScheme', 'scrollIndicatorPosition', 'scrollToPosition', 'scrollbar', 'theme'].forEach((propName, i) => (current[propName] = propsToSync[i]));
    }, propsToSync);
    const props = {
        ...rest,
        class: useMergedClass(elementRef, className),
        ref: syncRef(elementRef, ref)
    };
    return jsx(WebComponentTag, { ...props });
});

export { PScroller };
