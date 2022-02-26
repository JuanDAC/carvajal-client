import { useProducts } from '../services/getProducts';
import { Product } from '../components/Product';
import { AtomTitle } from '../components/atoms/AtomTitle';
import { AtomMain } from '../components/atoms/AtomMain';

export const Home = () => {
    const products = useProducts({ route: `/products` })
    return (
        <AtomMain>
            <AtomTitle>Products</AtomTitle>
            <section>
                {products.map(currentProduct => <Product props={currentProduct} />)}
            </section>
        </AtomMain>
    );
}
