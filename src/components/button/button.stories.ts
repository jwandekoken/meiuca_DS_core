import { html } from "lit";
import "./index";

export default {
  title: "Components/Button",
};

export const Button = ({ label, disabled, loading }) => {
  return html`
    <dsc-button ?disabled="${disabled}" ?loading="${loading}">
      ${label}
    </dsc-button>
  `;
};

Button.args = {
  label: "Button Primary",
  disabled: false,
  loading: false,
};
