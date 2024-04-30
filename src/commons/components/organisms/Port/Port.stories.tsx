import type { Meta, StoryObj } from '@storybook/react';
import Port from './Port';

const meta = {
    title: 'Commons/Organisms/Port',
    component: Port,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Port>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
