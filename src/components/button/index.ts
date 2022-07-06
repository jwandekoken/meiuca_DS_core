import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import style from "./style.scss";

@customElement("dsc-button")
export class DscButton extends LitElement {
  // Define scoped styles right with your component, in plain CSS
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
    console.log("clicked");
  };

  // Render the UI as a function of component state
  render() {
    return html`
      <button
        class=${classMap({
          button: true,
          "button-loading": this.loading,
        })}
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
