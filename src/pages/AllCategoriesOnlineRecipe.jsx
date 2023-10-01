import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./../css/RandomOnline.css";

function AllCategoriesOnline() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((response) => response.json())
      .then((data) => setCategories(data.meals))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="header">
      {categories.length > 0 ? (
        <div>
          <h3 className="Title">Categories</h3>
          <ul>
            {categories.map((category) => (
              <li key={category.strCategory}>
                <Link to={`/category/${category.strCategory}`}>
                  {category.strCategory}
                </Link>
              </li>
            ))}
          </ul>
          <Link to={"/"}>
            <button>Go back</button>
          </Link>
        </div>
      ) : (
        <p>Loading categories...</p>
      )}
    </div>
  );
}

export default AllCategoriesOnline;
