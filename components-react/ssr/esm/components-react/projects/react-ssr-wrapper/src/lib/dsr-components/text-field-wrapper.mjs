import { Component, createElement } from 'react';
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
import { minifyCss } from '../../minifyCss.mjs';
import { stripFocusAndHoverStyles } from '../../stripFocusAndHoverStyles.mjs';
import { getTextFieldWrapperCss as getComponentCss$7 } from '../../../../../../components/dist/styles/esm/styles-entry.mjs';
import { isWithinForm, hasLocateAction, showCustomCalendarOrTimeIndicator, isType } from '../../../../../../components/dist/utils/esm/utils-entry.mjs';
import { StateMessage } from './state-message.mjs';
import { Label } from './label.mjs';

class DSRTextFieldWrapper extends Component {
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
        const { children, namedSlotChildren, otherChildren } = splitChildren(this.props.children);
        const { readOnly, disabled, type } = typeof otherChildren[0] === 'object' && 'props' in otherChildren[0] && otherChildren[0]?.props || {};
        const disabledOrReadOnly = disabled || readOnly;
        const buttonProps = {
            hideLabel: true,
            theme: this.props.theme,
            className: 'button',
        };
        const isSearch = isType(type, 'search');
        const isPassword = isType(type, 'password');
        const isCalendar = isType(type, 'date') || isType(type, 'week') || isType(type, 'month');
        const isTime = isType(type, 'time');
        isWithinForm(this.props.host);
        const hasAction = hasLocateAction(this.props.actionIcon);
        const hasCounter = false; // hasCounterAndIsTypeText(otherChildren[0]?.props);
        const isClearable = typeof otherChildren[0] === 'object' && 'props' in otherChildren[0] && !!otherChildren[0]?.props.value;
        const style = minifyCss(stripFocusAndHoverStyles(getComponentCss$7(disabled, this.props.hideLabel, this.props.state, this.props.isCounterVisible, this.props.isCounterVisible ? 'suffix' : this.props.unitPosition, isPassword ? 'password' : type, this.props.showPasswordToggle, this.props.isWithinForm, this.props.theme)));
        return (jsxs(Fragment, { children: [jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsxs("div", { className: "root", children: [jsx(Label, { hasLabel: this.props.label || namedSlotChildren.filter(({ props: { slot } }) => slot === 'label').length > 0, hasDescription: this.props.description || namedSlotChildren.filter(({ props: { slot } }) => slot === 'description').length > 0, host: null, label: this.props.label, description: this.props.description, formElement: typeof otherChildren[0] === 'object' && 'props' in otherChildren[0] && otherChildren[0]?.props, isDisabled: disabled }), jsxs("div", { className: "wrapper", children: [jsx("slot", {}), hasCounter , (this.props.isCounterVisible) && (jsx("span", { className: "unit", "aria-hidden": "true", children: this.props.unit })), isPassword && this.props.showPasswordToggle ? (jsx(PButtonPure, { ...buttonProps, type: "button", icon: this.props.showPassword ? 'view-off' : 'view', disabled: disabled, aria: { 'aria-pressed': this.props.showPassword ? 'true' : 'false' }, children: "Toggle password visibility" })) : showCustomCalendarOrTimeIndicator(isCalendar, isTime) ? (jsxs(PButtonPure, { ...buttonProps, type: "button", icon: isCalendar ? 'calendar' : 'clock', disabled: disabled, children: ["Show $", isCalendar ? 'date' : 'time', " picker"] })) : (isSearch && [
                                            // TODO: create an own component, which would fix SSR support too
                                            this.props.isWithinForm ? (createElement(PButtonPure, { ...buttonProps, key: "btn-submit", type: "submit", icon: "search", disabled: disabledOrReadOnly }, "Search")) : (jsx(PIcon, { className: "icon", name: "search", color: "state-disabled", theme: this.props.theme, "aria-hidden": "true" }, "icon")),
                                            createElement(PButtonPure, { ...buttonProps, key: "btn-clear", type: "button", icon: "close", tabIndex: -1, hidden: !isClearable, disabled: disabledOrReadOnly }, "Clear field"),
                                            hasAction && (createElement(PButtonPure, { ...buttonProps, key: "btn-action", type: "button", icon: "locate", hidden: isClearable, disabled: disabledOrReadOnly, loading: this.props.actionLoading }, "Locate me")),
                                        ])] }), jsx(StateMessage, { hasMessage: (this.props.message || namedSlotChildren.filter(({ props: { slot } }) => slot === 'message').length > 0) && ['success', 'error'].includes(this.props.state), state: this.props.state, message: this.props.message, theme: this.props.theme, host: null })] })] }), this.props.children] }));
    }
}

export { DSRTextFieldWrapper };