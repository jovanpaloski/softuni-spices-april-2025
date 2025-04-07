import { Link } from "react-router";

export default function Header() {
    return (
        <header>
            {/* <!-- Navigation --> */}
            <h1><Link className="home" to="/">Spiciness</Link></h1>
            <nav>
                <div>
                    <Link className="adjust-0" to="/spices">All Spices</Link>
                </div>
                {/* <!-- Logged-in users --> */}
                <div id="user">
                    <Link className="adjust-1" to="/spices/create">Create Spice</Link>
                    <Link className="adjust-2" to="/logout">Logout</Link>
                </div>
                {/* <!-- Guest users --> */}
                <div id="guest">
                    <Link className="adjust-2" to="/login">Login</Link>
                    <Link className="adjust-3" to="/register">Register</Link>
                </div>
            </nav>
        </header>
    )
}