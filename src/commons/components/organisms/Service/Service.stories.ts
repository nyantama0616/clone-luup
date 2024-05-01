import type { Meta, StoryObj } from '@storybook/react';
import Service from './Service';

const meta = {
    title: 'Commons/Organisms/Service',
    component: Service,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Service>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
