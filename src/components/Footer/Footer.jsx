import React from 'react';

const Footer = () => {
    return (
        <div className='mt-12'>
            <footer className="footer lg:p-24 p-8 lg:px-52 px-8 bg-black text-white">
                <div>
                    <h3 className='text-2xl'>Career<span className='text-purple-400'>C</span>lub </h3>
                    <p>We provide advice about training, <br /> employment options and career progression to <br /> professionals and career changers.</p>
                    <img src="assets/Icons/Group.png" alt="Links" />
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Work</a>
                    <a className="link link-hover">Latest News</a>
                    <a className="link link-hover">Careers</a>
                </div>
                <div>
                    <span className="footer-title">Product</span>
                    <a className="link link-hover">Prototype</a>
                    <a className="link link-hover">Plans & Pricing</a>
                    <a className="link link-hover">Customers</a>
                    <a className="link link-hover">Intrigations</a>
                </div>
                <div>
                    <span className="footer-title">Support</span>
                    <a className="link link-hover">Help Desks</a>
                    <a className="link link-hover">Sales</a>
                    <a className="link link-hover">Become a Partner</a>
                    <a className="link link-hover">Developers</a>
                </div>
                <div>
                    <span className="footer-title">Contact</span>
                    <a className="link link-hover">524 Broadway, NYC</a>
                    <a className="link link-hover">+1777-978-5570</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;