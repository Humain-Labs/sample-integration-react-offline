import { type HTMLAttributes } from 'react';
import type { HeadingAlign, HeadingColor, BreakpointCustomizable, HeadingSize, HeadingTag, Theme } from '../types';
export type PHeadingProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Text alignment of the component.
     */
    align?: HeadingAlign;
    /**
     * Basic text color variations depending on theme property.
     */
    color?: HeadingColor;
    /**
     * Adds an ellipsis to a single line of text if it overflows.
     */
    ellipsis?: boolean;
    /**
     * Size of the component. Also defines the size for specific breakpoints, like {base: "small", l: "medium"}. You always need to provide a base value when doing this.
     */
    size?: BreakpointCustomizable<HeadingSize>;
    /**
     * Sets a custom HTML tag depending on the usage of the heading component.
     */
    tag?: HeadingTag;
    /**
     * Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop.
     */
    theme?: Theme;
};
export declare const PHeading: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Text alignment of the component.
     */
    align?: "center" | "start" | "end" | "left" | "right" | undefined;
    /**
     * Basic text color variations depending on theme property.
     */
    color?: "inherit" | "primary" | undefined;
    /**
     * Adds an ellipsis to a single line of text if it overflows.
     */
    ellipsis?: boolean | undefined;
    /**
     * Size of the component. Also defines the size for specific breakpoints, like {base: "small", l: "medium"}. You always need to provide a base value when doing this.
     */
    size?: BreakpointCustomizable<"inherit" | "small" | "medium" | "large" | "x-large" | "xx-large"> | undefined;
    /**
     * Sets a custom HTML tag depending on the usage of the heading component.
     */
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | undefined;
    /**
     * Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop.
     */
    theme?: "light" | "dark" | "auto" | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
