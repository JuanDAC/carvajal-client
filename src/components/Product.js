import { AtomImage } from "./atoms/AtomImage";
import { AtomProduct } from "./atoms/AtomProduct";
import styled from "styled-components"
import { Fragment } from "react";
import { measurements } from "../services/utilStyles";

const BadStarts = styled.span`
    filter: grayscale(.9);
`;

const Heart = styled.span`
    filter: hue-rotate(300deg);
`;

const Rate = ({ rate }) => (
    <span style={{ filter: 'drop-shadow(0px 0px .5px black)' }}>
        {Array(Math.round(rate)).fill("⭐").join(' ')}
        <BadStarts>
            {Array(5 - Math.round(rate)).fill("⭐").join(' ')}
        </BadStarts>
    </span>
);

const Details = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${measurements.bounding.smaller};
    li {
        list-style: none;
        list-description: none;
    }
`;

export const Product = ({ image, name, description, price, stock, title, rating }) => (
    <AtomProduct>
        <AtomImage src={image} alt={title || name} />
        <main>
            <h2>{title || name}</h2>
            <Details>
                {price ? <li>Price: {price}</li> : ''}
                {stock ? <li>Stock: {stock}</li> : ''}
                {rating?.count ? <li><Heart>💓</Heart>: {rating.count}</li> : ''}
                {rating?.rate ? <li> <Rate rate={rating?.rate} /> </li> : ''}
            </Details>
        </main>
        <p>{description}</p>
    </AtomProduct>
);
