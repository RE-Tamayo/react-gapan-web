import { Link } from "react-router-dom"

const Navbar = ({activeLink}) => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-light p-0 shadow">
            <div className="container">
                <a className="navbar-brand" href="#">GOVPH</a>
                <button className="navbar-toggler my-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link p-3 ${activeLink === '/' && 'active'}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle p-3" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                About Us
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className={`nav-link p-3 ${activeLink === '/abt-history' && 'active'}`} to="/abt-history">History</Link>
                                </li>
                                <li>
                                    <Link className={`nav-link p-3 ${activeLink === '/abt-mission-vision' && 'active'}`} to="/abt-mission-vision">Mission / Vision</Link>
                                </li>
                                <li>
                                    <Link className={`nav-link p-3 ${activeLink === '/abt-profile' && 'active'}`} to="/abt-profile">Profile</Link>
                                </li>
                                <li>
                                    <Link className={`nav-link p-3 ${activeLink === '/abt-physical' && 'active'}`} to="/abt-physical">Physical</Link>
                                </li>
                                <li>
                                    <Link className={`nav-link p-3 ${activeLink === '/abt-human-resources' && 'active'}`} to="/abt-human-resources">Human Resources</Link>
                                </li>
                                <li>
                                    <Link className={`nav-link p-3 ${activeLink === '/abt-economic-sector' && 'active'}`} to="/abt-economic-sector">Economic Sector</Link>
                                </li>
                                <li>
                                    <Link className={`nav-link p-3 ${activeLink === '/abt-social-services' && 'active'}`} to="/abt-social-services">Social Services</Link>
                                </li>
                                <li>
                                <Link className={`nav-link p-3 ${activeLink === '/abt-infrastructure' && 'active'}`} to="/abt-infrastructure">Infrastructure</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle p-3" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Government
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className={`nav-link p-3 ${activeLink === '/gov-mayor' && 'active'}`} to="/gov-mayor">Mayor</Link>
                                </li>
                                <li>
                                    <Link className={`nav-link p-3 ${activeLink === '/gov-vice-mayor' && 'active'}`} to="/gov-vice-mayor">Vice Mayor</Link>
                                </li>
                                <li>
                                    <Link className={`nav-link p-3 ${activeLink === '/gov-councilor' && 'active'}`} to="/gov-councilor">Councilor</Link>
                                </li>
                                <li>
                                    <Link className={`nav-link p-3 ${activeLink === '/gov-barangay' && 'active'}`} to="/gov-barangay">Barangay</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link p-3 ${activeLink === '/services' && 'active'}`} to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link p-3 ${activeLink === '/bids-awards' && 'active'}`} to="/bids-awards">Bids/Awards</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link p-3 ${activeLink === '/tourism' && 'active'}`} to="/tourism">Tourism</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link p-3 ${activeLink === '/gallery' && 'active'}`} to="/gallery">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link p-3 ${activeLink === '/news' && 'active'}`} to="/news">News</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link p-3 ${activeLink === '/directory' && 'active'}`} to="/directory">Directory</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar