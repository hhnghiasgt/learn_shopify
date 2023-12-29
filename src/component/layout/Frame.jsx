import { Frame } from "@shopify/polaris";
import TopBarHeader from "./TopBar";
import { Navigation } from "./Navigation";
import { Outlet } from "react-router-dom";

export default function FrameLayout() {
    const logo = {
        topBarSource:
            'https://cdn.shopify.com/s/files/1/2376/3301/files/Shopify_Secondary_Inverted.png',
        width: 86,
        url: '#',
        accessibilityLabel: 'Shopify',
    };
    return (<Frame topBar={<TopBarHeader />} navigation={<Navigation />} logo={logo}>
        <Outlet></Outlet>
    </Frame>)
}