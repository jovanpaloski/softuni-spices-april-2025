export default function Header() {
    return (
        <header>
            {/* <!-- Navigation --> */}
            <h1><a className="home" href="#">Spiciness</a></h1>
            <nav>
                <div>
                    <a className="adjust-0" href="#">All Spices</a>
                </div>
                {/* <!-- Logged-in users --> */}
                <div id="user">
                    <a className="adjust-1" href="#">Create Spice</a>
                    <a className="adjust-2" href="#">Logout</a>
                </div>
                {/* <!-- Guest users --> */}
                <div id="guest">
                    <a className="adjust-2" href="#">Login</a>
                    <a className="adjust-3" href="#">Register</a>
                </div>
            </nav>
        </header>
    )
}