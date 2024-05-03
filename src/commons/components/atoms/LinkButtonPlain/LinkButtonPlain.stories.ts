import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import LinkButtonPlain from './LinkButtonPlain';

//TODO: Clickのテストを追加する

const meta = {
    title: 'Commons/Atoms/LinkButtonPlain',
    component: LinkButtonPlain,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof LinkButtonPlain>;

export default meta;

type Story = StoryObj<typeof meta>;

export const News: Story = {
    args: {
        label: "News",
    },
};

export const All: Story = {
    args: {
        label: "All",
        textAlign: "left",
        className: "w-[100px]",
    },
};
