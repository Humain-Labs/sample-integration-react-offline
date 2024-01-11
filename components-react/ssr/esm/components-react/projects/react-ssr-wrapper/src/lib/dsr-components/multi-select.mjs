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
import { getMultiSelectCss as getComponentCss$x } from '../../../../../../components/dist/styles/esm/styles-entry.mjs';
import { getSelectedOptionValues, getSelectedOptions } from '../../../../../../components/dist/utils/esm/utils-entry.mjs';
import { StateMessage } from './state-message.mjs';
import { Label } from './label.mjs';

class DSRMultiSelect extends Component {
    host;
    isOpen = false;
    srHighlightedOptionText = '';
    hasFilterResults = true;
    nativeSelect;
    multiSelectOptions = [];
    inputContainer;
    inputElement;
    listElement;
    form;
    isWithinForm;
    preventOptionUpdate = false; // Used to prevent value watcher from updating options when options are already updated
    get currentValue() {
        return getSelectedOptionValues(this.props.multiSelectOptions);
    }
    render() {
        const { children, namedSlotChildren, otherChildren } = splitChildren(this.props.children);
        const optionsSelectedId = 'options-selected';
        const dropdownId = 'list';
        const inputId = 'filter';
        const style = minifyCss(stripFocusAndHoverStyles(getComponentCss$x('down', this.props.isOpen, this.props.disabled, this.props.hideLabel, this.props.state, this.props.isWithinForm, this.props.theme)));
        return (jsxs(Fragment, { children: [jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsxs("div", { className: "root", children: [jsx(Label, { hasLabel: this.props.label || namedSlotChildren.filter(({ props: { slot } }) => slot === 'label').length > 0, hasDescription: this.props.description || namedSlotChildren.filter(({ props: { slot } }) => slot === 'description').length > 0, host: null, label: this.props.label, description: this.props.description, htmlFor: inputId, isRequired: this.props.required, isDisabled: this.props.disabled }), this.props.currentValue && (jsxs("span", { id: optionsSelectedId, className: "sr-only", children: [getSelectedOptions(this.props.multiSelectOptions).length, " options selected"] })), jsxs("div", { className: `wrapper${this.props.disabled ? ' disabled' : ''}`, children: [jsx("input", { id: inputId, role: "combobox", autoComplete: "off", disabled: this.props.disabled, required: this.props.required, "aria-invalid": this.props.state === 'error' ? 'true' : null }), jsx(PIcon, { className: "icon", name: "arrow-head-down", theme: this.props.theme, "aria-hidden": "true" }), this.props.currentValue && (jsx(PButtonPure, { className: "button", icon: "close", hideLabel: "true", theme: this.props.theme, disabled: this.props.disabled, children: "Reset selection" })), jsxs("div", { id: dropdownId, className: "listbox", children: [!this.props.hasFilterResults && (jsxs("div", { className: "no-results", "aria-live": "polite", role: "status", children: [jsx("span", { "aria-hidden": "true", children: "---" }), jsx("span", { className: "sr-only", children: "No results found" })] })), jsx("slot", {})] })] }), jsx(StateMessage, { hasMessage: (this.props.message || namedSlotChildren.filter(({ props: { slot } }) => slot === 'message').length > 0) && ['success', 'error'].includes(this.props.state), state: this.props.state, message: this.props.message, theme: this.props.theme, host: null }), jsx("span", { className: "sr-only", role: "status", "aria-live": "assertive", "aria-relevant": "additions text", children: this.props.srHighlightedOptionText }), this.props.isWithinForm && jsx("slot", { name: "internal-select" })] })] }), this.props.children] }));
    }
}

export { DSRMultiSelect };