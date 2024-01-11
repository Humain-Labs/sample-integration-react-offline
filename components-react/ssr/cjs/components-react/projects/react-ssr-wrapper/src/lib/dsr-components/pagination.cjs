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
var react = require('react');
var minifyCss = require('../../minifyCss.cjs');
var stripFocusAndHoverStyles = require('../../stripFocusAndHoverStyles.cjs');
var stylesEntry = require('../../../../../../components/dist/styles/esm/styles-entry.cjs');
var utilsEntry = require('../../../../../../components/dist/utils/esm/utils-entry.cjs');

class DSRPagination extends react.Component {
    host;
    breakpointMaxNumberOfPageLinks = 7;
    navigationElement;
    render() {
        const pageTotal = utilsEntry.getTotalPages(this.props.totalItemsCount, this.props.itemsPerPage);
        const paginationModel = utilsEntry.createPaginationModel({
            activePage: utilsEntry.getCurrentActivePage(this.props.activePage, pageTotal),
            pageTotal,
            pageRange: this.props.breakpointMaxNumberOfPageLinks === 7 ? 1 : 0,
            showLastPage: this.props.showLastPage,
        });
        const style = minifyCss.minifyCss(stripFocusAndHoverStyles.stripFocusAndHoverStyles(stylesEntry.getPaginationCss(this.props.maxNumberOfPageLinks, this.props.theme)));
        return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("template", { shadowroot: "open", shadowrootmode: "open", shadowrootdelegatesfocus: "true", children: [jsxRuntime.jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsxRuntime.jsx("nav", { role: "navigation", "aria-label": this.props.allyLabel || this.props.intl.root, children: jsxRuntime.jsx("ul", { children: paginationModel.map((pageModel) => {
                                const { type, isActive, value } = pageModel;
                                const spanProps = {
                                    role: 'button',
                                    tabIndex: isActive ? 0 : null,
                                };
                                const iconProps = {
                                    theme: this.props.theme,
                                    color: isActive ? 'primary' : 'state-disabled',
                                    'aria-hidden': 'true',
                                };
                                switch (type) {
                                    case utilsEntry.ItemType.PREVIOUS:
                                        return (jsxRuntime.jsx("li", { children: jsxRuntime.jsx("span", { ...spanProps, "aria-label": this.props.allyLabelPrev || this.props.intl.prev, "aria-disabled": isActive ? null : 'true', children: jsxRuntime.jsx(icon_wrapper.PIcon, { name: "arrow-left", ...iconProps }) }) }, "prev"));
                                    case utilsEntry.ItemType.ELLIPSIS:
                                        return (jsxRuntime.jsx("li", { children: jsxRuntime.jsx("span", { className: "ellipsis" }) }, "ellipsis"));
                                    case utilsEntry.ItemType.PAGE:
                                        return (jsxRuntime.jsx("li", { children: jsxRuntime.jsx("span", { ...spanProps, tabIndex: 0, "aria-label": `${this.props.allyLabelPage || this.props.intl.page} ${value}`, "aria-current": isActive ? 'page' : null, children: value }) }, value));
                                    case utilsEntry.ItemType.NEXT:
                                        return (jsxRuntime.jsx("li", { children: jsxRuntime.jsx("span", { ...spanProps, "aria-label": this.props.allyLabelNext || this.props.intl.next, "aria-disabled": isActive ? null : 'true', children: jsxRuntime.jsx(icon_wrapper.PIcon, { name: "arrow-right", ...iconProps }) }) }, "next"));
                                }
                            }) }) })] }) }));
    }
}

exports.DSRPagination = DSRPagination;
