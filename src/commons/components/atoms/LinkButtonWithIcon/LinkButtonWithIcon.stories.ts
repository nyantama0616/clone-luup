import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import LinkButtonWithIcon from './LinkButtonWithIcon';

//TODO: Clickのテストを追加する

const meta = {
    title: 'Commons/Atoms/LinkButtonWithIcon',
    component: LinkButtonWithIcon,
    parameters: {
        layout: 'centered',
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/V1Jc8FtD0AhETelXn7Eahp/Clone-Luup?type=design&node-id=1-29&mode=design&t=X1yBXirXxCpGUUJg-11',
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof LinkButtonWithIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Push",
    },
};

export const NewTrafic: Story = {
    args: {
        label: "新しい交通ルールをチェック",
    },
};

export const portEstablish: Story = {
    args: {
        label: "ポート設置のご相談",
    },
};
