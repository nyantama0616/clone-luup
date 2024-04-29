import type { Meta, StoryObj } from '@storybook/react';
import PortMap from './PortMap';

const meta = {
    title: 'Commons/Molecules/PortMap',
    component: PortMap,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PortMap>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Advertisement: Story = {
    args: {
        width: "500px",
        height: "400px",
    },
};
