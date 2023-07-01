import React from "react";
import { styled } from "styled-components";

const Card = ({ text1, text2, mobileImage, deskImage }) => {
    return (
        <Wrapper>
            <div className="overlay"></div>
            <img src={deskImage} alt={Text} className="image desktop" />
            <img src={mobileImage} alt={Text} className="image mobile" />
            <p className="text">
                {text1}
                <br /> {text2}
            </p>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    position: relative;
    cursor: pointer;
    &:hover .overlay {
        background-image: none;
        background-color: rgba(255, 255, 255, 0.7);
    }
    &:hover .text {
        color: #000;
    }
    .overlay {
        position: absolute;
        z-index: 10;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
        width: 100%;
        height: 100%;
        transition: 0.2s all;
    }

    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .text {
        position: absolute;
        z-index: 20;
        left: 2rem;
        bottom: 2rem;
        color: #fff;
        text-transform: uppercase;
        font-size: 2rem;
        transition: 0.2s all;
    }
     @media only screen and (max-width: 600px) {
        .cards-container {
            grid-template-columns: 1fr;
        }
`;

export default Card;
