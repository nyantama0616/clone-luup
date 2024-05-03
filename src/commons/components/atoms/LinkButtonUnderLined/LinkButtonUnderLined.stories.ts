import type { Meta, StoryObj } from '@storybook/react';
import LinkButtonUnderLined from './LinkButtonUnderLined';

//TODO: Clickのテストを追加する

const meta = {
    title: 'Commons/Atoms/LinkButtonUnderLined',
    component: LinkButtonUnderLined,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
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
    },
};

export const tokyo: Story = {
    args: {
        label: "東京",
    },
};
