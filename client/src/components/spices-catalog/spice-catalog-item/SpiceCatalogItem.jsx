export default function SpiceCatalogItem({
    _id,
    title,
    category,
    imageUrl,
}) {
    return (
        <div className="allSpices">
            <div className="allSpices-info">
                <img src={imageUrl} />
                <h6>{category}</h6>
                <h2>{title}</h2>
                <a href="#" className="details-button">Details</a>
            </div>
        </div>
    )
}