'use strict';

var jsxRuntime = require('react/jsx-runtime');
require('../components/accordion.wrapper.cjs');
require('../components/banner.wrapper.cjs');
require('../components/button.wrapper.cjs');
require('../components/button-group.wrapper.cjs');
require('../components/button-pure.wrapper.cjs');
require('../components/button-tile.wrapper.cjs');
require('../components/carousel.wrapper.cjs');
require('../components/checkbox-wrapper.wrapper.cjs');
require('../components/content-wrapper.wrapper.cjs');
require('../components/crest.wrapper.cjs');
require('../components/display.wrapper.cjs');
require('../components/divider.wrapper.cjs');
require('../components/fieldset.wrapper.cjs');
require('../components/fieldset-wrapper.wrapper.cjs');
require('../components/flex.wrapper.cjs');
require('../components/flex-item.wrapper.cjs');
require('../components/flyout.wrapper.cjs');
require('../components/grid.wrapper.cjs');
require('../components/grid-item.wrapper.cjs');
require('../components/heading.wrapper.cjs');
require('../components/headline.wrapper.cjs');
require('../components/icon.wrapper.cjs');
require('../components/inline-notification.wrapper.cjs');
require('../components/link.wrapper.cjs');
require('../components/link-pure.wrapper.cjs');
require('../components/link-social.wrapper.cjs');
require('../components/link-tile.wrapper.cjs');
require('../components/link-tile-model-signature.wrapper.cjs');
require('../components/marque.wrapper.cjs');
require('../components/modal.wrapper.cjs');
var modelSignature_wrapper = require('../components/model-signature.wrapper.cjs');
require('../components/multi-select.wrapper.cjs');
require('../components/multi-select-option.wrapper.cjs');
require('../components/pagination.wrapper.cjs');
require('../components/pin-code.wrapper.cjs');
require('../components/popover.wrapper.cjs');
require('../components/radio-button-wrapper.wrapper.cjs');
require('../components/scroller.wrapper.cjs');
require('../components/segmented-control.wrapper.cjs');
require('../components/segmented-control-item.wrapper.cjs');
require('../components/select-wrapper.wrapper.cjs');
require('../components/spinner.wrapper.cjs');
require('../components/stepper-horizontal.wrapper.cjs');
require('../components/stepper-horizontal-item.wrapper.cjs');
require('../components/switch.wrapper.cjs');
require('../components/table.wrapper.cjs');
require('../components/table-body.wrapper.cjs');
require('../components/table-cell.wrapper.cjs');
require('../components/table-head.wrapper.cjs');
require('../components/table-head-cell.wrapper.cjs');
require('../components/table-head-row.wrapper.cjs');
require('../components/table-row.wrapper.cjs');
require('../components/tabs.wrapper.cjs');
require('../components/tabs-bar.wrapper.cjs');
require('../components/tabs-item.wrapper.cjs');
require('../components/tag.wrapper.cjs');
require('../components/tag-dismissible.wrapper.cjs');
require('../components/text.wrapper.cjs');
require('../components/text-field-wrapper.wrapper.cjs');
require('../components/text-list.wrapper.cjs');
require('../components/text-list-item.wrapper.cjs');
require('../components/textarea-wrapper.wrapper.cjs');
require('../components/toast.wrapper.cjs');
require('../components/wordmark.wrapper.cjs');
var splitChildren = require('../../splitChildren.cjs');
var react = require('react');
var minifyCss = require('../../minifyCss.cjs');
var stripFocusAndHoverStyles = require('../../stripFocusAndHoverStyles.cjs');
var stylesEntry = require('../../../../../../components/dist/styles/esm/styles-entry.cjs');

class DSRLinkTileModelSignature extends react.Component {
    host;
    render() {
        const { children, namedSlotChildren, otherChildren } = splitChildren.splitChildren(this.props.children);
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
        const style = minifyCss.minifyCss(stripFocusAndHoverStyles.stripFocusAndHoverStyles(stylesEntry.getLinkTileModelSignatureCss(this.props.aspectRatio, this.props.weight, this.props.linkDirection, !!this.props.description)));
        return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsxRuntime.jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsxRuntime.jsxs("div", { className: "root", children: [jsxRuntime.jsx("div", { className: "image-container", children: jsxRuntime.jsx("slot", {}) }), jsxRuntime.jsx("div", { className: "signature", children: jsxRuntime.jsx(modelSignature_wrapper.PModelSignature, { theme: "dark", model: this.props.model }) }), jsxRuntime.jsxs("div", { className: "content", children: [jsxRuntime.jsx("a", { ...overlayLinkProps }), jsxRuntime.jsx(this.props.headingTag, { className: "heading", children: this.props.heading }), this.props.description && jsxRuntime.jsx("p", { className: "description", children: this.props.description }), jsxRuntime.jsxs("div", { className: "link-group", role: "group", children: [jsxRuntime.jsx("slot", { name: "primary" }), jsxRuntime.jsx("slot", { name: "secondary" })] })] })] })] }), manipulatedChildren] }));
    }
}

exports.DSRLinkTileModelSignature = DSRLinkTileModelSignature;