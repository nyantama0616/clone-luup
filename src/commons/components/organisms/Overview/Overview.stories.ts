import type { Meta, StoryObj } from '@storybook/react';
import Overview from './Overview';

const meta = {
    title: 'Commons/Organisms/Overview',
    component: Overview,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Overview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
