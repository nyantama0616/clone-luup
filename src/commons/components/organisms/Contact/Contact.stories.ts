import type { Meta, StoryObj } from '@storybook/react';
import Contact from './Contact';

const meta = {
    title: 'Commons/Organisms/Contact',
    component: Contact,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Contact>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
