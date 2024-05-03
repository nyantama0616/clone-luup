import type { Meta, StoryObj } from '@storybook/react';
import DownloadApp from './DownloadApp';

const meta = {
    title: 'Commons/Organisms/DownloadApp',
    component: DownloadApp,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DownloadApp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
