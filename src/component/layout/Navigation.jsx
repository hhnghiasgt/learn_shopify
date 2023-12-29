import { Box, Navigation as NavigationA, Text } from '@shopify/polaris';
import {
    HomeMinor,
    OrdersMinor,
} from '@shopify/polaris-icons';
import React from 'react';
import { PATH } from '../../utils/path';
import { useLocation } from 'react-router-dom';

export function Navigation() {
    const location = useLocation(); // Sử dụng hook useLocation để lấy thông tin về địa chỉ URL hiện tại
    // Hàm kiểm tra xem một mục có được chọn hay không
    const isItemSelected = (url) => {
        return location.pathname.includes(url);
    };
    return (
        <NavigationA location="/">
            <NavigationA.Section
                items={[
                    {
                        url: '/ ',
                        excludePaths: ['#'],
                        label: 'Home',
                        icon: HomeMinor,
                        selected: location.pathname === '/',
                    },
                    {
                        url: PATH.STORES,
                        excludePaths: ['#'],
                        label: 'Stores',
                        icon: OrdersMinor,
                        selected: isItemSelected(PATH.STORES),
                    },
                    {
                        url: PATH.POS,
                        excludePaths: ['#'],
                        label: 'Shopify POS',
                        icon: OrdersMinor,
                        selected: isItemSelected(PATH.POS),
                    },
                    {
                        url: PATH.REFERRAL,
                        excludePaths: ['#'],
                        label: 'Referral',
                        icon: OrdersMinor,
                        showVerticalLine: true,
                        selected: isItemSelected(PATH.REFERRAL),
                        subNavigationItems: [
                            {
                                url: PATH.LEADS,
                                excludePaths: ['#'],
                                label: 'Leads',
                            },
                            {
                                url: PATH.REFERRAL,
                                excludePaths: ['#'],
                                label: 'Referrals history',
                            },
                        ],
                    },
                    {
                        url: PATH.ALL_APP,
                        excludePaths: ['#'],
                        label: 'Apps',
                        icon: OrdersMinor,
                        showVerticalLine: true,
                        selected: isItemSelected(PATH.ALL_APP),
                        subNavigationItems: [
                            {
                                url: PATH.ALL_APP,
                                excludePaths: ['#'],
                                label: 'All apps',
                            },
                            {
                                url: PATH.APP_ADS,
                                excludePaths: ['#'],
                                label: 'App ads',
                            },
                        ],
                    },
                    {
                        url: PATH.THEME,
                        excludePaths: ['#'],
                        label: 'Theme',
                        icon: OrdersMinor,
                        selected: isItemSelected(PATH.THEME),
                    },
                ]}
            />
            <Box paddingInlineStart={500} paddingBlockStart={300}>
                <Text tone='subdued'>Resources</Text>
            </Box>
            <NavigationA.Section
                items={[
                    {
                        url: PATH.RESOURCES,
                        excludePaths: ['#'],
                        label: 'Partner docs',
                        icon: OrdersMinor,
                        selected: isItemSelected(PATH.RESOURCES),
                    },
                    {
                        url: PATH.SUPPORT,
                        excludePaths: ['#'],
                        label: 'Support',
                        icon: OrdersMinor,
                        selected: isItemSelected(PATH.SUPPORT),
                    },
                ]}
            />
            <Box paddingInlineStart={500} paddingBlockStart={300}>
                <Text tone='subdued'>Admin</Text>
            </Box>
            <NavigationA.Section
                items={[
                    {
                        url: PATH.PAYOUT,
                        excludePaths: ['#'],
                        label: 'Payouts',
                        icon: OrdersMinor,
                        selected: isItemSelected(PATH.PAYOUT),
                    },
                    {
                        url: PATH.TEAM,
                        excludePaths: ['#'],
                        label: 'Teams',
                        icon: OrdersMinor,
                        selected: isItemSelected(PATH.TEAM),
                    },
                    {
                        url: PATH.SETTING,
                        excludePaths: ['#'],
                        label: 'Setting',
                        icon: OrdersMinor,
                        selected: isItemSelected(PATH.SETTING),
                    },
                ]}
            />
        </NavigationA>
    );
}