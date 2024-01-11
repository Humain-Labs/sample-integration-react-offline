import { type HTMLAttributes } from 'react';
import type { StepperHorizontalUpdateEvent, BreakpointCustomizable, StepperHorizontalSize, Theme } from '../types';
export type PStepperHorizontalProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `update` event instead. Emitted when active step is changed.
     */
    onStepChange?: (event: CustomEvent<StepperHorizontalUpdateEvent>) => void;
    /**
     * Emitted when active step is changed.
     */
    onUpdate?: (event: CustomEvent<StepperHorizontalUpdateEvent>) => void;
    /**
     * The text size.
     */
    size?: BreakpointCustomizable<StepperHorizontalSize>;
    /**
     * Adapts the tag color depending on the theme.
     */
    theme?: Theme;
};
export declare const PStepperHorizontal: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `update` event instead. Emitted when active step is changed.
     */
    onStepChange?: (event: CustomEvent<StepperHorizontalUpdateEvent>) => void;
    /**
     * Emitted when active step is changed.
     */
    onUpdate?: (event: CustomEvent<StepperHorizontalUpdateEvent>) => void;
    /**
     * The text size.
     */
    size?: BreakpointCustomizable<StepperHorizontalSize>;
    /**
     * Adapts the tag color depending on the theme.
     */
    theme?: Theme;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
