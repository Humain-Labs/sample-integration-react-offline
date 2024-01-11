import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { Component } from 'react';
import { minifyCss } from '../../minifyCss.mjs';
import { stripFocusAndHoverStyles } from '../../stripFocusAndHoverStyles.mjs';
import { getMarqueCss as getComponentCss$B } from '../../../../../../components/dist/styles/esm/styles-entry.mjs';
import { getInnerManifest, buildSrcSet, buildImgSrc, parseAndGetAriaAttributes } from '../../../../../../components/dist/utils/esm/utils-entry.mjs';

/** @deprecated since v3.0.0, will be removed with next major release. Please use "p-wordmark" instead. */
class DSRMarque extends Component {
    host;
    render() {
        const innerManifest = getInnerManifest(this.props.variant, this.props.trademark);
        const mediumMedia = `(min-width: ${'1300'}px)`;
        const picture = (jsxs("picture", { children: [this.props.size === 'responsive'
                    ? [
                        jsx("source", { srcSet: buildSrcSet(innerManifest, 'medium', 'webp'), media: mediumMedia, type: "image/webp" }, "medium-webp"),
                        jsx("source", { srcSet: buildSrcSet(innerManifest, 'medium', 'png'), media: mediumMedia, type: "image/png" }, "medium-png"),
                        jsx("source", { srcSet: buildSrcSet(innerManifest, 'small', 'webp'), type: "image/webp" }, "small-webp"),
                        jsx("source", { srcSet: buildSrcSet(innerManifest, 'small', 'png'), type: "image/png" }, "small-png"),
                    ]
                    : [
                        jsx("source", { srcSet: buildSrcSet(innerManifest, this.props.size, 'webp'), type: "image/webp" }, "webp"),
                        jsx("source", { srcSet: buildSrcSet(innerManifest, this.props.size, 'png'), type: "image/png" }, "png"),
                    ], jsx("img", { src: buildImgSrc(innerManifest), alt: "Porsche" })] }));
        const style = minifyCss(stripFocusAndHoverStyles(getComponentCss$B(this.props.size)));
        return (jsx(Fragment, { children: jsxs("template", { shadowroot: "open", shadowrootmode: "open", shadowrootdelegatesfocus: "true", children: [jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsx(Fragment, { children: this.props.href === undefined ? (picture) : (jsx("a", { href: this.props.href, target: this.props.target, ...parseAndGetAriaAttributes(this.props.aria), children: picture })) })] }) }));
    }
}

export { DSRMarque };