
export const Login = () => {
    const url_backend = "url_backend";
    return (
        <main>
            <form method="post" action={url_backend} >
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
            </form>
        </main>
    );
}


