import type { Meta, StoryObj } from '@storybook/react';
import LinkButtonImage from './LinkButtonImage';
import ImageInfos from '@/commons/enums/images.gen';

const meta = {
    title: 'Commons/Atoms/LinkButtonImage',
    component: LinkButtonImage,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof LinkButtonImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AppStore: Story = {
    args: {
        imageInfo: ImageInfos.AppStore,
    },
};

export const GooglePlay: Story = {
    args: {
        imageInfo: ImageInfos.GooglePlay,
    },
};
