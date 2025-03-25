import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
                    {/* Contact Information */}
                    <div className="mb-8 md:mb-0">
                        <h3 className="font-semibold text-lg mb-4">Contact</h3>
                        <address className="not-italic text-gray-400 space-y-2">
                            <p>Yale School of Art</p>
                            <p>1156 Chapel Street</p>
                            <p>New Haven, CT 06510</p>
                            <p className="mt-2">
                                📞 <a href="tel:+12034322600" className="hover:text-blue-400">(203) 432-2600</a>
                            </p>
                            <p>
                                📧 <a href="mailto:art.admissions@yale.edu" className="hover:text-blue-400">art.admissions@yale.edu</a>
                            </p>
                        </address>
                    </div>

                    {/* Quick Links */}
                    <div className="mb-8 md:mb-0">
                        <h3 className="font-semibold text-lg mb-4">Resources</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link to="/apply" className="hover:text-blue-400 transition-colors">
                                    Admissions
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="hover:text-blue-400 transition-colors">
                                    Current Exhibitions
                                </Link>
                            </li>
                            <li>
                                <Link to="/apply" className="hover:text-blue-400 transition-colors">
                                    Course Catalog
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="hover:text-blue-400 transition-colors">
                                    Faculty Directory
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Calendars */}
                    <div className="mb-8 md:mb-0">
                        <h3 className="font-semibold text-lg mb-4">Calendars</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link to="/" className="hover:text-blue-400 transition-colors">
                                    Public Events
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="hover:text-blue-400 transition-colors">
                                    Community Calendar
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="hover:text-blue-400 transition-colors">
                                    Exhibition Schedule
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="hover:text-blue-400 transition-colors">
                                    Academic Calendar
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social & Legal */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Connect</h3>
                        <div className="flex space-x-4 mb-4">
                            <a href="https://facebook.com/yaleschoolofart" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">...</svg>
                            </a>
                            <a href="https://instagram.com/yaleschoolofart" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">...</svg>
                            </a>
                            <a href="https://twitter.com/yaleschoolofart" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">...</svg>
                            </a>
                        </div>
                        <div className="text-gray-400 text-sm space-y-1">
                            <Link to="/" className="hover:text-blue-400 block">Privacy Policy</Link>
                            <Link to="/" className="hover:text-blue-400 block">Accessibility</Link>
                            <Link to="/" className="hover:text-blue-400 block">Terms of Use</Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} Yale School of Art. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                        A community-edited resource. <Link to="/" className="hover:text-blue-400">Learn about contributing</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;