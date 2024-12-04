import { shortName } from '@/lib/utils';
import React from 'react'

const Item = ({ title, value }: { title:string, value:number }) => {
    return (
    <div className='flex flex-col'>
        <h4 className='text-gray-500'>{title}</h4>
        <p>{value}</p>
    </div>    
    )
}

function Card({ nombre, venta, compra }: Dolar ) {
  return (
    <div className='flex flex-col lg:flex-row gap-1.5  lg:w-64 justify-between border border-solid border-gray-500 rounded-md px-6 py-2'>
        <div>
            <h2>{shortName(nombre)}</h2>
        </div>
        <div className='flex flex-row gap-2'>
            <Item title='Venta' value={venta} />
            <Item title='Compra' value={compra} />
        </div>
    </div>
  )
}

export default Card