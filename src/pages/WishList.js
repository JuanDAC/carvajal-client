import { useProducts } from '../services/getProducts';
import { Product } from '../components/Product';
import { AtomTitle } from '../components/atoms/AtomTitle';
import { AtomMain } from '../components/atoms/AtomMain';

export const WishList = () => {
    const userId = localStorage.getItem("id") || "";
    const products = useProducts({ route: `/products/${userId}` })
    return (
        <AtomMain>
            <AtomTitle>Wish List</AtomTitle>
            <section>
                {products.map(currentProduct => <Product props={currentProduct} />)}
            </section>
        </AtomMain>
    );
}