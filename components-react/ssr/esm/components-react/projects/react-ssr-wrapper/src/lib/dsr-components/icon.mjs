import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { Component } from 'react';
import { minifyCss } from '../../minifyCss.mjs';
import { stripFocusAndHoverStyles } from '../../stripFocusAndHoverStyles.mjs';
import { getIconCss as getComponentCss$H } from '../../../../../../components/dist/styles/esm/styles-entry.mjs';
import { buildIconUrl, parseAndGetAriaAttributes } from '../../../../../../components/dist/utils/esm/utils-entry.mjs';

class DSRIcon extends Component {
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
        const style = minifyCss(stripFocusAndHoverStyles(getComponentCss$H((deprecationMap[this.props.color] || this.props.color), this.props.size, this.props.theme)));
        return (jsx(Fragment, { children: jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsx("img", { src: buildIconUrl(this.props.source || this.props.name), width: 24, height: 24, loading: "lazy", alt: parseAndGetAriaAttributes(this.props.aria)?.['aria-label'] ?? '' })] }) }));
    }
}

export { DSRIcon };