'use client'
import React, { InputHTMLAttributes, useState } from 'react'
import { useDolar } from '@/context'
import Options from './calculator-options'
import { ArrowRightLeft } from 'lucide-react'
import { Input } from './ui/input'
import { getDolarInfo } from '@/services/services'
import Button from './ui/button'
import CalculatorResult from './calculator-result'


const Calculator = () => {
  const { toOptions, fromOptions, swapOptions, from, to, setFrom, setTo } = useDolar()
  const [value, setValue] = useState<number>(0)
  const [input, setInput] = useState<number>(0)

  const handleClick = async  () => {
    let data = await getDolarInfo(from !== 'ars' ? from : to)
    if(from === 'ars') {
      setValue(input / data?.venta)
      return;
    }  
    setValue(input * data?.compra)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(parseFloat(e.target.value))
  }


  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-2'>
        <Options options={fromOptions} value={from} handleOptionChange={setFrom}/>
        <Button onClick={() => {swapOptions(); setValue(0)}} size='small' variant='secondary'> <ArrowRightLeft className='h-4 w-4'/> </Button>
        <Options options={toOptions} value={to} handleOptionChange={setTo}/>
      </div>
      <div className='flex flex-col gap-2'>
        <Input placeholder='Cuanto cobraste?' type='number' onChange={handleChange}  value={input}/>
        <Button onClick={handleClick} size='small'>Calculate</Button>
        <CalculatorResult result={value} />
      </div>
    </div>
  )
}

Calculator.displayName = 'Calculator'
export default Calculator