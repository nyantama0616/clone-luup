import type { Meta, StoryObj } from '@storybook/react';
import News from './News';

const meta = {
    title: 'Commons/Organisms/News',
    component: News,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof News>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
