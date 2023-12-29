import {
    Box,
    Button,
    EmptyState,
    Icon,
    InlineStack,
    Link,
    Page,
    Text,
} from "@shopify/polaris";
import { CircleInformationMajor } from "@shopify/polaris-icons";

export const AppAds = () => {
    return (
        <Page title="App">
            <EmptyState
                heading="Get more eyes on your apps"
                image="https://cdn.shopify.com/shopifycloud/partners/bundles/19342315d8829c7f61fa89b7efa31ada518bca9144a7dc844fa3fe4cbefc6850.svg"
            >
                <Box padding={300}>
                    <Text tone="subdued">Reach more merchants and increase your installs with ads on the Shopify App Store.  <Link removeUnderline>List your app</Link>with Shopify to create an ad.</Text>
                </Box>
                <Button tone="success" variant="primary">Create App</Button>
                <InlineStack align="center">
                    <Box paddingBlockStart={"3200"}>
                        <InlineStack>
                            <Icon source={CircleInformationMajor} tone="success" />
                            <Text>
                                Learn more about <Link removeUnderline>Shopify POS</Link>
                            </Text>
                        </InlineStack>
                    </Box>
                </InlineStack>
            </EmptyState>
        </Page>
    )
}
