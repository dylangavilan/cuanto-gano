'use client'

import React, { createContext, useContext, useEffect, useState, } from 'react'


interface DolarContextType {
  from: Casas | 'ars'
  to: Casas | 'ars'
  setFrom: (from: Casas | 'ars') => void
  setTo: (from: Casas | 'ars') => void
  toOptions: OptionType[]
  fromOptions: OptionType[]
  swapOptions: () => void
  isSwapped: boolean
}

const DolarContext = createContext<DolarContextType | undefined>(undefined)
export type OptionType = {
  nombre: string,
  casa: Casas 
}

export function DolarProvider({ children, data }: { children: React.ReactNode, data: Dolar[] }) {
  const [from, setFrom] = useState<Casas>('ars')
  const [to, setTo] = useState<Casas >('blue')
  const [toOptions, setToOptions] = useState<Array<OptionType>>([])
  const [fromOptions, setFromOptions] = useState<Array<OptionType>>([{ nombre: 'Ars', casa: 'ars'}])
  const [isSwapped, setIsSwapped] = useState<boolean>(false);
  useEffect(() => {
    const parsedOptions = data.map((el) => ( { nombre:el.nombre, casa:el.casa} ))
    setToOptions(parsedOptions)
  }, [data])

  const swapOptions = () => {
    setFrom((prevFrom) => {
      setTo(prevFrom); // Actualiza "to" usando el valor actual de "from"
      return to; // Cambia "from" al valor actual de "to"
    });
  
    setFromOptions((prevFromOptions) => {
      setToOptions(prevFromOptions); // Cambia las opciones "to" a "from"
      return toOptions; // Cambia las opciones "from" a "to"
    });
  
    setIsSwapped((prev) => !prev); // Cambia el estado de isSwapped
  };

  const contextValue: DolarContextType = {
      from: from,
      to: to,
      setFrom,
      setTo,
      toOptions, 
      fromOptions,
      swapOptions,
      isSwapped
    };


  return (
    <DolarContext.Provider value={contextValue}>
      {children}
    </DolarContext.Provider>
  )
}

export function useDolar() {
  const context = useContext(DolarContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

