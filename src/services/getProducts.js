
import { useState } from "react";


export const url_backend = "url_backend";

function useProducts({ route }) {
    const [products, setProduct] = useState([]);

    fetch(`${url_backend}${route}`)
        .then(response => response.json())
        .then(products => setProduct(products));

    return products;
}

export { useProducts };
