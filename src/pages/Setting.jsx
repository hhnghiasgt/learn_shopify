import {
    Button,
    InlineGrid,
    Link,
    Page,
    Text,
    Box,
    BlockStack,
    InlineStack,
    Collapsible,
    Divider,
    Avatar,
    Badge,
    Form,
    FormLayout,
    TextField,
    Select,
    Icon,
    Checkbox,
} from "@shopify/polaris";
import {
    ExternalSmallMinor
} from "@shopify/polaris-icons";
import { useCallback, useState } from "react";

export const Setting = () => {
    const [url, setUrl] = useState('');

    const handleSubmit = useCallback(() => setUrl(''), []);

    const handleUrlChange = useCallback((value) => setUrl(value), []);

    const [selected, setSelected] = useState('Viet Nam');

    const handleSelectChange = useCallback(
        (value) => setSelected(value),
        [],
    );

    const options = [
        { label: 'Viet Nam', value: 'vietnam' },
        { label: 'Lao', value: 'lao' },
        { label: 'Thai Lan', value: 'thailan' },
        { label: 'Trung Quoc', value: 'china' },
    ];

    const [checked, setChecked] = useState(false);
    const handleChange = useCallback(
        (newChecked) => setChecked(newChecked),
        [],
    );

    const [open, setOpen] = useState(true);
    const [checkedTaxes, setCheckedTaxes] = useState(true);
    const handleChangeTaxes = useCallback(
        (newChecked) => {
            setCheckedTaxes(newChecked)
            setOpen((open) => !open)
        },
        [],
    );
    

    const [openInvoices, setOpenInvoices] = useState(true);
    const [checkedInvoices, setCheckedInvoices] = useState(true);
    const handleChangeInvoices = useCallback(
        (newCheckedInvoices) => {
            setCheckedInvoices(newCheckedInvoices)
            setOpenInvoices((openInvoices) => !openInvoices)
        },
        [],
    );

    return (
        <Page title="Partner account settings">
            <InlineGrid columns={'1fr 3fr'} gap={300}>
                <BlockStack gap={300}>
                    <Text variant="headingMd">Personal profile information</Text>
                    <Text>Edit your personal profile to change your password, email contact, avatar photo, and preferred language.</Text>
                </BlockStack>
                <Box borderColor="border" borderRadius="200" shadow="200" padding={500} background="bg-fill">
                    <InlineStack gap={300} align="space-between">
                        <InlineStack gap={300}>
                            <BlockStack gap={300}>
                                <Avatar customer name="Farrah" />
                            </BlockStack>
                            <Box>
                                <Text variant="headingMd">Nghĩa Hoàng Hữu</Text>
                                <Link removeUnderline>hhnghia.sgt@gmail.com</Link>
                                <Text tone="subdued">English</Text>
                                <Text tone="subdued">Last login 6 minutes ago</Text>
                            </Box>
                        </InlineStack>
                        <BlockStack>
                            <Button >Edit personal profile</Button>
                        </BlockStack>
                    </InlineStack>
                </Box>
            </InlineGrid>
            <Box paddingBlock={1000}>
                <Divider borderWidth="050" />
            </Box>
            <InlineGrid columns={'1fr 3fr'} gap={300}>
                <BlockStack gap={300}>
                    <Text variant="headingMd">Account information</Text>
                </BlockStack>
                <Box borderColor="border" borderRadius="200" shadow="200" background="bg-fill">
                    <BlockStack gap={300}>
                        <Box padding={500} >
                            <BlockStack gap={300}>
                                <Text variant="headingMd">PARTNER ID</Text>
                                <Text >3362524</Text>
                            </BlockStack>
                        </Box>
                        <Box padding={500} borderColor="border" borderBlockStartWidth="0165" >
                            <InlineStack align="space-between">
                                <InlineStack gap={500}>
                                    <Text variant="headingMd">APP STORE REGISTRATION</Text>
                                    <Badge>Unregistered</Badge>
                                </InlineStack>
                                <Link removeUnderline>Register now</Link>
                            </InlineStack>
                        </Box>
                    </BlockStack>
                </Box>
            </InlineGrid>
            <Box paddingBlock={500}>
                <Divider borderWidth="050" />
            </Box>
            <InlineGrid columns={'1fr 3fr'} gap={300}>
                <BlockStack gap={300}>
                    <Text variant="headingMd">Business details</Text>
                </BlockStack>
                <Box borderColor="border" borderRadius="200" shadow="200" background="bg-fill">
                    <Box padding={"500"}>
                        <Form noValidate onSubmit={handleSubmit}>
                            <FormLayout>
                                <TextField
                                    value={url}
                                    onChange={handleUrlChange}
                                    label="Business name"
                                    type="url"
                                    autoComplete="off"
                                />
                                <TextField
                                    value={url}
                                    onChange={handleUrlChange}
                                    label="Website"
                                    type="url"
                                    autoComplete="off"
                                />
                            </FormLayout>
                        </Form>
                    </Box>
                </Box>
            </InlineGrid>
            <Box paddingBlock={500}>
                <Divider borderWidth="050" />
            </Box>
            <InlineGrid columns={'1fr 3fr'} gap={300}>
                <BlockStack gap={300}>
                    <Text variant="headingMd">Contact information</Text>
                    <Text tone="subdued">We'll use this information to contact you about your account.</Text>
                </BlockStack>
                <Box borderColor="border" borderRadius="200" shadow="200" background="bg-fill">
                    <Box padding={"500"}>
                        <Form noValidate onSubmit={handleSubmit}>
                            <FormLayout>
                                <TextField
                                    value={'hhn.sgt@gmail.com'}
                                    onChange={handleUrlChange}
                                    label="Business email"
                                    type="url"
                                    autoComplete="off"
                                    helpText='The email where all general account info will be sent.'
                                />
                                <TextField
                                    value={url}
                                    onChange={handleUrlChange}
                                    label="Support email"
                                    type="url"
                                    autoComplete="off"
                                    helpText='The email where all general account info will be sent.'
                                />
                                <TextField
                                    value={url}
                                    onChange={handleUrlChange}
                                    label="Phone number"
                                    type="url"
                                    autoComplete="off"
                                />
                                <TextField
                                    value={url}
                                    onChange={handleUrlChange}
                                    label="Address 1"
                                    type="url"
                                    autoComplete="off"
                                />
                                <TextField
                                    value={url}
                                    onChange={handleUrlChange}
                                    label="Address 2"
                                    type="url"
                                    autoComplete="off"
                                />
                                <FormLayout.Group>
                                    <TextField
                                        value={url}
                                        onChange={handleUrlChange}
                                        label="Address 1"
                                        type="url"
                                        autoComplete="off"
                                    />
                                    <TextField
                                        value={url}
                                        onChange={handleUrlChange}
                                        label="Address 2"
                                        type="url"
                                        autoComplete="off"
                                    />
                                </FormLayout.Group>
                                <InlineGrid columns={2} gap={300}>
                                    <TextField
                                        value={url}
                                        onChange={handleUrlChange}
                                        label="Region"
                                        type="url"
                                        autoComplete="off"
                                        disabled
                                    />
                                    <Select
                                        label="Country"
                                        options={options}
                                        onChange={handleSelectChange}
                                        value={selected}
                                    />
                                </InlineGrid>
                                <InlineStack>
                                    <Text>The Shopify Theme Store is now accepting theme submissions for review. Themes on the Shopify Theme Store can’t be sold on any other marketplace.
                                        <Link removeUnderline>Before you build, review the Shopify Theme Store Requirements. </Link>
                                        <Link>
                                            <Icon
                                                source={ExternalSmallMinor}
                                            />
                                        </Link>
                                    </Text>
                                </InlineStack>
                                <Checkbox
                                    label="I opt to hide my business street address from merchants. 
                                    By doing so, I understand I am liable for compliance with business imprint 
                                    regulations and with any laws requiring me to provide it."
                                    checked={checked}
                                    onChange={handleChange}
                                />
                            </FormLayout>
                        </Form>
                    </Box>
                </Box>
            </InlineGrid>
            <Box paddingBlock={500}>
                <Divider borderWidth="050" />
            </Box>
            <InlineGrid columns={'1fr 3fr'} gap={300}>
                <BlockStack gap={300}>
                    <Text variant="headingMd">Emergency developer contact information</Text>
                    <Text tone="subdued">These details are used to communicate critical technical information to developers who maintain Shopify apps . <Link removeUnderline>Learn more</Link></Text>
                </BlockStack>
                <Box borderColor="border" borderRadius="200" shadow="200" background="bg-fill">
                    <Box padding={"500"}>
                        <Form noValidate onSubmit={handleSubmit}>
                            <FormLayout>
                                <TextField
                                    value={'hhn.sgt@gmail.com'}
                                    onChange={handleUrlChange}
                                    label="Emergency developer email"
                                    type="url"
                                    autoComplete="off"
                                    helpText='The email where all API breaking changes and app operational info will be sent.'
                                />
                                <TextField
                                    value={url}
                                    onChange={handleUrlChange}
                                    label="Emergency developer phone number"
                                    type="url"
                                    autoComplete="off"
                                    helpText='The phone number that can be used to notify of emergency API breaking changes and operational issues.'
                                />
                            </FormLayout>
                        </Form>
                    </Box>
                </Box>
            </InlineGrid>
            <Box paddingBlock={500}>
                <Divider borderWidth="050" />
            </Box>
            <InlineGrid columns={'1fr 3fr'} gap={300}>
                <BlockStack gap={300}>
                    <Text variant="headingMd">Invoices</Text>
                    <Text tone="subdued">Customize your invoices. Old invoices will show current values.</Text>
                </BlockStack>
                <Box borderColor="border" borderRadius="200" shadow="200" background="bg-fill">
                    <Box padding={"500"}>
                        <BlockStack gap={300}>
                            <Text variant="headingMd">Payout method</Text>
                            <Text >Add a payout method to receive your payouts on time.</Text>
                            <Box>
                                <Button>Manager payment method</Button>
                            </Box>
                        </BlockStack>
                    </Box>
                </Box>
            </InlineGrid>
            <Box paddingBlock={500}>
                <Divider borderWidth="050" />
            </Box>
            <InlineGrid columns={'1fr 3fr'} gap={300}>
                <BlockStack gap={300}>
                    <Text variant="headingMd">Taxes</Text>
                    <Text tone="subdued">Tax business identification numbers are used to calculate the sales taxes applied to the commissions you charge Shopify on affiliate referrals, developer store referrals and Shopify Plus referrals<Link removeUnderline>Learn more</Link></Text>
                </BlockStack>
                <Box borderColor="border" borderRadius="200" shadow="200" background="bg-fill">
                    <Box padding={"500"}>
                        <BlockStack gap={300}>
                            <Text>Enter a tax ID for regions where your business is registered to collect tax.</Text>
                            <Form>
                                <FormLayout>
                                    <Checkbox
                                        label="Canada - GST/HST"
                                        checked={checkedTaxes}
                                        onChange={handleChangeTaxes}
                                        ariaControls="basic-collapsible"
                                    />
                                    <Collapsible
                                        open={open}
                                        id="basic-collapsible"
                                        transition={{ duration: '100ms', timingFunction: 'ease-in-out' }}
                                        expandOnPrint
                                    >
                                        <TextField
                                            value={url}
                                            onChange={handleUrlChange}
                                            label="Emergency developer phone number"
                                            type="url"
                                            autoComplete="off"
                                            placeholder="0000000"
                                            helpText='The phone number that can be used to notify of emergency API breaking changes and operational issues.'
                                        />
                                    </Collapsible>
                                </FormLayout>
                            </Form>
                        </BlockStack>
                    </Box>
                </Box>
            </InlineGrid>
            <Box paddingBlock={500}>
                <Divider borderWidth="050" />
            </Box>
            <InlineGrid columns={'1fr 3fr'} gap={300}>
                <BlockStack gap={300}>
                    <Text variant="headingMd">Taxes</Text>
                    <Text tone="subdued">Tax business identification numbers are used to calculate the sales taxes applied to the commissions you charge Shopify on affiliate referrals, developer store referrals and Shopify Plus referrals<Link removeUnderline>Learn more</Link></Text>
                </BlockStack>
                <Box borderColor="border" borderRadius="200" shadow="200" background="bg-fill">
                    <Box padding={"500"}>
                        <BlockStack gap={0}>
                            <Text>Enter a tax ID for regions where your business is registered to collect tax.</Text>
                            <Form>
                                <FormLayout>
                                    <Checkbox
                                        label="Notes"
                                        checked={checkedInvoices}
                                        onChange={handleChangeInvoices}
                                        ariaControls="basic-collapsible2"
                                    />
                                    <Collapsible
                                        open={openInvoices}
                                        id="basic-collapsible2"
                                        transition={{ duration: '100ms', timingFunction: 'ease-in-out' }}
                                        expandOnPrint
                                    >
                                        <TextField
                                            value={url}
                                            onChange={handleUrlChange}
                                            label="Emergency developer phone number"
                                            type="url"
                                            multiline={4}
                                            autoComplete="off"
                                            placeholder="0000000"
                                        />
                                    </Collapsible>
                                    <Text tone="subdued">The phone number that can be used to notify of emergency API breaking changes and operational issues.'</Text>
                                </FormLayout>
                            </Form>
                        </BlockStack>
                    </Box>
                </Box>
            </InlineGrid>
            <Box paddingBlock={500}>
                <Divider borderWidth="050" />
            </Box>
            <InlineGrid columns={'1fr 3fr'} gap={300}>
                <BlockStack gap={300}>
                    <Text variant="headingMd">Billing</Text>
                    <Text tone="subdued">Manage how your earnings get paid out. <Link removeUnderline>Learn more</Link></Text>
                </BlockStack>
                <Box borderColor="border" borderRadius="200" shadow="200" background="bg-fill">
                    <Box padding={"500"}>
                        <BlockStack gap={300}>
                            <Text >Add a payout method to receive your payouts on time.</Text>
                            <Box>
                                <Button>Manager payment method</Button>
                            </Box>
                        </BlockStack>
                    </Box>
                </Box>
            </InlineGrid>
            <Box paddingBlock={500}>
                <Divider borderWidth="050" />
            </Box>
            <InlineGrid columns={'1fr 3fr'} gap={300}>
                <BlockStack gap={300}>
                    <Text variant="headingMd">Partner API clients</Text>
                    <Text tone="subdued">Manage how your earnings get paid out. <Link removeUnderline>Learn more</Link></Text>
                </BlockStack>
                <Box borderColor="border" borderRadius="200" shadow="200" background="bg-fill">
                    <Box padding={"500"}>
                        <BlockStack gap={300}>
                            <Text >Add a payout method to receive your payouts on time.</Text>
                            <Box>
                                <Button>Manager payment method</Button>
                            </Box>
                        </BlockStack>
                    </Box>
                </Box>
            </InlineGrid>
            <Box paddingBlock={500}>
                <Divider borderWidth="050" />
            </Box>
            <InlineGrid columns={'1fr 3fr'} gap={300}>
                <BlockStack gap={300}>
                    <Text variant="headingMd">CLI Token</Text>
                    <Text tone="subdued">Manage how your earnings get paid out. <Link removeUnderline>Learn more</Link></Text>
                </BlockStack>
                <Box borderColor="border" borderRadius="200" shadow="200" background="bg-fill">
                    <Box padding={"500"}>
                        <BlockStack gap={300}>
                            <Text >Add a payout method to receive your payouts on time.</Text>
                            <Box>
                                <Button>Manager payment method</Button>
                            </Box>
                        </BlockStack>
                    </Box>
                </Box>
            </InlineGrid>

        </Page>
    )
}
