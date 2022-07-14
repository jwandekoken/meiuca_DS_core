import { LitElement } from "lit";
export declare class DscButton extends LitElement {
    static styles: CSSStyleSheet;
    disabled: boolean;
    loading: boolean;
    private handleClick;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "dsc-button": DscButton;
    }
}
//# sourceMappingURL=index.d.ts.map