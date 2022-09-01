import {React, useState, useEffect} from "react";
import Item from "./Item";

const productos = [{ 
    id:1, 
    nombre:"Flynn Paff", 
    precio:10, 
    imagen:"https://dulcilandia.com.ar/par/wp-content/uploads/sites/4/2020/04/00601043-510x510.png"
},

{
    id:2, 
    nombre:"Sugus", 
    precio:6, 
    imagen:"https://candysweet.com.uy/wp-content/uploads/2021/08/Sugus.jpg"
},

{
    id:3, 
    nombre:"Bubbaloo", 
    precio:7, 
    imagen:"https://depositoelmayorista.com.ar/wp-content/uploads/2020/03/chicles-pagina-3.png"
},

{
    id:4, 
    nombre:"Vauquita", 
    precio:50, 
    imagen:"https://www.deliargentina.com/image/cache/catalog/vauquita%20/F52A43E5-2CD0-44CD-BFA5-D5A944A4111D-335x335.jpeg"
}
]

function ItemList () {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        console.log("useEffect");
    })

    return (
        <div>
            {loading ? (
            <h3>Cargando...</h3>
        ) : (

        productos.map ((producto) =>
        <Item
            nombre={producto.nombre}
            precio={producto.precio}
            id={producto.id}
            imagen={producto.imagen}
        />))}       
        </div>
        
     )

}

export default ItemList;