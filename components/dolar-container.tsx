import React from 'react'
import Card from './dolar-card'


function DolarInfo({ list }: {list: Dolar[]} ) {
  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-center text-2xl'>Cotizaciones</h2>
      <div className='grid grid-cols-2 gap-2'>
          {list?.map((el) => (
              <Card {...el} key={el.nombre}/>
          ))}
      </div>
    </div>
  )
}

export default DolarInfo