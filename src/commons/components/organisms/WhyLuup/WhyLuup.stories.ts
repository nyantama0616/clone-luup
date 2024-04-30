import type { Meta, StoryObj } from '@storybook/react';
import WhyLuup from './WhyLuup';

const meta = {
    title: 'Commons/Organisms/WhyLuup',
    component: WhyLuup,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof WhyLuup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
