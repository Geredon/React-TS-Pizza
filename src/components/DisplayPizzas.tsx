import {Pizza} from "../models/Pizza";
import {FC} from "react";
import {SinglePizza} from "./SinglePizza";

interface DisplayPizzasProps {
    pizzasList: Pizza[];
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
}

export const DisplayPizzas: FC<DisplayPizzasProps> = ({pizzasList, updatePizza, deletePizza}) => {
    return (
        <div className="container">
            {pizzasList.map((pizza) => {
                return <SinglePizza
                    pizza={pizza}
                    key={pizza.id}
                    updatePizza={updatePizza}
                    deletePizza={deletePizza}
                />;
            })}
        </div>
    )
};