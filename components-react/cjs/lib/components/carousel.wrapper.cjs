'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');

const PCarousel = react.forwardRef(({ activeSlideIndex = 0, alignHeader = 'start', description, disablePagination, heading, intl, onCarouselChange, onUpdate, pagination = true, rewind = true, skipLinkTarget, slidesPerPage = 1, theme, width = 'basic', wrapContent, className, ...rest }, ref) => {
    const elementRef = react.useRef();
    hooks.useEventCallback(elementRef, 'carouselChange', onCarouselChange);
    hooks.useEventCallback(elementRef, 'update', onUpdate);
    const WebComponentTag = hooks.usePrefix('p-carousel');
    const propsToSync = [activeSlideIndex, alignHeader, description, disablePagination, heading, intl, pagination, rewind, skipLinkTarget, slidesPerPage, theme || hooks.useTheme(), width, wrapContent];
    hooks.useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['activeSlideIndex', 'alignHeader', 'description', 'disablePagination', 'heading', 'intl', 'pagination', 'rewind', 'skipLinkTarget', 'slidesPerPage', 'theme', 'width', 'wrapContent'].forEach((propName, i) => (current[propName] = propsToSync[i]));
    }, propsToSync);
    const props = {
        ...rest,
        class: hooks.useMergedClass(elementRef, className),
        ref: utils.syncRef(elementRef, ref)
    };
    return jsxRuntime.jsx(WebComponentTag, { ...props });
});

exports.PCarousel = PCarousel;
