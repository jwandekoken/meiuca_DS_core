import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import style from "./style.scss";

@customElement("dsc-button")
export class DscButton extends LitElement {
  static styles = style;

  @property({
    type: Boolean,
  })
  disabled = false;

  @property({
    type: Boolean,
  })
  loading = false;

  private handleClick = () => {
    this.dispatchEvent(
      new CustomEvent("dscClick", {
        bubbles: true,
        composed: true,
      })
    );
  };

  render() {
    return html`
      <button
        class=${classMap({
          button: true,
          "button--loading": this.loading,
        })}
        aria-disabled="${this.disabled}"
        aria-label="${ifDefined(this.loading ? "Loading" : undefined)}"
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsc-button": DscButton;
  }
}
