'use client'

import React, { createContext, useContext, useEffect, useState, } from 'react'
import { DolarMapper } from './utils/dolar.mapper'

interface State {
  from: Casas
  to: Casas
  toOptions: OptionType[]
  fromOptions: OptionType[]
  isSwapped: boolean
}

interface DolarContextType extends State {
  setFrom: (from: Casas | 'ars') => void
  setTo: (from: Casas | 'ars') => void
  swapOptions: () => void
}

const DolarContext = createContext<DolarContextType | undefined>(undefined)

export type OptionType = {
  nombre: string,
  casa: Casas,
  moneda: 'USD' | 'ARS' 
}


export function DolarProvider({ children, data }: { children: React.ReactNode, data: Dolar[] }) {
  const [from, setFrom] = useState<Casas>('ars')
  const [to, setTo] = useState<Casas >('blue')
  const [toOptions, setToOptions] = useState<Array<OptionType>>([{ casa: 'ars', nombre: 'Pesos', moneda: 'ARS' }])  
  const [fromOptions, setFromOptions] = useState<Array<OptionType>>([])
  const [isSwapped, setIsSwapped] = useState<boolean>(false);

  useEffect(() => {
    setToOptions(data.map(DolarMapper.mapCurrencyToOption))
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

