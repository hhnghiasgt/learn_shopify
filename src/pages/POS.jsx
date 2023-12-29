import {
    Button,
    Grid,
    InlineGrid,
    Card,
    Link,
    Page,
    Text,
    VideoThumbnail,
    Badge,
    Box,
    BlockStack,
    Icon,
    InlineStack,
    List,
} from "@shopify/polaris";
import {
    ChevronRightMinor,
    CircleInformationMajor,
} from "@shopify/polaris-icons";
import React from "react";

const POS = () => {
    return (
        <Page>
            <BlockStack gap={200}>
                <BlockStack>
                    <Text variant="headingLg">
                        Shopify Point of Sale
                    </Text>
                </BlockStack>
                <Box paddingBlock={300}>
                    <InlineGrid gap="400" columns={2}>
                        <Box>
                            <Box >
                                <Text variant="headingMd">
                                    Built for merchants selling in person and online
                                </Text>
                            </Box>
                            <Text >
                                The POS system with everything you need to sell in person,
                                backed by everthing you need to sell online refer client to POS
                                Pro and earn up to $3,000 USD per referral
                            </Text>
                            <Box paddingBlock={300}>
                                <InlineStack gap={300}>
                                    <Button variant="primary" tone="success">
                                        Submit POS Pro referral
                                    </Button>
                                    <Link removeUnderline href="">
                                        Learn how to sell Shopify POS Pro
                                    </Link>
                                </InlineStack>
                            </Box>
                            <Box padding={200}>
                                <Text tone="subdued">
                                    View your referral via your{" "}
                                    <Link monochrome href="">
                                        Leads dasboard
                                    </Link>
                                </Text>
                            </Box>
                        </Box>
                        <Box>
                            <img
                                width={"100%"}
                                height={"auto"}
                                src="https://cdn.shopify.com/shopifycloud/partners/bundles/25f90947092a30b5481b8893efc25a931d5d0666542f6ae7085e2603657ee0f1.svg"
                                alt=""
                            />
                        </Box>
                    </InlineGrid>
                    <Grid>
                        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                            <Card title="Shopify POS Maketing Toolkit" sectioned>
                                <InlineGrid columns={'5fr 1fr'}>
                                    <Box>
                                        <Box paddingBlockEnd={300}>
                                            <Text>
                                                Shopify POS Marketing Toolkit
                                            </Text>
                                        </Box>
                                        <Box paddingBlock={200}>
                                            <Text >
                                                Access resources to build your own Shopify POS marketing
                                                campaigns and generate referrals
                                            </Text>
                                        </Box>
                                        <Button>Access Maketing Toolkit</Button>
                                    </Box>
                                    <BlockStack align="center" >
                                        <img
                                            width={"100px"}
                                            src="https://cdn.shopify.com/shopifycloud/partners/bundles/b24e9d88ea5a75b0189874c20fc636f2ad417e08c24cd8cfea8b326b241ec583.svg"
                                            alt=""
                                        />
                                    </BlockStack>
                                </InlineGrid>
                            </Card>
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                            <Card title="Shopify POS Maketing Toolkit" sectioned>
                                <InlineGrid columns={'5fr 1fr'}>
                                    <Box>
                                        <Box paddingBlockEnd={300}>
                                            <Text>
                                                Shopify POS Course
                                            </Text>
                                        </Box>
                                        <Box paddingBlock={200}>
                                            <Text >
                                                Learn everything you need to know about Shopify POS so you
                                                can support retailers on Shopify
                                            </Text>
                                        </Box>
                                        <Button>Access POS course</Button>
                                    </Box>
                                    <BlockStack align="center" >
                                        <img
                                            width={"100px"}
                                            src="https://cdn.shopify.com/shopifycloud/partners/bundles/dfef79ddd46ada0970bb81ba34397be34d9600336f0a31b24b32379b5fd3704b.svg "
                                            alt=""
                                        />
                                    </BlockStack>
                                </InlineGrid>
                            </Card>
                        </Grid.Cell>
                    </Grid>
                    <Box paddingBlock={"800"}>
                        <Text variant="headingXl">
                            Why recommend Shopify POS
                        </Text>
                    </Box>
                    <Grid>
                        <Grid.Cell columnSpan={{ sm: 12, lg: 6 }}>
                            <Box position="relative">
                                <img
                                    width={"100%"}
                                    src="https://cdn.shopify.com/shopifycloud/partners/bundles/0bad8b38b9ea8b884c00ec0824e28aef465013aaec91ed799444b1029abcbb41.png"
                                    alt=""
                                />
                                <Box
                                    style={{
                                        position: "absolute",
                                        top: "50px",
                                        left: "60%",
                                        minWidth: "255px",
                                        display: "grid",
                                        gap: "5px",
                                    }}
                                >
                                    <BlockStack
                                        style={{
                                            background: "black",
                                            color: "#fff",
                                            height: "80px",
                                            width: "100%",
                                            padding: "10px 0px 10px 10px",
                                        }}
                                    >
                                        <img
                                            src="https://cdn.shopify.com/shopifycloud/partners/bundles/47da6fdf4dafe8b9878448479da4db8716511bdb25fe7361f92aad8f84cd9db4.png"
                                            alt=""
                                            style={{ marginRight: "5px" }}
                                        />
                                        <Box>
                                            <Text variant="bodyMd" fontWeight="400">
                                                Ibiza Platform Sneaker
                                            </Text>
                                            <Text variant="bodySm" tone="subdued">
                                                Lorem ipsum dolor sit amet.
                                            </Text>
                                            <Text variant="bodySm" tone="subdued">
                                                24 online
                                            </Text>
                                        </Box>
                                        <Box style={{ display: "contents" }}>
                                            <Icon source={ChevronRightMinor} tone="base" />
                                        </Box>
                                    </BlockStack>
                                    <BlockStack
                                        style={{
                                            background: "black",
                                            color: "#fff",
                                            height: "80px",
                                            width: "100%",
                                            padding: "10px 0px 10px 10px",
                                        }}
                                    >
                                        <img
                                            src="https://cdn.shopify.com/shopifycloud/partners/bundles/47da6fdf4dafe8b9878448479da4db8716511bdb25fe7361f92aad8f84cd9db4.png"
                                            alt=""
                                            style={{ marginRight: "5px" }}
                                        />
                                        <Box>
                                            <Text variant="bodyMd" fontWeight="400">
                                                Ibiza Platform Sneaker
                                            </Text>
                                            <Text variant="bodySm" tone="critical">
                                                Lorem ipsum dolor sit amet.
                                            </Text>
                                            <Text variant="bodySm" tone="subdued">
                                                24 online
                                            </Text>
                                        </Box>
                                        <Box style={{ display: "contents" }}>
                                            <Icon source={ChevronRightMinor} tone="base" />
                                        </Box>
                                    </BlockStack>
                                    <BlockStack
                                        style={{
                                            background: "black",
                                            color: "#fff",
                                            height: "80px",
                                            width: "100%",
                                            padding: "10px 0px 10px 10px",
                                        }}
                                    >
                                        <img
                                            src="https://cdn.shopify.com/shopifycloud/partners/bundles/47da6fdf4dafe8b9878448479da4db8716511bdb25fe7361f92aad8f84cd9db4.png"
                                            alt=""
                                            style={{ marginRight: '5px' }}
                                        />
                                        <Box>
                                            <Text variant="bodyMd" fontWeight="400">
                                                Ibiza Platform Sneaker
                                            </Text>
                                            <Text variant="bodySm" tone="subdued">
                                                Lorem ipsum dolor sit amet.
                                            </Text>
                                            <Text variant="bodySm" tone="subdued">
                                                24 online
                                            </Text>
                                        </Box>
                                        <Box style={{ display: "contents" }}>
                                            <Icon source={ChevronRightMinor} tone="base" />
                                        </Box>
                                    </BlockStack>
                                </Box>
                            </Box>
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ sm: 0, lg: 1 }}></Grid.Cell>
                        <Grid.Cell columnSpan={{ sm: 12, lg: 5 }}>
                            <Box paddingBlock={400}>
                                <BlockStack gap={400}>
                                    <Text variant="headingMd" >
                                        How to sell Shopify POS
                                    </Text>
                                    <Text>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Deleniti voluptatibus iusto asperiores. Veniam rerum nostrum
                                        recusandae. Sapiente provident laboriosam quo.
                                    </Text>
                                </BlockStack>
                            </Box>
                            <Box paddingBlock={400}>
                                <BlockStack gap={400}>
                                    <Text variant="headingMd">
                                        How to sell Shopify POS
                                    </Text>
                                    <Text>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Deleniti voluptatibus iusto asperiores. Veniam rerum nostrum
                                        recusandae. Sapiente provident laboriosam quo.
                                    </Text>
                                </BlockStack>
                            </Box>
                            <Box paddingBlock={400}>
                                <BlockStack gap={400}>
                                    <Text variant="headingMd" >
                                        How to sell Shopify POS
                                    </Text>
                                    <Text>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Deleniti voluptatibus iusto asperiores. Veniam rerum nostrum
                                        recusandae. Sapiente provident laboriosam quo.
                                    </Text>
                                </BlockStack>
                            </Box>
                        </Grid.Cell>
                    </Grid>
                    <Box paddingBlock={800}>
                        <Grid columns={4}>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
                                <Box>
                                    <img
                                        width={"120px"}
                                        style={{ maxHeight: "30px" }}
                                        src="https://cdn.shopify.com/shopifycloud/partners/bundles/38ddca7b5c116a4976467c35328c1b5db022d77f971ad3f8655fdcd96949d4c6.png"
                                        alt=""
                                    />
                                    <Text style={{ padding: "10px 0px" }}>
                                        +350 revemue <br /> increase
                                    </Text>
                                    <Link removeUnderline href="">
                                        Read more
                                    </Link>
                                </Box>
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
                                <Box>
                                    <img
                                        width={"120px"}
                                        style={{ maxHeight: "30px" }}
                                        src="https://cdn.shopify.com/shopifycloud/partners/bundles/be90f3a692097f995ea575cdb2beed73df928465d2df2119f01c6b94e58f6a19.png"
                                        alt=""
                                    />
                                    <Text style={{ padding: "10px 0px" }}>
                                        +350 revemue <br /> increase
                                    </Text>
                                    <Link removeUnderline href="">
                                        Read more
                                    </Link>
                                </Box>
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
                                <Box>
                                    <img
                                        width={"120px"}
                                        style={{ maxHeight: "30px" }}
                                        src="https://cdn.shopify.com/shopifycloud/partners/bundles/ab9d578e7902d54f80c39dd4305f232d22aea77fa1b46b2bfea6675aa254dff5.png"
                                        alt=""
                                    />
                                    <Text style={{ padding: "10px 0px" }}>
                                        +350 revemue <br /> increase
                                    </Text>
                                    <Link removeUnderline href="">
                                        Read more
                                    </Link>
                                </Box>
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
                                <Box>
                                    <img
                                        width={"120px"}
                                        style={{ maxHeight: "30px" }}
                                        src="https://cdn.shopify.com/shopifycloud/partners/bundles/be90f3a692097f995ea575cdb2beed73df928465d2df2119f01c6b94e58f6a19.png"
                                        alt=""
                                    />
                                    <Text style={{ padding: "10px 0px" }}>
                                        +350 revemue <br /> increase
                                    </Text>
                                    <Link removeUnderline href="">
                                        Read more
                                    </Link>
                                </Box>
                            </Grid.Cell>
                        </Grid>
                    </Box>
                    <Box paddingBlock={600}>
                        <Text variant="headingLg">
                            Selling Shopify POS
                        </Text>
                    </Box>
                    <InlineGrid gap="400" columns={2}>
                        <Box>
                            <BlockStack gap={400}>
                                <Text variant="headingMd">
                                    How to sell Shopify POS
                                </Text>
                                <Text>
                                    The POS system with everything you need to sell in person,
                                    backed by everthing you need to sell online refer client to
                                    POS Pro and earn up to $3,000 USD per referral
                                </Text>
                            </BlockStack>
                            <Box paddingBlock={300}>
                                <BlockStack gap={400}>
                                    <Text variant="headingMd">
                                        How to sell Shopify POS
                                    </Text>
                                    <Text>
                                        The POS system with everything you need to sell in person,
                                        backed by everthing you need to sell online refer client to
                                        POS Pro and earn up to $3,000 USD per referral
                                    </Text>
                                </BlockStack>
                            </Box>

                            <Link removeUnderline href="">
                                Access to the toolkit
                            </Link>
                        </Box>
                        <Box>
                            <VideoThumbnail
                                videoLength={80}
                                thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                            />
                        </Box>
                    </InlineGrid>

                    <InlineGrid gap="400" columns={1}>
                        <InlineStack align="center">
                            <Box style={{ width: "80%", margin: "50px 0px" }}>
                                <Card>
                                    <BlockStack>
                                        <Text alignment="center" variant="headingMd">
                                            Get $500 USD to $3,000 USD per POS{" "}
                                            <Badge tone="attention">PRO</Badge> referral
                                        </Text>
                                        <Box paddingBlock={500}>
                                            We will even pitch POS Pro for you Just ask for sales
                                            assistance in the lead form{" "}
                                        </Box>
                                        <Button variant="primary" tone="success">
                                            Submit POS Pro referral
                                        </Button>
                                        <Box
                                            style={{
                                                paddingTop: "15px",
                                                display: "flex",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Link monochrome href="">
                                                Promotion term here.{" "}
                                            </Link>{" "}
                                            <Text> Offer available in select countries</Text>
                                        </Box>
                                    </BlockStack>
                                </Card>
                            </Box>
                        </InlineStack>
                    </InlineGrid>

                    {/* handle */}
                    <Box paddingBlock={500} style={{ marginBottom: "150px" }}>
                        <Grid>
                            <Grid.Cell columnSpan={{ sm: 6, lg: 6 }}>
                                <Box style={{ position: "relative" }}>
                                    <img
                                        src="https://cdn.shopify.com/shopifycloud/partners/bundles/416f61aad5e9581bcfba07251463e0ce6b1f573ab4840184bade85eb0ba7da66.png"
                                        alt=""
                                    />
                                    <Box
                                        style={{
                                            position: "absolute",
                                            top: "75%",
                                            right: "0",
                                            display: "flex",
                                            alignItems: "flex-end",
                                            backgroundColor: "#dae6f1",
                                            padding: "20px 0px 0px 20px",
                                            borderRadius: "3px",
                                        }}
                                    >
                                        <img
                                            src="https://cdn.shopify.com/shopifycloud/partners/bundles/ab4271dd1e501f48624357110dbc21fd117da06b5ff4eb3b284ed8f7e2a8480d.svg"
                                            alt=""
                                        />
                                    </Box>
                                    <Box
                                        style={{
                                            position: "absolute",
                                            bottom: "23%",
                                            right: "7%",
                                            background: "#fff",
                                            borderRadius: "20px",
                                            padding: "20px",
                                            width: "100px",
                                            height: "100px",
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <img
                                            src="https://cdn.shopify.com/shopifycloud/partners/bundles/44e67b39e281cfd476bdb0044c40b743ceb6be3039bf77a3e364cabb9f319358.svg"
                                            alt=""
                                        />
                                    </Box>
                                </Box>
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{ sm: 6, md: 6, lg: 6 }}>
                                <BlockStack gap={800}>
                                    <Box>
                                        <Text variant="headingMd" as="h3">
                                            How to sell Shopify POS
                                        </Text>
                                        <Text>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            Deleniti voluptatibus iusto asperiores. Veniam rerum
                                            nostrum recusandae. Sapiente provident laboriosam quo.
                                        </Text>
                                        <Text>
                                            Get Shopify POS app for <Link url="">iOS</Link> or{" "}
                                            <Link url="">Android</Link>
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Text variant="headingMd" as="h3">
                                            How to sell Shopify POS
                                        </Text>
                                        <Text>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            Deleniti voluptatibus iusto asperiores. Veniam rerum
                                            nostrum recusandae. Sapiente provident laboriosam quo.
                                        </Text>
                                        <Text>
                                            Get Shopify POS app for <Link url="">iOS</Link> or{" "}
                                            <Link url="">Android</Link>
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Text variant="headingMd" as="h3">
                                            How to sell Shopify POS
                                        </Text>
                                        <Text>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            Deleniti voluptatibus iusto asperiores. Veniam rerum
                                            nostrum recusandae. Sapiente provident laboriosam quo.
                                        </Text>

                                        <Text>
                                            Get Shopify POS app for <Link url="">iOS</Link> or{" "}
                                            <Link url="">Android</Link>
                                        </Text>
                                    </Box>
                                </BlockStack>
                            </Grid.Cell>
                        </Grid>
                    </Box>

                    <Box paddingBlock={300}>
                        <BlockStack gap={300}>
                            <Text variant="headingLg" as="h1">
                                Shopify POS subscriptions
                            </Text>
                            <Text style={{ fontSize: "20px" }}>
                                Shopify POS comes with all Shopify plans. Merchants can also
                                enable the POS PRO subscriptions to access powerful feature
                                built for brick-and-mortar businesses.
                                <Link url="">Exlore all Shopify POS feature</Link>
                            </Text>
                        </BlockStack>
                    </Box>

                    <Box paddingBlock={500}>
                        <Box paddingBlock={200}>
                            <Grid>
                                <Grid.Cell columnSpan={{ sm: 6, lg: 6 }}>
                                    <Box
                                        style={{
                                            background: "#fff",
                                            padding: "20px",
                                            borderRadius: "5px",
                                        }}
                                    >
                                        <BlockStack gap={300}>
                                            <Text variant="headingLg" as="h1">
                                                Shopify POS
                                            </Text>
                                            <Text>Included with Shopify plans</Text>
                                            <List>
                                                <List.Item>Basic reporting and analytics</List.Item>
                                                <List.Item>Basic inventory management</List.Item>
                                                <List.Item>Unified customer management</List.Item>
                                            </List>
                                        </BlockStack>
                                    </Box>
                                </Grid.Cell>
                                <Grid.Cell columnSpan={{ sm: 6, lg: 6 }}>
                                    <Box
                                        style={{
                                            background: "var(--p-color-avatar-three-text-on-bg-fill)",
                                            color: "#fff",
                                            padding: "20px",
                                            borderRadius: "5px",
                                        }}
                                    >
                                        <BlockStack gap={300}>
                                            <Box>
                                                <Badge tone="attention">PRO</Badge>
                                            </Box>
                                            <Text variant="headingLg" as="h1">
                                                Shopify POS subscriptions
                                            </Text>
                                            <Text>Included with Shopify plans</Text>
                                            <List>
                                                <List.Item>
                                                    In-depth POS reporting and analytics.
                                                </List.Item>
                                                <List.Item>Advanced inventory management</List.Item>
                                                <List.Item>Unified customer management</List.Item>
                                                <List.Item>Exchanges and automatic discounts</List.Item>
                                                <List.Item>
                                                    Unlimited POS staff with custom roles
                                                </List.Item>
                                                <List.Item>Local pickup and ship-to-customer</List.Item>
                                            </List>
                                            <Text variant="headingLg">$89 USD</Text>
                                            <Text>/month per location</Text>
                                        </BlockStack>
                                    </Box>
                                </Grid.Cell>
                            </Grid>
                        </Box>
                        <Box paddingBlock={500}>
                            <BlockStack gap={300}>
                                <Text variant="headingLg">Shopify POS Guides</Text>
                                <Text>
                                    Guides to help you suport brick and mortar merchants with
                                    Shopify POS
                                </Text>
                            </BlockStack>
                        </Box>
                        <Box paddingBlock={800}>
                            <Grid>
                                <Grid.Cell columnSpan={{ sm: 4, lg: 4 }}>
                                    <Card>
                                        <BlockStack gap={200}>
                                            <Text>Shopify POS Onboading </Text>
                                            <InlineStack align="start">
                                                <img
                                                    src="https://cdn.shopify.com/shopifycloud/partners/bundles/dfef79ddd46ada0970bb81ba34397be34d9600336f0a31b24b32379b5fd3704b.svg"
                                                    alt=""
                                                    style={{
                                                        maxHeight: "'80px'",
                                                    }}
                                                />
                                            </InlineStack>
                                            <Text>Shopify POS Onboading </Text>
                                            <Link removeUnderline url="">
                                                View Guide
                                            </Link>
                                        </BlockStack>
                                    </Card>
                                </Grid.Cell>
                                <Grid.Cell columnSpan={{ sm: 4, lg: 4 }}>
                                    <Card>
                                        <BlockStack gap={200}>
                                            <Text>Shopify POS Onboading </Text>
                                            <InlineStack align="start">
                                                <img
                                                    src="https://cdn.shopify.com/shopifycloud/partners/bundles/b8c73e6e736561c01a19112a30c08aca577f06a3ae2949850844a50c4383ff00.svg"
                                                    alt=""
                                                    style={{
                                                        maxHeight: "'80px'",
                                                    }}
                                                />
                                            </InlineStack>
                                            <Text>Shopify POS Onboading </Text>
                                            <Link removeUnderline url="">
                                                View Guide
                                            </Link>
                                        </BlockStack>
                                    </Card>
                                </Grid.Cell>
                                <Grid.Cell columnSpan={{ sm: 4, lg: 4 }}>
                                    <Card>
                                        <BlockStack gap={200}>
                                            <Text>Shopify POS Onboading </Text>
                                            <InlineStack align="start">
                                                <img
                                                    src="https://cdn.shopify.com/shopifycloud/partners/bundles/048177d0da29bd1ab224e046ac63616fccb12b382e6b7dcce53949108c158a37.svg"
                                                    alt=""
                                                    style={{
                                                        maxHeight: "'80px'",
                                                    }}
                                                />
                                            </InlineStack>
                                            <Text>Shopify POS Onboading </Text>
                                            <Link removeUnderline url="">
                                                View Guide
                                            </Link>
                                        </BlockStack>
                                    </Card>
                                </Grid.Cell>
                            </Grid>
                        </Box>
                        <Box paddingBlock={500}>
                            <Card>
                                <Grid>
                                    <Grid.Cell columnSpan={{ sm: 10, lg: 10 }}>
                                        <Box style={{ display: "flex", alignItems: "center" }}>
                                            <img
                                                style={{ borderRadius: "100%", marginRight: "20px" }}
                                                width={"50px"}
                                                height={"50px"}
                                                src="https://cdn.shopify.com/shopifycloud/partners/bundles/dfd0d4b7f889aa4f34e7ea9078c7aea19b946540f3830eea93d08625a9b57be7.svg"
                                                alt=""
                                            />
                                            <Box>
                                                <Text variant="headingSm">Shopify POS Onboading </Text>
                                                <Text>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit. Ipsum ipsa debitis soluta recusandae dolore
                                                    praesentium ullam ducimus omnis neque cum at, expedita
                                                    deserunt quod temporibus rem sequi optio esse amet?{" "}
                                                </Text>
                                            </Box>
                                        </Box>
                                    </Grid.Cell>
                                    <Grid.Cell
                                        style={{ alignSelf: "center" }}
                                        columnSpan={{ sm: 2, lg: 2 }}
                                    >
                                        <Box
                                            style={{
                                                height: "100%",
                                                display: "flex",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Link removeUnderline url="">
                                                Contact Us
                                            </Link>
                                        </Box>
                                    </Grid.Cell>
                                </Grid>
                            </Card>
                        </Box>
                    </Box>

                    <Box background="bg-fill" borderColor="border" borderWidth="025" borderRadius="300">
                        <Box
                            padding={500}
                            paddingInline={800}
                            borderColor="border"
                            borderBlockEndWidth="025"
                        >
                            <Text variant="headingMd">
                                Additional POS Resources
                            </Text>
                        </Box>
                        <Box padding={300}>
                            <InlineGrid columns="1fr 1fr">
                                <Box paddingInline={500}>
                                    <BlockStack gap={300}>
                                        <Text variant="headingMd">How to</Text>
                                        <Link removeUnderline url="">
                                            Manage in-store staff permissions
                                        </Link>
                                        <Link removeUnderline url="">
                                            Train in-store staff
                                        </Link>
                                        <Link removeUnderline url="">
                                            Manage customers
                                        </Link>
                                        <Link removeUnderline url="">
                                            Manage POS locations
                                        </Link>
                                        <Link removeUnderline url="">
                                            Manage inventory
                                        </Link>
                                        <Link removeUnderline url="">
                                            Setup Shopify Payments on POS
                                        </Link>
                                        <Link removeUnderline url="">
                                            Manage orders & refunds
                                        </Link>
                                        <Link removeUnderline url="">
                                            Setup local pickup on POS
                                        </Link>
                                        <Link removeUnderline url="">
                                            Use gift cards on POS
                                        </Link>
                                        <Link removeUnderline url="">
                                            Use apps on POS
                                        </Link>
                                    </BlockStack>
                                </Box>
                                <BlockStack>
                                    <Box width="50%">
                                        <BlockStack gap={500}>
                                            <Box padding={300}>
                                                <BlockStack gap={300}>
                                                    <Text variant="headingMd">Shopify comparisons</Text>
                                                    <Link removeUnderline url="">
                                                        Vend
                                                    </Link>
                                                    <Link removeUnderline url="">
                                                        Square
                                                    </Link>
                                                    <Link removeUnderline url="">
                                                        Lightspeed
                                                    </Link>
                                                    <Link removeUnderline url="">
                                                        QuickBooks
                                                    </Link>
                                                </BlockStack>
                                            </Box>
                                            <Box padding={300}>
                                                <BlockStack gap={300}>
                                                    <Text variant="headingMd">Quicklinks</Text>
                                                    <Link removeUnderline url="">
                                                        Shopify POS hardware
                                                    </Link>
                                                    <Link removeUnderline url="">
                                                        Shopify POS apps
                                                    </Link>
                                                    <Link removeUnderline url="">
                                                        Shopify POS demo videos
                                                    </Link>
                                                    <Link removeUnderline url="">
                                                        Shopify POS changelog
                                                    </Link>
                                                </BlockStack>
                                            </Box>
                                        </BlockStack>
                                    </Box>
                                </BlockStack>
                            </InlineGrid>
                        </Box>
                    </Box>
                </Box>
                <InlineStack align="center">
                    <Box padding={500}>
                        <InlineStack>
                            <Icon source={CircleInformationMajor} tone="textInfo" />
                            <Text>
                                Learn more about <Link>Shopify POS</Link>
                            </Text>
                        </InlineStack>
                    </Box>
                </InlineStack>
            </BlockStack>
        </Page>
    );
};

export default POS;
