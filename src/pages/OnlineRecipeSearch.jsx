import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

function OnlineRecipeSearch() {
    const { name } = useParams();
console.log(name)
const [display, setDisplay]= useState([])
axios.get('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata').then((response)=>{
    setDisplay(response.data).catch((error)=> console.error(error))
    console.log(display);
})
    return (
        <article>
            <h1>Receta online de {name}</h1>
            
        </article>
    )
}

export default OnlineRecipeSearch;
