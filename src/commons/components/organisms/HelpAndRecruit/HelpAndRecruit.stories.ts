import type { Meta, StoryObj } from '@storybook/react';
import HelpAndRecruit from './HelpAndRecruit';

const meta = {
    title: 'Commons/Organisms/HelpAndRecruit',
    component: HelpAndRecruit,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof HelpAndRecruit>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
