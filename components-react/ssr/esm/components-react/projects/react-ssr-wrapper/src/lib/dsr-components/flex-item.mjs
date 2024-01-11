import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { splitChildren } from '../../splitChildren.mjs';
import { Component } from 'react';
import { minifyCss } from '../../minifyCss.mjs';
import { stripFocusAndHoverStyles } from '../../stripFocusAndHoverStyles.mjs';
import { getFlexItemCss as getComponentCss$O } from '../../../../../../components/dist/styles/esm/styles-entry.mjs';

/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Flex instead. */
class DSRFlexItem extends Component {
    host;
    render() {
        splitChildren(this.props.children);
        const style = minifyCss(stripFocusAndHoverStyles(getComponentCss$O(this.props.width, this.props.offset, this.props.alignSelf, this.props.grow, this.props.shrink, this.props.flex)));
        return (jsxs(Fragment, { children: [jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsx("slot", {})] }), this.props.children] }));
    }
}

export { DSRFlexItem };