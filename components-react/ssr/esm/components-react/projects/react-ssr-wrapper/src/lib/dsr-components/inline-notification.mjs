import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import '../components/accordion.wrapper.mjs';
import '../components/banner.wrapper.mjs';
import '../components/button.wrapper.mjs';
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
import { getInlineNotificationCss as getComponentCss$G } from '../../../../../../components/dist/styles/esm/styles-entry.mjs';
import { getInlineNotificationIconName, getContentAriaAttributes } from '../../../../../../components/dist/utils/esm/utils-entry.mjs';

class DSRInlineNotification extends Component {
    host;
    get hasDismissButton() {
        return this.props.persistent ? false : this.props.dismissButton;
    }
    render() {
        const { children, namedSlotChildren, otherChildren } = splitChildren(this.props.children);
        const bannerId = 'banner';
        const labelId = 'label';
        const descriptionId = 'description';
        const style = minifyCss(stripFocusAndHoverStyles(getComponentCss$G(this.props.state, !!this.props.actionLabel, this.hasDismissButton, this.props.theme)));
        return (jsxs(Fragment, { children: [jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsxs(Fragment, { children: [jsx(PIcon, { className: "icon", name: getInlineNotificationIconName(this.props.state), color: `notification-${this.props.state}`, theme: this.props.theme, "aria-hidden": "true" }), jsxs("div", { id: bannerId, className: "content", ...getContentAriaAttributes(this.props.state, labelId, descriptionId), children: [(this.props.heading || namedSlotChildren.filter(({ props: { slot } }) => slot === 'heading').length > 0) && jsx("h5", { id: labelId, children: this.props.heading || jsx("slot", { name: "heading" }) }), jsx("p", { id: descriptionId, children: this.props.description || jsx("slot", {}) })] }), this.props.actionLabel && (jsx(PButtonPure, { className: "action", theme: this.props.theme, icon: this.props.actionIcon, loading: this.props.actionLoading, children: this.props.actionLabel })), this.hasDismissButton && (jsx(PButtonPure, { className: "close", type: "button", icon: "close", theme: this.props.theme, hideLabel: true, "aria-controls": bannerId, children: "Close notification" }))] })] }), this.props.children] }));
    }
}

export { DSRInlineNotification };
