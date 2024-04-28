import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import LinkButtonUnderLined from './LinkButtonUnderLined';

//TODO: Clickのテストを追加する

const meta = {
    title: 'Commons/Atoms/LinkButtonUnderLined',
    component: LinkButtonUnderLined,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof LinkButtonUnderLined>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Push",
    },
};

export const whyLuup: Story = {
    args: {
        label: "Why LUUP",
        width: "220px",
    },
};

export const tokyo: Story = {
    args: {
        label: "東京",
        width: "100px",
    },
};
