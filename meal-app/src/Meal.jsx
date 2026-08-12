import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Meal() {

    const [meals, setMeals] = useState([]);
    const [status, setStatus] = useState("");

    const { categoryName } = useParams();

    async function fetchMeals() {

        try {

            setStatus("Loading...");

            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
            );

            const data = await response.json();

            setMeals(data.meals);

            setStatus("");

        } catch (error) {

            console.log(error);
            setStatus("Error loading meals");

        }
    }

    useEffect(() => {
        fetchMeals();
    }, [categoryName]);

    return (
        <div>

            <h1
                style={{
                    backgroundColor: "green",
                    color: "white",
                    padding: "12px"
                }}
            >
                {categoryName} Foods
            </h1>

            <Link to="/">
                Back to Categories
            </Link>

            {status && <h2>{status}</h2>}

            {
                meals.map((meal) => (

                    <div key={meal.idMeal}>

                        <img
                            src={meal.strMealThumb}
                            width="200"
                            alt={meal.strMeal}
                        />

                        <h2>

                            <Link
                                to={`/meal/${meal.idMeal}`}
                            >
                                {meal.strMeal}
                            </Link>

                        </h2>

                    </div>

                ))
            }

        </div>
    );
}

export default Meal;