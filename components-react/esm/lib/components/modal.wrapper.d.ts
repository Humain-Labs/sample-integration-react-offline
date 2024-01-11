import { type HTMLAttributes } from 'react';
import type { SelectedAriaAttributes, ModalAriaAttribute, BreakpointCustomizable, Theme } from '../types';
export type PModalProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<ModalAriaAttribute>;
    /**
     * If true, the modal will not be closable via backdrop click.
     */
    disableBackdropClick?: boolean;
    /**
     * If true, the modal will not have a dismiss button.
     * @deprecated since v3.0.0, will be removed with next major release, use `dismissButton` instead.
     */
    disableCloseButton?: boolean;
    /**
     * If false, the modal will not have a dismiss button.
     */
    dismissButton?: boolean;
    /**
     * If true the modal uses max viewport height and width. Should only be used for mobile.
     */
    fullscreen?: BreakpointCustomizable<boolean>;
    /**
     * The title of the modal
     */
    heading?: string;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `dismiss` event instead. Emitted when the component requests to be dismissed.
     */
    onClose?: (event: CustomEvent<void>) => void;
    /**
     * Emitted when the component requests to be dismissed.
     */
    onDismiss?: (event: CustomEvent<void>) => void;
    /**
     * If true, the modal is open.
     */
    open: boolean;
    /**
     * Adapts the modal color depending on the theme.
     */
    theme?: Theme;
};
export declare const PModal: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<"aria-label"> | undefined;
    /**
     * If true, the modal will not be closable via backdrop click.
     */
    disableBackdropClick?: boolean | undefined;
    /**
     * If true, the modal will not have a dismiss button.
     * @deprecated since v3.0.0, will be removed with next major release, use `dismissButton` instead.
     */
    disableCloseButton?: boolean | undefined;
    /**
     * If false, the modal will not have a dismiss button.
     */
    dismissButton?: boolean | undefined;
    /**
     * If true the modal uses max viewport height and width. Should only be used for mobile.
     */
    fullscreen?: BreakpointCustomizable<boolean> | undefined;
    /**
     * The title of the modal
     */
    heading?: string | undefined;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `dismiss` event instead. Emitted when the component requests to be dismissed.
     */
    onClose?: ((event: CustomEvent<void>) => void) | undefined;
    /**
     * Emitted when the component requests to be dismissed.
     */
    onDismiss?: ((event: CustomEvent<void>) => void) | undefined;
    /**
     * If true, the modal is open.
     */
    open: boolean;
    /**
     * Adapts the modal color depending on the theme.
     */
    theme?: "light" | "dark" | "auto" | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;