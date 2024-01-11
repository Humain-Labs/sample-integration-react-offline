'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');
var buttonTile = require('../dsr-components/button-tile.cjs');

const PButtonTile = react.forwardRef(({ align = 'bottom', aria, aspectRatio = '4:3', background = 'dark', compact = false, description, disabled = false, gradient = true, icon = 'none', iconSource, label, loading = false, size = 'default', type = 'submit', weight = 'semi-bold', className, children, ...rest }, ref) => {
    const elementRef = react.useRef();
    const WebComponentTag = hooks.usePrefix('p-button-tile');
    const propsToSync = [align, aria, aspectRatio, background, compact, description, disabled, gradient, icon, iconSource, label, loading, size, type, weight];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['align', 'aria', 'aspectRatio', 'background', 'compact', 'description', 'disabled', 'gradient', 'icon', 'iconSource', 'label', 'loading', 'size', 'type', 'weight'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsxRuntime.jsx(buttonTile.DSRButtonTile, { align, aria, aspectRatio, background, compact, description, disabled, gradient, icon, iconSource, label, loading, size, type, weight, children })),
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

exports.PButtonTile = PButtonTile;