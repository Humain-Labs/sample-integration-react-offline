import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { splitChildren } from '../../splitChildren.mjs';
import { Component } from 'react';
import { minifyCss } from '../../minifyCss.mjs';
import { stripFocusAndHoverStyles } from '../../stripFocusAndHoverStyles.mjs';
import { getButtonGroupCss as getComponentCss$_ } from '../../../../../../components/dist/styles/esm/styles-entry.mjs';

class DSRButtonGroup extends Component {
    host;
    render() {
        splitChildren(this.props.children);
        const style = minifyCss(stripFocusAndHoverStyles(getComponentCss$_(this.props.direction)));
        return (jsxs(Fragment, { children: [jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsx("div", { role: "group", children: jsx("slot", {}) })] }), this.props.children] }));
    }
}

export { DSRButtonGroup };
