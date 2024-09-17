import Button from ".";

export default {
  title: "components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The children of the Button",
      control: {
        type: "text",
      },
    },
  },
};

export const ButtonOne = {
  args: {
    children: "These are the Button One children",
  },
};

export const ButtonTwo = {
  args: {
    children: "These are the Button Two children",
  },
};
