import type { Meta, StoryObj } from '@storybook/react';
import QuestionForOther from './QuestionForOther';

const meta = {
    title: 'Commons/Molecules/Forms/QuestionForOther',
    component: QuestionForOther,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof QuestionForOther>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        className: "w-[960px]",
    }
};
