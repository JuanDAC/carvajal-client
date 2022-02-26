
import { useEffect, useState } from "react";


export const url_backend = "https://fakestoreapi.com/";

function useProducts({ route }) {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch(`${url_backend}${route}`)
            .then(response => response.json())
            .then(products => [setProduct(products), console.log(products)]);
    }, [route]);

    return products;
}

export { useProducts };
