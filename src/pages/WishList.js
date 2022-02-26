import { useProducts } from '../services/getProducts';
import { Product } from '../components/Product';

export const WishList = () => {
    const userId = localStorage.getItem("id") || "";
    const products = useProducts({ route: `/products/${userId}` })
    return (
        <main>
            <h1>Wish List</h1>
            <section>
                {products.map(currentProduct => <Product props={currentProduct} />)}
            </section>
        </main>
    );
}