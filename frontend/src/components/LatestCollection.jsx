import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    products.map();

  return (
    <div>
      
    </div>
  )
}

export default LatestCollection
