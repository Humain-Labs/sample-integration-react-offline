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
var tabsBar_wrapper = require('../components/tabs-bar.wrapper.cjs');
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

class DSRTabs extends react.Component {
    host;
    tabsItemElements = [];
    render() {
        const { children, namedSlotChildren, otherChildren } = splitChildren.splitChildren(this.props.children);
        const manipulatedChildren = children.map((child, i) => typeof child === 'object' && 'props' in child && otherChildren.includes(child)
            ? { ...child, props: { ...child.props, theme: this.props.theme, hidden: this.props.activeTabIndex !== i ? true : null } }
            : child);
        const style = minifyCss.minifyCss(stripFocusAndHoverStyles.stripFocusAndHoverStyles(stylesEntry.getTabsCss()));
        return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsxRuntime.jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(tabsBar_wrapper.PTabsBar, { className: "root", size: this.props.size, weight: this.props.weight, theme: this.props.theme, gradientColorScheme: this.props.gradientColorScheme, gradientColor: this.props.gradientColor, activeTabIndex: this.props.activeTabIndex, children: otherChildren.map((tab, index) => (jsxRuntime.jsx("button", { type: "button", children: typeof tab === 'object' && 'props' in tab && tab.props.label }, index))) }), jsxRuntime.jsx("slot", {})] })] }), manipulatedChildren] }));
    }
}

exports.DSRTabs = DSRTabs;
