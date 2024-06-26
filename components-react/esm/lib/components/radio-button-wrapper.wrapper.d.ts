import { type HTMLAttributes } from 'react';
import type { BreakpointCustomizable, RadioButtonWrapperState, Theme } from '../types';
export type PRadioButtonWrapperProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Show or hide label. For better accessibility it's recommended to show the label.
     */
    hideLabel?: BreakpointCustomizable<boolean>;
    /**
     * The label text.
     */
    label?: string;
    /**
     * __Experimental__: Disables the radio button and shows a loading indicator.
     */
    loading?: boolean;
    /**
     * The message styled depending on validation state.
     */
    message?: string;
    /**
     * The validation state.
     */
    state?: RadioButtonWrapperState;
    /**
     * Adapts the color depending on the theme.
     */
    theme?: Theme;
};
export declare const PRadioButtonWrapper: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Show or hide label. For better accessibility it's recommended to show the label.
     */
    hideLabel?: BreakpointCustomizable<boolean> | undefined;
    /**
     * The label text.
     */
    label?: string | undefined;
    /**
     * __Experimental__: Disables the radio button and shows a loading indicator.
     */
    loading?: boolean | undefined;
    /**
     * The message styled depending on validation state.
     */
    message?: string | undefined;
    /**
     * The validation state.
     */
    state?: "none" | "success" | "error" | undefined;
    /**
     * Adapts the color depending on the theme.
     */
    theme?: "light" | "dark" | "auto" | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
