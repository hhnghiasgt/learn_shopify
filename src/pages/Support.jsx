import { BlockStack, Box, Button, Card, InlineGrid, Link, Page, Text } from '@shopify/polaris'
import React from 'react'

export const Support = () => {
    return (
        <Page title='Support'>
            <InlineGrid columns={'1fr 2fr'} gap={300}>
                <BlockStack gap={500}>
                    <Box>
                        <Text variant='headingMd'>Partner support</Text>
                        <Text tone='subdued'>Our <Link removeUnderline>Help Center, Shopify Community forums,</Link> and
                            <Link removeUnderline>Shopify Partner blog</Link> have answers to commonly asked questions. For additional help,
                            contact our support team.</Text>
                    </Box>
                    <Box>
                        <Text variant='headingMd'>Partner support</Text>
                        <Text tone='subdued'>Our <Link removeUnderline>Help Center, Shopify Community forums,</Link> and
                            <Link removeUnderline>Shopify Partner blog</Link> have answers to commonly asked questions. For additional help,
                            contact our support team.</Text>
                    </Box>
                </BlockStack>
                <Box>
                    <Card>
                        <BlockStack gap={300}>
                            <Text>Support is available 24 hours a day</Text>
                            <Box>
                                <Button tone='success' variant='primary'>Contact Partner Support</Button>
                            </Box>
                        </BlockStack>
                    </Card>
                </Box>
            </InlineGrid>
        </Page>
    )
}
