import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router"
import spiceService from "../../services/spiceService.js";

export default function SpiceDetails() {
    const navigate = useNavigate();
    const [spice, setSpice] = useState({});
    const { spiceId } = useParams();

    useEffect(() => {
        (async() => {
            const result = await spiceService.getOne(spiceId);
            setSpice(result);
        })();
    }, [spiceId]);

    const spiceDeleteClickHandler = async () => {
        const hasConfirm = confirm(`Are you sure you want to delete ${spice.title} spice?`);

        if (!hasConfirm) {
            return;
        }

        await spiceService.delete(spiceId);

        navigate('/spices');
    };

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
                    <Link to={`/spices/${spiceId}/edit`} className="button">Edit</Link>
                    <button onClick={spiceDeleteClickHandler} className="button">Delete</button>
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