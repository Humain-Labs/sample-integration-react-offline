import { Component } from 'react';
export declare class DSRMultiSelect extends Component<any> {
    host: HTMLElement;
    private isOpen;
    private srHighlightedOptionText;
    private hasFilterResults;
    private nativeSelect;
    private multiSelectOptions;
    private inputContainer;
    private inputElement;
    private listElement;
    private form;
    private isWithinForm;
    private preventOptionUpdate;
    private get currentValue();
    render(): JSX.Element;
}
