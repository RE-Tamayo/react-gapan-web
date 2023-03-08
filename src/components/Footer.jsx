import PhilLogo from '../assets/phil-logo.png'

const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-light text-muted mt-3">
            <section className="d-flex justify-content-center justify-content-lg-between">
                <div>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </section>
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <img src={PhilLogo} width="150" height="150" alt="" />
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Socials
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Facebook</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Twitter</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Google Plus</a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">About Us</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Services</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">News</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Directory</a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact & Address</h6>
                            <p><i className="fas fa-home me-3"></i> Maharlika Highway, Gapan City</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                emengpascual19@yahoo.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i> 044-486-0513 / 044-486-5502</p>
                            <p><i className="fas fa-phone me-3"></i> 044-486-5544</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="d-flex justify-content-center justify-content-lg-between">
                <div>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </section>

            <section className="p-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15394.152677555096!2d120.93237690781253!3d15.292961100000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339721ceeb70e70b%3A0xaf3789a46f0ac5ee!2sMayor&#39;s%20Office%20%40%20Gapan%20City%20Hall!5e0!3m2!1sen!2sph!4v1678072494283!5m2!1sen!2sph"
                    width="100%" height="250" style={{ border: 0 }} loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>

            <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                ©
                <a className="text-reset fw-bold copyright" href="https://www.youtube.com/watch?v=J3zA1LJYLyU"
                    target="_blank">City Government of Gapan</a>
            </div>
        </footer>
    )
}

export default Footer