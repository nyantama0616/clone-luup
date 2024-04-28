import type { Meta, StoryObj } from '@storybook/react';
import MyImage from './MyImage';
import ImagePaths from "@/images";

const meta = {
    title: 'Commons/Atoms/MyImage',
    component: MyImage,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MyImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        path: ImagePaths.Logo,
        width: 522,
        height: 226,
    },
};

export const Why0: Story = {
    args: {
        path: ImagePaths.Why0,
        width: 1500,
        height: 964,
    },
};
