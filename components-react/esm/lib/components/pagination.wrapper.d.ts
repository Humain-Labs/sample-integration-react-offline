import { type HTMLAttributes } from 'react';
import type { PaginationInternationalization, BreakpointCustomizable, PaginationMaxNumberOfPageLinks, PaginationUpdateEvent, Theme } from '../types';
export type PPaginationProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Index of the currently active page.
     */
    activePage: number;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `intl.root` instead. Aria label what the pagination is used for.
     */
    allyLabel?: string;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `intl.next` instead. Aria label for next page icon.
     */
    allyLabelNext?: string;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `intl.page` instead. Aria label for page navigation.
     */
    allyLabelPage?: string;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `intl.prev` instead. Aria label for previous page icon.
     */
    allyLabelPrev?: string;
    /**
     * Override the default wordings that are used for aria-labels on the next/prev and page buttons.
     */
    intl?: PaginationInternationalization;
    /**
     * The total count of items which should be shown per page.
     */
    itemsPerPage?: number;
    /**
     * The maximum number of page links rendered.
     */
    maxNumberOfPageLinks?: BreakpointCustomizable<PaginationMaxNumberOfPageLinks>;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `update` event instead. Emitted when the page changes.
     */
    onPageChange?: (event: CustomEvent<PaginationUpdateEvent>) => void;
    /**
     * Emitted when the page changes.
     */
    onUpdate?: (event: CustomEvent<PaginationUpdateEvent>) => void;
    /**
     * Show or hide the button to jump to the last page.
     */
    showLastPage?: boolean;
    /**
     * Adapts the color when used on dark background.
     */
    theme?: Theme;
    /**
     * The total count of items.
     */
    totalItemsCount: number;
};
export declare const PPagination: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Index of the currently active page.
     */
    activePage: number;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `intl.root` instead. Aria label what the pagination is used for.
     */
    allyLabel?: string | undefined;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `intl.next` instead. Aria label for next page icon.
     */
    allyLabelNext?: string | undefined;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `intl.page` instead. Aria label for page navigation.
     */
    allyLabelPage?: string | undefined;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `intl.prev` instead. Aria label for previous page icon.
     */
    allyLabelPrev?: string | undefined;
    /**
     * Override the default wordings that are used for aria-labels on the next/prev and page buttons.
     */
    intl?: PaginationInternationalization | undefined;
    /**
     * The total count of items which should be shown per page.
     */
    itemsPerPage?: number | undefined;
    /**
     * The maximum number of page links rendered.
     */
    maxNumberOfPageLinks?: BreakpointCustomizable<7 | 5> | undefined;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `update` event instead. Emitted when the page changes.
     */
    onPageChange?: ((event: CustomEvent<PaginationUpdateEvent>) => void) | undefined;
    /**
     * Emitted when the page changes.
     */
    onUpdate?: ((event: CustomEvent<PaginationUpdateEvent>) => void) | undefined;
    /**
     * Show or hide the button to jump to the last page.
     */
    showLastPage?: boolean | undefined;
    /**
     * Adapts the color when used on dark background.
     */
    theme?: "light" | "dark" | "auto" | undefined;
    /**
     * The total count of items.
     */
    totalItemsCount: number;
} & import("react").RefAttributes<HTMLElement>>;
