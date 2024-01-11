import { type HTMLAttributes } from 'react';
import type { TagColor, TagIcon, Theme } from '../types';
export type PTagProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Background color variations depending on theme property.
     */
    color?: TagColor;
    /**
     * The icon shown.
     */
    icon?: TagIcon;
    /**
     * A URL path to a custom icon.
     */
    iconSource?: string;
    /**
     * Adapts the tag color depending on the theme.
     */
    theme?: Theme;
};
export declare const PTag: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Background color variations depending on theme property.
     */
    color?: "background-base" | "background-surface" | "primary" | "notification-success" | "notification-warning" | "notification-error" | "neutral-contrast-high" | "notification-neutral" | "background-default" | "notification-info-soft" | "notification-warning-soft" | "notification-success-soft" | "notification-error-soft" | undefined;
    /**
     * The icon shown.
     */
    icon?: "list" | "copy" | "grid" | "document" | "search" | "switch" | "360" | "accessibility" | "active-cabin-ventilation" | "add" | "adjust" | "arrow-double-down" | "arrow-double-left" | "arrow-double-right" | "arrow-double-up" | "arrow-down" | "arrow-first" | "arrow-head-down" | "arrow-head-left" | "arrow-head-right" | "arrow-head-up" | "arrow-last" | "arrow-left" | "arrow-right" | "arrow-up" | "augmented-reality" | "battery-empty" | "battery-full" | "bell" | "bookmark" | "broadcast" | "calculator" | "calendar" | "camera" | "car" | "car-battery" | "card" | "charging-active" | "charging-state" | "charging-station" | "chart" | "chat" | "check" | "city" | "climate" | "climate-control" | "clock" | "close" | "closed-caption" | "co2-emission" | "compare" | "configurate" | "country-road" | "cubic-capacity" | "delete" | "disable" | "download" | "duration" | "edit" | "email" | "error-filled" | "exclamation" | "external" | "filter" | "fingerprint" | "flash" | "fuel-station" | "garage" | "gift" | "globe" | "heart" | "heart-filled" | "highway" | "home" | "horn" | "image" | "increase" | "information" | "information-filled" | "key" | "leaf" | "leather" | "light" | "locate" | "lock" | "lock-open" | "logo-apple-podcast" | "logo-baidu" | "logo-delicious" | "logo-digg" | "logo-facebook" | "logo-foursquare" | "logo-gmail" | "logo-google" | "logo-hatena" | "logo-instagram" | "logo-kaixin" | "logo-kakaotalk" | "logo-linkedin" | "logo-naver" | "logo-pinterest" | "logo-qq" | "logo-qq-share" | "logo-reddit" | "logo-skyrock" | "logo-sohu" | "logo-spotify" | "logo-tecent" | "logo-telegram" | "logo-tiktok" | "logo-tumblr" | "logo-twitter" | "logo-viber" | "logo-vk" | "logo-wechat" | "logo-weibo" | "logo-whatsapp" | "logo-xing" | "logo-yahoo" | "logo-youku" | "logo-youtube" | "logout" | "map" | "menu-dots-horizontal" | "menu-dots-vertical" | "menu-lines" | "minus" | "mobile" | "moon" | "oil-can" | "parking-brake" | "parking-light" | "pause" | "phone" | "pin" | "pin-filled" | "play" | "plug" | "plus" | "preheating" | "printer" | "purchase" | "push-pin" | "push-pin-off" | "qr" | "question" | "racing-flag" | "refresh" | "replay" | "reset" | "roof-closed" | "roof-open" | "route" | "rss" | "save" | "screen" | "send" | "share" | "shopping-bag" | "shopping-bag-filled" | "shopping-cart" | "shopping-cart-filled" | "sidelights" | "snowflake" | "sort" | "stack" | "star" | "steering-wheel" | "stopwatch" | "subtract" | "success" | "success-filled" | "sun" | "tablet" | "tachometer" | "tire" | "truck" | "upload" | "user" | "user-filled" | "user-group" | "user-manual" | "video" | "view" | "view-off" | "volume-off" | "volume-up" | "warning" | "warning-filled" | "weight" | "wifi" | "work" | "wrench" | "wrenches" | "zoom-in" | "zoom-out" | undefined;
    /**
     * A URL path to a custom icon.
     */
    iconSource?: string | undefined;
    /**
     * Adapts the tag color depending on the theme.
     */
    theme?: "light" | "dark" | "auto" | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
