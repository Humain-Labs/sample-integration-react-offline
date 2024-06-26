import { type HTMLAttributes } from 'react';
import type { FieldsetWrapperLabelSize, FieldsetWrapperState, Theme } from '../types';
export type PFieldsetWrapperProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * The label text.
     */
    label?: string;
    /**
     * The size of the label text.
     */
    labelSize?: FieldsetWrapperLabelSize;
    /**
     * The message styled depending on validation state.
     */
    message?: string;
    /**
     * Marks the Fieldset as required.
     */
    required?: boolean;
    /**
     * The validation state.
     */
    state?: FieldsetWrapperState;
    /**
     * Adapts color depending on theme.
     */
    theme?: Theme;
};
/** @deprecated since v3.0.0, will be removed with next major release. Please use "p-fieldset" instead. */
export declare const PFieldsetWrapper: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * The label text.
     */
    label?: string | undefined;
    /**
     * The size of the label text.
     */
    labelSize?: "small" | "medium" | undefined;
    /**
     * The message styled depending on validation state.
     */
    message?: string | undefined;
    /**
     * Marks the Fieldset as required.
     */
    required?: boolean | undefined;
    /**
     * The validation state.
     */
    state?: "none" | "success" | "error" | undefined;
    /**
     * Adapts color depending on theme.
     */
    theme?: "light" | "dark" | "auto" | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
