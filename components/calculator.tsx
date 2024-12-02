'use client'
import React, { InputHTMLAttributes, useState } from 'react'
import { useDolar } from '@/context'
import Options from './calculator-options'
import { ArrowRightLeft } from 'lucide-react'
import { Input } from './ui/input'
import { getDolarInfo } from '@/services/services'


const Calculator = () => {
  const { toOptions, fromOptions, swapOptions, from, to, isSwapped, setFrom, setTo } = useDolar()

  const [input, setInput] = useState<number>(0)
  const handleClick = async  () => {
    let data = await getDolarInfo(from !== 'ars' ? from : to)
    if(from === 'ars') {
      console.log(input / data?.venta)
      return;
    } 
    console.log(input * data.compra)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(parseFloat(e.target.value))
  }


  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-2'>
        <Options options={fromOptions} value={from} handleOptionChange={setFrom}/>
        <button onClick={swapOptions}> <ArrowRightLeft /> </button>
        <Options options={toOptions} value={to} handleOptionChange={setTo}/>
      </div>
      <Input placeholder='Cuanto cobraste?' type='number' onChange={handleChange} />
      <button onClick={handleClick}>Calculate</button>
    </div>
  )
}
Calculator.displayName = 'Calculator'
export default Calculator