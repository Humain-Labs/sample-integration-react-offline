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
var react = require('react');
var minifyCss = require('../../minifyCss.cjs');
var stripFocusAndHoverStyles = require('../../stripFocusAndHoverStyles.cjs');
var stylesEntry = require('../../../../../../components/dist/styles/esm/styles-entry.cjs');
var utilsEntry = require('../../../../../../components/dist/utils/esm/utils-entry.cjs');

class DSRSelectWrapperDropdown extends react.Component {
    host;
    isOpen = this.props.isOpenOverride;
    optionMaps = [];
    searchString = '';
    inputElement;
    listElement;
    get selectedIndex() {
        return 0;
    }
    render() {
        // TODO: part won't be needed as soon as button/input of select-wrapper-dropdown is part of shadow dom of select-wrapper itself
        const part = 'select-wrapper-dropdown';
        this.props.description && 'description';
        const buttonId = 'value';
        const style = minifyCss.minifyCss(stripFocusAndHoverStyles.stripFocusAndHoverStyles(stylesEntry.getSelectWrapperDropdownCss(this.props.direction === 'auto'
            ? 'down'
            : this.props.direction, this.isOpen, this.props.state, this.props.disabled, this.props.filter, this.props.theme)));
        return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsxRuntime.jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsxRuntime.jsx(jsxRuntime.Fragment, { children: this.props.filter ? ([
                            jsxRuntime.jsx("input", { type: "text", role: "combobox", disabled: this.props.disabled, placeholder: utilsEntry.getSelectedOptionMap(this.optionMaps)?.value || null, autoComplete: "off", defaultValue: this.searchString }, "input"),
                            jsxRuntime.jsx("span", { 
                                /* @ts-ignore */
                                part: part }, "span"),
                        ]) : (jsxRuntime.jsx("button", { 
                            /* @ts-ignore */
                            part: part, type: "button", role: "combobox", id: buttonId, disabled: this.props.disabled })) })] }) }));
    }
}

exports.DSRSelectWrapperDropdown = DSRSelectWrapperDropdown;
