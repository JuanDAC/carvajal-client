import { Link } from "react-router-dom";
import { AtomHeader } from "./atoms/AtomHeader";
import { AtomLink } from "./atoms/AtomLink";
import { IconHeader } from "./figures/IconHeader";

export const Header = () => (
    <AtomHeader>
        <IconHeader />
        <nav>
            <Link to="/">
                <AtomLink>
                    Home
                </AtomLink>
            </Link>
            <Link to="/wish-list">
                <AtomLink>
                    Wish List
                </AtomLink>
            </Link>
        </nav>
        <Link to="/login">
            <AtomLink style={{ width: "210px" }}>
                Logout
            </AtomLink>
        </Link>
    </AtomHeader>
);