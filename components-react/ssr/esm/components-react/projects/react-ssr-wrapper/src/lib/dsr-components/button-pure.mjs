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
import { PIcon } from '../components/icon.wrapper.mjs';
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
import { PSpinner } from '../components/spinner.wrapper.mjs';
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
import { getButtonPureCss as getComponentCss$Z } from '../../../../../../components/dist/styles/esm/styles-entry.mjs';
import { isDisabledOrLoading, hasVisibleIcon, getButtonPureAriaAttributes } from '../../../../../../components/dist/utils/esm/utils-entry.mjs';

class DSRButtonPure extends Component {
    host;
    get isDisabledOrLoading() {
        return isDisabledOrLoading(this.props.disabled, this.props.loading);
    }
    // this stops click events when button is disabled
    render() {
        splitChildren(this.props.children);
        const hasIcon = hasVisibleIcon(this.props.icon, this.props.iconSource);
        const iconProps = {
            className: 'icon',
            size: 'inherit',
            theme: this.props.theme,
        };
        const style = minifyCss(stripFocusAndHoverStyles(getComponentCss$Z(this.props.icon, this.props.iconSource, this.props.active, this.props.loading, this.isDisabledOrLoading, this.props.stretch, this.props.size, this.props.hideLabel, this.props.alignLabel, this.props.theme)));
        return (jsxs(Fragment, { children: [jsxs("template", { shadowroot: "open", shadowrootmode: "open", shadowrootdelegatesfocus: "true", children: [jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsxs("button", { ...getButtonPureAriaAttributes(this.props.disabled, this.props.loading, this.props.aria), className: "root", type: this.props.type, name: this.props.name, value: this.props.value, children: [this.props.loading ? (jsx(PSpinner, { aria: { 'aria-label': 'Loading state' }, ...iconProps })) : (hasIcon && (jsx(PIcon, { ...iconProps, name: this.props.icon, source: this.props.iconSource, color: this.isDisabledOrLoading ? 'state-disabled' : 'primary', theme: this.props.theme, "aria-hidden": "true" }))), jsx("span", { className: "label", children: jsx("slot", {}) })] })] }), this.props.children] }));
    }
}

export { DSRButtonPure };