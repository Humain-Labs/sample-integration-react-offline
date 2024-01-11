import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { splitChildren } from '../../splitChildren.mjs';
import { Component } from 'react';
import { minifyCss } from '../../minifyCss.mjs';
import { stripFocusAndHoverStyles } from '../../stripFocusAndHoverStyles.mjs';
import { getHeadlineCss as getComponentCss$I } from '../../../../../../components/dist/styles/esm/styles-entry.mjs';
import { getHeadlineTagType } from '../../../../../../components/dist/utils/esm/utils-entry.mjs';

/** @deprecated since v3.0.0, will be removed with next major release. Please use "p-heading" instead. */
class DSRHeadline extends Component {
    host;
    render() {
        splitChildren(this.props.children);
        const alignDeprecationMap = {
            left: 'start',
            right: 'end',
        };
        const TagType = getHeadlineTagType(null, this.props.variant, this.props.tag);
        const style = minifyCss(stripFocusAndHoverStyles(getComponentCss$I(this.props.variant, (alignDeprecationMap[this.props.align] || this.props.align), this.props.color, this.props.ellipsis, this.props.theme)));
        return (jsxs(Fragment, { children: [jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsx(TagType, { className: "root", children: jsx("slot", {}) })] }), this.props.children] }));
    }
}

export { DSRHeadline };