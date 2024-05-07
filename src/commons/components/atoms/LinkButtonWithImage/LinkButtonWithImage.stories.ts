import type { Meta, StoryObj } from '@storybook/react';
import LinkButtonWithImage from './LinkButtonWithImage';
import ImageInfos from '@/commons/enums/images.gen';

const meta = {
    title: 'Commons/Atoms/LinkButtonWithImage',
    component: LinkButtonWithImage,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof LinkButtonWithImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NewTraffic: Story = {
    args: {
        label: '新しい交通ルールについて',
        imageInfo: ImageInfos.NewTraffic,
        className:"w-[480px]",
    },
};
