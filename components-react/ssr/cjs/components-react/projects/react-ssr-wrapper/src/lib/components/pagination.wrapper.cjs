'use client';
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var hooks = require('../../hooks.cjs');
var utils = require('../../utils.cjs');
var pagination = require('../dsr-components/pagination.cjs');

const PPagination = react.forwardRef(({ activePage = 1, allyLabel, allyLabelNext, allyLabelPage, allyLabelPrev, intl = { root: 'Pagination', prev: 'Previous page', next: 'Next page', page: 'Page', }, itemsPerPage = 1, maxNumberOfPageLinks = { base: 5, xs: 7, }, onPageChange, onUpdate, showLastPage = true, theme, totalItemsCount = 1, className, ...rest }, ref) => {
    const elementRef = react.useRef();
    hooks.useEventCallback(elementRef, 'pageChange', onPageChange);
    hooks.useEventCallback(elementRef, 'update', onUpdate);
    const WebComponentTag = hooks.usePrefix('p-pagination');
    const propsToSync = [activePage, allyLabel, allyLabelNext, allyLabelPage, allyLabelPrev, intl, itemsPerPage, maxNumberOfPageLinks, showLastPage, theme || hooks.useTheme(), totalItemsCount];
    hooks.useBrowserLayoutEffect(() => {
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
                children: (jsxRuntime.jsx(pagination.DSRPagination, { activePage, allyLabel, allyLabelNext, allyLabelPage, allyLabelPrev, intl, itemsPerPage, maxNumberOfPageLinks, showLastPage, theme: theme || hooks.useTheme(), totalItemsCount })),
            }
            : {
                suppressHydrationWarning: true,
            }),
        class: hooks.useMergedClass(elementRef, className),
        ref: utils.syncRef(elementRef, ref)
    };
    return jsxRuntime.jsx(WebComponentTag, { ...props });
});

exports.PPagination = PPagination;
