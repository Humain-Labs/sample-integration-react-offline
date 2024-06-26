import { type HTMLAttributes } from 'react';
import type { MultiSelectDropdownDirection, BreakpointCustomizable, MultiSelectUpdateEvent, MultiSelectState, Theme } from '../types';
export type PMultiSelectProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * The description text.
     */
    description?: string;
    /**
     * Disables the multi-select
     */
    disabled?: boolean;
    /**
     * Changes the direction to which the dropdown list appears.
     */
    dropdownDirection?: MultiSelectDropdownDirection;
    /**
     * Show or hide label. For better accessibility it is recommended to show the label.
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
     * The name of the control.
     */
    name: string;
    /**
     * Emitted when the selection is changed.
     */
    onUpdate?: (event: CustomEvent<MultiSelectUpdateEvent>) => void;
    /**
     * A Boolean attribute indicating that an option with a non-empty string value must be selected.
     */
    required?: boolean;
    /**
     * The validation state.
     */
    state?: MultiSelectState;
    /**
     * Adapts the select color depending on the theme.
     */
    theme?: Theme;
    /**
     * The selected values.
     */
    value?: string[];
};
export declare const PMultiSelect: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * The description text.
     */
    description?: string;
    /**
     * Disables the multi-select
     */
    disabled?: boolean;
    /**
     * Changes the direction to which the dropdown list appears.
     */
    dropdownDirection?: MultiSelectDropdownDirection;
    /**
     * Show or hide label. For better accessibility it is recommended to show the label.
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
     * The name of the control.
     */
    name: string;
    /**
     * Emitted when the selection is changed.
     */
    onUpdate?: (event: CustomEvent<MultiSelectUpdateEvent>) => void;
    /**
     * A Boolean attribute indicating that an option with a non-empty string value must be selected.
     */
    required?: boolean;
    /**
     * The validation state.
     */
    state?: MultiSelectState;
    /**
     * Adapts the select color depending on the theme.
     */
    theme?: Theme;
    /**
     * The selected values.
     */
    value?: string[];
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
