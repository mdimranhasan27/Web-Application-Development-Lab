import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Categories() {

    const [categories, setCategories] = useState([]);
    const [status, setStatus] = useState("");

    async function fetchCategories() {

        try {

            setStatus("Loading...");

            const response = await fetch(
                "https://www.themealdb.com/api/json/v1/1/categories.php"
            );

            const data = await response.json();

            setCategories(data.categories);

            setStatus("");

        } catch (error) {

            console.log(error);
            setStatus("Error loading categories");

        }
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div>

            <h1
                style={{
                    backgroundColor: "blue",
                    color: "white",
                    padding: "12px",
                    margin: "5px"
                }}
            >
                Food Categories
            </h1>

            {status && <h2>{status}</h2>}

            {
                categories.map((category) => (

                    <div key={category.idCategory}>

                        <img
                            src={category.strCategoryThumb}
                            width="200"
                            alt={category.strCategory}
                        />

                        <h2>

                            <Link
                                to={`/category/${category.strCategory}`}
                            >
                                {category.strCategory}
                            </Link>

                        </h2>

                    </div>

                ))
            }

        </div>
    );
}

export default Categories;