import { useEffect, useState } from "react";
import { useParams } from "react-router"
import spiceService from "../../services/spiceService.js";

export default function SpiceDetails() {
    const [spice, setSpice] = useState({});
    const { spiceId } = useParams();

    useEffect(() => {
        (async() => {
            const result = await spiceService.getOne(spiceId);
            setSpice(result);
        })();
    }, [spiceId]);

    return (
        <section id="spice-details">
            <h1>Spice Details</h1>
            <div className="info-section">

                <div className="spice-header">
                    <img className="spice-img" src={spice.imageUrl} />
                    <h1>{spice.title}</h1>
                    <span className="levels">MaxLevel: {spice.maxLevel}</span>
                    <p className="type">{spice.category}</p>
                </div>

                <p className="text">{spice.summary}</p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* <!-- list all comments for current spice (If any) --> */}
                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best spice.</p>
                        </li>
                    </ul>
                    {/* <!-- Display paragraph: If there are no spices in the database --> */}
                    <p className="no-comment">No comments.</p>
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this spice )  --> */}
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current spice ) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    )
}