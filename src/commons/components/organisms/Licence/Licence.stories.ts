import type { Meta, StoryObj } from '@storybook/react';
import Licence from './Licence';

const meta = {
    title: 'Commons/Organisms/Licence',
    component: Licence,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Licence>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
