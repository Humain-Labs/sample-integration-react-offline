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
import { Component } from 'react';
import { minifyCss } from '../../minifyCss.mjs';
import { stripFocusAndHoverStyles } from '../../stripFocusAndHoverStyles.mjs';
import { getPaginationCss as getComponentCss$w } from '../../../../../../components/dist/styles/esm/styles-entry.mjs';
import { getTotalPages, createPaginationModel, getCurrentActivePage, ItemType } from '../../../../../../components/dist/utils/esm/utils-entry.mjs';

class DSRPagination extends Component {
    host;
    breakpointMaxNumberOfPageLinks = 7;
    navigationElement;
    render() {
        const pageTotal = getTotalPages(this.props.totalItemsCount, this.props.itemsPerPage);
        const paginationModel = createPaginationModel({
            activePage: getCurrentActivePage(this.props.activePage, pageTotal),
            pageTotal,
            pageRange: this.props.breakpointMaxNumberOfPageLinks === 7 ? 1 : 0,
            showLastPage: this.props.showLastPage,
        });
        const style = minifyCss(stripFocusAndHoverStyles(getComponentCss$w(this.props.maxNumberOfPageLinks, this.props.theme)));
        return (jsx(Fragment, { children: jsxs("template", { shadowroot: "open", shadowrootmode: "open", shadowrootdelegatesfocus: "true", children: [jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsx("nav", { role: "navigation", "aria-label": this.props.allyLabel || this.props.intl.root, children: jsx("ul", { children: paginationModel.map((pageModel) => {
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
                                    case ItemType.PREVIOUS:
                                        return (jsx("li", { children: jsx("span", { ...spanProps, "aria-label": this.props.allyLabelPrev || this.props.intl.prev, "aria-disabled": isActive ? null : 'true', children: jsx(PIcon, { name: "arrow-left", ...iconProps }) }) }, "prev"));
                                    case ItemType.ELLIPSIS:
                                        return (jsx("li", { children: jsx("span", { className: "ellipsis" }) }, "ellipsis"));
                                    case ItemType.PAGE:
                                        return (jsx("li", { children: jsx("span", { ...spanProps, tabIndex: 0, "aria-label": `${this.props.allyLabelPage || this.props.intl.page} ${value}`, "aria-current": isActive ? 'page' : null, children: value }) }, value));
                                    case ItemType.NEXT:
                                        return (jsx("li", { children: jsx("span", { ...spanProps, "aria-label": this.props.allyLabelNext || this.props.intl.next, "aria-disabled": isActive ? null : 'true', children: jsx(PIcon, { name: "arrow-right", ...iconProps }) }) }, "next"));
                                }
                            }) }) })] }) }));
    }
}

export { DSRPagination };