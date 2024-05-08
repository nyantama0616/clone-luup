import type { Meta, StoryObj } from '@storybook/react';
import QuestionForMedia from './QuestionForMedia';

const meta = {
    title: 'Commons/Molecules/Forms/QuestionForMedia',
    component: QuestionForMedia,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof QuestionForMedia>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        className: "w-[960px]",
    }
};
