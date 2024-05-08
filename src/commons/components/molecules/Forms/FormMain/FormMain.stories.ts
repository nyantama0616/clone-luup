import type { Meta, StoryObj } from '@storybook/react';
import FormMain from './FormMain';

const meta = {
    title: 'Commons/Molecules/Forms/FormMain',
    component: FormMain,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof FormMain>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        className: "w-[960px]",
    }
};
