import type { Meta, StoryObj } from '@storybook/react';
import SelectBox from './RadioButton';

const meta = {
    title: 'Commons/Molecules/Forms/RadioButton',
    component: SelectBox,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SelectBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'ラベル',
        required: true,
        className: "w-[960px]",
        value: 1,
        options: [
            {
                id: 1,
                label: "選択肢1",
                value: 1,
            },
            {
                id: 2,
                label: "選択肢2",
                value: 2,
            },
            {
                id: 3,
                label: "選択肢3",
                value: 3,
            }
        ],
    },
};

export const KindOfQuestion: Story = {
    args: {
        label: 'お問い合わせの種類',
        required: true,
        className: "w-[960px]",
        value: 3,
        options: [
            {
                id: 1,
                label: "アプリや車両などサービスについて",
                value: 1,
            },
            {
                id: 2,
                label: "自治体・施設の方向け",
                value: 2,
            },
            {
                id: 3,
                label: "報道・メディアの方向け",
                value: 3,
            },
            {
                id: 4,
                label: "ポート設置のご相談",
                value: 4,
            },
            {
                id: 5,
                label: "その他",
                value: 5,
            },
        ],
    },
};
