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
import { getSegmentedControlItemCss as getComponentCss$r } from '../../../../../../components/dist/styles/esm/styles-entry.mjs';
import { getButtonAttributes, getIconColor } from '../../../../../../components/dist/utils/esm/utils-entry.mjs';

class DSRSegmentedControlItem extends Component {
    host;
    render() {
        const { children, namedSlotChildren, otherChildren } = splitChildren(this.props.children);
        // this additional validation is still needed because undefined is allowed with current propTypes
        const hasIcon = !!this.props.icon || !!this.props.iconSource;
        const hasSlottedContent = !!children.length;
        const style = minifyCss(stripFocusAndHoverStyles(getComponentCss$r(this.props.disabled, this.props.selected, hasIcon, hasSlottedContent, this.props.theme || 'light' // default as fallback
        )));
        return (jsxs(Fragment, { children: [jsxs("template", { shadowroot: "open", shadowrootmode: "open", shadowrootdelegatesfocus: "true", children: [jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsxs("button", { type: "button", ...getButtonAttributes(this.props.selected, this.props.disabled), children: [this.props.label && jsx("span", { children: this.props.label }), hasIcon && (jsx(PIcon, { className: "icon", size: "inherit", name: this.props.icon, source: this.props.iconSource, color: getIconColor(this.props.disabled), theme: this.props.theme || 'light', "aria-hidden": "true" })), jsx("slot", {})] })] }), this.props.children] }));
    }
}

export { DSRSegmentedControlItem };