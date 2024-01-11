import { type HTMLAttributes } from 'react';
import type { ButtonTileAlign, SelectedAriaAttributes, ButtonTileAriaAttribute, BreakpointCustomizable, ButtonTileAspectRatio, ButtonTileBackground, ButtonTileIcon, ButtonTileSize, ButtonTileType, ButtonTileWeight } from '../types';
export type PButtonTileProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Alignment of button and description.
     */
    align?: ButtonTileAlign;
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<ButtonTileAriaAttribute>;
    /**
     * Aspect ratio of the button-tile.
     */
    aspectRatio?: BreakpointCustomizable<ButtonTileAspectRatio>;
    /**
     * Adapts the description and button theme when used on light background image.
     */
    background?: ButtonTileBackground;
    /**
     * Displays the button-tile as compact version with description and button icon only.
     */
    compact?: BreakpointCustomizable<boolean>;
    /**
     * Description text.
     */
    description: string;
    /**
     * Disables the button. No events will be triggered while disabled state is active.
     */
    disabled?: boolean;
    /**
     * Show gradient.
     */
    gradient?: boolean;
    /**
     * The icon shown. By choosing 'none', no icon is displayed.
     */
    icon?: ButtonTileIcon;
    /**
     * A URL path to a custom icon.
     */
    iconSource?: string;
    /**
     * Label of the button.
     */
    label: string;
    /**
     * Disables the button-tile and shows a loading indicator. No events will be triggered while loading state is active.
     */
    loading?: boolean;
    /**
     * Font size of the description.
     */
    size?: BreakpointCustomizable<ButtonTileSize>;
    /**
     * Specifies the type of the button.
     */
    type?: ButtonTileType;
    /**
     * Font weight of the description.
     */
    weight?: BreakpointCustomizable<ButtonTileWeight>;
};
export declare const PButtonTile: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Alignment of button and description.
     */
    align?: "top" | "bottom" | undefined;
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<"aria-label" | "aria-expanded" | "aria-pressed" | "aria-haspopup"> | undefined;
    /**
     * Aspect ratio of the button-tile.
     */
    aspectRatio?: BreakpointCustomizable<"1:1" | "4:3" | "3:4" | "16:9" | "9:16"> | undefined;
    /**
     * Adapts the description and button theme when used on light background image.
     */
    background?: "light" | "dark" | "auto" | undefined;
    /**
     * Displays the button-tile as compact version with description and button icon only.
     */
    compact?: BreakpointCustomizable<boolean> | undefined;
    /**
     * Description text.
     */
    description: string;
    /**
     * Disables the button. No events will be triggered while disabled state is active.
     */
    disabled?: boolean | undefined;
    /**
     * Show gradient.
     */
    gradient?: boolean | undefined;
    /**
     * The icon shown. By choosing 'none', no icon is displayed.
     */
    icon?: import("../types").LinkButtonIconName | undefined;
    /**
     * A URL path to a custom icon.
     */
    iconSource?: string | undefined;
    /**
     * Label of the button.
     */
    label: string;
    /**
     * Disables the button-tile and shows a loading indicator. No events will be triggered while loading state is active.
     */
    loading?: boolean | undefined;
    /**
     * Font size of the description.
     */
    size?: BreakpointCustomizable<"default" | "inherit"> | undefined;
    /**
     * Specifies the type of the button.
     */
    type?: "button" | "reset" | "submit" | undefined;
    /**
     * Font weight of the description.
     */
    weight?: BreakpointCustomizable<"regular" | "semi-bold"> | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
