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
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;