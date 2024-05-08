import type { Meta, StoryObj } from '@storybook/react';
import QuestionForApp from './QuestionForApp';

const meta = {
    title: 'Commons/Molecules/Forms/QuestionForApp',
    component: QuestionForApp,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof QuestionForApp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        className: "w-[960px]",
    }
};
