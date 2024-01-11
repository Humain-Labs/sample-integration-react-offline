import { type HTMLAttributes } from 'react';
import type { InlineNotificationActionIcon, InlineNotificationState, Theme } from '../types';
export type PInlineNotificationProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Action icon of the inline-notification.
     */
    actionIcon?: InlineNotificationActionIcon;
    /**
     * Action label of the inline-notification.
     */
    actionLabel?: string;
    /**
     * Disables the action button and shows a loading indicator. No events will be triggered while loading state is active.
     */
    actionLoading?: boolean;
    /**
     * Description of the inline-notification.
     */
    description?: string;
    /**
     * If false, the inline-notification will not have a dismiss button.
     */
    dismissButton?: boolean;
    /**
     * Heading of the inline-notification.
     */
    heading?: string;
    /**
     * Emitted when the action button is clicked.
     */
    onAction?: (event: CustomEvent<void>) => void;
    /**
     * Emitted when the close button is clicked.
     */
    onDismiss?: (event: CustomEvent<void>) => void;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `dismissButton` instead. Defines if the inline-notification can be closed/removed by the user.
     */
    persistent?: boolean;
    /**
     * State of the inline-notification.
     */
    state?: InlineNotificationState;
    /**
     * Adapts the inline-notification color depending on the theme.
     */
    theme?: Theme;
};
export declare const PInlineNotification: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Action icon of the inline-notification.
     */
    actionIcon?: "list" | "copy" | "grid" | "document" | "search" | "switch" | "360" | "accessibility" | "active-cabin-ventilation" | "add" | "adjust" | "arrow-double-down" | "arrow-double-left" | "arrow-double-right" | "arrow-double-up" | "arrow-down" | "arrow-first" | "arrow-head-down" | "arrow-head-left" | "arrow-head-right" | "arrow-head-up" | "arrow-last" | "arrow-left" | "arrow-right" | "arrow-up" | "augmented-reality" | "battery-empty" | "battery-full" | "bell" | "bookmark" | "broadcast" | "calculator" | "calendar" | "camera" | "car" | "car-battery" | "card" | "charging-active" | "charging-state" | "charging-station" | "chart" | "chat" | "check" | "city" | "climate" | "climate-control" | "clock" | "close" | "closed-caption" | "co2-emission" | "compare" | "configurate" | "country-road" | "cubic-capacity" | "delete" | "disable" | "download" | "duration" | "edit" | "email" | "error-filled" | "exclamation" | "external" | "filter" | "fingerprint" | "flash" | "fuel-station" | "garage" | "gift" | "globe" | "heart" | "heart-filled" | "highway" | "home" | "horn" | "image" | "increase" | "information" | "information-filled" | "key" | "leaf" | "leather" | "light" | "locate" | "lock" | "lock-open" | "logo-apple-podcast" | "logo-baidu" | "logo-delicious" | "logo-digg" | "logo-facebook" | "logo-foursquare" | "logo-gmail" | "logo-google" | "logo-hatena" | "logo-instagram" | "logo-kaixin" | "logo-kakaotalk" | "logo-linkedin" | "logo-naver" | "logo-pinterest" | "logo-qq" | "logo-qq-share" | "logo-reddit" | "logo-skyrock" | "logo-sohu" | "logo-spotify" | "logo-tecent" | "logo-telegram" | "logo-tiktok" | "logo-tumblr" | "logo-twitter" | "logo-viber" | "logo-vk" | "logo-wechat" | "logo-weibo" | "logo-whatsapp" | "logo-xing" | "logo-yahoo" | "logo-youku" | "logo-youtube" | "logout" | "map" | "menu-dots-horizontal" | "menu-dots-vertical" | "menu-lines" | "minus" | "mobile" | "moon" | "oil-can" | "parking-brake" | "parking-light" | "pause" | "phone" | "pin" | "pin-filled" | "play" | "plug" | "plus" | "preheating" | "printer" | "purchase" | "push-pin" | "push-pin-off" | "qr" | "question" | "racing-flag" | "refresh" | "replay" | "reset" | "roof-closed" | "roof-open" | "route" | "rss" | "save" | "screen" | "send" | "share" | "shopping-bag" | "shopping-bag-filled" | "shopping-cart" | "shopping-cart-filled" | "sidelights" | "snowflake" | "sort" | "stack" | "star" | "steering-wheel" | "stopwatch" | "subtract" | "success" | "success-filled" | "sun" | "tablet" | "tachometer" | "tire" | "truck" | "upload" | "user" | "user-filled" | "user-group" | "user-manual" | "video" | "view" | "view-off" | "volume-off" | "volume-up" | "warning" | "warning-filled" | "weight" | "wifi" | "work" | "wrench" | "wrenches" | "zoom-in" | "zoom-out" | undefined;
    /**
     * Action label of the inline-notification.
     */
    actionLabel?: string | undefined;
    /**
     * Disables the action button and shows a loading indicator. No events will be triggered while loading state is active.
     */
    actionLoading?: boolean | undefined;
    /**
     * Description of the inline-notification.
     */
    description?: string | undefined;
    /**
     * If false, the inline-notification will not have a dismiss button.
     */
    dismissButton?: boolean | undefined;
    /**
     * Heading of the inline-notification.
     */
    heading?: string | undefined;
    /**
     * Emitted when the action button is clicked.
     */
    onAction?: ((event: CustomEvent<void>) => void) | undefined;
    /**
     * Emitted when the close button is clicked.
     */
    onDismiss?: ((event: CustomEvent<void>) => void) | undefined;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `dismissButton` instead. Defines if the inline-notification can be closed/removed by the user.
     */
    persistent?: boolean | undefined;
    /**
     * State of the inline-notification.
     */
    state?: "success" | "warning" | "error" | "info" | "neutral" | undefined;
    /**
     * Adapts the inline-notification color depending on the theme.
     */
    theme?: "light" | "dark" | "auto" | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;