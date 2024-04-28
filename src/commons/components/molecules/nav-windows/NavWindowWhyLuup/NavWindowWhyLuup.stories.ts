import type { Meta, StoryObj } from '@storybook/react';
import NavWindowWhyLuup from './NavWindowWhyLuup';

const meta = {
    title: 'Commons/Molecules/NavWindow/NavWindowWhyLuup',
    component: NavWindowWhyLuup,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof NavWindowWhyLuup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
