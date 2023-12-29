import {
	BlockStack,
	Box,
	Button,
	Card,
	EmptyState,
	Icon,
	InlineGrid,
	InlineStack,
	Link,
	Page,
	Text,
} from "@shopify/polaris";
import { AnalyticsMajor } from "@shopify/polaris-icons";

export const Lead = () => {
	return (
		<>
			<Page title="Leads">
				<Text>
					Earn commissions when you successfully refer merchants to Shopify
					products. <Link removeUnderline>Learn more</Link>{" "}
				</Text>
				<Card>
					<Box paddingBlock={500}>
						<Text	Text variant="headingLg" >Submit a Lead</Text>
					</Box>
					<BlockStack gap={500}>
						<InlineGrid columns={'3fr 1fr'} >
							<InlineGrid columns={'1fr 11fr'}>
								<BlockStack align="start">
									<Icon source={AnalyticsMajor} tone="base" />
								</BlockStack>
								<BlockStack>
									<Text variant="headingMd">Shopify POS</Text>
									<Text>
										Earn $500 USD for referring brick and mortar merchants to
										Shopify POS Pro -{" "}
										<Link removeUnderline>terms and eligible countries</Link>.
										Select <Link removeUnderline>sales assistance </Link>in the
										referral form for help pitching Shopify POS.
									</Text>
								</BlockStack>
							</InlineGrid>
							<InlineStack align="end">
								<Box>
									<Button>Submit a POS lead</Button>
								</Box>
							</InlineStack>
						</InlineGrid>
						<InlineGrid columns={'3fr 1fr'} >
							<InlineGrid columns={'1fr 11fr'}>
								<BlockStack align="start">
									<Icon source={AnalyticsMajor} tone="base" />
								</BlockStack>
								<BlockStack>
									<Text variant="headingMd">Shopify POS</Text>
									<Text>
										Earn $500 USD for referring brick and mortar merchants to
										Shopify POS Pro -{" "}
										<Link removeUnderline>terms and eligible countries</Link>.
										Select <Link removeUnderline>sales assistance </Link>in the
										referral form for help pitching Shopify POS.
									</Text>
								</BlockStack>
							</InlineGrid>
							<InlineStack align="end">
								<Box>
									<Button>Submit a POS lead</Button>
								</Box>
							</InlineStack>
						</InlineGrid>
						<InlineGrid columns={'3fr 1fr'} >
							<InlineGrid columns={'1fr 11fr'}>
								<BlockStack align="start">
									<Icon source={AnalyticsMajor} tone="base" />
								</BlockStack>
								<BlockStack>
									<Text variant="headingMd">Shopify POS</Text>
									<Text>
										Refer a new customer to Commerce Components and earn on qualified opportunities.
									</Text>
								</BlockStack>
							</InlineGrid>
							<InlineStack align="end">
								<Box>
									<Button>Submit Commerce Components lead</Button>
								</Box>
							</InlineStack>
						</InlineGrid>
					</BlockStack>
				</Card>

				<Box paddingBlock={700}>
					<Box paddingBlock={300}>
						<Text variant="headingLg">Submitted leads</Text>
					</Box>
					<Card>
						<EmptyState
							heading="Manage your inventory transfers"
							image="https://cdn.shopify.com/shopifycloud/partners/bundles/37d79fd6db6208a314fc52c28d1a2d0a5c687db82c438dbcf95833ae756fe0f0.svg"
						>
							<Box padding={300}>
								<Text tone="subdued">Submit a POS or Plus lead and start earning referral income today.</Text>
							</Box>
							<InlineStack gap={200}>
								<Button>Submit a Plus lead</Button>
								<Button>Submit a POS lead</Button>
							</InlineStack>
							<Box paddingBlockStart={300}>
								<Button>Submit Commerce Component lead</Button>
							</Box>
						</EmptyState>
					</Card>
				</Box>
			</Page>
		</>
	);
};
