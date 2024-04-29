import type { Meta, StoryObj } from '@storybook/react';
import ImageSlideShow from './ImageSlideShow';
import ImageInfos from '@/commons/enums/images.gen';

const meta = {
    title: 'Commons/Molecules/ImageSlideShow',
    component: ImageSlideShow,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ImageSlideShow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Advertisement: Story = {
    args: {
        imageInfos: [
            ImageInfos.Why0,
            ImageInfos.Why1,
            ImageInfos.Why2,
        ],
        width: "500px",
        height: "400px",
    },
};
