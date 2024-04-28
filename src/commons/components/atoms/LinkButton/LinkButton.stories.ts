import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import LinkButton from './LinkButton';

//TODO: Clickのテストを追加する

const meta = {
    title: 'Commons/Atoms/LinkButton',
    component: LinkButton,
    parameters: {
        layout: 'centered',
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/V1Jc8FtD0AhETelXn7Eahp/Clone-Luup?type=design&node-id=1-29&mode=design&t=X1yBXirXxCpGUUJg-11',
        },
    },
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof LinkButton>;

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
        width: "300px",
    },
};

export const portEstablish: Story = {
    args: {
        label: "ポート設置のご相談",
        width: "300px",
    },
};
