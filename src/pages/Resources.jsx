import {
    Button,
    Link,
    Page,
    Text,
    Box,
    BlockStack,
    InlineStack,
    Collapsible,
    Divider,
} from "@shopify/polaris";
import {
    CaretDownMinor,
    CaretUpMinor
} from "@shopify/polaris-icons";
import { useCallback, useState } from "react";

export const Resources = () => {
    const [open, setOpen] = useState(true);

    const handleToggle = useCallback(() => setOpen((open) => !open), []);
    return (
        <>
            <Page>
                <Box padding={1000} position="relative" className="bg-black p-5">
                    <InlineStack >
                        <BlockStack>
                            <img src="https://cdn.shopify.com/shopifycloud/partners-web-platform/partners-dashboard/2ce89ad50980290c00b6.svg" alt="" />
                        </BlockStack>
                        <BlockStack align="center" inlineAlign="center" className="self-center text-white ">
                            <Box>
                                <Text variant="headingLg">Get certified at Shopify Academy</Text>
                                <Text >Become a certified expert with the new Certifications learning pathways at Shopify Academy.</Text>
                            </Box>
                        </BlockStack>
                        <img className="absolute right-2" src="https://cdn.shopify.com/shopifycloud/partners-web-platform/partners-dashboard/bce54ed2edcf1bf48bda.svg" alt="" />
                    </InlineStack>
                </Box>
                <Box background='bg-fill' borderRadius='300'>
                    <Box padding={300}>
                        <InlineStack align='space-between'>
                            <Box>
                                <Text variant='headingMd'>Get started</Text>
                            </Box>
                            <Box className="icon_tick" style={{ display: 'flex' }}>
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

                    </Box>
                    <Divider></Divider> 
                    <Collapsible
                        open={open}
                        id="basic-collapsible"
                        transition={{ duration: '200ms', timingFunction: 'ease-in-out' }}
                        expandOnPrint
                    >
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
            </Page>
        </>
    )
}
