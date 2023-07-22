import { useParams } from "react-router-dom";

function OnlineRecipeSearch() {
    const { name } = useParams();

    return (
        <article>
            <h1>Receta online de {name}</h1>
            
        </article>
    )
}

export default OnlineRecipeSearch;
