'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { useEventCallback, usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRCarousel } from '../dsr-components/carousel.mjs';

const PCarousel = forwardRef(({ activeSlideIndex = 0, alignHeader = 'start', description, disablePagination, heading, intl, onCarouselChange, onUpdate, pagination = true, rewind = true, skipLinkTarget, slidesPerPage = 1, theme, width = 'basic', wrapContent, className, children, ...rest }, ref) => {
    const elementRef = useRef();
    useEventCallback(elementRef, 'carouselChange', onCarouselChange);
    useEventCallback(elementRef, 'update', onUpdate);
    const WebComponentTag = usePrefix('p-carousel');
    const propsToSync = [activeSlideIndex, alignHeader, description, disablePagination, heading, intl, pagination, rewind, skipLinkTarget, slidesPerPage, theme || useTheme(), width, wrapContent];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['activeSlideIndex', 'alignHeader', 'description', 'disablePagination', 'heading', 'intl', 'pagination', 'rewind', 'skipLinkTarget', 'slidesPerPage', 'theme', 'width', 'wrapContent'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsx(DSRCarousel, { activeSlideIndex, alignHeader, description, disablePagination, heading, intl, pagination, rewind, skipLinkTarget, slidesPerPage, theme: theme || useTheme(), width, wrapContent, children })),
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

export { PCarousel };
