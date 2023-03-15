import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Navigate } from 'react-router-dom';
import GuestLayout from './layouts/GuestLayout'
import Home from './views/Home'
import Services from './views/Services';
import BidsAwards from './views/BidsAwards';
import Tourism from './views/Tourism';
import Gallery from './views/Gallery';
import News from './views/News';
import Directory from './views/Directory';
import History from './views/History';
import MissionVision from './views/MissionVision';
import Physical from './views/Physical';
import Profile from './views/Profile';
import HumanResources from './views/HumanResources';
import EconomicSector from './views/EconomicSector';
import SocialServices from './views/SocialServices';
import Infrastructure from './views/Infrastructure';
import Mayor from './views/Mayor';
import ViceMayor from './views/ViceMayor';
import Councilor from './views/Councilor';
import Barangay from './views/Barangay';

const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/bids-awards',
                element: <BidsAwards />
            },
            {
                path: '/tourism',
                element: <Tourism />
            },
            {
                path: '/gallery',
                element: <Gallery />
            },
            {
                path: '/news',
                element: <News />
            },
            {
                path: '/directory',
                element: <Directory />
            },
            {
                path: '/abt-history',
                element: <History />
            },

            {
                path: '/abt-mission-vision',
                element: <MissionVision />
            },

            {
                path: '/abt-profile',
                element: <Profile />
            },

            {
                path: '/abt-physical',
                element: <Physical />
            },

            {
                path: '/abt-human-resources',
                element: <HumanResources />
            },

            {
                path: '/abt-economic-sector',
                element: <EconomicSector />
            },

            {
                path: '/abt-social-services',
                element: <SocialServices />
            },

            {
                path: '/abt-infrastructure',
                element: <Infrastructure />
            },

            {
                path: '/gov-mayor',
                element: <Mayor />
            },

            {
                path: '/gov-vice-mayor',
                element: <ViceMayor />
            },

            {
                path: '/gov-councilor',
                element: <Councilor />
            },

            {
                path: '/gov-barangay',
                element: <Barangay />
            },
        ]
    },
    {
        path: '*',
        element: <Navigate to='/' />
    },
    // {
    //     path: '/',
    //     element: <App />,
    //     children: [
    //         {
    //             path: '/',
    //             element: <Home />
    //         },
    //         {
    //             path: '/services',
    //             element: <Services />
    //         }
    //     ]
    // },
    // {
    //     path: '*',
    //     element: <Navigate to='/' />
    // },
])

export default router;