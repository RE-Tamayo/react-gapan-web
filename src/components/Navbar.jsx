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
                                <li><a className="dropdown-item" href="#">History</a></li>
                                <li><a className="dropdown-item" href="#">Mission / Vision</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="#">Physical</a></li>
                                <li><a className="dropdown-item" href="#">Human Resources</a></li>
                                <li><a className="dropdown-item" href="#">Economic Sector</a></li>
                                <li><a className="dropdown-item" href="#">Social Services</a></li>
                                <li><a className="dropdown-item" href="#">Infrastructure</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle p-3" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Government
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Mayor</a></li>
                                <li><a className="dropdown-item" href="#">Vice Mayor</a></li>
                                <li><a className="dropdown-item" href="#">Councilor</a></li>
                                <li><a className="dropdown-item" href="#">Barangay</a></li>
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