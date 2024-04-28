import type { Meta, StoryObj } from '@storybook/react';
import NavWindowPortMap from './NavWindowPortMap';

const meta = {
    title: 'Commons/Molecules/NavWindow/NavWindowPortMap',
    component: NavWindowPortMap,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof NavWindowPortMap>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
