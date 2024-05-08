import type { Meta, StoryObj } from '@storybook/react';
import TextField from './TextField';

const meta = {
    title: 'Commons/Molecules/Forms/TextField',
    component: TextField,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'ラベル',
        required: true,
        placeholder: "プレースホルダー",
        className: "w-[960px]",
    }
};

export const Email: Story = {
    args: {
        label: 'メールアドレス',
        required: true,
        placeholder: "info@luup.sc",
        className: "w-[960px]",
    }
};

export const Name: Story = {
    args: {
        label: 'お名前',
        required: true,
        placeholder: "山田太郎",
        value: "パンダマン",
        className: "w-[960px]",
    }
};
