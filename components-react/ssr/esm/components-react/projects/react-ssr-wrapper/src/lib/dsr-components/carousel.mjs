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
import '../components/icon.wrapper.mjs';
import '../components/inline-notification.wrapper.mjs';
import '../components/link.wrapper.mjs';
import { PLinkPure } from '../components/link-pure.wrapper.mjs';
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
import { getCarouselCss as getComponentCss$W } from '../../../../../../components/dist/styles/esm/styles-entry.mjs';
import { isInfinitePagination } from '../../../../../../components/dist/utils/esm/utils-entry.mjs';

class DSRCarousel extends Component {
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
        const { children, namedSlotChildren, otherChildren } = splitChildren(this.props.children);
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
        const style = minifyCss(stripFocusAndHoverStyles(getComponentCss$W(this.props.width, 
        // flip boolean values of disablePagination since it is the inverse of pagination
        this.props.disablePagination
            ? typeof this.props.disablePagination === 'object'
                ? Object.fromEntries(Object.entries(this.props.disablePagination).map(([key, value]) => [key, !value]))
                : !this.props.disablePagination
            : this.props.pagination, isInfinitePagination(this.props.amountOfPages), (alignHeaderDeprecationMap[this.props.alignHeader] || this.props.alignHeader), this.props.theme)));
        return (jsxs(Fragment, { children: [jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsxs(Fragment, { children: [jsxs("div", { className: "header", children: [this.props.heading ? jsx("h2", { id: "heading", children: this.props.heading }) : jsx("slot", { name: "heading" }), (this.props.description || namedSlotChildren.filter(({ props: { slot } }) => slot === 'description').length > 0) &&
                                            ((this.props.description && jsx("p", { children: this.props.description })) || jsx("slot", { name: "description" })), jsxs("div", { className: "nav", children: [this.props.skipLinkTarget && (jsx(PLinkPure, { href: this.props.skipLinkTarget, theme: this.props.theme, icon: "arrow-last", className: "btn skip-link", alignLabel: "left", hideLabel: true, "aria-describedby": this.props.heading ? 'heading' : null, children: "Skip carousel entries" })), (this.props.slidesPerPage === 'auto' || typeof this.props.slidesPerPage === 'object' || this.props.slidesPerPage < otherChildren.length) && [
                                                    jsx(PButtonPure, { ...btnProps, icon: "arrow-left" }),
                                                    jsx(PButtonPure, { ...btnProps, icon: "arrow-right" }),
                                                ]] })] }), jsx("div", { id: "splide", className: "splide", "aria-label": this.props.heading || namedSlotChildren.find(({ props: { slot } }) => slot === 'heading')?.props.children, children: jsx("div", { className: "splide__track", children: jsx("div", { className: "splide__list", children: otherChildren.map((_, i) => (jsx("div", { className: "splide__slide", children: jsx("slot", { name: `slide-${i}` }) }, i))) }) }) }), (this.props.disablePagination ? this.props.disablePagination !== true : this.props.pagination) && (this.props.slidesPerPage === 'auto' || typeof this.props.slidesPerPage === 'object' || this.props.slidesPerPage < otherChildren.length) && (jsx("div", { className: "pagination-container", children: jsx("div", { className: "pagination" }) }))] })] }), this.props.children] }));
    }
}

export { DSRCarousel };
