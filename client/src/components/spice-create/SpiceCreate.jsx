import { useNavigate } from 'react-router'
import spiceService from "../../services/spiceService.js";

export default function SpiceCreate() {
    const navigate = useNavigate();

    const submitAction = async (formData) => {
        const spiceData = Object.fromEntries(formData);

        const result = await spiceService.create(spiceData);

        navigate('/spices');
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" action={submitAction}>
                <div className="container">

                    <h1>Create Spice</h1>
                    <label htmlFor="leg-title">Spicy Title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter Spicy Title..." />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter Spicy Category..." />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                    <label htmlFor="spice-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Create Spice" />
                </div>
            </form>
        </section>
    )
}