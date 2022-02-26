import { useProducts } from '../services/getProducts';
import { Product } from '../components/Product';

export const Home = () => {
    const products = useProducts({ route: `/products` })
    return (
        <main>
            <h1>Products</h1>
            <section>
                {products.map(currentProduct => <Product props={currentProduct} />)}
            </section>
        </main>
    );
}
