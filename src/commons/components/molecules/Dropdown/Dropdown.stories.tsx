import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';

const meta = {
    title: 'Commons/Molecules/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OtherCountry: Story = {
    args: {
        label: 'その他の街',
        spawned: <div className="w-full h-[200px] bg-gray-200"></div>,
    },
};
