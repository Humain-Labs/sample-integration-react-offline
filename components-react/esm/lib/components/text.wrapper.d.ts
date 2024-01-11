import { type HTMLAttributes } from 'react';
import type { TextAlign, TextColor, BreakpointCustomizable, TextSize, TextTag, Theme, TextWeight } from '../types';
export type PTextProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Text alignment of the component.
     */
    align?: TextAlign;
    /**
     * Basic text color variations depending on theme property.
     */
    color?: TextColor;
    /**
     * Adds an ellipsis to a single line of text if it overflows.
     */
    ellipsis?: boolean;
    /**
     * Size of the text. Also defines the size for specific breakpoints, like {base: "small", l: "medium"}. You always need to provide a base value when doing this.
     */
    size?: BreakpointCustomizable<TextSize>;
    /**
     * Sets a custom HTML tag depending on the usage of the text component.
     */
    tag?: TextTag;
    /**
     * Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop.
     */
    theme?: Theme;
    /**
     * The weight of the text.
     */
    weight?: TextWeight;
};
export declare const PText: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Text alignment of the component.
     */
    align?: "center" | "start" | "end" | "left" | "right" | undefined;
    /**
     * Basic text color variations depending on theme property.
     */
    color?: "default" | "inherit" | "primary" | "contrast-low" | "contrast-medium" | "contrast-high" | "notification-success" | "notification-warning" | "notification-error" | "notification-info" | "brand" | "neutral-contrast-low" | "neutral-contrast-medium" | "neutral-contrast-high" | "notification-neutral" | undefined;
    /**
     * Adds an ellipsis to a single line of text if it overflows.
     */
    ellipsis?: boolean | undefined;
    /**
     * Size of the text. Also defines the size for specific breakpoints, like {base: "small", l: "medium"}. You always need to provide a base value when doing this.
     */
    size?: BreakpointCustomizable<"inherit" | "xx-small" | "x-small" | "small" | "medium" | "large" | "x-large"> | undefined;
    /**
     * Sets a custom HTML tag depending on the usage of the text component.
     */
    tag?: "time" | "p" | "span" | "div" | "address" | "blockquote" | "figcaption" | "cite" | "legend" | undefined;
    /**
     * Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop.
     */
    theme?: "light" | "dark" | "auto" | undefined;
    /**
     * The weight of the text.
     */
    weight?: "regular" | "semi-bold" | "bold" | "thin" | "semibold" | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;