'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');
var segmentedControlItem = require('../dsr-components/segmented-control-item.cjs');

const PSegmentedControlItem = react.forwardRef((
// @ts-ignore
{ disabled = false, icon, iconSource, label, value, className, children, selected, theme = 'light', ...rest }, ref) => {
    const elementRef = react.useRef();
    const WebComponentTag = hooks.usePrefix('p-segmented-control-item');
    const propsToSync = [disabled, icon, iconSource, label, value];
    hooks.useBrowserLayoutEffect(() => {
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
                children: (jsxRuntime.jsx(segmentedControlItem.DSRSegmentedControlItem, { disabled, icon, iconSource, label, value, selected, theme, children })),
            }
            : {
                children,
                suppressHydrationWarning: true,
            }),
        class: hooks.useMergedClass(elementRef, className),
        ref: utils.syncRef(elementRef, ref)
    };
    return jsxRuntime.jsx(WebComponentTag, { ...props });
});

exports.PSegmentedControlItem = PSegmentedControlItem;
