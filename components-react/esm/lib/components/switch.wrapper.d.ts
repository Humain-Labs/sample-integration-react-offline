import { type HTMLAttributes } from 'react';
import type { BreakpointCustomizable, SwitchAlignLabel, SwitchUpdateEvent, Theme } from '../types';
export type PSwitchProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Aligns the label.
     */
    alignLabel?: BreakpointCustomizable<SwitchAlignLabel>;
    /**
     * Visualize the switch with on/off status.
     */
    checked?: boolean;
    /**
     * Disables the switch. No events will be triggered while disabled state is active.
     */
    disabled?: boolean;
    /**
     * Show or hide label. For better accessibility it's recommended to show the label.
     */
    hideLabel?: BreakpointCustomizable<boolean>;
    /**
     * Disables the switch and shows a loading indicator. No events will be triggered while loading state is active.
     */
    loading?: boolean;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `update` event instead. Emitted when checked status is changed.
     */
    onSwitchChange?: (event: CustomEvent<SwitchUpdateEvent>) => void;
    /**
     * Emitted when checked status is changed.
     */
    onUpdate?: (event: CustomEvent<SwitchUpdateEvent>) => void;
    /**
     * Stretches the contents to max available space.
     */
    stretch?: BreakpointCustomizable<boolean>;
    /**
     * Adapts the switch color depending on the theme.
     */
    theme?: Theme;
};
export declare const PSwitch: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Aligns the label.
     */
    alignLabel?: BreakpointCustomizable<"start" | "end" | "left" | "right"> | undefined;
    /**
     * Visualize the switch with on/off status.
     */
    checked?: boolean | undefined;
    /**
     * Disables the switch. No events will be triggered while disabled state is active.
     */
    disabled?: boolean | undefined;
    /**
     * Show or hide label. For better accessibility it's recommended to show the label.
     */
    hideLabel?: BreakpointCustomizable<boolean> | undefined;
    /**
     * Disables the switch and shows a loading indicator. No events will be triggered while loading state is active.
     */
    loading?: boolean | undefined;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `update` event instead. Emitted when checked status is changed.
     */
    onSwitchChange?: ((event: CustomEvent<SwitchUpdateEvent>) => void) | undefined;
    /**
     * Emitted when checked status is changed.
     */
    onUpdate?: ((event: CustomEvent<SwitchUpdateEvent>) => void) | undefined;
    /**
     * Stretches the contents to max available space.
     */
    stretch?: BreakpointCustomizable<boolean> | undefined;
    /**
     * Adapts the switch color depending on the theme.
     */
    theme?: "light" | "dark" | "auto" | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;