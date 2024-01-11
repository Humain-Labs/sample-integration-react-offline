import { type HTMLAttributes } from 'react';
import type { BreakpointCustomizable, ButtonPureAlignLabel, SelectedAriaAttributes, ButtonPureAriaAttribute, ButtonPureIcon, ButtonPureSize, Theme, ButtonPureType, ButtonPureWeight } from '../types';
export type PButtonPureProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Display button in active state.
     */
    active?: boolean;
    /**
     * Aligns the label.
     */
    alignLabel?: BreakpointCustomizable<ButtonPureAlignLabel>;
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<ButtonPureAriaAttribute>;
    /**
     * Disables the button. No events will be triggered while disabled state is active.
     */
    disabled?: boolean;
    /**
     * Show or hide label. For better accessibility it is recommended to show the label.
     */
    hideLabel?: BreakpointCustomizable<boolean>;
    /**
     * The icon shown.
     */
    icon?: ButtonPureIcon;
    /**
     * A URL path to a custom icon.
     */
    iconSource?: string;
    /**
     * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
     */
    loading?: boolean;
    /**
     * The name of the button, submitted as a pair with the button's value as part of the form data, when that button is used to submit the form.
     */
    name?: string;
    /**
     * Size of the button.
     */
    size?: BreakpointCustomizable<ButtonPureSize>;
    /**
     * Stretches the area between icon and label to max available space.
     */
    stretch?: BreakpointCustomizable<boolean>;
    /**
     * Adapts the button color depending on the theme.
     */
    theme?: Theme;
    /**
     * Specifies the type of the button.
     */
    type?: ButtonPureType;
    /**
     * Defines the value associated with the button's name when it's submitted with the form data. This value is passed to the server in params when the form is submitted using this button.
     */
    value?: string;
    /**
     * The weight of the text (only has effect with visible label).
     * @deprecated since v3.0.0, will be removed with next major release
     */
    weight?: ButtonPureWeight;
};
export declare const PButtonPure: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Display button in active state.
     */
    active?: boolean | undefined;
    /**
     * Aligns the label.
     */
    alignLabel?: BreakpointCustomizable<"start" | "end" | "left" | "right"> | undefined;
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<"aria-label" | "aria-expanded" | "aria-pressed" | "aria-haspopup"> | undefined;
    /**
     * Disables the button. No events will be triggered while disabled state is active.
     */
    disabled?: boolean | undefined;
    /**
     * Show or hide label. For better accessibility it is recommended to show the label.
     */
    hideLabel?: BreakpointCustomizable<boolean> | undefined;
    /**
     * The icon shown.
     */
    icon?: import("../types").LinkButtonIconName | undefined;
    /**
     * A URL path to a custom icon.
     */
    iconSource?: string | undefined;
    /**
     * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
     */
    loading?: boolean | undefined;
    /**
     * The name of the button, submitted as a pair with the button's value as part of the form data, when that button is used to submit the form.
     */
    name?: string | undefined;
    /**
     * Size of the button.
     */
    size?: BreakpointCustomizable<"inherit" | "xx-small" | "x-small" | "small" | "medium" | "large" | "x-large"> | undefined;
    /**
     * Stretches the area between icon and label to max available space.
     */
    stretch?: BreakpointCustomizable<boolean> | undefined;
    /**
     * Adapts the button color depending on the theme.
     */
    theme?: "light" | "dark" | "auto" | undefined;
    /**
     * Specifies the type of the button.
     */
    type?: "button" | "reset" | "submit" | undefined;
    /**
     * Defines the value associated with the button's name when it's submitted with the form data. This value is passed to the server in params when the form is submitted using this button.
     */
    value?: string | undefined;
    /**
     * The weight of the text (only has effect with visible label).
     * @deprecated since v3.0.0, will be removed with next major release
     */
    weight?: "regular" | "semi-bold" | "bold" | "thin" | "semibold" | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
