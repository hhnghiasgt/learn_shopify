import { ActionList, BlockStack, Box, Button, Card, Collapsible, Divider, EmptyState, Grid, Icon, InlineGrid, InlineStack, Link, Page, Popover, ProgressBar, Text } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'
import {
    CaretDownMinor, MobileHorizontalDotsMajor, CaretUpMinor, ExternalSmallMinor
} from '@shopify/polaris-icons';

export const Home = () => {
    const [open, setOpen] = useState(true);

    const handleToggle = useCallback(() => setOpen((open) => !open), []);

    const [popoverActive, setPopoverActive] = useState(false);

    const togglePopoverActive = useCallback(
        () => setPopoverActive((popoverActive) => !popoverActive),
        [],
    );

    const activator = (
        <Box paddingInlineEnd={300}>
            <Button
                onClick={togglePopoverActive}
                variant='monochromePlain'
                size='large'
                pressed icon={MobileHorizontalDotsMajor} >
            </Button>
        </Box>
    );
    return (
        <Page>
            <Box background='bg-fill' borderRadius='300'>
                <Box padding={300}>
                    <InlineStack align='space-between'>
                        <Box>
                            <Text variant='headingMd'>Get started</Text>
                        </Box>
                        <Box className="icon_tick" style={{ display: 'flex' }}>
                            <Popover
                                active={popoverActive}
                                activator={activator}
                                autofocusTarget="first-node"
                                onClose={togglePopoverActive}
                            >
                                <ActionList
                                    actionRole="menuitem"
                                    items={[{ content: 'Import' }, { content: 'Export' }]}
                                />
                            </Popover>
                            <Button
                                onClick={handleToggle}
                                ariaExpanded={open}
                                ariaControls="basic-collapsible"
                                icon={open ? CaretDownMinor : CaretUpMinor}
                                variant='monochromePlain'
                                size='large'
                                pressed
                            ></Button>
                        </Box>
                    </InlineStack>
                    <Box className="py-2">
                        <Text >We’ll guide you through creating your first store and setting up your partner account. Complete or dismiss this guide for additional getting started resources. You can explore on your own at any time.</Text>
                    </Box>
                    <Box paddingBlockStart={300}>
                        <InlineStack align='space-between' blockAlign='center' gap={200}>
                            <Text tone='subdued'>1 of 5 tasks completed</Text>
                            <Box style={{ width: '83%' }}>
                                <ProgressBar progress={25} size="small" tone='success' />
                            </Box>
                        </InlineStack>
                    </Box>
                </Box>
                <Collapsible
                    open={open}
                    id="basic-collapsible"
                    transition={{ duration: '200ms', timingFunction: 'ease-in-out' }}
                    expandOnPrint
                >
                    <Divider></Divider>
                    <Box padding={300}>
                        <Text>
                            Your mailing list lets you contact customers or visitors who
                            have shown an interest in your store. Reach out to them with
                            exclusive offers or updates about your products.
                            <Link url="#">Test link</Link>
                        </Text>
                    </Box>
                </Collapsible>
            </Box>
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
            <Box paddingBlock={500}>
                <Box paddingBlock={300}>
                    <Text as='h2' variant='headingLg'>Business overview</Text>
                </Box>
                <Box background='bg-fill' borderRadius='300' >
                    <InlineGrid columns={3} >
                        <Box padding={300} borderStyle='solid' borderColor='border' borderInlineEndWidth='0165'>
                            <BlockStack gap={200}>
                                <Text >Pending payout</Text>
                                <Link removeUnderline url=""><Text variant='headingLg'>$0.00 USD</Text></Link>
                                <Text tone='subdued'>$0 USD this year</Text>
                            </BlockStack>
                        </Box>
                        <Box padding={300} borderStyle='solid' borderColor='border' borderInlineEndWidth='0165'>
                            <BlockStack gap={200}>
                                <Text >Active store referrals</Text>
                                <Link removeUnderline url=""><Text variant='headingLg'>$0.00 USD</Text></Link>
                                <Text tone='subdued'>$0 stores this year</Text>
                            </BlockStack>
                        </Box>
                        <Box padding={300}>
                            <BlockStack gap={200}>
                                <Text >Lifetime leads submitted</Text>
                                <Link removeUnderline url=""><Text variant='headingLg'>$0.00 USD</Text></Link>
                                <Text tone='subdued'>0 leads this year</Text>
                            </BlockStack>
                        </Box>
                    </InlineGrid>
                </Box>
            </Box>
            <Box paddingBlock={700}>
                <Box paddingBlock={300}>
                    <Text as='h2' variant='headingLg'>Business overview</Text>
                </Box>
                <Box background='bg-fill' borderRadius='300' >
                    <EmptyState
                        heading="Earn referral income"
                        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                    >
                        <Text tone='subdued' variant='headingMd'>Earn revenue when you refer a merchant to Shopify products, including Shopify POS, Shopify Markets, and more.</Text>
                        <InlineStack align='center' gap={200}>
                            <Button tone='success' variant='primary' >
                                Submit a lead
                            </Button>
                            <InlineStack>
                                <Link >Lean more</Link>
                                <Link>
                                    <Icon
                                        source={ExternalSmallMinor}
                                    />
                                </Link>
                            </InlineStack>
                        </InlineStack>
                    </EmptyState>
                </Box>
            </Box>
            <Box paddingBlock={700}>
                <Box paddingBlock={300}>
                    <Text as='h2' variant='headingLg'>Recommended resources</Text>
                </Box>
                <Box background='bg-fill' borderRadius='300' >
                    <Box background='bg-fill' borderRadius='300' >
                        <InlineGrid columns={'3fr 2fr'} >
                            <BlockStack align='space-evenly'>
                                <BlockStack >
                                    <Box padding={500} borderStyle='solid' borderColor='border' borderBlockEndWidth='0165'>
                                        <Box style={{ display: 'flex', marginLeft: '10px' }}>
                                            <Link removeUnderline ><Text variant='headingMd' tone='caution'>Shopify Partner Blog</Text></Link>
                                            <Link >
                                                <Text tone='caution'>
                                                    <Icon
                                                        source={ExternalSmallMinor}
                                                    />
                                                </Text>
                                            </Link>
                                        </Box>
                                        <Box padding={'300'}>
                                            <Text >Stay up to date with the latest Shopify news, business tips, and more.</Text>
                                        </Box>
                                    </Box>
                                </BlockStack>
                                <BlockStack >
                                    <Box padding={500} borderStyle='solid' borderColor='border' borderBlockEndWidth='0165'>
                                        <Box style={{ display: 'flex', marginLeft: '10px' }}>
                                            <Link removeUnderline ><Text variant='headingMd' tone='caution'>Shopify Sales Resources
                                            </Text></Link>
                                            <Link >
                                                <Text tone='caution'>
                                                    <Icon
                                                        source={ExternalSmallMinor}
                                                    />
                                                </Text>
                                            </Link>
                                        </Box>
                                        <Box padding={'300'}>
                                            <Text >Stay up to date with the latest Shopify news, business tips, and more.</Text>
                                        </Box>
                                    </Box>
                                </BlockStack>
                                <BlockStack >
                                    <Box padding={500} >
                                        <Box style={{ display: 'flex', marginLeft: '10px' }}>
                                            <Link removeUnderline ><Text variant='headingMd' tone='caution'>Partner Session Webinars</Text></Link>
                                            <Link >
                                                <Text tone='caution'>
                                                    <Icon
                                                        source={ExternalSmallMinor}
                                                    />
                                                </Text>
                                            </Link>
                                        </Box>
                                        <Box padding={'300'}>
                                            <Text >Stay up to date with the latest Shopify news, business tips, and more.</Text>
                                        </Box>
                                    </Box>
                                </BlockStack>
                            </BlockStack>
                            <Box padding={300} borderStyle='solid' borderColor='border' borderInlineStartWidth='0165'>
                                <BlockStack gap={200}>
                                    <Box style={{ background: '#000', color: 'rgba(37, 232, 43, 1)', padding: '20px 30px' }}>
                                        <Text alignment='center' variant='headingLg'>Shopify Foundations Certification</Text>
                                        <Text tone='subdued'>8 course</Text>
                                    </Box>
                                    <InlineStack>
                                        <Link removeUnderline>Shopify 101</Link>
                                        <Link>
                                            <Icon
                                                source={ExternalSmallMinor}
                                            />
                                        </Link>
                                    </InlineStack>
                                    <InlineStack>
                                        <Link removeUnderline>Intro to Shopify Plus</Link>
                                        <Link>
                                            <Icon
                                                source={ExternalSmallMinor}
                                            />
                                        </Link>
                                    </InlineStack>
                                    <InlineStack>
                                        <Link removeUnderline>Intro to POS & Retail</Link>
                                        <Link>
                                            <Icon
                                                source={ExternalSmallMinor}
                                            />
                                        </Link>
                                    </InlineStack>
                                    <InlineStack>
                                        <Link removeUnderline>Intro to Cross-Border Selling</Link>
                                        <Link>
                                            <Icon
                                                source={ExternalSmallMinor}
                                            />
                                        </Link>
                                    </InlineStack>
                                    <InlineStack>
                                        <Link removeUnderline>View all courses</Link>
                                        <Link>
                                            <Icon
                                                source={ExternalSmallMinor}
                                            />
                                        </Link>
                                    </InlineStack>
                                </BlockStack>
                            </Box>
                        </InlineGrid>
                    </Box>
                </Box>
            </Box>
        </Page>
    )
}
