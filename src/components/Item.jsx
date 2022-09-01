import React from 'react'

function Item ({nombre, id, precio, imagen})  {
    
  return (
    <div className="card" style={{width: '18rem', margin:"2vw", alignItems:"center"}}>
  <img src={imagen} className="card-img-top" alt="..." style={{width: "250px"}} />
  <div className="card-body">
    <p className="card-text">Id: {id}</p>
    <p className="card-text">Nombre: {nombre}</p>
    <p className="card-text">Precio: ${precio}</p>
    <button type="button" class="btn btn-primary">Ver detalles del producto</button>
  </div>
</div>

 
  )
}

export default Item




