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
require('../components/icon.wrapper.cjs');
require('../components/inline-notification.wrapper.cjs');
require('../components/link.wrapper.cjs');
var linkPure_wrapper = require('../components/link-pure.wrapper.cjs');
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

class DSRCarousel extends react.Component {
    host;
    amountOfPages;
    splide;
    container;
    btnPrev;
    btnNext;
    paginationEl;
    slides = [];
    get hasNavigation() {
        return this.props.slidesPerPage === 'auto' || this.props.amountOfPages > 1;
    }
    render() {
        const { children, namedSlotChildren, otherChildren } = splitChildren.splitChildren(this.props.children);
        const alignHeaderDeprecationMap = {
            left: 'start',
        };
        const btnProps = {
            className: 'btn',
            type: 'button',
            hideLabel: true,
            theme: this.props.theme,
            // 'aria-controls': 'splide-track', // TODO: cross shadow dom? use native button tag instead of p-button-pure?
        };
        const style = minifyCss.minifyCss(stripFocusAndHoverStyles.stripFocusAndHoverStyles(stylesEntry.getCarouselCss(this.props.width, 
        // flip boolean values of disablePagination since it is the inverse of pagination
        this.props.disablePagination
            ? typeof this.props.disablePagination === 'object'
                ? Object.fromEntries(Object.entries(this.props.disablePagination).map(([key, value]) => [key, !value]))
                : !this.props.disablePagination
            : this.props.pagination, utilsEntry.isInfinitePagination(this.props.amountOfPages), (alignHeaderDeprecationMap[this.props.alignHeader] || this.props.alignHeader), this.props.theme)));
        return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsxRuntime.jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("div", { className: "header", children: [this.props.heading ? jsxRuntime.jsx("h2", { id: "heading", children: this.props.heading }) : jsxRuntime.jsx("slot", { name: "heading" }), (this.props.description || namedSlotChildren.filter(({ props: { slot } }) => slot === 'description').length > 0) &&
                                            ((this.props.description && jsxRuntime.jsx("p", { children: this.props.description })) || jsxRuntime.jsx("slot", { name: "description" })), jsxRuntime.jsxs("div", { className: "nav", children: [this.props.skipLinkTarget && (jsxRuntime.jsx(linkPure_wrapper.PLinkPure, { href: this.props.skipLinkTarget, theme: this.props.theme, icon: "arrow-last", className: "btn skip-link", alignLabel: "left", hideLabel: true, "aria-describedby": this.props.heading ? 'heading' : null, children: "Skip carousel entries" })), (this.props.slidesPerPage === 'auto' || typeof this.props.slidesPerPage === 'object' || this.props.slidesPerPage < otherChildren.length) && [
                                                    jsxRuntime.jsx(buttonPure_wrapper.PButtonPure, { ...btnProps, icon: "arrow-left" }),
                                                    jsxRuntime.jsx(buttonPure_wrapper.PButtonPure, { ...btnProps, icon: "arrow-right" }),
                                                ]] })] }), jsxRuntime.jsx("div", { id: "splide", className: "splide", "aria-label": this.props.heading || namedSlotChildren.find(({ props: { slot } }) => slot === 'heading')?.props.children, children: jsxRuntime.jsx("div", { className: "splide__track", children: jsxRuntime.jsx("div", { className: "splide__list", children: otherChildren.map((_, i) => (jsxRuntime.jsx("div", { className: "splide__slide", children: jsxRuntime.jsx("slot", { name: `slide-${i}` }) }, i))) }) }) }), (this.props.disablePagination ? this.props.disablePagination !== true : this.props.pagination) && (this.props.slidesPerPage === 'auto' || typeof this.props.slidesPerPage === 'object' || this.props.slidesPerPage < otherChildren.length) && (jsxRuntime.jsx("div", { className: "pagination-container", children: jsxRuntime.jsx("div", { className: "pagination" }) }))] })] }), this.props.children] }));
    }
}

exports.DSRCarousel = DSRCarousel;