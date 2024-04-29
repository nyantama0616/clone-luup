import type { Meta, StoryObj } from '@storybook/react';
import LinkButtonSpawnNavWindow from './LinkButtonSpawnNavWindow';
import NavWindowService from '../nav-windows/NavWindowService/NavWindowService';
import NavWindowWhyLuup from '../nav-windows/NavWindowWhyLuup/NavWindowWhyLuup';
import NavWindowCompanyInfo from '../nav-windows/NavWindowCompanyInfo/NavWindowCompanyInfo';
import NavWindowPortMap from '../nav-windows/NavWindowPortMap/NavWindowPortMap';

const meta = {
    title: 'Commons/Molecules/LinkButtonSpawnNavWindow',
    component: LinkButtonSpawnNavWindow,
    parameters: {
        layout: 'centered',
        design: {},
        viewport: {
            defaultViewport: 'responsive',
            viewports: {
                responsive: {
                    name: 'Responsive',
                    styles: {
                        width: '100%',
                        height: '1200px', // ここで高さを設定
                    },
                },
            },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof LinkButtonSpawnNavWindow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Service: Story = {
    args: {
        label: 'サービス',
        navWindow: <NavWindowService/>,
    },
};

export const WhyLuup: Story = {
    args: {
        label: 'Why LUUP',
        navWindow: <NavWindowWhyLuup/>,
    },
}

export const CompanyInfo: Story = {
    args: {
        label: '企業情報',
        navWindow: <NavWindowCompanyInfo/>,
    },
}

export const PortMap: Story = {
    args: {
        label: 'ポートマップ',
        navWindow: <NavWindowPortMap/>
    }
}
