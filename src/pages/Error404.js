

export const Error404 = () => {
    const imageURL = "https://www.initcoms.com/wp-content/uploads/2020/07/404-error-not-found-1.png";
    return (
        <main>
            <h1>Error Not Found</h1>
            <img src={imageURL} alt="error Not Found" />
        </main>
    );
}