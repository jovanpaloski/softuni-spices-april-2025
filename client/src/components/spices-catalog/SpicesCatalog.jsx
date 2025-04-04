import { useEffect, useState } from "react"
import spiceService from "../../services/spiceService.js";

export default function SpicesCatalog() {
    const [spices, setSpices] = useState([]);

    useEffect(() => {
        spiceService.getAll()
            .then(setSpices)
    }, []);

    console.log(spices);

    return (
        <section id="catalog-page">
            <h1>All Spices</h1>
            {/* <!-- Display div: with information about every game (if any) --> */}
            <div className="allSpices">
                <div className="allSpices-info">
                    <img src="/images/red-hot-chili-peppers-stack-of-vegetables-royalty-free-image-1659639533.jpg" />
                    <h6>Action</h6>
                    <h2>Spicy Pepper</h2>
                    <a href="#" className="details-button">Details</a>
                </div>

            </div>
            <div className="allSpices">
                <div className="allSpices-info">
                    <img src="/images/red-hot-chili-peppers-stack-of-vegetables-royalty-free-image-1659639533.jpg" />
                    <h6>Action</h6>
                    <h2>Spicy Pepper</h2>
                    <a href="#" className="details-button">Details</a>
                </div>

            </div>
            <div className="allSpices">
                <div className="allSpices-info">
                    <img src="/images/red-hot-chili-peppers-stack-of-vegetables-royalty-free-image-1659639533.jpg" />
                    <h6>Action</h6>
                    <h2>Spicy Pepper</h2>
                    <a href="#" className="details-button">Details</a>
                </div>
            </div>

            {/* <!-- Display paragraph: If there is no spices  --> */}
            <h3 className="no-articles">No Articles Yet</h3>
        </section>
    )
}