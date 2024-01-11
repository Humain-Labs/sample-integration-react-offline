'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { useEventCallback, usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRTabs } from '../dsr-components/tabs.mjs';

const PTabs = forwardRef(({ activeTabIndex = 0, gradientColor = 'background-base', gradientColorScheme, onTabChange, onUpdate, size = 'small', theme, weight = 'regular', className, children, ...rest }, ref) => {
    const elementRef = useRef();
    useEventCallback(elementRef, 'tabChange', onTabChange);
    useEventCallback(elementRef, 'update', onUpdate);
    const WebComponentTag = usePrefix('p-tabs');
    const propsToSync = [activeTabIndex, gradientColor, gradientColorScheme, size, theme || useTheme(), weight];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['activeTabIndex', 'gradientColor', 'gradientColorScheme', 'size', 'theme', 'weight'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsx(DSRTabs, { activeTabIndex, gradientColor, gradientColorScheme, size, theme: theme || useTheme(), weight, children })),
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

export { PTabs };
