import { useProducts } from '../services/getProducts';
import { Product } from '../components/Product';
import { AtomTitle } from '../components/atoms/AtomTitle';
import { AtomMain } from '../components/atoms/AtomMain';
import { AtomContainer } from '../components/atoms/AtomContainer';

export const Home = () => {
    const products = useProducts({ route: `/products` })
    return (
        <AtomMain>
            <AtomTitle>Products</AtomTitle>
            <AtomContainer>
                {products.map((currentProduct, key) => <Product {...currentProduct} key={key} />)}
            </AtomContainer>
        </AtomMain>
    );
}
