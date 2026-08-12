import { Routes, Route } from "react-router-dom";

import Categories from "./Categories";
import Meal from "./Meal";
import MealDetails from "./MealDetails";

function App() {

    return (
        <Routes>

            <Route
                path="/"
                element={<Categories />}
            />

            <Route
                path="/category/:categoryName"
                element={<Meal />}
            />

            <Route
                path="/meal/:mealId"
                element={<MealDetails />}
            />

        </Routes>
    );
}

export default App;