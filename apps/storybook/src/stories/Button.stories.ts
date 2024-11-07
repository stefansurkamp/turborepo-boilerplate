import type { Meta, StoryObj } from "@storybook/react";
import "@rms/ui/styles.css";
import { Button } from "@rms/ui/button";

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "I am a primary button.",
  },
};
