'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');
var linkTile = require('../dsr-components/link-tile.cjs');

const PLinkTile = react.forwardRef(({ align = 'bottom', aria, aspectRatio = '4:3', background = 'dark', compact = false, description, download, gradient = true, href, label, rel, size = 'default', target = '_self', weight = 'semi-bold', className, children, ...rest }, ref) => {
    const elementRef = react.useRef();
    const WebComponentTag = hooks.usePrefix('p-link-tile');
    const propsToSync = [align, aria, aspectRatio, background, compact, description, download, gradient, href, label, rel, size, target, weight];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['align', 'aria', 'aspectRatio', 'background', 'compact', 'description', 'download', 'gradient', 'href', 'label', 'rel', 'size', 'target', 'weight'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsxRuntime.jsx(linkTile.DSRLinkTile, { align, aria, aspectRatio, background, compact, description, download, gradient, href, label, rel, size, target, weight, children })),
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

exports.PLinkTile = PLinkTile;
