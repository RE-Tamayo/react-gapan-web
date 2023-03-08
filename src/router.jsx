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