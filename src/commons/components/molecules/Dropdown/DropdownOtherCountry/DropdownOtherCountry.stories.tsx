import type { Meta, StoryObj } from '@storybook/react';
import DropdownOtherCountry from './DropdownOtherCountry';

const meta = {
    title: 'Commons/Molecules/Dropdown/DropdownOtherCountry',
    component: DropdownOtherCountry,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DropdownOtherCountry>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
