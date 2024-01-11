import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { Component } from 'react';
import { minifyCss } from '../../minifyCss.mjs';
import { stripFocusAndHoverStyles } from '../../stripFocusAndHoverStyles.mjs';
import { getModelSignatureCss as getComponentCss$z } from '../../../../../../components/dist/styles/esm/styles-entry.mjs';
import { getSvgUrl, modelSignatureHeight } from '../../../../../../components/dist/utils/esm/utils-entry.mjs';

class DSRModelSignature extends Component {
    host;
    render() {
        const style = minifyCss(stripFocusAndHoverStyles(getComponentCss$z(this.props.size, this.props.color, this.props.theme)));
        return (jsx(Fragment, { children: jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsx("img", { src: getSvgUrl(this.props.model), height: modelSignatureHeight, alt: this.props.model })] }) }));
    }
}

export { DSRModelSignature };
