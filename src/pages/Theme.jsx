import {
    Button,
    Grid,
    Link,
    Page,
    Text,
    Box,
    BlockStack,
    Icon,
    InlineStack,
    List,
} from "@shopify/polaris";
import {
    ExternalSmallMinor
} from "@shopify/polaris-icons";

export const Theme = () => {
    return (
        <Page>
            <InlineStack align="space-between">
                <Box>
                    <Box paddingBlockEnd={300}>
                        <Text variant="headingLg">
                            Build themes for the Shopify Theme Store
                        </Text>
                    </Box>
                    <Text>Help power millions of merchant businesses by developing themes that drive conversions and build brands.</Text>
                </Box>
                <Box>
                    <Button tone="success" variant="primary">Submit a theme</Button>
                </Box>
            </InlineStack>
            <Box paddingBlockStart={"1000"}>
                <Box padding={"500"} background="bg-fill" shadow="200" borderRadius="100">
                    <InlineStack align="space-between">
                        <Box>
                            <Box paddingBlockEnd={300}>
                                <Text variant="headingMd">Build and sell your theme on the leading commerce platform</Text>
                            </Box>
                            <List type="bullet" gap="loose">
                                <List.Item>Develop powerful themes for a specific commerce niche—from food to fashion</List.Item>
                                <List.Item>Streamline your workflow with the new Online Store and tooling, like the Shopify Github integration</List.Item>
                                <List.Item>
                                    <InlineStack >Showcase your theme to a built-in market with millions of merchants on the
                                        <Link removeUnderline> Shopify Theme Store</Link><Link><Icon source={ExternalSmallMinor} /></Link>
                                    </InlineStack>
                                </List.Item>
                            </List>
                        </Box>
                        <Box>
                            <img src="https://partners.shopify.com/cdn/shopifycloud/partners/assets/admin/empty-states-fresh/partners-themes-3d0c7d80f164ca2594588ffb535a457aeac384b15f11e39179ae99c2674ada10.svg" alt="" />
                        </Box>
                    </InlineStack>
                </Box>
            </Box>
            <Box paddingBlockStart={"500"}>
                <Box background="bg-fill" shadow="200" borderRadius="100">
                    <Box padding={"500"}>
                        <Box paddingBlockEnd={300}>
                            <Text variant="headingMd">
                                Move fast with smart tooling
                            </Text>
                        </Box>
                        <Grid >
                            <Grid.Cell columnSpan={{ sm: 4 }}>
                                <InlineStack>
                                    <Link removeUnderline>View all courses</Link>
                                    <Link>
                                        <Icon
                                            source={ExternalSmallMinor}
                                        />
                                    </Link>
                                </InlineStack>
                                <Text>Optimize themes and avoid bugs with Theme Check, Lighthouse CI, and Shopify Theme Inspector.</Text>
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{ sm: 4 }}>
                                <InlineStack>
                                    <Link removeUnderline>View all courses</Link>
                                    <Link>
                                        <Icon
                                            source={ExternalSmallMinor}
                                        />
                                    </Link>
                                </InlineStack>
                                <Text>Optimize themes and avoid bugs with Theme Check, Lighthouse CI, and Shopify Theme Inspector.</Text>
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{ sm: 4 }}>
                                <InlineStack>
                                    <Link removeUnderline>View all courses</Link>
                                    <Link>
                                        <Icon
                                            source={ExternalSmallMinor}
                                        />
                                    </Link>
                                </InlineStack>
                                <Text>Optimize themes and avoid bugs with Theme Check, Lighthouse CI, and Shopify Theme Inspector.</Text>
                            </Grid.Cell>
                        </Grid>
                    </Box>
                    <Box padding={"500"} borderBlockStartWidth="0165" borderColor="border">
                        <InlineStack>
                            <Link removeUnderline>Before you build, review the Shopify Theme Store Requirements. </Link>
                            <Link>
                                <Icon
                                    source={ExternalSmallMinor}
                                />
                            </Link>
                        </InlineStack>
                    </Box>
                </Box>
            </Box>
            <Box paddingBlockStart={"500"}>
                <Box padding={500} background="bg-fill" shadow="200" borderRadius="100">
                    <BlockStack gap={300}>
                        <Box paddingBlockEnd={200}>
                            <Text variant="headingMd">
                                Move fast with smart tooling
                            </Text>
                        </Box>
                        <InlineStack>
                            <Text>The Shopify Theme Store is now accepting theme submissions for review. Themes on the Shopify Theme Store can’t be sold on any other marketplace. </Text>
                            <Link removeUnderline>Before you build, review the Shopify Theme Store Requirements. </Link>
                            <Link>
                                <Icon
                                    source={ExternalSmallMinor}
                                />
                            </Link>
                        </InlineStack>
                        <List type="bullet" gap="loose">
                            <List.Item>Develop powerful themes for a specific commerce niche—from food to fashion</List.Item>
                            <List.Item>Streamline your workflow with the new Online Store and tooling, like the Shopify Github integration</List.Item>
                            <List.Item>Streamline your workflow with the new Online Store and tooling, like the Shopify Github integration</List.Item>
                        </List>
                        <Box>
                            <Button variant="primary" tone="success">Submit a theme</Button>
                        </Box>
                    </BlockStack>
                </Box>
            </Box>
        </Page>
    )
}
