import {
    Button,
    InlineGrid,
    Link,
    Page,
    Text,
    Box,
    BlockStack,
    InlineStack,
    Divider,
    Tabs,
    Avatar,
} from "@shopify/polaris";
import { useCallback, useState } from "react";

export const Team = () => {
    const [selected, setSelected] = useState(0);

    const handleTabChange = useCallback(
        (selectedTabIndex) => setSelected(selectedTabIndex),
        [],
    );

    const tabs = [
        {
            id: 'all-customers-1',
            content: 'All',
            accessibilityLabel: 'All customers',
            panelID: 'all-customers-content-1',
            component:
                <Box>
                    <Box paddingBlock={500} paddingInline={300}>
                        <InlineStack align="space-between" >
                            <InlineStack gap={300} >
                                <Avatar customer name="Farrah" />
                                <Link removeUnderline>Hoàng Hữu Nghĩa</Link>
                            </InlineStack>
                            <Text tone="subdued"> Last login about 20 hours ago</Text>
                        </InlineStack>
                    </Box>
                    <Box padding={300} borderBlockStartWidth="0165" borderColor="border">
                        <Button>Invite owner</Button>
                    </Box>
                </Box>
        },
        {
            id: 'accepts-marketing-1',
            content: 'Accepts marketing',
            accessibilityLabel: 'All customers',
            panelID: 'accepts-marketing-content-1',
            component:
                <Box>
                    <Box paddingBlock={500} paddingInline={300}>
                        <BlockStack gap={300}>
                            <Text variant="headingMd">No owners</Text>
                            <Text>There are currently no owners</Text>
                        </BlockStack>
                    </Box>
                    <Box padding={300} borderBlockStartWidth="0165" borderColor="border">
                        <Button>Invite owner</Button>
                    </Box>
                </Box>
        }
    ];

    const [selected2, setSelected2] = useState(0);

    const handleTabChange2 = useCallback(
        (selectedTabIndex) => setSelected2(selectedTabIndex),
        [],
    );

    const tabs2 = [
        {
            id: 'all-customers-1',
            content: 'All',
            accessibilityLabel: 'All customers',
            panelID: 'all-customers-content-1',
            component:
                <Box >
                    <Box paddingBlock={500} paddingInline={300}>
                        <BlockStack gap={300}>
                            <Text variant="headingMd">No staff members</Text>
                            <Text>There are currently no owners</Text>
                        </BlockStack>
                    </Box>
                    <Box padding={300} borderBlockStartWidth="0165" borderColor="border">
                        <Button>Invite owner</Button>
                    </Box>
                </Box>
        },
        {
            id: 'accepts-marketing-1',
            content: 'Accepts marketing',
            accessibilityLabel: 'All customers',
            panelID: 'accepts-marketing-content-1',
            component:
                <Box >
                    <Box paddingBlock={500} paddingInline={300}>
                        <BlockStack gap={300}>
                            <Text variant="headingMd">No owners</Text>
                            <Text>There are currently no owners</Text>
                        </BlockStack>
                    </Box>
                    <Box padding={300} borderBlockStartWidth="0165" borderColor="border">
                        <Button>Invite staff member</Button>
                    </Box>
                </Box>
        }
    ];
    return (
        <Page title="Team">
            <InlineGrid columns={2}>
                <Box paddingInlineEnd={2000}>
                    <BlockStack gap={300}>
                        <Text variant="headingMd">Owners</Text>
                        <Text tone="subdued">Owners have permission to see and do everything. They can also add and remove other owners.</Text>
                    </BlockStack>
                </Box>
                <Box borderRadius="150" background="bg-fill" shadow="200">
                    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
                        <Box borderBlockStartWidth="0165" borderColor="border" paddingInline={300}> {tabs[selected].component} </Box>
                    </Tabs>
                </Box>
            </InlineGrid>
            <Box paddingBlock={500}>
                <Divider borderWidth="050" />
            </Box>
            <InlineGrid columns={2}>
                <Box paddingInlineEnd={2000}>
                    <BlockStack gap={300}>
                        <Text variant="headingMd">Staff members</Text>
                        <Text tone="subdued">Staff members can only see or manage sensitive business information such as financial data if you give them access.</Text>
                    </BlockStack>
                </Box>
                <Box borderRadius="150" background="bg-fill" shadow="200">
                    <Tabs tabs={tabs2} selected={selected2} onSelect={handleTabChange2}>
                        <Box borderBlockStartWidth="0165" borderColor="border" > {tabs2[selected2].component} </Box>
                    </Tabs>
                </Box>
            </InlineGrid>
        </Page>
    )
}
