
export const Product = ({ image, name, description, price, stock }) => (
    <article>
        <figure>
            <img src={image} alt={name} />
        </figure>
        <h2>{name}</h2>
        <ul>
            <li>Price: {price}</li>
            <li>Stock: {stock}</li>
        </ul>
        <p>{description}</p>
    </article>
);
