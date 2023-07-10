import { useParams } from "react-router-dom";

function IngredientPage() {
    const { id } = useParams();

    return (
        <article>
            <h1>Ingrediente {id}</h1>
            <p>bla bla bla.</p>
        </article>
    )
}

export default IngredientPage;