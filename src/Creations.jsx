import React from "react";
import { styled } from "styled-components";
import Card from "./Card";
import { data } from "./data";

const Creations = () => {
    return (
        <div className="container">
            <Wrapper>
                <div className="header">
                    <h2 className="title">Our Creations</h2>
                    <button className="btn">See all</button>
                    <div className="cards-container">
                        {data.map((card) => {
                            return <Card key={card.id} {...card} />;
                        })}
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};
const Wrapper = styled.div`
    padding: 5rem 0 10rem;

    .header {
        display: grid;
        grid-template-columns: 1fr 25%;
        align-items: center;
    }
    .title {
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 2.5rem;
        font-weight: 500;
        margin-bottom: 4rem;
    }
    .btn {
        display: inline-block;
        justify-self: end;
        border: 1px solid #000;
        background-color: transparent;
        padding: 0.5rem 2rem;
        text-transform: uppercase;
        color: #000;
        font-size: 0.9175rem;
        font-family: "Alata", sans-serif;
        letter-spacing: 3px;
        font-weight: 400;
        cursor: pointer;
        transition: 0.2s all;
        margin-bottom: 4rem;
    }
    .btn:hover {
        background-color: #000;
        color: #fff;
    }
    .cards-container {
        grid-column: 1/3;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
    }
    @media only screen and (max-width: 1000px) {
        .cards-container {
            grid-template-columns: repeat(3, 1fr);
        }
    }
    @media only screen and (max-width: 800px) {
        padding: 2rem 0 6rem;
        .header {
            grid-template-columns: 1fr;
        }
        .title {
            text-align: center;
        }
        .cards-container {
            grid-template-columns: repeat(2, 1fr);
            margin-bottom: 2rem;
        }
        .btn {
            order: 1;
            justify-self: center;
            margin-bottom: 0;
        }
    }
    @media only screen and (max-width: 600px) {
        .cards-container {
            grid-template-columns: 1fr;
            grid-column: 1/2;
        }
    }
`;
export default Creations;
