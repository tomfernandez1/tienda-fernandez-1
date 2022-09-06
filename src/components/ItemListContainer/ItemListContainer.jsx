import React from "react";
import {getArray} from "../helpers/getArray";
import { array } from "../../data/data";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./ItemListContainer.scss";

export const ItemListContainer = ({greeting}) => {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getArray(array)
            .then((res)=>setProducts(res))
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        }, [])

    return (
        <div id="item-list-container">
            {
                loading?
                    <div>Cargando...</div>
                :
                    <ItemList items={products}/>
            }
        </div>
    )
}

export default ItemListContainer;