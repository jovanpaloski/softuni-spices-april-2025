import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../../contexts/useContext.js";

export default function Header() {
    const { email } = useContext(UserContext);

    return (
        <header>
            {/* <!-- Navigation --> */}
            <h1><Link className="home" to="/">Spiciness</Link></h1>
            <nav>
                <div>
                    <Link className="adjust-0" to="/spices">All Spices</Link>
                </div>

                {email
                    ? (
                        <div id="user">
                            <Link className="adjust-1" to="/spices/create">Create Spice</Link>
                            <Link className="adjust-2" to="/logout">Logout</Link>
                            {email}
                        </div>
                    )
                    : (
                        <div id="guest">
                            <Link className="adjust-2" to="/login">Login</Link>
                            <Link className="adjust-3" to="/register">Register</Link>
                        </div>
                    )
                }
            </nav>
        </header>
    )
}