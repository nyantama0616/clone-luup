import type { Meta, StoryObj } from '@storybook/react';
import Advertise from './Advertise';

const meta = {
    title: 'Commons/Organisms/Advertise',
    component: Advertise,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Advertise>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
