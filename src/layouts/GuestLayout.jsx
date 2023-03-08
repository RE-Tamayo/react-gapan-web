import { Outlet, useLocation } from "react-router"
import Navbar from "../components/Navbar"
import '../App.css'
import Footer from "../components/Footer"
import { useEffect, useState } from "react"

const GuestLayout = () => {
  const [activeLink, setActiveLink] = useState('');
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default GuestLayout