export default function SpiceCatalog() {
    return (
        <section id="catalog-page">
            <h1>All Spices</h1>
            {/* <!-- Display div: with information about every spice (if any) --> */}
            <div className="allSpices">
                <div className="allSpices-info">
                    <img src="/images/Carribean-Red-Peppers.jpg" />
                    <h6>Action</h6>
                    <h2>Add Spice</h2>
                    <a href="#" className="details-button">Details</a>
                </div>

            </div>
            <div className="allSpices">
                <div className="allSpices-info">
                    <img src="/images/Carribean-Red-Peppers.jpg" />
                    <h6>Action</h6>
                    <h2>Add Spice</h2>
                    <a href="#" className="details-button">Details</a>
                </div>

            </div>
            <div className="allSpices">
                <div className="allSpices-info">
                    <img src="/images/Carribean-Red-Peppers.jpg" />
                    <h6>Action</h6>
                    <h2>Add Spice</h2>
                    <a href="#" className="details-button">Details</a>
                </div>
            </div>

            {/* <!-- Display paragraph: If there is no spices  --> */}
            <h3 className="no-articles">No Spices Yet</h3>
        </section>
    )
}