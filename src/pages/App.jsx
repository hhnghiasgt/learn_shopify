import {
    Box,
    Button,
    EmptyState,
    FooterHelp,
    Link,
    Page,
    Text,
} from "@shopify/polaris";

export const App = () => {
    return (
        <Page title="App">
            <EmptyState
                heading="Build for 1,000,000+ Shopify merchants"
                image="https://cdn.shopify.com/shopifycloud/partners-web-platform/partners-dashboard/bd77782481186b50c3a8.svg"
            >
                <Box padding={300}>
                    <Text tone="subdued"><Link removeUnderline>Explore the extensive Shopify API</Link> and create your first app.</Text>
                </Box>
                <Button tone="success" variant="primary">Create App</Button>
                <FooterHelp>
                    Learn more about{' '}
                    <Link url="https://help.shopify.com/manual/orders/fulfill-orders">
                        building Shopify apps
                    </Link>
                </FooterHelp>
            </EmptyState>
        </Page>
    )
}
