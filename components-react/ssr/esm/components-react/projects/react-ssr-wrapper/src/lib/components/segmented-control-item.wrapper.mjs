'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { usePrefix, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRSegmentedControlItem } from '../dsr-components/segmented-control-item.mjs';

const PSegmentedControlItem = forwardRef((
// @ts-ignore
{ disabled = false, icon, iconSource, label, value, className, children, selected, theme = 'light', ...rest }, ref) => {
    const elementRef = useRef();
    const WebComponentTag = usePrefix('p-segmented-control-item');
    const propsToSync = [disabled, icon, iconSource, label, value];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['disabled', 'icon', 'iconSource', 'label', 'value'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsx(DSRSegmentedControlItem, { disabled, icon, iconSource, label, value, selected, theme, children })),
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

export { PSegmentedControlItem };