import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function MealDetails() {

    const [meal, setMeal] = useState(null);
    const [status, setStatus] = useState("");

    const { mealId } = useParams();

    async function fetchMealDetails() {

        try {

            setStatus("Loading...");

            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
            );

            const data = await response.json();

            setMeal(data.meals[0]);

            setStatus("");

        } catch (error) {

            console.log(error);
            setStatus("Error loading details");

        }
    }

    useEffect(() => {
        fetchMealDetails();
    }, [mealId]);

    return (
        <div>

            <Link to="/">
                Back to Categories
            </Link>

            {status && <h2>{status}</h2>}

            {
                meal && (

                    <div>

                        <h1>{meal.strMeal}</h1>

                        <img
                            src={meal.strMealThumb}
                            width="300"
                            alt={meal.strMeal}
                        />

                        <h2>
                            Category: {meal.strCategory}
                        </h2>

                        <h2>
                            Area: {meal.strArea}
                        </h2>

                        <h2>
                            Instructions
                        </h2>

                        <p>
                            {meal.strInstructions}
                        </p>

                    </div>

                )
            }

        </div>
    );
}

export default MealDetails;