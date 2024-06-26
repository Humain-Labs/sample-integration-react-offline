'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');
var linkPure = require('../dsr-components/link-pure.cjs');

const PLinkPure = react.forwardRef(({ active = false, alignLabel = 'end', aria, download, hideLabel = false, href, icon = 'arrow-right', iconSource, rel, size = 'small', stretch = false, target = '_self', theme, underline = false, weight = 'regular', className, children, ...rest }, ref) => {
    const elementRef = react.useRef();
    const WebComponentTag = hooks.usePrefix('p-link-pure');
    const propsToSync = [active, alignLabel, aria, download, hideLabel, href, icon, iconSource, rel, size, stretch, target, theme || hooks.useTheme(), underline, weight];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['active', 'alignLabel', 'aria', 'download', 'hideLabel', 'href', 'icon', 'iconSource', 'rel', 'size', 'stretch', 'target', 'theme', 'underline', 'weight'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsxRuntime.jsx(linkPure.DSRLinkPure, { active, alignLabel, aria, download, hideLabel, href, icon, iconSource, rel, size, stretch, target, theme: theme || hooks.useTheme(), underline, weight, children })),
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

exports.PLinkPure = PLinkPure;
