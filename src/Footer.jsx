import React from "react";
import { styled } from "styled-components";

const Footer = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="footer-container">
                    {/* Footer nav */}
                    <div className="footer-nav">
                        <div className="logo">
                            <img src="images/logo.svg" alt="logo" />
                        </div>
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
                    {/* Footer socials */}
                    <div className="footer-socials">
                        <div className="socials">
                            <a href="" className="social-link">
                                <img src="images/icon-facebook.svg" alt="Facebook" />
                            </a>
                            <a href="" className="social-link">
                                <img src="images/icon-twitter.svg" alt="twitter" />
                            </a>
                            <a href="" className="social-link">
                                <img src="images/icon-pinterest.svg" alt="pinterest" />
                            </a>
                            <a href="" className="social-link">
                                <img src="images/icon-instagram.svg" alt="instagram" />
                            </a>
                        </div>
                        <div className="copyrights">&copy;2021 Loopstudios. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.footer`
    background-color: black;
    padding: 2rem 0;

    .footer-container {
        display: flex;
        justify-content: space-between;
    }
    .footer-nav {
    }
    .logo {
        margin-bottom: 1.5rem;
    }
    .logo img {
        width: 40%;
    }
    .nav-list {
        list-style-type: none;
        display: flex;
        gap: 2rem;
        align-items: center;
    }
    .nav-item {
    }
    .nav-link {
        text-decoration: none;
        color: #fff;
        font-size: 0.875rem;
        font-weight: 500;
    }

    . footer-socials {
    }
    .socials {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: flex-end;
        margin-bottom: 1.5rem;
    }
    .socials img {
        width: 90%;
    }
    .copyrights {
        color: var(--clr-gray-1);
        font-size: 0.875rem;
        font-weight: 500;
    }

     @media only screen and (max-width: 600px) {
      padding: 4rem 0;
      .footer-container{
         flex-direction:column;
         align-items:center;
      }
        .footer-nav{
         display:flex;
         align-items:center;
         flex-direction: column;
         margin-bottom: 3rem
        }
        .logo{
         text-align:center;
        }
        .logo img{
         width: 100%
        }
        .nav-list{
         flex-direction: column;
        }
        .nav-link{
         font-size: 1rem
        }
        .footer-socials{
         display:flex;
         flex-direction:column;
         justify-content:center;
        }
        .socials{
         justify-content: center;
        }
`;

export default Footer;
