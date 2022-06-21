import { Story, Meta } from "@storybook/web-components";
import { Button, ButtonProps } from "./Button";

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: "onClick" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<Partial<ButtonProps>> = (args) => Button(args);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
};

Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/zSbgaFp3yAiXhUHiIArHbs/Ativo---Folha-de-Estilos-WTP?node-id=602%3A1983",
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

Secondary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/zSbgaFp3yAiXhUHiIArHbs/Ativo---Folha-de-Estilos-WTP?node-id=602%3A1983",
  },
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

Large.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/zSbgaFp3yAiXhUHiIArHbs/Ativo---Folha-de-Estilos-WTP?node-id=602%3A1983",
  },
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

Small.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/zSbgaFp3yAiXhUHiIArHbs/Ativo---Folha-de-Estilos-WTP?node-id=602%3A1983",
  },
};