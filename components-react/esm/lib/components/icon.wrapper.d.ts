import { type HTMLAttributes } from 'react';
import type { SelectedAriaAttributes, IconAriaAttribute, IconColor, IconName, IconSize, Theme } from '../types';
export type PIconProps = Omit<HTMLAttributes<{}>, 'color'> & {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<IconAriaAttribute>;
    /**
     * Basic color variations depending on theme property.
     */
    color?: IconColor;
    /**
     * Has no effect anymore (the component is now using the native `loading="lazy"` attribute by default)
     * @deprecated since v3.0.0, will be removed with next major release
     */
    lazy?: boolean;
    /**
     * Specifies which icon to use.
     */
    name?: IconName;
    /**
     * The size of the icon.
     */
    size?: IconSize;
    /**
     * Specifies a whole icon path which can be used for custom icons.
     */
    source?: string;
    /**
     * Adapts the color depending on the theme. Has no effect when "inherit" is set as color prop.
     */
    theme?: Theme;
};
export declare const PIcon: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<{}>, "color"> & {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<"aria-label"> | undefined;
    /**
     * Basic color variations depending on theme property.
     */
    color?: "default" | "inherit" | "primary" | "contrast-low" | "contrast-medium" | "contrast-high" | "notification-success" | "notification-warning" | "notification-error" | "notification-info" | "brand" | "neutral-contrast-low" | "neutral-contrast-medium" | "neutral-contrast-high" | "notification-neutral" | "state-disabled" | undefined;
    /**
     * Has no effect anymore (the component is now using the native `loading="lazy"` attribute by default)
     * @deprecated since v3.0.0, will be removed with next major release
     */
    lazy?: boolean | undefined;
    /**
     * Specifies which icon to use.
     */
    name?: "list" | "copy" | "grid" | "document" | "search" | "switch" | "360" | "accessibility" | "active-cabin-ventilation" | "add" | "adjust" | "arrow-double-down" | "arrow-double-left" | "arrow-double-right" | "arrow-double-up" | "arrow-down" | "arrow-first" | "arrow-head-down" | "arrow-head-left" | "arrow-head-right" | "arrow-head-up" | "arrow-last" | "arrow-left" | "arrow-right" | "arrow-up" | "augmented-reality" | "battery-empty" | "battery-full" | "bell" | "bookmark" | "broadcast" | "calculator" | "calendar" | "camera" | "car" | "car-battery" | "card" | "charging-active" | "charging-state" | "charging-station" | "chart" | "chat" | "check" | "city" | "climate" | "climate-control" | "clock" | "close" | "closed-caption" | "co2-emission" | "compare" | "configurate" | "country-road" | "cubic-capacity" | "delete" | "disable" | "download" | "duration" | "edit" | "email" | "error-filled" | "exclamation" | "external" | "filter" | "fingerprint" | "flash" | "fuel-station" | "garage" | "gift" | "globe" | "heart" | "heart-filled" | "highway" | "home" | "horn" | "image" | "increase" | "information" | "information-filled" | "key" | "leaf" | "leather" | "light" | "locate" | "lock" | "lock-open" | "logo-apple-podcast" | "logo-baidu" | "logo-delicious" | "logo-digg" | "logo-facebook" | "logo-foursquare" | "logo-gmail" | "logo-google" | "logo-hatena" | "logo-instagram" | "logo-kaixin" | "logo-kakaotalk" | "logo-linkedin" | "logo-naver" | "logo-pinterest" | "logo-qq" | "logo-qq-share" | "logo-reddit" | "logo-skyrock" | "logo-sohu" | "logo-spotify" | "logo-tecent" | "logo-telegram" | "logo-tiktok" | "logo-tumblr" | "logo-twitter" | "logo-viber" | "logo-vk" | "logo-wechat" | "logo-weibo" | "logo-whatsapp" | "logo-xing" | "logo-yahoo" | "logo-youku" | "logo-youtube" | "logout" | "map" | "menu-dots-horizontal" | "menu-dots-vertical" | "menu-lines" | "minus" | "mobile" | "moon" | "oil-can" | "parking-brake" | "parking-light" | "pause" | "phone" | "pin" | "pin-filled" | "play" | "plug" | "plus" | "preheating" | "printer" | "purchase" | "push-pin" | "push-pin-off" | "qr" | "question" | "racing-flag" | "refresh" | "replay" | "reset" | "roof-closed" | "roof-open" | "route" | "rss" | "save" | "screen" | "send" | "share" | "shopping-bag" | "shopping-bag-filled" | "shopping-cart" | "shopping-cart-filled" | "sidelights" | "snowflake" | "sort" | "stack" | "star" | "steering-wheel" | "stopwatch" | "subtract" | "success" | "success-filled" | "sun" | "tablet" | "tachometer" | "tire" | "truck" | "upload" | "user" | "user-filled" | "user-group" | "user-manual" | "video" | "view" | "view-off" | "volume-off" | "volume-up" | "warning" | "warning-filled" | "weight" | "wifi" | "work" | "wrench" | "wrenches" | "zoom-in" | "zoom-out" | undefined;
    /**
     * The size of the icon.
     */
    size?: "inherit" | "xx-small" | "x-small" | "small" | "medium" | "large" | "x-large" | undefined;
    /**
     * Specifies a whole icon path which can be used for custom icons.
     */
    source?: string | undefined;
    /**
     * Adapts the color depending on the theme. Has no effect when "inherit" is set as color prop.
     */
    theme?: "light" | "dark" | "auto" | undefined;
} & import("react").RefAttributes<HTMLElement>>;
