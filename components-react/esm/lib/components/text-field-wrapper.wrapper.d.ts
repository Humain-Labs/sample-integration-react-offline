import { type HTMLAttributes } from 'react';
import type { TextFieldWrapperActionIcon, BreakpointCustomizable, TextFieldWrapperState, Theme, TextFieldWrapperUnitPosition } from '../types';
export type PTextFieldWrapperProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Action icon can be set to `locate` for `input type="search"` in order to display an action button.
     */
    actionIcon?: TextFieldWrapperActionIcon;
    /**
     * Disables the action button and shows a loading indicator. No events will be triggered while loading state is active.
     */
    actionLoading?: boolean;
    /**
     * The description text.
     */
    description?: string;
    /**
     * Show or hide label and description text. For better accessibility it is recommended to show the label.
     */
    hideLabel?: BreakpointCustomizable<boolean>;
    /**
     * The label text.
     */
    label?: string;
    /**
     * The message styled depending on validation state.
     */
    message?: string;
    /**
     * Emitted when the action button is clicked.
     */
    onAction?: (event: CustomEvent<void>) => void;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `showCounter` instead. Show or hide max character count.
     */
    showCharacterCount?: boolean;
    /**
     * Show or hide max character count.
     */
    showCounter?: boolean;
    /**
     * __Experimental__: Show or hide password toggle for `input type="password"`.
     */
    showPasswordToggle?: boolean;
    /**
     * The validation state.
     */
    state?: TextFieldWrapperState;
    /**
     * Adapts the color depending on the theme.
     */
    theme?: Theme;
    /**
     * The unit text.
     */
    unit?: string;
    /**
     * The unit position.
     */
    unitPosition?: TextFieldWrapperUnitPosition;
};
export declare const PTextFieldWrapper: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Action icon can be set to `locate` for `input type="search"` in order to display an action button.
     */
    actionIcon?: "locate" | undefined;
    /**
     * Disables the action button and shows a loading indicator. No events will be triggered while loading state is active.
     */
    actionLoading?: boolean | undefined;
    /**
     * The description text.
     */
    description?: string | undefined;
    /**
     * Show or hide label and description text. For better accessibility it is recommended to show the label.
     */
    hideLabel?: BreakpointCustomizable<boolean> | undefined;
    /**
     * The label text.
     */
    label?: string | undefined;
    /**
     * The message styled depending on validation state.
     */
    message?: string | undefined;
    /**
     * Emitted when the action button is clicked.
     */
    onAction?: ((event: CustomEvent<void>) => void) | undefined;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `showCounter` instead. Show or hide max character count.
     */
    showCharacterCount?: boolean | undefined;
    /**
     * Show or hide max character count.
     */
    showCounter?: boolean | undefined;
    /**
     * __Experimental__: Show or hide password toggle for `input type="password"`.
     */
    showPasswordToggle?: boolean | undefined;
    /**
     * The validation state.
     */
    state?: "none" | "success" | "error" | undefined;
    /**
     * Adapts the color depending on the theme.
     */
    theme?: "light" | "dark" | "auto" | undefined;
    /**
     * The unit text.
     */
    unit?: string | undefined;
    /**
     * The unit position.
     */
    unitPosition?: "prefix" | "suffix" | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
