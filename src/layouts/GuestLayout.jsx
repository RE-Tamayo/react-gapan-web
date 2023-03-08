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