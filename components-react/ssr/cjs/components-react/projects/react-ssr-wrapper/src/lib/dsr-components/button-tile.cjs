'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
require('../components/accordion.wrapper.cjs');
require('../components/banner.wrapper.cjs');
var button_wrapper = require('../components/button.wrapper.cjs');
require('../components/button-group.wrapper.cjs');
var buttonPure_wrapper = require('../components/button-pure.wrapper.cjs');
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
require('../components/model-signature.wrapper.cjs');
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
var minifyCss = require('../../minifyCss.cjs');
var stripFocusAndHoverStyles = require('../../stripFocusAndHoverStyles.cjs');
var stylesEntry = require('../../../../../../components/dist/styles/esm/styles-entry.cjs');
var utilsEntry = require('../../../../../../components/dist/utils/esm/utils-entry.cjs');

class DSRButtonTile extends react.Component {
    host;
    render() {
        splitChildren.splitChildren(this.props.children);
        const buttonProps = {
            theme: this.props.background,
            variant: 'secondary',
            iconSource: this.props.iconSource,
            type: this.props.type,
            disabled: this.props.disabled,
            loading: this.props.loading,
            aria: this.props.aria,
        };
        const button = (react.createElement(button_wrapper.PButton, { ...buttonProps, icon: this.props.icon, key: "link-or-button", className: "link-or-button" }, this.props.label));
        const buttonPure = (react.createElement(buttonPure_wrapper.PButtonPure, { ...buttonProps, key: "link-or-button-pure", className: "link-or-button-pure", hideLabel: true, icon: this.props.icon === 'none' ? 'arrow-right' : this.props.icon }, this.props.label));
        const style = minifyCss.minifyCss(stripFocusAndHoverStyles.stripFocusAndHoverStyles(stylesEntry.getButtonTileCss(utilsEntry.isDisabledOrLoading(this.props.disabled, this.props.loading), this.props.aspectRatio, this.props.size, this.props.weight, this.props.background, this.props.align, this.props.compact, this.props.gradient, this.props.disabled)));
        return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("template", { shadowroot: "open", shadowrootmode: "open", shadowrootdelegatesfocus: "true", children: [jsxRuntime.jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsxRuntime.jsxs("div", { className: "root", children: [jsxRuntime.jsx("div", { className: "image-container", children: jsxRuntime.jsx("slot", {}) }), jsxRuntime.jsxs("div", { className: "content", children: [jsxRuntime.jsx("p", { children: this.props.description }), typeof this.props.compact === 'boolean' ? (this.props.compact ? buttonPure : button) : [buttonPure, button]] })] })] }), this.props.children] }));
    }
}

exports.DSRButtonTile = DSRButtonTile;
