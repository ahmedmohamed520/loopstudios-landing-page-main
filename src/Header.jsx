import React from "react";
import Navbar from "./Navbar";
import { styled } from "styled-components";

const Header = () => {
    return (
        <Wrapper>
            <Navbar />
            <div className="container">
                <h1 className="title">
                    Immersive
                    <br /> experiences
                    <br /> that deliver
                </h1>
            </div>

            <img src="images/desktop/image-hero.jpg" alt="hero image" className="image desktop" />
            <img src="images/mobile/image-hero.jpg" alt="hero image" className="image mobile" />
        </Wrapper>
    );
};
const Wrapper = styled.header`
    position: relative;
    height: 100vh;

    .title {
        display: inline-block;
        padding: 2rem;
        text-transform: uppercase;
        font-weight: 300;
        letter-spacing: 1px;
        color: #fff;
        border: 1px solid #fff;
        font-size: 4rem;
        position: absolute;
        top: 56%;
        transform: translateY(-50%);
        max-width: 90%;
    }
    .image {
        position: absolute;
        top: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media only screen and (max-width: 600px) {
        .title {
            font-size: 10vw;
            padding: 1rem;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
        }
    }
`;
export default Header;
