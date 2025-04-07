export default function Home() {
    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL New Spicy Peppers Are</h2>
                <h3>Only In Spices</h3>
            </div>
            <img className="img-0" src="/images/timothy-l-brock-WJ5mej6mWi4-unsplash-1024x683.jpg" alt="hero" />

            <div id="home-page">
                <h1>Latest Spices</h1>

                {/* <!-- Display div: with information about every spice (if any) --> */}
                <div className="spice">
                    <div className="image-wrap">
                        <img src="/images/Chili-Pepper-e1640676095474.jpg" />
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
                        <img src="/images/Chilli-Pepper-Surprise-Hot-Mixed-5-Plants-02-1-1000x1000.jpg" />
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
                        <img src="/images/scoville-scale-for-peppers_1600x.webp" />
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