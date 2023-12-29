import {
    Box,
    Card,
    EmptyState,
    Icon,
    InlineStack,
    Link,
    Page,
    Text,
} from "@shopify/polaris";
import { ExternalSmallMinor, CircleInformationMajor } from "@shopify/polaris-icons";

export const Referral = () => {
    return (
        <Page>
            <Box padding={500}>
                <Text variant='headingLg'>Referrals</Text>
            </Box>
            <Card>
                <EmptyState
                    heading="Manage your inventory transfers"
                    image="https://cdn.shopify.com/shopifycloud/partners/bundles/37d79fd6db6208a314fc52c28d1a2d0a5c687db82c438dbcf95833ae756fe0f0.svg"
                >
                    <Box padding={300}>
                        <Text tone="subdued">Create a new store for a merchant to earn a recurring monthly commission.</Text>
                    </Box>
                </EmptyState>
            </Card>
            <Box padding={300}>
                <InlineStack align="center">
                    <Box padding={500} background="bg-fill" borderRadius="full">
                        <InlineStack>
                            <Icon source={CircleInformationMajor} tone="success" />
                            <InlineStack gap={100}>
                                <Text>Learn more about</Text>
                                <Link removeUnderline> referral income</Link>
                                <Link>
                                    <Icon
                                        source={ExternalSmallMinor}
                                    />
                                </Link>
                            </InlineStack>
                        </InlineStack>
                    </Box>
                </InlineStack>
            </Box>
        </Page>
    )
}
