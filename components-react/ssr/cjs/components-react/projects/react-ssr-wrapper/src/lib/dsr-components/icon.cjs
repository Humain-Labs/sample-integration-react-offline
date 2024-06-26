'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var minifyCss = require('../../minifyCss.cjs');
var stripFocusAndHoverStyles = require('../../stripFocusAndHoverStyles.cjs');
var stylesEntry = require('../../../../../../components/dist/styles/esm/styles-entry.cjs');
var utilsEntry = require('../../../../../../components/dist/utils/esm/utils-entry.cjs');

class DSRIcon extends react.Component {
    host;
    render() {
        const deprecationMap = {
            brand: 'primary',
            default: 'primary',
            'neutral-contrast-low': 'contrast-low',
            'neutral-contrast-medium': 'contrast-medium',
            'neutral-contrast-high': 'contrast-high',
            'notification-neutral': 'notification-info',
        };
        const style = minifyCss.minifyCss(stripFocusAndHoverStyles.stripFocusAndHoverStyles(stylesEntry.getIconCss((deprecationMap[this.props.color] || this.props.color), this.props.size, this.props.theme)));
        return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsxRuntime.jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsxRuntime.jsx("img", { src: utilsEntry.buildIconUrl(this.props.source || this.props.name), width: 24, height: 24, loading: "lazy", alt: utilsEntry.parseAndGetAriaAttributes(this.props.aria)?.['aria-label'] ?? '' })] }) }));
    }
}

exports.DSRIcon = DSRIcon;
