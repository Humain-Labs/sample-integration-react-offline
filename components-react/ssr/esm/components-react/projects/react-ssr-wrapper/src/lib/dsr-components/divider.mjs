import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { Component } from 'react';
import { minifyCss } from '../../minifyCss.mjs';
import { stripFocusAndHoverStyles } from '../../stripFocusAndHoverStyles.mjs';
import { getDividerCss as getComponentCss$R } from '../../../../../../components/dist/styles/esm/styles-entry.mjs';

class DSRDivider extends Component {
    host;
    render() {
        const deprecationMap = {
            'neutral-contrast-low': 'contrast-low',
            'neutral-contrast-medium': 'contrast-medium',
            'neutral-contrast-high': 'contrast-high',
        };
        const style = minifyCss(stripFocusAndHoverStyles(getComponentCss$R((deprecationMap[this.props.color] || this.props.color), this.props.orientation || this.props.direction, this.props.theme)));
        return (jsx(Fragment, { children: jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsx("hr", {})] }) }));
    }
}

export { DSRDivider };
