'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { useEventCallback, usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRSegmentedControl } from '../dsr-components/segmented-control.mjs';

const PSegmentedControl = forwardRef(({ backgroundColor, columns = 'auto', onSegmentedControlChange, onUpdate, theme, value, className, children, ...rest }, ref) => {
    const elementRef = useRef();
    useEventCallback(elementRef, 'segmentedControlChange', onSegmentedControlChange);
    useEventCallback(elementRef, 'update', onUpdate);
    const WebComponentTag = usePrefix('p-segmented-control');
    const propsToSync = [backgroundColor, columns, theme || useTheme(), value];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['backgroundColor', 'columns', 'theme', 'value'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                ...{ "role": "group" },
                children: (jsx(DSRSegmentedControl, { backgroundColor, columns, theme: theme || useTheme(), value, children })),
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

export { PSegmentedControl };
