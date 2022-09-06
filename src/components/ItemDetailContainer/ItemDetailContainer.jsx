import React, { useEffect, useState } from 'react'
import { getArray } from '../helpers/getArray'
import { array } from '../../data/data'
import ItemDetail from './ItemDetail'


export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getArray(array)
      .then(res=> {
        const item = res.find((item)=> item.id === 3)
        setProduct(item)
      })
      .catch(err=>console.log(err))
      .finally(()=>setLoading(false))
  }, [])

    return (
    <div>{
          loading?
            <div>Cargando...</div>
          :
            <ItemDetail {...product}/>
      }
    </div>
  )

}

    
