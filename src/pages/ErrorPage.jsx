import "./../css/HomePage.css";
import React from "react";
import "./../css/HomePage.css";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <article class="error-page">
      <h1>Parece que algo no ha ido bien...</h1>
      <Link to="/">Volver a inicio</Link>
    </article>
  );
}
