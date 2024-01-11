import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import '../components/accordion.wrapper.mjs';
import '../components/banner.wrapper.mjs';
import '../components/button.wrapper.mjs';
import '../components/button-group.wrapper.mjs';
import '../components/button-pure.wrapper.mjs';
import '../components/button-tile.wrapper.mjs';
import '../components/carousel.wrapper.mjs';
import '../components/checkbox-wrapper.wrapper.mjs';
import '../components/content-wrapper.wrapper.mjs';
import '../components/crest.wrapper.mjs';
import '../components/display.wrapper.mjs';
import '../components/divider.wrapper.mjs';
import '../components/fieldset.wrapper.mjs';
import '../components/fieldset-wrapper.wrapper.mjs';
import '../components/flex.wrapper.mjs';
import '../components/flex-item.wrapper.mjs';
import '../components/flyout.wrapper.mjs';
import '../components/grid.wrapper.mjs';
import '../components/grid-item.wrapper.mjs';
import '../components/heading.wrapper.mjs';
import '../components/headline.wrapper.mjs';
import '../components/icon.wrapper.mjs';
import '../components/inline-notification.wrapper.mjs';
import '../components/link.wrapper.mjs';
import '../components/link-pure.wrapper.mjs';
import '../components/link-social.wrapper.mjs';
import '../components/link-tile.wrapper.mjs';
import '../components/link-tile-model-signature.wrapper.mjs';
import '../components/marque.wrapper.mjs';
import '../components/modal.wrapper.mjs';
import { PModelSignature } from '../components/model-signature.wrapper.mjs';
import '../components/multi-select.wrapper.mjs';
import '../components/multi-select-option.wrapper.mjs';
import '../components/pagination.wrapper.mjs';
import '../components/pin-code.wrapper.mjs';
import '../components/popover.wrapper.mjs';
import '../components/radio-button-wrapper.wrapper.mjs';
import '../components/scroller.wrapper.mjs';
import '../components/segmented-control.wrapper.mjs';
import '../components/segmented-control-item.wrapper.mjs';
import '../components/select-wrapper.wrapper.mjs';
import '../components/spinner.wrapper.mjs';
import '../components/stepper-horizontal.wrapper.mjs';
import '../components/stepper-horizontal-item.wrapper.mjs';
import '../components/switch.wrapper.mjs';
import '../components/table.wrapper.mjs';
import '../components/table-body.wrapper.mjs';
import '../components/table-cell.wrapper.mjs';
import '../components/table-head.wrapper.mjs';
import '../components/table-head-cell.wrapper.mjs';
import '../components/table-head-row.wrapper.mjs';
import '../components/table-row.wrapper.mjs';
import '../components/tabs.wrapper.mjs';
import '../components/tabs-bar.wrapper.mjs';
import '../components/tabs-item.wrapper.mjs';
import '../components/tag.wrapper.mjs';
import '../components/tag-dismissible.wrapper.mjs';
import '../components/text.wrapper.mjs';
import '../components/text-field-wrapper.wrapper.mjs';
import '../components/text-list.wrapper.mjs';
import '../components/text-list-item.wrapper.mjs';
import '../components/textarea-wrapper.wrapper.mjs';
import '../components/toast.wrapper.mjs';
import '../components/wordmark.wrapper.mjs';
import { splitChildren } from '../../splitChildren.mjs';
import { Component } from 'react';
import { minifyCss } from '../../minifyCss.mjs';
import { stripFocusAndHoverStyles } from '../../stripFocusAndHoverStyles.mjs';
import { getLinkTileModelSignatureCss as getComponentCss$D } from '../../../../../../components/dist/styles/esm/styles-entry.mjs';

class DSRLinkTileModelSignature extends Component {
    host;
    render() {
        const { children, namedSlotChildren, otherChildren } = splitChildren(this.props.children);
        // If we do this earlier than render, there are cases where primaryLink.href is undefined
        // TODO: Here and in other components, validation happens only on initial render. We could extend this to watch props of the required slots.
        const manipulatedChildren = children.map((child) => typeof child === 'object' && 'props' in child && namedSlotChildren.includes(child)
            ? { ...child, props: { ...child.props, theme: 'dark', variant: child.props.slot } }
            : child);
        const primaryLink = manipulatedChildren.find((child) => typeof child === 'object' && 'props' in child && child.props.variant === 'primary');
        const linkEl = primaryLink.props.href
            ? primaryLink.props
            : (Array.isArray(primaryLink.props.children) ? primaryLink.props.children : [primaryLink.props.children]).find((child) => child.type === 'a' || child.props.href || child.props.to // href and to check is for framework links
            ).props; // support for slotted a tag within p-link
        const overlayLinkProps = {
            className: 'link-overlay',
            href: linkEl.href || linkEl.to,
            target: linkEl.target || '_self',
            download: linkEl.download,
            rel: linkEl.rel,
            tabIndex: -1,
            'aria-hidden': 'true',
        };
        const style = minifyCss(stripFocusAndHoverStyles(getComponentCss$D(this.props.aspectRatio, this.props.weight, this.props.linkDirection, !!this.props.description)));
        return (jsxs(Fragment, { children: [jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsxs("div", { className: "root", children: [jsx("div", { className: "image-container", children: jsx("slot", {}) }), jsx("div", { className: "signature", children: jsx(PModelSignature, { theme: "dark", model: this.props.model }) }), jsxs("div", { className: "content", children: [jsx("a", { ...overlayLinkProps }), jsx(this.props.headingTag, { className: "heading", children: this.props.heading }), this.props.description && jsx("p", { className: "description", children: this.props.description }), jsxs("div", { className: "link-group", role: "group", children: [jsx("slot", { name: "primary" }), jsx("slot", { name: "secondary" })] })] })] })] }), manipulatedChildren] }));
    }
}

export { DSRLinkTileModelSignature };