'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');

const PLinkPure = react.forwardRef(({ active = false, alignLabel = 'end', aria, download, hideLabel = false, href, icon = 'arrow-right', iconSource, rel, size = 'small', stretch = false, target = '_self', theme, underline = false, weight = 'regular', className, ...rest }, ref) => {
    const elementRef = react.useRef();
    const WebComponentTag = hooks.usePrefix('p-link-pure');
    const propsToSync = [active, alignLabel, aria, download, hideLabel, href, icon, iconSource, rel, size, stretch, target, theme || hooks.useTheme(), underline, weight];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['active', 'alignLabel', 'aria', 'download', 'hideLabel', 'href', 'icon', 'iconSource', 'rel', 'size', 'stretch', 'target', 'theme', 'underline', 'weight'].forEach((propName, i) => (current[propName] = propsToSync[i]));
    }, propsToSync);
    const props = {
        ...rest,
        class: hooks.useMergedClass(elementRef, className),
        ref: utils.syncRef(elementRef, ref)
    };
    return jsxRuntime.jsx(WebComponentTag, { ...props });
});

exports.PLinkPure = PLinkPure;
