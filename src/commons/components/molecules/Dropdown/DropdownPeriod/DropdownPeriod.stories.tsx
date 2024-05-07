import type { Meta, StoryObj } from '@storybook/react';
import DropdownPeriod from './DropdownPeriod';

const meta = {
    title: 'Commons/Molecules/Dropdown/DropdownPeriod',
    component: DropdownPeriod,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DropdownPeriod>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
