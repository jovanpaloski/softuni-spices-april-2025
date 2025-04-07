import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import spiceService from "../../services/spiceService.js";

export default function SpiceEdit() {
    const navigate = useNavigate();
    const { spiceId } = useParams();
    const [spice, setSpice] = useState({});

    useEffect(() => {
        spiceService.getOne(spiceId)
            .then(setSpice);
    }, [spiceId]);

    const formAction = async (formData) => {
        const spiceData = Object.fromEntries(formData);

        await spiceService.edit(spiceId, spiceData);

        navigate(`/spices/${spiceId}/details`);
    }

    return (
        <section id="edit-page" className="auth">
            <form id="edit" action={formAction}>
                <div className="container">

                    <h1>Edit Spice</h1>
                    <label htmlFor="leg-title">Spicy Title:</label>
                    <input type="text" id="title" name="title" defaultValue={spice.title} />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" defaultValue={spice.category} />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" defaultValue={spice.maxLevel} />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={spice.imageUrl} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={spice.summary}></textarea>
                    <input className="btn submit" type="submit" value="Edit Spice" />

                </div>
            </form>
        </section>
    )
}