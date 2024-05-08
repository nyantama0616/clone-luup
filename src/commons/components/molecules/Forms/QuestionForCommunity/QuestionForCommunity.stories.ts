import type { Meta, StoryObj } from '@storybook/react';
import QuestionForCommunity from './QuestionForCommunity';

const meta = {
    title: 'Commons/Molecules/Forms/QuestionForCommunity',
    component: QuestionForCommunity,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof QuestionForCommunity>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        className: "w-[960px]",
    }
};
