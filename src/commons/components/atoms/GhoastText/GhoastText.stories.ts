import type { Meta, StoryObj } from '@storybook/react';
import GhostText from './GhoastText';

//TODO: Clickのテストを追加する

const meta = {
    title: 'Commons/Atoms/GhostText',
    component: GhostText,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof GhostText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WhyLuup: Story = {
    args: {
        text: "Why LUUP",
    },
};

export const Port: Story = {
    args: {
        text: "Port",
    },
};
