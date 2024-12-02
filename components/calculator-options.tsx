import { OptionType } from '@/context'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { shortName } from '@/lib/utils'

const Options = ({ options, value, handleOptionChange }: 
                 { options: OptionType[], value: string, handleOptionChange: (value: Casas)  => void}) => {
                
   return (
    <Select onValueChange={handleOptionChange} defaultValue={value} >
        <SelectTrigger className="w-[180px] bg-white ">
        <SelectValue placeholder="Seleccionar" className='capitalize'>
          {shortName(value) || "Seleccionar"}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className='bg-white'>
          {options?.map((option, i) => (
            <SelectItem key={option.casa + i} value={option.casa} className='capitalize'>
              {shortName(option.nombre)}
            </SelectItem>
          ))}
        </SelectContent>
    </Select>    
  )
}

Options.displayName = 'CalcultarOptions'

export default Options