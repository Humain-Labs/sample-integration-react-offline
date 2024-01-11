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
import { PScroller } from '../components/scroller.wrapper.mjs';
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
import { getTabsBarCss as getComponentCss$c } from '../../../../../../components/dist/styles/esm/styles-entry.mjs';

class DSRTabsBar extends Component {
    host;
    tabElements = [];
    internalTabIndex = this.props.activeTabIndex; // to not override and mutate external prop value
    barElement;
    scrollerElement;
    direction = 'next';
    hasPTabsParent;
    areTabsButtons;
    render() {
        const { children, namedSlotChildren, otherChildren } = splitChildren(this.props.children);
        const manipulatedChildren = children.map((child, i) => typeof child === 'object' && 'props' in child && otherChildren.includes(child)
            ? child.type === 'button'
                ? {
                    ...child,
                    props: {
                        ...child.props,
                        role: 'tab',
                        tabIndex: (this.props.activeTabIndex || 0) === i ? '0' : '-1',
                        'aria-selected': this.props.activeTabIndex === i ? 'true' : 'false',
                    },
                }
                : child.type === 'a'
                    ? {
                        ...child,
                        props: {
                            ...child.props,
                            'aria-current': this.props.activeTabIndex === i ? 'true' : 'false',
                        },
                    }
                    : child
            : child);
        const deprecationMap = {
            semibold: 'semi-bold',
        };
        const style = minifyCss(stripFocusAndHoverStyles(getComponentCss$c(this.props.size, (deprecationMap[this.props.weight] || this.props.weight), this.props.theme)));
        return (jsxs(Fragment, { children: [jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsxs(PScroller, { className: "scroller", ...(this.props.areTabsButtons && { aria: { role: 'tablist' } }), theme: this.props.theme, gradientColorScheme: this.props.gradientColorScheme, gradientColor: this.props.gradientColor, alignScrollIndicator: "top", children: [jsx("slot", {}), jsx("span", { className: "bar" })] })] }), manipulatedChildren] }));
    }
}

export { DSRTabsBar };
