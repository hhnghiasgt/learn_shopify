import { Banner, Button, Grid, InlineGrid, Card, LegacyStack, Link, Page, Text, TextContainer, MediaCard, VideoThumbnail, Badge, Box, BlockStack } from '@shopify/polaris'
import React from 'react'
import { Space } from '../component/Space'

const POS = () => {
    return (
        <Page narrowWidth="" title="POS">
            <Box style={{ marginBottom: '30px' }}>
                <TextContainer >
                    <Banner tone='warning' icon={'none'} onDismiss={() => { }}>
                        <p>
                            <p style={{ color: 'black', fontWeight: '500' }}>Update Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quam.</p>
                            Use your finance report to get detailed information about your
                            business.
                        </p>
                        <Box style={{ textAlign: 'left', marginTop: "15px" }}>
                            <Button>Add contact infomation</Button>
                        </Box>
                    </Banner>
                </TextContainer>
            </Box>
            <LegacyStack vertical>
                <Text variant="headingLg" as="h5">
                    Shopify Point of Sale
                </Text>
            </LegacyStack>

            <Box style={{ marginTop: "30px" }}>
                <InlineGrid gap="400" columns={2}>
                    <Box>
                        <p style={{ marginBottom: "20px" }}>
                            <Text variant="headingMd" as="h6">Built for merchants selling in person and online</Text>
                        </p>
                        <p style={{ marginBottom: '10px' }}>The POS system with everything you need to sell in
                            person, backed by everthing you need to sell
                            online refer client to POS Pro and earn up to
                            $3,000 USD per referral</p>
                        <Box style={{ display: "flex", gap: '20px' }}>
                            <Button variant="primary" tone='success'>Submit POS Pro referral</Button>
                            <Link removeUnderline href="">Learn how to sell Shopify POS Pro</Link>
                        </Box>
                        <Box style={{ marginTop: '10px' }}>
                            <Text tone='subdued' >View your referral via your <Link monochrome href=''>Leads dasboard</Link></Text>
                        </Box>
                    </Box>
                    <Box>
                        <img width={'100%'} height={'auto'} src="https://mona.media/wp-content/uploads/2021/11/pos-1.png" alt="" />
                    </Box>
                </InlineGrid>
                <Space height='20px'></Space>
                <Grid>
                    <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                        <Card title="Shopify POS Maketing Toolkit" sectioned>
                            <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box>
                                    <p style={{ marginBottom: '20px' }}>View a summary of your online store’s sales.</p>
                                    <Button >Access Maketing Toolkit</Button>
                                </Box>
                                <Box style={{ marginLeft: '20px' }}>
                                    <img width={'100px'} src="https://pbs.twimg.com/profile_images/1730319820238049280/FYF6hwoK_400x400.jpg" alt="" />
                                </Box>
                            </Box>
                        </Card>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                        <Card title="Shopify POS Maketing Toolkit" sectioned>
                            <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box>
                                    <p style={{ marginBottom: '20px' }}>View a summary of your online store’s sales.</p>
                                    <Button >Access POS course</Button>
                                </Box>
                                <Box style={{ marginLeft: '20px' }}>
                                    <img width={'100px'} src="https://pbs.twimg.com/profile_images/1730319820238049280/FYF6hwoK_400x400.jpg" alt="" />
                                </Box>
                            </Box>
                        </Card>
                    </Grid.Cell>
                </Grid>
                <Space height='20px'></Space>
                <Text variant='headingLg' as='h5'>Why recommend Shopify POS</Text>
                <Space height='20px'></Space>
                <Grid>
                    <Grid.Cell columnSpan={{ sm: 12, lg: 6 }}>
                        <Box style={{ position:'relative' }}>
                            <img width={'100%'} src="https://placehold.co/400x600/png" alt="" />
                            <Box style={{ position:'absolute',top: '50px', left: '80%', background:'red', minWidth:'150px'}}>
                                <BlockStack>jebk gb</BlockStack>
                                <BlockStack>jebk gb</BlockStack>
                                <BlockStack>jebk gb</BlockStack>
                            </Box>
                        </Box>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{ sm: 12, lg: 6 }}>
                        ttt
                    </Grid.Cell>
                </Grid>
                <Grid columns='8fr 1fr'>
                    <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
                        <Box>
                            <img width={'120px'} src="https://www.caorda.com/wp-content/uploads/2023/05/Shopify_logo_2018.svg.png" alt="" />
                            <p style={{ padding: "10px 0px" }}>+350 revemue <br /> increase</p>
                            <Link removeUnderline href="">Read more</Link>
                        </Box>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
                        <Box>
                            <img width={'120px'} src="https://www.caorda.com/wp-content/uploads/2023/05/Shopify_logo_2018.svg.png" alt="" />
                            <p style={{ padding: "10px 0px" }}>+350 revemue <br /> increase</p>
                            <Link removeUnderline href="">Read more</Link>
                        </Box>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
                        <Box>
                            <img width={'120px'} src="https://www.caorda.com/wp-content/uploads/2023/05/Shopify_logo_2018.svg.png" alt="" />
                            <p style={{ padding: "10px 0px" }}>+350 revemue <br /> increase</p>
                            <Link removeUnderline href="">Read more</Link>
                        </Box>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
                        <Box>
                            <img width={'120px'} height={'auto'} src="https://www.caorda.com/wp-content/uploads/2023/05/Shopify_logo_2018.svg.png" alt="" />
                            <p style={{ padding: "10px 0px" }}>+350 revemue <br /> increase</p>
                            <Link removeUnderline href="">Read more</Link>
                        </Box>
                    </Grid.Cell>
                </Grid>
                <p style={{ height: '50px' }}></p>
                <Text variant='headingLg' as='h5'>Selling Shopify POS</Text>
                <p style={{ height: '20px' }}></p>

                <InlineGrid gap="400" columns={2}>
                    <Box>
                        <p style={{ marginBottom: "10px" }}>
                            <Text variant="headingMd" as="h6">How to sell Shopify POS</Text>
                        </p>
                        <p style={{ marginBottom: '5px' }}>The POS system with everything you need to sell in
                            person, backed by everthing you need to sell
                            online refer client to POS Pro and earn up to
                            $3,000 USD per referral</p>
                            <Space height='30px'></Space>
                        <p style={{ marginBottom: "10px" }}>
                            <Text variant="headingMd" as="h6">How to sell Shopify POS</Text>
                        </p>
                        <p style={{ marginBottom: '5px' }}>The POS system with everything you need to sell in
                            person, backed by everthing you need to sell
                            online refer client to POS Pro and earn up to
                            $3,000 USD per referral</p>
                        <Link removeUnderline href="">Access to the toolkit</Link>

                    </Box>
                    <Box>
                        <VideoThumbnail
                            videoLength={80}
                            thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                            onClick={() => console.log('clicked')}
                        />
                    </Box>
                </InlineGrid>
    
                <InlineGrid gap="400" columns={1}>
                    <Box style={{ display: 'flex', justifyContent: 'center' }}>
                        <Box style={{ width: '80%', margin:"50px 0px" }}>
                            <Card>
                                <Box style={{ margin: "50px 0px", textAlign: 'center' }}>
                                    <Text alignment='center' variant='headingMd' as='h5'>Get $500 USD to $3,000 USD per POS <Badge tone="attention">PRO</Badge> referral</Text>
                                    <p style={{padding:'15px 0px'}}>We will even pitch POS Pro for you Just ask for sales assistance in the lead form </p>
                                    <Button variant="primary" tone='success'>Submit POS Pro referral</Button>
                                    <Box style={{paddingTop:'15px', display:'flex', justifyContent:'center'}}>
                                        <Link monochrome href="">Promotion term here. </Link> <p> Offer available in select countries</p>
                                    </Box>
                                </Box>
                            </Card>
                        </Box>
                    </Box>
                </InlineGrid>
            </Box>
        </Page>
    )
}

export default POS