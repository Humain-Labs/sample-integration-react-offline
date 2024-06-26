'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');

const PLinkTileModelSignature = react.forwardRef(({ aspectRatio = '3:4', description, heading, headingTag = 'h2', linkDirection = { base: 'column', xs: 'row' }, model = '911', weight = 'semi-bold', className, ...rest }, ref) => {
    const elementRef = react.useRef();
    const WebComponentTag = hooks.usePrefix('p-link-tile-model-signature');
    const propsToSync = [aspectRatio, description, heading, headingTag, linkDirection, model, weight];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['aspectRatio', 'description', 'heading', 'headingTag', 'linkDirection', 'model', 'weight'].forEach((propName, i) => (current[propName] = propsToSync[i]));
    }, propsToSync);
    const props = {
        ...rest,
        class: hooks.useMergedClass(elementRef, className),
        ref: utils.syncRef(elementRef, ref)
    };
    return jsxRuntime.jsx(WebComponentTag, { ...props });
});

exports.PLinkTileModelSignature = PLinkTileModelSignature;
