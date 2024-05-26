import {Pizza} from "../models/Pizza";
import React, {FC, useState} from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import {EditPizzaForm} from "./EditPizzaForm";

interface SinglePizzaProps {
    pizza: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
}

export const SinglePizza: FC<SinglePizzaProps> = ({pizza, updatePizza, deletePizza}) => {
    const [edit, setEdit] = useState<boolean>(false);

    const handleToggleEdit = () => {
        setEdit(!edit);
    }

    const handleDelete = () => {
        deletePizza(pizza.id)
    }

    return(
        <div className="pizza">
            <img src={`/images/${pizza.img}`} alt={pizza.title}/>
            <h2>{pizza.title}</h2>
            <span>{pizza.price} ₽</span>
            <div className="pizza-controls">
                <AiFillEdit onClick={handleToggleEdit} />
                <MdDelete  onClick={handleDelete} />
            </div>

            {edit &&(
                <EditPizzaForm
                    data={pizza}
                    updatePizza={updatePizza}
                    handleToggleEdit={handleToggleEdit}
                />
            )}
        </div>
    )
};