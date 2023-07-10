import { useParams } from "react-router-dom";

function RecipePage() {
    const { id } = useParams();

    return (
        <article>
            <h1>Receta {id}</h1>
            <p>bla bla bla.</p>
        </article>
    )
}

export default RecipePage;