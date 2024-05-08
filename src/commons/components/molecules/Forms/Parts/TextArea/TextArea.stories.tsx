import type { Meta, StoryObj } from '@storybook/react';
import TextArea from './TextArea';

const meta = {
    title: 'Commons/Molecules/Forms/Parts/TextArea',
    component: TextArea,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'ラベル',
        required: false,
        placeholder: "プレースホルダー",
        className: "w-[960px]",
    }
};

export const Question: Story = {
    args: {
        label: 'お問い合わせ内容',
        required: true,
        placeholder: "お問い合わせ内容をご記入ください。",
        className: "w-[960px]",
    }
};

export const HasValue: Story = {
    args: {
        label: 'お問い合わせ内容',
        required: true,
        placeholder: "お問い合わせ内容をご記入ください。",
        className: "w-[960px]",
        value: "お宅のクレープが不味すぎる！",
    }
};
