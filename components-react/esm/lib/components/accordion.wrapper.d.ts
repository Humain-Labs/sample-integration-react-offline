import { type HTMLAttributes } from 'react';
import type { AccordionUpdateEvent, BreakpointCustomizable, AccordionSize, AccordionTag, Theme } from '../types';
export type PAccordionProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Displays the Accordion as compact version with thinner border and smaller paddings.
     */
    compact?: boolean;
    /**
     * Defines the heading used in accordion.
     */
    heading?: string;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `update` event instead. Emitted when accordion state is changed.
     */
    onAccordionChange?: (event: CustomEvent<AccordionUpdateEvent>) => void;
    /**
     * Emitted when accordion state is changed.
     */
    onUpdate?: (event: CustomEvent<AccordionUpdateEvent>) => void;
    /**
     * Defines if accordion is open.
     */
    open?: boolean;
    /**
     * The text size.
     */
    size?: BreakpointCustomizable<AccordionSize>;
    /**
     * Sets a headline tag, so it fits correctly within the outline of the page.
     */
    tag?: AccordionTag;
    /**
     * Adapts the color when used on dark background.
     */
    theme?: Theme;
};
export declare const PAccordion: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Displays the Accordion as compact version with thinner border and smaller paddings.
     */
    compact?: boolean | undefined;
    /**
     * Defines the heading used in accordion.
     */
    heading?: string | undefined;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `update` event instead. Emitted when accordion state is changed.
     */
    onAccordionChange?: ((event: CustomEvent<AccordionUpdateEvent>) => void) | undefined;
    /**
     * Emitted when accordion state is changed.
     */
    onUpdate?: ((event: CustomEvent<AccordionUpdateEvent>) => void) | undefined;
    /**
     * Defines if accordion is open.
     */
    open?: boolean | undefined;
    /**
     * The text size.
     */
    size?: BreakpointCustomizable<"small" | "medium"> | undefined;
    /**
     * Sets a headline tag, so it fits correctly within the outline of the page.
     */
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | undefined;
    /**
     * Adapts the color when used on dark background.
     */
    theme?: "light" | "dark" | "auto" | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;