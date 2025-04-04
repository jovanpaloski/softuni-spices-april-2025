export default function Header() {
    return (
        <header>
            {/* <!-- Navigation --> */}
            <h1><a className="home" href="#">Spice Scoville Units</a></h1>
            <nav>
                <a href="#">All Spices</a>
                {/* <!-- Logged-in users --> */}
                <div id="user">
                    <a href="#">Create Spice</a>
                    <a href="#">Logout</a>
                </div>
                {/* <!-- Guest users --> */}
                <div id="guest">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </div>
            </nav>
        </header>
    )
}