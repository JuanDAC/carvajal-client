import { AtomMain } from "../components/atoms/AtomMain";
import { AtomTitle } from "../components/atoms/AtomTitle";


export const Error404 = () => {
    const imageURL = "https://www.initcoms.com/wp-content/uploads/2020/07/404-error-not-found-1.png";
    return (
        <AtomMain>
            <AtomTitle>Error Not Found</AtomTitle>
            <img
                style={{
                    alignItems: 'center',
                    height: 'calc(100vh - 304px)'
                }}

                src={imageURL} alt="error Not Found"
            />
        </AtomMain>
    );
}