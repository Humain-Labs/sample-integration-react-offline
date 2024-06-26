import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { splitChildren } from '../../splitChildren.mjs';
import { Component } from 'react';
import { minifyCss } from '../../minifyCss.mjs';
import { stripFocusAndHoverStyles } from '../../stripFocusAndHoverStyles.mjs';
import { getHeadingCss as getComponentCss$J } from '../../../../../../components/dist/styles/esm/styles-entry.mjs';
import { getHeadingTagType } from '../../../../../../components/dist/utils/esm/utils-entry.mjs';

class DSRHeading extends Component {
    host;
    render() {
        splitChildren(this.props.children);
        const alignDeprecationMap = {
            left: 'start',
            right: 'end',
        };
        const TagType = getHeadingTagType(null, this.props.size, this.props.tag);
        const style = minifyCss(stripFocusAndHoverStyles(getComponentCss$J(this.props.size, (alignDeprecationMap[this.props.align] || this.props.align), this.props.color, this.props.ellipsis, this.props.theme)));
        return (jsxs(Fragment, { children: [jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsx(TagType, { className: "root", children: jsx("slot", {}) })] }), this.props.children] }));
    }
}

export { DSRHeading };
