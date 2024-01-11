import { type HTMLAttributes } from 'react';
import type { SegmentedControlBackgroundColor, BreakpointCustomizable, SegmentedControlColumns, SegmentedControlUpdateEvent, Theme } from '../types';
export type PSegmentedControlProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * @deprecated since v3.0.0, will be removed with next major release. Background color variations
     */
    backgroundColor?: SegmentedControlBackgroundColor;
    /**
     * Sets the amount of columns.
     */
    columns?: BreakpointCustomizable<SegmentedControlColumns>;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `update` event instead. Emitted when selected element changes.
     */
    onSegmentedControlChange?: (event: CustomEvent<SegmentedControlUpdateEvent>) => void;
    /**
     * Emitted when selected element changes.
     */
    onUpdate?: (event: CustomEvent<SegmentedControlUpdateEvent>) => void;
    /**
     * Adapts the segmented-control color depending on the theme.
     */
    theme?: Theme;
    /**
     * Sets the initial value of the segmented-control.
     */
    value?: string | number;
};
export declare const PSegmentedControl: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * @deprecated since v3.0.0, will be removed with next major release. Background color variations
     */
    backgroundColor?: "background-surface" | "background-default" | undefined;
    /**
     * Sets the amount of columns.
     */
    columns?: BreakpointCustomizable<string | number> | undefined;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `update` event instead. Emitted when selected element changes.
     */
    onSegmentedControlChange?: ((event: CustomEvent<SegmentedControlUpdateEvent>) => void) | undefined;
    /**
     * Emitted when selected element changes.
     */
    onUpdate?: ((event: CustomEvent<SegmentedControlUpdateEvent>) => void) | undefined;
    /**
     * Adapts the segmented-control color depending on the theme.
     */
    theme?: "light" | "dark" | "auto" | undefined;
    /**
     * Sets the initial value of the segmented-control.
     */
    value?: string | number | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;