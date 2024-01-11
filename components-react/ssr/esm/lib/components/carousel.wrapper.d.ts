import { type HTMLAttributes } from 'react';
import type { CarouselAlignHeader, BreakpointCustomizable, CarouselInternationalization, CarouselUpdateEvent, Theme, CarouselWidth } from '../types';
export type PCarouselProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Defines which slide to be active (zero-based numbering).
     */
    activeSlideIndex?: number;
    /**
     * Alignment of heading and description
     */
    alignHeader?: CarouselAlignHeader;
    /**
     * Defines the description used in the carousel.
     */
    description?: string;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `pagination` instead. If true, the carousel will not show pagination bullets at the bottom.
     */
    disablePagination?: BreakpointCustomizable<boolean>;
    /**
     * Defines the heading used in the carousel.
     */
    heading?: string;
    /**
     * Override the default wordings that are used for aria-labels on the next/prev buttons and pagination.
     */
    intl?: CarouselInternationalization;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `update` event instead. Emitted when carousel's content slides.
     */
    onCarouselChange?: (event: CustomEvent<CarouselUpdateEvent>) => void;
    /**
     * Emitted when carousel's content slides.
     */
    onUpdate?: (event: CustomEvent<CarouselUpdateEvent>) => void;
    /**
     * If false, the carousel will not show pagination bullets at the bottom.
     */
    pagination?: BreakpointCustomizable<boolean>;
    /**
     * Whether the slides should rewind from last to first slide and vice versa.
     */
    rewind?: boolean;
    /**
     * Defines target of skip link (to skip carousel entries).
     */
    skipLinkTarget?: string;
    /**
     * Sets the amount of slides visible at the same time. Can be set to `auto` if you want to define different widths per slide via CSS.
     */
    slidesPerPage?: BreakpointCustomizable<number> | "auto";
    /**
     * Adapts the color when used on dark background.
     */
    theme?: Theme;
    /**
     * Defines the outer spacings between the carousel and the left and right screen sides.
     */
    width?: CarouselWidth;
    /**
     * Has no effect anymore
     * @deprecated since v3.0.0, will be removed with next major release
     */
    wrapContent?: boolean;
};
export declare const PCarousel: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Defines which slide to be active (zero-based numbering).
     */
    activeSlideIndex?: number;
    /**
     * Alignment of heading and description
     */
    alignHeader?: CarouselAlignHeader;
    /**
     * Defines the description used in the carousel.
     */
    description?: string;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `pagination` instead. If true, the carousel will not show pagination bullets at the bottom.
     */
    disablePagination?: BreakpointCustomizable<boolean>;
    /**
     * Defines the heading used in the carousel.
     */
    heading?: string;
    /**
     * Override the default wordings that are used for aria-labels on the next/prev buttons and pagination.
     */
    intl?: CarouselInternationalization;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `update` event instead. Emitted when carousel's content slides.
     */
    onCarouselChange?: (event: CustomEvent<CarouselUpdateEvent>) => void;
    /**
     * Emitted when carousel's content slides.
     */
    onUpdate?: (event: CustomEvent<CarouselUpdateEvent>) => void;
    /**
     * If false, the carousel will not show pagination bullets at the bottom.
     */
    pagination?: BreakpointCustomizable<boolean>;
    /**
     * Whether the slides should rewind from last to first slide and vice versa.
     */
    rewind?: boolean;
    /**
     * Defines target of skip link (to skip carousel entries).
     */
    skipLinkTarget?: string;
    /**
     * Sets the amount of slides visible at the same time. Can be set to `auto` if you want to define different widths per slide via CSS.
     */
    slidesPerPage?: BreakpointCustomizable<number> | "auto";
    /**
     * Adapts the color when used on dark background.
     */
    theme?: Theme;
    /**
     * Defines the outer spacings between the carousel and the left and right screen sides.
     */
    width?: CarouselWidth;
    /**
     * Has no effect anymore
     * @deprecated since v3.0.0, will be removed with next major release
     */
    wrapContent?: boolean;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
