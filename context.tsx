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
  casa: Casas,
  moneda: 'USD' | 'ARS' 
}

const arsCoin: OptionType = { nombre: 'Ars', casa: 'ars' as Casas, moneda: 'ARS' }
const defaultUSDCoin: OptionType = { nombre: 'usd', casa: 'blue' as Casas, moneda: 'USD' }

export function DolarProvider({ children, data }: { children: React.ReactNode, data: Dolar[] }) {
  const [from, setFrom] = useState<Casas>('ars')
  const [to, setTo] = useState<Casas >('blue')
  const [toOptions, setToOptions] = useState<Array<OptionType>>([defaultUSDCoin])
  const [fromOptions, setFromOptions] = useState<Array<OptionType>>([arsCoin])
  const [isSwapped, setIsSwapped] = useState<boolean>(false);

  useEffect(() => {
    const parsedOptions = data.map(({moneda, casa, nombre}) => ( {nombre, casa, moneda } ))
    setToOptions(parsedOptions)
  }, [data])

  const swapOptions = () => {
    setFrom((prevFrom) => {
      setTo(prevFrom);
      return to;
    });
  
    setFromOptions((prevFromOptions) => {
      setToOptions(prevFromOptions); 
      return toOptions; 
    });
  
    setIsSwapped((prev) => !prev);    
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

