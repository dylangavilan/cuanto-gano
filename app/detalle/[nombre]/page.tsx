import React from 'react'

async function Page({ params: { nombre } }: {params :{ nombre: string}}) {
  return (
    <div>
      <h1>{nombre ?? ''}</h1>
    </div>
  )
}

export default Page