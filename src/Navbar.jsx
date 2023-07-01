import React, { useState } from "react";
import { styled } from "styled-components";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="container">
            <Wrapper>
                <div className="logo-box">
                    <img src="images/logo.svg" alt="logo" />
                </div>
                <div className={`mob-menu ${isMenuOpen && "show-menu"}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                Careers
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                Events
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                Products
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                Support
                            </a>
                        </li>
                    </ul>
                </div>

                <div
                    onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                    }}
                    className="menu-toggler"
                >
                    <img
                        src="images/icon-hamburger.svg"
                        alt="hamburger menu"
                        className={`open-icon ${!isMenuOpen && "visible"}`}
                    />
                    <img
                        src="images/icon-close.svg"
                        alt="close menu"
                        className={`close-icon ${isMenuOpen && "visible"}`}
                    />
                </div>
            </Wrapper>
        </div>
    );
};

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;

    .nav-list {
        list-style-type: none;
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }
    .nav-link {
        color: #fff;
        text-decoration: none;
    }
    .menu-toggler {
        display: none;
    }
    .open-icon,
    .close-icon {
        display: none;
    }

    @media only screen and (max-width: 800px) {
        .logo-box {
            position: relative;
            z-index: 50;
        }
        .menu-toggler {
            display: block;
            cursor: pointer;
            position: relative;
            z-index: 50;
        }
        .visible {
            display: block;
        }
        .mob-menu {
            display: none;
            background-color: #000;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 20;
            align-items: center;
            padding: 2rem;
        }
        .nav-list {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
        }

        .nav-link {
            text-transform: uppercase;
            font-size: 2rem;
        }
        .nav-link:hover::after {
            display: none;
        }
        .show-menu {
            display: flex;
        }
    }
`;
export default Navbar;
