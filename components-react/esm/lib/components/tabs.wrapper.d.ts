import { type HTMLAttributes } from 'react';
import type { TabsGradientColor, TabsGradientColorScheme, TabsUpdateEvent, BreakpointCustomizable, TabsSize, Theme, TabsWeight } from '../types';
export type PTabsProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Defines which tab to be visualized as selected (zero-based numbering).
     */
    activeTabIndex?: number;
    /**
     * Adapts the background gradient color of prev and next button.
     */
    gradientColor?: TabsGradientColor;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `gradientColor` instead. Adapts the background gradient color of prev and next button.
     */
    gradientColorScheme?: TabsGradientColorScheme;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `update` event instead. Emitted when active tab is changed.
     */
    onTabChange?: (event: CustomEvent<TabsUpdateEvent>) => void;
    /**
     * Emitted when active tab is changed.
     */
    onUpdate?: (event: CustomEvent<TabsUpdateEvent>) => void;
    /**
     * The text size.
     */
    size?: BreakpointCustomizable<TabsSize>;
    /**
     * Adapts the color when used on dark background.
     */
    theme?: Theme;
    /**
     * The text weight.
     */
    weight?: TabsWeight;
};
export declare const PTabs: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Defines which tab to be visualized as selected (zero-based numbering).
     */
    activeTabIndex?: number | undefined;
    /**
     * Adapts the background gradient color of prev and next button.
     */
    gradientColor?: "background-base" | "background-surface" | undefined;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `gradientColor` instead. Adapts the background gradient color of prev and next button.
     */
    gradientColorScheme?: "default" | "surface" | undefined;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `update` event instead. Emitted when active tab is changed.
     */
    onTabChange?: ((event: CustomEvent<TabsUpdateEvent>) => void) | undefined;
    /**
     * Emitted when active tab is changed.
     */
    onUpdate?: ((event: CustomEvent<TabsUpdateEvent>) => void) | undefined;
    /**
     * The text size.
     */
    size?: BreakpointCustomizable<"small" | "medium"> | undefined;
    /**
     * Adapts the color when used on dark background.
     */
    theme?: "light" | "dark" | "auto" | undefined;
    /**
     * The text weight.
     */
    weight?: "regular" | "semi-bold" | "semibold" | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;