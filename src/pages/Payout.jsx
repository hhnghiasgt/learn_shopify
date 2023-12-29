import {
    Box,
    EmptyState,
    Page,
    Text,
} from "@shopify/polaris";

export const Payout = () => {
    return (
        <Page>
            <EmptyState
                heading="Grow your business with Shopify"
                image="https://cdn.shopify.com/shopifycloud/partners/bundles/985e4f4c5a9c01a9b42d894b3f29f1c47e23f47e5e7ba0e72e02d231cebc5b7b.svg"
            >
                <Box>
                    <Text tone="subdued">Make money building merchant stores, referring new merchants, or selling apps and themes.</Text>
                </Box>
            </EmptyState>
        </Page>
    )
}
