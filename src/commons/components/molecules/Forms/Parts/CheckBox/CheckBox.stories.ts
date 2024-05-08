import type { Meta, StoryObj } from '@storybook/react';
import CheckBox from './CheckBox';

const meta = {
    title: 'Commons/Molecules/Forms/Parts/CheckBox',
    component: CheckBox,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CheckBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'ラベル',
        required: true,
        className: "w-[960px]",
        value: [1],
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

export const WhereKnow: Story = {
    args: {
        label: 'どこでLuupを知ったか',
        required: true,
        className: "w-[960px]",
        value: [2, 5],
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
        ],
        otherOption: {
            checked: true,
            value: "Youtubeで知った",
        }
    },
};
