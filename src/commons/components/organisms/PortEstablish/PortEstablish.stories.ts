import type { Meta, StoryObj } from '@storybook/react';
import PortEstablish from './PortEstablish';

const meta = {
    title: 'Commons/Organisms/PortEstablish',
    component: PortEstablish,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PortEstablish>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
