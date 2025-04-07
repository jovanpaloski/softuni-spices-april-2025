export default function SpiceCatalogItem({_id, title, category, imageUrl}) {
    return (
        <div className="allSpices">
            <div className="allSpices-info">
                <img src={imageUrl} />
                <h6>{title}</h6>
                <h2>{category}</h2>
                <a href="#" className="details-button">Details</a>
            </div>

        </div>
    )
}