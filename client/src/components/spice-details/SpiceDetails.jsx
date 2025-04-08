import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router"
import spiceService from "../../services/spiceService.js";
import CommentsShow from "../comments-show/CommentsShow";
import CommentsCreate from "../comments-create/CommentsCreate";
import commentService from "../../services/commentService.js";

export default function SpiceDetails({email,}) {
    const navigate = useNavigate();
    const [spice, setSpice] = useState({});
    const [comments, setComments] = useState([]);
    const { spiceId } = useParams();

    useEffect(() => {
        spiceService.getOne(spiceId)
            .then(setSpice);

        commentService.getAll(spiceId)
            .then(setComments)
    }, [spiceId]);

    const spiceDeleteClickHandler = async () => {
        const hasConfirm = confirm(`Are you sure you want to delete ${spice.title} spice?`);

        if (!hasConfirm) {
            return;
        }

        await spiceService.delete(spiceId);

        navigate('/spices');
    };

    const commentCreateHandler = (newComment) => {
        setComments(state => [...state, newComment]);
    }

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

                <CommentsShow comments={comments} />

                {/* <!-- Edit/Delete buttons ( Only for creator of this spice )  --> */}
                <div className="buttons">
                    <Link to={`/spices/${spiceId}/edit`} className="button">Edit</Link>
                    <button onClick={spiceDeleteClickHandler} className="button">Delete</button>
                </div>
            </div>

            <CommentsCreate email={email} spiceId={spiceId} onCreate={commentCreateHandler} />

        </section>
    )
}