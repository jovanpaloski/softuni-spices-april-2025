import { useEffect, useState } from "react"
import spiceService from "../../services/spiceService.js";
import SpiceCatalogItem from "./spice-catalog-item/SpiceCatalogItem.jsx";

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
            
            {spices.map(spice => <SpiceCatalogItem key={spice._id} {...spice} />)};

            {/* <!-- Display paragraph: If there is no spices  --> */}
            <h3 className="no-articles">No Articles Yet</h3>
        </section>
    )
}