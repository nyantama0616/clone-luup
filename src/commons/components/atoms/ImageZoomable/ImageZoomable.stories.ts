import type { Meta, StoryObj } from '@storybook/react';
import ImageZoomable from './ImageZoomable';
import ImageInfos from '@/commons/enums/images.gen';

const meta = {
    title: 'Commons/Atoms/ImageZoomable',
    component: ImageZoomable,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ImageZoomable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        imageInfo: ImageInfos.ServiceAbout,
        className: 'w-[740px] h-[450px]',
    },
};
