import type { Meta, StoryObj } from '@storybook/react';
import NavWindowService from './NavWindowService';

const meta = {
    title: 'Commons/Molecules/NavWindow/NavWindowService',
    component: NavWindowService,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof NavWindowService>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
