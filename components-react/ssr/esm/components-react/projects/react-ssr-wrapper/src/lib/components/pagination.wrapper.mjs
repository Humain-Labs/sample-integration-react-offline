'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useRef } from 'react';
import { useEventCallback, usePrefix, useTheme, useBrowserLayoutEffect, useMergedClass } from '../../hooks.mjs';
import { syncRef } from '../../utils.mjs';
import { DSRPagination } from '../dsr-components/pagination.mjs';

const PPagination = forwardRef(({ activePage = 1, allyLabel, allyLabelNext, allyLabelPage, allyLabelPrev, intl = { root: 'Pagination', prev: 'Previous page', next: 'Next page', page: 'Page', }, itemsPerPage = 1, maxNumberOfPageLinks = { base: 5, xs: 7, }, onPageChange, onUpdate, showLastPage = true, theme, totalItemsCount = 1, className, ...rest }, ref) => {
    const elementRef = useRef();
    useEventCallback(elementRef, 'pageChange', onPageChange);
    useEventCallback(elementRef, 'update', onUpdate);
    const WebComponentTag = usePrefix('p-pagination');
    const propsToSync = [activePage, allyLabel, allyLabelNext, allyLabelPage, allyLabelPrev, intl, itemsPerPage, maxNumberOfPageLinks, showLastPage, theme || useTheme(), totalItemsCount];
    useBrowserLayoutEffect(() => {
        const { current } = elementRef;
        ['activePage', 'allyLabel', 'allyLabelNext', 'allyLabelPage', 'allyLabelPrev', 'intl', 'itemsPerPage', 'maxNumberOfPageLinks', 'showLastPage', 'theme', 'totalItemsCount'].forEach((propName, i) => (current[propName] = propsToSync[i]));
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
                children: (jsx(DSRPagination, { activePage, allyLabel, allyLabelNext, allyLabelPage, allyLabelPrev, intl, itemsPerPage, maxNumberOfPageLinks, showLastPage, theme: theme || useTheme(), totalItemsCount })),
            }
            : {
                suppressHydrationWarning: true,
            }),
        class: useMergedClass(elementRef, className),
        ref: syncRef(elementRef, ref)
    };
    return jsx(WebComponentTag, { ...props });
});

export { PPagination };