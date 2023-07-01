import React from "react";
import { styled } from "styled-components";

const AboutUs = () => {
    return (
        <div className="container">
            <Wrapper>
                <img src="images/desktop/image-interactive.jpg" alt="interactive image" className="image" />
                <div className="text-box">
                    <h2 className="title">The leader in interactive Vr</h2>
                    <p className="text">
                        Founded in 2011, Loopstudio has been producing world-class virtual reality projects
                        for some of the best companies around the globe. Our award-winning creations have
                        transformed businesses through digital experiences that bind to their brand.
                    </p>
                </div>
            </Wrapper>
        </div>
    );
};
const Wrapper = styled.div`
    padding: 5rem 0;
    position: relative;

    .image {
        width: 64%;
    }
    .text-box {
        padding: 4rem;
        position: absolute;
        right: 0;
        bottom: 1rem;
        background-color: #fff;
        width: 50%;
    }
    .title {
        font-size: 3rem;
        text-transform: uppercase;
        font-weight: 300;
        margin-bottom: 1.5rem;
    }
    .text {
        line-height: 1.5;
        font-family: "Alata", sans-serif;
        color: var(--clr-gray-1);
    }

    @media only screen and (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        position: static;

        .image {
            width: 100%;
        }
        .text-box {
            position: static;
            width: 100%;
            text-align: center;
            padding: 4rem 0 0;
        }
    }
    @media only screen and (max-width: 600px) {
        display: flex;
        position: static;
    }
`;

export default AboutUs;
