import { Outlet, useLocation } from "react-router"
import Navbar from "../components/Navbar"
import '../App.css'
import Footer from "../components/Footer"
import { useEffect, useState } from "react"

const GuestLayout = () => {
  const [activeLink, setActiveLink] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    setActiveLink(pathname)

    if(pathname === '/') {
      document.title = 'Home - Gapan City';
    }
    if(pathname === '/services') {
      document.title = 'Services - Gapan City';
    }
    if(pathname === '/bids-awards') {
      document.title = 'Bids and Awards - Gapan City';
    }
    if(pathname === '/tourism') {
      document.title = 'Tourism - Gapan City';
    }
    if(pathname === '/gallery') {
      document.title = 'Gallery - Gapan City';
    }
    if(pathname === '/news') {
      document.title = 'News - Gapan City';
    }
    if(pathname === '/directory') {
      document.title = 'Directory - Gapan City';
    }
    if(pathname === '/abt-history') {
      document.title = 'History - Gapan City';
    }
    if(pathname === '/abt-mission-vision') {
      document.title = 'Mission Vision - Gapan City';
    }
    if(pathname === '/abt-profile') {
      document.title = 'Profile - Gapan City';
    }
    if(pathname === '/abt-physical') {
      document.title = 'Physical - Gapan City';
    }
    if(pathname === '/abt-human-resources') {
      document.title = 'Human Resources - Gapan City';
    }
    if(pathname === '/abt-economic-sector') {
      document.title = 'Economic Sector - Gapan City';
    }
    if(pathname === '/abt-social-services') {
      document.title = 'Social Services - Gapan City';
    }
    if(pathname === '/abt-infrastructure') {
      document.title = 'Infrastructure - Gapan City';
    }
    if(pathname === '/gov-mayor') {
      document.title = 'Mayor - Gapan City';
    }
    if(pathname === '/gov-vice-mayor') {
      document.title = 'Vice Mayor - Gapan City';
    }
    if(pathname === '/gov-councilor') {
      document.title = 'Councilor - Gapan City';
    }
    if(pathname === '/gov-barangay') {
      document.title = 'Barangay - Gapan City';
    }
  }, [pathname]);

  return (
    <>
      <Navbar activeLink={activeLink}/>
      <Outlet />
      <Footer />
    </>
  )
}

export default GuestLayout