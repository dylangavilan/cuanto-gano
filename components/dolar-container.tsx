import React from 'react'
import Card from './dolar-card'


function DolarInfo({ list }: {list: Dolar[]} ) {
  return (
    <div className='grid grid-cols-2 gap-2'>
        {list?.map((el) => (
            <Card {...el} key={el.nombre}/>
        ))}
    </div>
  )
}

export default DolarInfo