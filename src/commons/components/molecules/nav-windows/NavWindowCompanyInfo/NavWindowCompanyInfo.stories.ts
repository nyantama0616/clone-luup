import type { Meta, StoryObj } from '@storybook/react';
import NavWindowCompanyInfo from './NavWindowCompanyInfo';

const meta = {
    title: 'Commons/Molecules/NavWindow/NavWindowCompanyInfo',
    component: NavWindowCompanyInfo,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof NavWindowCompanyInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
