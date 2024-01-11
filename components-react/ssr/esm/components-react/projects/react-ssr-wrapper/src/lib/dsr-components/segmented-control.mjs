import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { splitChildren } from '../../splitChildren.mjs';
import { Component } from 'react';
import { minifyCss } from '../../minifyCss.mjs';
import { stripFocusAndHoverStyles } from '../../stripFocusAndHoverStyles.mjs';
import { getSegmentedControlCss as getComponentCss$q } from '../../../../../../components/dist/styles/esm/styles-entry.mjs';

class DSRSegmentedControl extends Component {
    host;
    render() {
        const { children, namedSlotChildren, otherChildren } = splitChildren(this.props.children);
        const manipulatedChildren = children.map((child) => typeof child === 'object' && 'props' in child && otherChildren.includes(child)
            ? { ...child, props: { ...child.props, selected: child.props?.value === this.props.value, backgroundColor: this.props.backgroundColor, theme: this.props.theme } }
            : child);
        const style = minifyCss(stripFocusAndHoverStyles(getComponentCss$q(100, this.props.columns)));
        return (jsxs(Fragment, { children: [jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsx(Fragment, { children: jsx("slot", {}) })] }), manipulatedChildren] }));
    }
}

export { DSRSegmentedControl };
