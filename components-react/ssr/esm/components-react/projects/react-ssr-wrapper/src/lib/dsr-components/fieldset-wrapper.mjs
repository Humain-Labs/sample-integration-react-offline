import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { splitChildren } from '../../splitChildren.mjs';
import { Component } from 'react';
import { minifyCss } from '../../minifyCss.mjs';
import { stripFocusAndHoverStyles } from '../../stripFocusAndHoverStyles.mjs';
import { getFieldsetWrapperCss as getComponentCss$Q } from '../../../../../../components/dist/styles/esm/styles-entry.mjs';
import { messageId, StateMessage } from './state-message.mjs';
import { Required } from './required.mjs';

/** @deprecated since v3.0.0, will be removed with next major release. Please use "p-fieldset" instead. */
class DSRFieldsetWrapper extends Component {
    host;
    render() {
        const { children, namedSlotChildren, otherChildren } = splitChildren(this.props.children);
        const hasMessageValue = (this.props.message || namedSlotChildren.filter(({ props: { slot } }) => slot === 'message').length > 0) && ['success', 'error'].includes(this.props.state);
        const style = minifyCss(stripFocusAndHoverStyles(getComponentCss$Q(this.props.state, this.props.labelSize, (this.props.label || namedSlotChildren.filter(({ props: { slot } }) => slot === 'label').length > 0), this.props.theme)));
        return (jsxs(Fragment, { children: [jsxs("template", { shadowroot: "open", shadowrootmode: "open", children: [jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsxs("fieldset", { "aria-describedby": hasMessageValue ? messageId : null, children: [(this.props.label || namedSlotChildren.filter(({ props: { slot } }) => slot === 'label').length > 0) && (jsxs("legend", { children: [this.props.label || jsx("slot", { name: "label" }), this.props.required && jsx(Required, {})] })), jsx("slot", {}), jsx(StateMessage, { hasMessage: (this.props.message || namedSlotChildren.filter(({ props: { slot } }) => slot === 'message').length > 0) && ['success', 'error'].includes(this.props.state), state: this.props.state, message: this.props.message, theme: this.props.theme, host: null })] })] }), this.props.children] }));
    }
}

export { DSRFieldsetWrapper };
