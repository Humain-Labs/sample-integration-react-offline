import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
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
import { Component } from 'react';
import { minifyCss } from '../../minifyCss.mjs';
import { stripFocusAndHoverStyles } from '../../stripFocusAndHoverStyles.mjs';
import { getSelectWrapperDropdownCss as getComponentCss$p } from '../../../../../../components/dist/styles/esm/styles-entry.mjs';
import { getSelectedOptionMap } from '../../../../../../components/dist/utils/esm/utils-entry.mjs';

class DSRSelectWrapperDropdown extends Component {
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
        const style = minifyCss(stripFocusAndHoverStyles(getComponentCss$p(this.props.direction === 'auto'
            ? 'down'
            : this.props.direction, this.isOpen, this.props.state, this.props.disabled, this.props.filter, this.props.theme)));
        return (jsx(Fragment, { children: jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsx(Fragment, { children: this.props.filter ? ([
                            jsx("input", { type: "text", role: "combobox", disabled: this.props.disabled, placeholder: getSelectedOptionMap(this.optionMaps)?.value || null, autoComplete: "off", defaultValue: this.searchString }, "input"),
                            jsx("span", { 
                                /* @ts-ignore */
                                part: part }, "span"),
                        ]) : (jsx("button", { 
                            /* @ts-ignore */
                            part: part, type: "button", role: "combobox", id: buttonId, disabled: this.props.disabled })) })] }) }));
    }
}

export { DSRSelectWrapperDropdown };
