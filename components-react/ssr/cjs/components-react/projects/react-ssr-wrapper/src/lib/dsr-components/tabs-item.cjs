'use strict';

var jsxRuntime = require('react/jsx-runtime');
var splitChildren = require('../../splitChildren.cjs');
var react = require('react');
var minifyCss = require('../../minifyCss.cjs');
var stripFocusAndHoverStyles = require('../../stripFocusAndHoverStyles.cjs');
var stylesEntry = require('../../../../../../components/dist/styles/esm/styles-entry.cjs');

class DSRTabsItem extends react.Component {
    host;
    render() {
        splitChildren.splitChildren(this.props.children);
        const style = minifyCss.minifyCss(stripFocusAndHoverStyles.stripFocusAndHoverStyles(stylesEntry.getTabsItemCss(this.props.theme || 'light' // default as fallback
        )));
        return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsxRuntime.jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsxRuntime.jsx("slot", {})] }), this.props.children] }));
    }
}

exports.DSRTabsItem = DSRTabsItem;