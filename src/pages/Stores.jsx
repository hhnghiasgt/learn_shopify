import { Box, Button, Card, Grid, InlineStack, Link, Text } from '@shopify/polaris'
import React from 'react'

export const Stores = () => {
    return (
        <Box paddingBlock={'600'} >
            <Box paddingBlock={'300'}>
                <Text as='h2' variant='headingLg' >Stores</Text>
            </Box>
            <Grid>
                <Grid.Cell columnSpan={{ sm: 6, lg: 6 }}>
                    <Card >
                        <Box style={{ display: 'flex' }} >
                            <img src="https://cdn.shopify.com/shopifycloud/partners-web-platform/partners-dashboard/507d1628bd1f3296d438.svg" alt="" />
                            <Box paddingInline={300}>
                                <InlineStack gap={300}>
                                    <Text variant='headingMd'>Build a new store</Text>
                                    <Text>Build a store for a client and transfer it for commissions. <Link url=''>Learn more</Link></Text>
                                    <Button>Create a store</Button>
                                </InlineStack>
                            </Box>
                        </Box>
                    </Card>
                </Grid.Cell>
                <Grid.Cell columnSpan={{ sm: 6, lg: 6 }}>
                    <Card >
                        <Box style={{ display: 'flex' }} >
                            <img src="https://cdn.shopify.com/shopifycloud/partners-web-platform/partners-dashboard/7d2b6fe0692f41b2a478.svg" alt="" />
                            <Box paddingInline={300}>
                                <InlineStack gap={300}>
                                    <Text variant='headingMd'>Build a new store</Text>
                                    <Text>Build a store for a client and transfer it for commissions. <Link url=''>Learn more</Link></Text>
                                    <Button>Create a store</Button>
                                </InlineStack>
                            </Box>
                        </Box>
                    </Card>
                </Grid.Cell>
            </Grid>
        </Box>
    )
}
