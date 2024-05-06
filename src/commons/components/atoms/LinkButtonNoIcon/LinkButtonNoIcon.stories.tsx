import type { Meta, StoryObj } from '@storybook/react';
import LinkButtonNoIcon from './LinkButtonNoIcon';

const meta = {
    title: 'Commons/Atoms/LinkButtonNoIcon',
    component: LinkButtonNoIcon,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof LinkButtonNoIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Tokyo: Story = {
    args: {
        label: '東京',
        to: '#',
    },
};
