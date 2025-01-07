import { shortName } from '@/lib/utils';
import React from 'react'

const Item = ({ title, value }: { title:string, value:number }) => {
    return (
    <div className='flex flex-row gap-2'>
        <h4 className='text-[#A18249]'>{title}</h4>
        <p className='text-[#A18249]'>{value}</p>
    </div>    
    )
}

function Card({ nombre, venta, compra }: Dolar ) {
  return (
    <div className='flex flex-col  gap-1.5  
                    justify-between  border-solid 
                    border-[#F4EFE6] border-2 rounded-md px-6 py-2'>
        <div>
            <h2>{shortName(nombre)}</h2>
        </div>
        <div className='flex flex-col'>
            <Item title='Compra' value={compra} />
            <Item title='Venta' value={venta} />
        </div>
    </div>
  )
}

export default Card