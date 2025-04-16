import React from "react";
import "../styles/styles.css";


const Footer = () => {
    return (
        <footer className="footer bg-dark text-light py-2" style={{ position: "relative", bottom: 0, width: "100%" }}>
            <div className="container">
                <div className="row">
                    {/* Left Section: Form */}
                    <div className="col-md-5 mx-auto">
                        <h5 className="mb-2 text-center">Get in touch</h5>
                        <form>
                            <div className="mb-1">
                                <label htmlFor="name" className="form-label">
                                    Name <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control bg-secondary text-light"
                                    id="name"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="email" className="form-label">
                                    Email <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="form-control bg-secondary text-light"
                                    id="email"
                                    placeholder="Your email"
                                    required
                                />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="message" className="form-label">
                                    Message <span className="text-danger">*</span>
                                </label>
                                <textarea
                                    className="form-control bg-secondary text-light"
                                    id="message"
                                    rows={1}
                                    placeholder="Your message"
                                    required
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary btn-sm">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Section: Contact Details */}
                    <div className="col-md-5 mx-auto mt-3 mt-md-0">
                        <h5 className="mb-2">Contact Details</h5>
                        <p>
                            <strong>Anna Dao</strong>
                            <br />
                            Vancouver, BC
                            <br />
                            <a href="mailto:anna.dao16@gmail.com" className="text-light">
                                anna.dao16@gmail.com
                            </a>
                            <br />
                        </p>
                        <h6 className="mt-2">Thank you for reading</h6>
                        <p>
                            I appreciate your interest and look forward to hearing from you.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;