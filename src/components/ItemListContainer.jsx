
function Saludo (props) {
    return ( 
        <h1>{props.mensaje}</h1>
    )
}

function ItemListContainer (){
    return (
        <Saludo mensaje="HOLA!"/>
    )
}

export default ItemListContainer;