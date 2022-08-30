import ItemCount from "./ItemCount";

function Saludo (props) {
    return ( 
        <h1>{props.mensaje}</h1>
    )
}

function ItemListContainer (){
    return (
        <>
            <Saludo mensaje="HOLA!" />
            <ItemCount stock="5" initial="1" />
        </>
    )
}

export default ItemListContainer;