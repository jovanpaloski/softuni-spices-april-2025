export default function Home() {
    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL New Spices Are</h2>
                <h3>Only In SpicesUnits</h3>
            </div>
            <img className="spice-0" src="/images/chiles-mexicanos.jpg" alt="hero" />

            <div id="home-page">
                <h1>Latest Spices</h1>

                {/* <!-- Display div: with information about every spice (if any) --> */}
                <div className="spice">
                    <div className="image-wrap">
                        <img className="spice-1" src="/images/Cayenne-Peppers-360x480.webp" />
                    </div>
                    <h3>Spicy Peppers</h3>
                    <div className="rating">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">Details</a>
                    </div>
                </div>
                <div className="spice">
                    <div className="image-wrap">
                        <img className="spice-2" src="/images/Sili.webp" />
                    </div>
                    <h3>Spicy Peppers</h3>
                    <div className="rating">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">Details</a>
                    </div>
                </div>
                <div className="spice">
                    <div className="image-wrap">
                        <img className="spice-3" src="/images/chilli-2438001_1920.jpg" />
                    </div>
                    <h3>Spicy Peppers</h3>
                    <div className="rating">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">Details</a>
                    </div>
                </div>

                {/* <!-- Display paragraph: If there is no spices  --> */}
                <p className="no-articles">No Spices Yet</p>
            </div>
        </section>
    )
}