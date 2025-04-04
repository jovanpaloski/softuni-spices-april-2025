import { Link } from "react-router"

export default function Header() {
    return (
        <header>
            {/* <!-- Navigation --> */}
            <h1><Link className="home" to="/">Spice Scoville Units</Link></h1>
            <nav>
                <Link to="/spices">All Spices</Link>
                {/* <!-- Logged-in users --> */}
                <div id="user">
                    <Link to="/spices/create">Create Spice</Link>
                    <Link to="/logout">Logout</Link>
                </div>
                {/* <!-- Guest users --> */}
                <div id="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>
    )
}