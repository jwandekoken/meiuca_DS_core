import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import style from "./style.scss";

@customElement("dsc-button")
export class DscButton extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = style;

  // Declare reactive properties
  @property()
  name?: string = "World";

  // Render the UI as a function of component state
  render() {
    return html`
      <button>
        <slot></slot>
      </button>
    `;
  }
}
