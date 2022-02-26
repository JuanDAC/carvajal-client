import { Link } from "react-router-dom";


export const Header = () => (
    <header>
        <figure className="icon-header"></figure>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/wish-list">Wish List</Link>
        </nav>
        <Link to="/login">Logout</Link>
    </header>
);