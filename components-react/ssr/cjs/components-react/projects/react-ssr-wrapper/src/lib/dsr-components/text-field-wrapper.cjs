'use strict';

var react = require('react');
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
var minifyCss = require('../../minifyCss.cjs');
var stripFocusAndHoverStyles = require('../../stripFocusAndHoverStyles.cjs');
var stylesEntry = require('../../../../../../components/dist/styles/esm/styles-entry.cjs');
var utilsEntry = require('../../../../../../components/dist/utils/esm/utils-entry.cjs');
var stateMessage = require('./state-message.cjs');
var label = require('./label.cjs');

class DSRTextFieldWrapper extends react.Component {
    host;
    showPassword = false;
    isClearable = false;
    input;
    unitOrCounterElement;
    ariaElement;
    isSearch;
    isPassword;
    isCalendar;
    isTime;
    isWithinForm;
    hasAction;
    hasCounter;
    isCounterVisible;
    hasUnit;
    render() {
        const { children, namedSlotChildren, otherChildren } = splitChildren.splitChildren(this.props.children);
        const { readOnly, disabled, type } = typeof otherChildren[0] === 'object' && 'props' in otherChildren[0] && otherChildren[0]?.props || {};
        const disabledOrReadOnly = disabled || readOnly;
        const buttonProps = {
            hideLabel: true,
            theme: this.props.theme,
            className: 'button',
        };
        const isSearch = utilsEntry.isType(type, 'search');
        const isPassword = utilsEntry.isType(type, 'password');
        const isCalendar = utilsEntry.isType(type, 'date') || utilsEntry.isType(type, 'week') || utilsEntry.isType(type, 'month');
        const isTime = utilsEntry.isType(type, 'time');
        utilsEntry.isWithinForm(this.props.host);
        const hasAction = utilsEntry.hasLocateAction(this.props.actionIcon);
        const hasCounter = false; // hasCounterAndIsTypeText(otherChildren[0]?.props);
        const isClearable = typeof otherChildren[0] === 'object' && 'props' in otherChildren[0] && !!otherChildren[0]?.props.value;
        const style = minifyCss.minifyCss(stripFocusAndHoverStyles.stripFocusAndHoverStyles(stylesEntry.getTextFieldWrapperCss(disabled, this.props.hideLabel, this.props.state, this.props.isCounterVisible, this.props.isCounterVisible ? 'suffix' : this.props.unitPosition, isPassword ? 'password' : type, this.props.showPasswordToggle, this.props.isWithinForm, this.props.theme)));
        return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsxRuntime.jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsxRuntime.jsxs("div", { className: "root", children: [jsxRuntime.jsx(label.Label, { hasLabel: this.props.label || namedSlotChildren.filter(({ props: { slot } }) => slot === 'label').length > 0, hasDescription: this.props.description || namedSlotChildren.filter(({ props: { slot } }) => slot === 'description').length > 0, host: null, label: this.props.label, description: this.props.description, formElement: typeof otherChildren[0] === 'object' && 'props' in otherChildren[0] && otherChildren[0]?.props, isDisabled: disabled }), jsxRuntime.jsxs("div", { className: "wrapper", children: [jsxRuntime.jsx("slot", {}), hasCounter , (this.props.isCounterVisible) && (jsxRuntime.jsx("span", { className: "unit", "aria-hidden": "true", children: this.props.unit })), isPassword && this.props.showPasswordToggle ? (jsxRuntime.jsx(buttonPure_wrapper.PButtonPure, { ...buttonProps, type: "button", icon: this.props.showPassword ? 'view-off' : 'view', disabled: disabled, aria: { 'aria-pressed': this.props.showPassword ? 'true' : 'false' }, children: "Toggle password visibility" })) : utilsEntry.showCustomCalendarOrTimeIndicator(isCalendar, isTime) ? (jsxRuntime.jsxs(buttonPure_wrapper.PButtonPure, { ...buttonProps, type: "button", icon: isCalendar ? 'calendar' : 'clock', disabled: disabled, children: ["Show $", isCalendar ? 'date' : 'time', " picker"] })) : (isSearch && [
                                            // TODO: create an own component, which would fix SSR support too
                                            this.props.isWithinForm ? (react.createElement(buttonPure_wrapper.PButtonPure, { ...buttonProps, key: "btn-submit", type: "submit", icon: "search", disabled: disabledOrReadOnly }, "Search")) : (jsxRuntime.jsx(icon_wrapper.PIcon, { className: "icon", name: "search", color: "state-disabled", theme: this.props.theme, "aria-hidden": "true" }, "icon")),
                                            react.createElement(buttonPure_wrapper.PButtonPure, { ...buttonProps, key: "btn-clear", type: "button", icon: "close", tabIndex: -1, hidden: !isClearable, disabled: disabledOrReadOnly }, "Clear field"),
                                            hasAction && (react.createElement(buttonPure_wrapper.PButtonPure, { ...buttonProps, key: "btn-action", type: "button", icon: "locate", hidden: isClearable, disabled: disabledOrReadOnly, loading: this.props.actionLoading }, "Locate me")),
                                        ])] }), jsxRuntime.jsx(stateMessage.StateMessage, { hasMessage: (this.props.message || namedSlotChildren.filter(({ props: { slot } }) => slot === 'message').length > 0) && ['success', 'error'].includes(this.props.state), state: this.props.state, message: this.props.message, theme: this.props.theme, host: null })] })] }), this.props.children] }));
    }
}

exports.DSRTextFieldWrapper = DSRTextFieldWrapper;
