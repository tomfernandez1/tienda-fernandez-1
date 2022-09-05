import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const incrementar = () => {
        if (count<=stock && stock>0){
        setCount(count + 1);
        }
    }
    const decrementar = () => {
        setCount((valAnt) => valAnt > 1 ? count - 1 : count);
    };
    

  return (
    <div>
        <h3>{count}</h3>
        <button className="btn btn-danger" onClick={decrementar}>-</button>
        <button className="btn btn-success" onClick={incrementar}>+</button>
        <button className="btn btn-primary"
            onClick={() => {
                    onAdd(count);
                    if (count <= stock && stock>0);
                 }}
            >Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;