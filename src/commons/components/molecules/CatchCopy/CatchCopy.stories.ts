import type { Meta, StoryObj } from '@storybook/react';
import CatchCopy from './CatchCopy';
import ImageInfos from '@/commons/enums/images.gen';

const meta = {
    title: 'Commons/Molecules/CatchCopy',
    component: CatchCopy,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CatchCopy>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        
    },
};
