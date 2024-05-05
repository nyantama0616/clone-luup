import type { Meta, StoryObj } from '@storybook/react';
import LuupBorder from './LuupBorder';

const meta = {
    title: 'Commons/Atoms/LuupBorder',
    component: LuupBorder,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof LuupBorder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
