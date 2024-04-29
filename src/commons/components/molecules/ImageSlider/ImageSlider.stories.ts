import type { Meta, StoryObj } from '@storybook/react';
import ImageSlider from './ImageSlider';
import ImageInfos from '@/commons/enums/images.gen';

const meta = {
    title: 'Commons/Molecules/ImageSlider',
    component: ImageSlider,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ImageSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Advertisement: Story = {
    args: {
        imageInfos: [
            ImageInfos.AdApa,
            ImageInfos.AdFamilymart,
            ImageInfos.AdJrHigashi,
        ]
    },
};
