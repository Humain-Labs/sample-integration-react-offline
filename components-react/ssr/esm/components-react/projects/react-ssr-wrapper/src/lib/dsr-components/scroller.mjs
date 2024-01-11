import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
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
import { splitChildren } from '../../splitChildren.mjs';
import { Component } from 'react';
import { minifyCss } from '../../minifyCss.mjs';
import { stripFocusAndHoverStyles } from '../../stripFocusAndHoverStyles.mjs';
import { getScrollerCss as getComponentCss$s } from '../../../../../../components/dist/styles/esm/styles-entry.mjs';
import { scrollAreaClass, parseAndGetAriaAttributes, isScrollable } from '../../../../../../components/dist/utils/esm/utils-entry.mjs';

class DSRScroller extends Component {
    host;
    isPrevHidden = true;
    isNextHidden = true;
    intersectionObserver;
    scrollAreaElement;
    render() {
        splitChildren(this.props.children);
        const deprecationMap = {
            default: 'background-base',
            surface: 'background-surface',
        };
        const renderPrevNextButton = (direction) => {
            // TODO: why not use p-button?
            return (jsx("div", { className: direction === 'next' ? 'action-next' : 'action-prev', children: jsx("button", { type: "button", tabIndex: -1, "aria-hidden": "true", "aria-label": direction, children: jsx(PIcon, { className: "icon", name: direction === 'next' ? 'arrow-head-right' : 'arrow-head-left', theme: this.props.theme }) }) }, direction));
        };
        const style = minifyCss(stripFocusAndHoverStyles(getComponentCss$s(deprecationMap[this.props.gradientColorScheme] || this.props.gradientColor, this.isNextHidden, this.isPrevHidden, this.props.scrollIndicatorPosition || this.props.alignScrollIndicator, this.props.scrollbar, this.props.theme)));
        return (jsxs(Fragment, { children: [jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsxs("div", { className: "root", children: [jsx("div", { className: scrollAreaClass, children: jsxs("div", { className: "scroll-wrapper", role: parseAndGetAriaAttributes(this.props.aria)?.role || null, tabIndex: isScrollable(this.isPrevHidden, this.isNextHidden) ? 0 : null, children: [jsx("slot", {}), jsx("div", { className: "trigger" }), jsx("div", { className: "trigger" })] }) }), ['prev', 'next'].map(renderPrevNextButton)] })] }), this.props.children] }));
    }
}

export { DSRScroller };
