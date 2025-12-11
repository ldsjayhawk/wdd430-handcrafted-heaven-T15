"use client";

import { useState } from "react";
import Link from "next/link";
import NavLinks from "@/app/ui/nav-links";

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="mobile-nav-container">
            <button
                className="hamburger-button"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                <span
                    className={`hamburger-line ${isOpen ? "open" : ""}`}
                ></span>
                <span
                    className={`hamburger-line ${isOpen ? "open" : ""}`}
                ></span>
                <span
                    className={`hamburger-line ${isOpen ? "open" : ""}`}
                ></span>
            </button>

            {isOpen && (
                <div className="mobile-menu-overlay" onClick={closeMenu}>
                    <nav
                        className="mobile-menu"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="mobile-menu-header">
                            <h2>Menu</h2>
                            <button
                                className="close-button"
                                onClick={closeMenu}
                                aria-label="Close menu"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="mobile-menu-links">
                            <NavLinks onLinkClick={closeMenu} />
                        </div>
                        <div className="mobile-menu-icons">
                            <Link
                                href="/"
                                className="mobile-icon"
                                onClick={closeMenu}
                            >
                                🛒 Cart
                            </Link>
                            <Link
                                href="/login"
                                className="mobile-icon"
                                onClick={closeMenu}
                            >
                                👤 Account
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </div>
    );
}
