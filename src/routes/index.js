import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/layout";
import POS from "../pages/POS";
import { PATH } from "../utils/path";
import { Home } from "../pages/Home";
import { Stores } from "../pages/Stores";
import { Referral } from "../pages/Referral";
import { Lead } from "../pages/Lead";
import { App } from "../pages/App";
import { AppAds } from "../pages/AppAds";
import { Theme } from "../pages/Theme";
import { Resources } from "../pages/Resources";
import { Team } from "../pages/Team";
import { Setting } from "../pages/Setting";
import { Payout } from "../pages/Payout";
import { Support } from "../pages/Support";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                path: PATH.ROOT,
                element: <Home />
            },
            {
                path: PATH.POS,
                element: <POS />
            },
            {
                path: PATH.REFERRAL,
                element: <Referral />
            }, 
            {
                index: true,
                path: PATH.LEADS,
                element: <Lead />
            },
            {
                path: PATH.STORES,
                element: <Stores />
            },
            {
                path: PATH.ALL_APP,
                element: <App />
            },
            {
                path: PATH.APP_ADS,
                element: <AppAds />
            },
            {
                path: PATH.THEME,
                element: <Theme />
            },
            {
                path: PATH.RESOURCES,
                element: <Resources />
            },
            {
                path: PATH.PAYOUT,
                element: <Payout />
            },
            {
                path: PATH.TEAM,
                element: <Team />
            },
            {
                path: PATH.SETTING,
                element: <Setting />
            },
            {
                path: PATH.SUPPORT,
                element: <Support />
            }
        ],
    },
]);
