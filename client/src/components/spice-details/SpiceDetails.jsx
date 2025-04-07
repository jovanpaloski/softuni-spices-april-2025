export default function SpiceDetails() {
    return (
        <section id="spice-details">
            <h1>Spice Details</h1>
            <div className="info-section">

                <div className="spice-header">
                    <img className="spice-img" src="images/MineCraft.png" />
                    <h1>Bright</h1>
                    <span className="levels">MaxLevel: 4</span>
                    <p className="type">Action, Crime, Fantasy</p>
                </div>

                <p className="text">
                    Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work
                    with an Orc to find a weapon everyone is prepared to kill for. Set in a world where fantasy
                    creatures live side by side with humans. A human cop is forced
                    to work with an Orc to find a weapon everyone is prepared to kill for.
                </p>

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