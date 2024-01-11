'use strict';

var jsxRuntime = require('react/jsx-runtime');
require('../components/accordion.wrapper.cjs');
require('../components/banner.wrapper.cjs');
require('../components/button.wrapper.cjs');
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
var icon_wrapper = require('../components/icon.wrapper.cjs');
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
var react = require('react');
var minifyCss = require('../../minifyCss.cjs');
var stripFocusAndHoverStyles = require('../../stripFocusAndHoverStyles.cjs');
var stylesEntry = require('../../../../../../components/dist/styles/esm/styles-entry.cjs');
var utilsEntry = require('../../../../../../components/dist/utils/esm/utils-entry.cjs');
var stateMessage = require('./state-message.cjs');
var label = require('./label.cjs');

class DSRMultiSelect extends react.Component {
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
        return utilsEntry.getSelectedOptionValues(this.props.multiSelectOptions);
    }
    render() {
        const { children, namedSlotChildren, otherChildren } = splitChildren.splitChildren(this.props.children);
        const optionsSelectedId = 'options-selected';
        const dropdownId = 'list';
        const inputId = 'filter';
        const style = minifyCss.minifyCss(stripFocusAndHoverStyles.stripFocusAndHoverStyles(stylesEntry.getMultiSelectCss('down', this.props.isOpen, this.props.disabled, this.props.hideLabel, this.props.state, this.props.isWithinForm, this.props.theme)));
        return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsxRuntime.jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsxRuntime.jsxs("div", { className: "root", children: [jsxRuntime.jsx(label.Label, { hasLabel: this.props.label || namedSlotChildren.filter(({ props: { slot } }) => slot === 'label').length > 0, hasDescription: this.props.description || namedSlotChildren.filter(({ props: { slot } }) => slot === 'description').length > 0, host: null, label: this.props.label, description: this.props.description, htmlFor: inputId, isRequired: this.props.required, isDisabled: this.props.disabled }), this.props.currentValue && (jsxRuntime.jsxs("span", { id: optionsSelectedId, className: "sr-only", children: [utilsEntry.getSelectedOptions(this.props.multiSelectOptions).length, " options selected"] })), jsxRuntime.jsxs("div", { className: `wrapper${this.props.disabled ? ' disabled' : ''}`, children: [jsxRuntime.jsx("input", { id: inputId, role: "combobox", autoComplete: "off", disabled: this.props.disabled, required: this.props.required, "aria-invalid": this.props.state === 'error' ? 'true' : null }), jsxRuntime.jsx(icon_wrapper.PIcon, { className: "icon", name: "arrow-head-down", theme: this.props.theme, "aria-hidden": "true" }), this.props.currentValue && (jsxRuntime.jsx(buttonPure_wrapper.PButtonPure, { className: "button", icon: "close", hideLabel: "true", theme: this.props.theme, disabled: this.props.disabled, children: "Reset selection" })), jsxRuntime.jsxs("div", { id: dropdownId, className: "listbox", children: [!this.props.hasFilterResults && (jsxRuntime.jsxs("div", { className: "no-results", "aria-live": "polite", role: "status", children: [jsxRuntime.jsx("span", { "aria-hidden": "true", children: "---" }), jsxRuntime.jsx("span", { className: "sr-only", children: "No results found" })] })), jsxRuntime.jsx("slot", {})] })] }), jsxRuntime.jsx(stateMessage.StateMessage, { hasMessage: (this.props.message || namedSlotChildren.filter(({ props: { slot } }) => slot === 'message').length > 0) && ['success', 'error'].includes(this.props.state), state: this.props.state, message: this.props.message, theme: this.props.theme, host: null }), jsxRuntime.jsx("span", { className: "sr-only", role: "status", "aria-live": "assertive", "aria-relevant": "additions text", children: this.props.srHighlightedOptionText }), this.props.isWithinForm && jsxRuntime.jsx("slot", { name: "internal-select" })] })] }), this.props.children] }));
    }
}

exports.DSRMultiSelect = DSRMultiSelect;