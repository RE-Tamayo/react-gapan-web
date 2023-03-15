import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Breadcrumbs = () => {
    let { pathname } = useLocation();

    if (pathname.length < 2 && pathname == '/') {
        pathname = 'Home';
    }
    else if (pathname.length > 2) {
        let str = pathname.split('-');

        if (str[0] == '/abt' && str[1] != 'mission') {
            pathname = pathname.replace('/abt-', 'About Us > ');
            pathname = pathname.replace('-', ' ');
            pathname = pathname.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        }
        else if (str[0] == '/abt' && str[1] == 'mission') {
            pathname = pathname.replace('/abt', 'About Us > ');
            pathname = pathname.replace('-', '');
            pathname = pathname.replace('n-v', 'n / V');
            pathname = pathname.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        }
        else if (str[0] == '/abt') {
            pathname = pathname.replace('/abt-', 'About Us > ');
            pathname = pathname.replaceAll('-', ' ');
            pathname = pathname.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        }
        else if (str[0] == '/gov') {
            pathname = pathname.replace('/gov-', 'Government > ');
            pathname = pathname.replaceAll('-', ' ');
            pathname = pathname.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        }
        else {
            pathname = pathname.replace('/', '');
            pathname = pathname.replace('-', ' ');
            pathname = pathname.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        }
    }

    return (
        <div className="row custom-breadcrumbs mb-3 mx-1 py-2">
            <nav className="d-flex breadcrumbs-nav" aria-label="breadcrumb">
                <p className="my-auto">You are here:&nbsp;</p>
                <ol className="breadcrumb my-auto">
                    <li className="breadcrumb-item active"><a href="#">{pathname}</a></li>
                </ol>
            </nav>
        </div>
    )
    
}

export default Breadcrumbs