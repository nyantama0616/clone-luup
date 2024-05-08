import type { Meta, StoryObj } from '@storybook/react';
import QuestionForPort from './QuestionForPort';

const meta = {
    title: 'Commons/Molecules/Forms/QuestionForPort',
    component: QuestionForPort,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof QuestionForPort>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        className: "w-[960px]",
    }
};
