import React from 'react'


import StoreItems from "../data/products.json";
import { Item } from './Item';



export const ItemList = () => {
  return (
    <div className='w-full p-4 bg-slate-900 text-white flex gap-4 justify-center'>
        {StoreItems.map(e=>{
            return <Item key={e.id} e={e} />
        })}
    </div>
  )
}
