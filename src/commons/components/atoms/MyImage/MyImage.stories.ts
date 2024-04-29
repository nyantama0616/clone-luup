import type { Meta, StoryObj } from '@storybook/react';
import MyImage from './MyImage';
import ImageInfos from '@/commons/enums/images.gen';

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
        info: ImageInfos.Logo,
    },
};

export const Why0: Story = {
    args: {
        info: ImageInfos.Why0,
    },
};

export const Familymart: Story = {
    args: {
        info: ImageInfos.AdFamilymart,
    },
};
