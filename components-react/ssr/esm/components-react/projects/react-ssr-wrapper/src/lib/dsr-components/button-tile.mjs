import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Component, createElement } from 'react';
import '../components/accordion.wrapper.mjs';
import '../components/banner.wrapper.mjs';
import { PButton } from '../components/button.wrapper.mjs';
import '../components/button-group.wrapper.mjs';
import { PButtonPure } from '../components/button-pure.wrapper.mjs';
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
import '../components/model-signature.wrapper.mjs';
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
import { minifyCss } from '../../minifyCss.mjs';
import { stripFocusAndHoverStyles } from '../../stripFocusAndHoverStyles.mjs';
import { getButtonTileCss as getComponentCss$Y } from '../../../../../../components/dist/styles/esm/styles-entry.mjs';
import { isDisabledOrLoading } from '../../../../../../components/dist/utils/esm/utils-entry.mjs';

class DSRButtonTile extends Component {
    host;
    render() {
        splitChildren(this.props.children);
        const buttonProps = {
            theme: this.props.background,
            variant: 'secondary',
            iconSource: this.props.iconSource,
            type: this.props.type,
            disabled: this.props.disabled,
            loading: this.props.loading,
            aria: this.props.aria,
        };
        const button = (createElement(PButton, { ...buttonProps, icon: this.props.icon, key: "link-or-button", className: "link-or-button" }, this.props.label));
        const buttonPure = (createElement(PButtonPure, { ...buttonProps, key: "link-or-button-pure", className: "link-or-button-pure", hideLabel: true, icon: this.props.icon === 'none' ? 'arrow-right' : this.props.icon }, this.props.label));
        const style = minifyCss(stripFocusAndHoverStyles(getComponentCss$Y(isDisabledOrLoading(this.props.disabled, this.props.loading), this.props.aspectRatio, this.props.size, this.props.weight, this.props.background, this.props.align, this.props.compact, this.props.gradient, this.props.disabled)));
        return (jsxs(Fragment, { children: [jsxs("template", { shadowroot: "open", shadowrootmode: "open", shadowrootdelegatesfocus: "true", children: [jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsxs("div", { className: "root", children: [jsx("div", { className: "image-container", children: jsx("slot", {}) }), jsxs("div", { className: "content", children: [jsx("p", { children: this.props.description }), typeof this.props.compact === 'boolean' ? (this.props.compact ? buttonPure : button) : [buttonPure, button]] })] })] }), this.props.children] }));
    }
}

export { DSRButtonTile };