import { type HTMLAttributes } from 'react';
import type { TableUpdateEvent, Theme } from '../types';
export type PTableProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * A caption describing the contents of the table for accessibility only. This won't be visible in the browser. Use an element with an attribute of `slot="caption"` for a visible caption.
     */
    caption?: string;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `update` event instead. Emitted when sorting is changed.
     */
    onSortingChange?: (event: CustomEvent<TableUpdateEvent>) => void;
    /**
     * Emitted when sorting is changed.
     */
    onUpdate?: (event: CustomEvent<TableUpdateEvent>) => void;
    /**
     * Adapts the color when used on dark background.
     */
    theme?: Theme;
};
export declare const PTable: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * A caption describing the contents of the table for accessibility only. This won't be visible in the browser. Use an element with an attribute of `slot="caption"` for a visible caption.
     */
    caption?: string | undefined;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `update` event instead. Emitted when sorting is changed.
     */
    onSortingChange?: ((event: CustomEvent<TableUpdateEvent>) => void) | undefined;
    /**
     * Emitted when sorting is changed.
     */
    onUpdate?: ((event: CustomEvent<TableUpdateEvent>) => void) | undefined;
    /**
     * Adapts the color when used on dark background.
     */
    theme?: "light" | "dark" | "auto" | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
