import { type HTMLAttributes } from 'react';
import type { TabsBarGradientColor, TabsBarGradientColorScheme, TabsBarUpdateEvent, BreakpointCustomizable, TabsBarSize, Theme, TabsBarWeight } from '../types';
export type PTabsBarProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Defines which tab to be visualized as selected (zero-based numbering), undefined if none should be selected.
     */
    activeTabIndex?: number | undefined;
    /**
     * Adapts the background gradient color of prev and next button.
     */
    gradientColor?: TabsBarGradientColor;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `gradientColor` instead. Adapts the background gradient color of prev and next button.
     */
    gradientColorScheme?: TabsBarGradientColorScheme;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `update` event instead. Emitted when active tab is changed.
     */
    onTabChange?: (event: CustomEvent<TabsBarUpdateEvent>) => void;
    /**
     * Emitted when active tab is changed.
     */
    onUpdate?: (event: CustomEvent<TabsBarUpdateEvent>) => void;
    /**
     * The text size.
     */
    size?: BreakpointCustomizable<TabsBarSize>;
    /**
     * Adapts the color when used on dark background.
     */
    theme?: Theme;
    /**
     * The text weight.
     */
    weight?: TabsBarWeight;
};
export declare const PTabsBar: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Defines which tab to be visualized as selected (zero-based numbering), undefined if none should be selected.
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
    onTabChange?: ((event: CustomEvent<TabsBarUpdateEvent>) => void) | undefined;
    /**
     * Emitted when active tab is changed.
     */
    onUpdate?: ((event: CustomEvent<TabsBarUpdateEvent>) => void) | undefined;
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
