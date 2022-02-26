import { AtomForm } from "../components/atoms/AtomForm";
import { AtomInput } from "../components/atoms/AtomInput";
import { AtomMain } from "../components/atoms/AtomMain";
import { AtomTitle } from "../components/atoms/AtomTitle";




export const Login = () => {
    const url_backend = "url_backend";
    return (
        <AtomMain style={{ justifyContent: 'center' }}>
            <AtomForm
                style={{ marginBottom: '152px' }}
                method="post"
                action={url_backend}
            >
                <AtomTitle>Login</AtomTitle>
                <AtomInput type="text" placeholder="Username" />
                <AtomInput type="password" placeholder="Password" />
            </AtomForm>
        </AtomMain>
    );
}


