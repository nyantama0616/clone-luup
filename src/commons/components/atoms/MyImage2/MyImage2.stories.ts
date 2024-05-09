import type { Meta, StoryObj } from '@storybook/react';
import ImageInfos from '@/commons/enums/images.gen';
import MyImage2 from './MyImage2';

const meta = {
    title: 'Commons/Atoms/MyImage2',
    component: MyImage2,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MyImage2>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        imageInfo: ImageInfos.FirstView.changeWidth(1620),
        // imageInfo: ImageInfos.ServiceAbout,
        className: 'w-[1620px] h-[420px]',
    }
};
