import { Link } from "react-router";

export default function SpiceCatalogItem({_id, title, category, imageUrl}) {
    return (
        <div className="allSpices">
            <div className="allSpices-info">
                <img src={imageUrl} />
                <h6>{title}</h6>
                <h2>{category}</h2>
                <Link to={`/spices/${_id}/details`} className="details-button">Details</Link>
            </div>

        </div>
    )
}