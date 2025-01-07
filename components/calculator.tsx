'use client'
import React, { useState } from 'react'
import { useDolar } from '@/context'
import Options from './calculator-options'
import { ArrowRightLeft } from 'lucide-react'
import { Input } from './ui/input'
import { getDolarByTime, getDolarInfo } from '@/services/services'
import Button from './ui/button'
import CalculatorResult from './calculator-result'


const Calculator = () => {
  const { toOptions, fromOptions, swapOptions, from, to, setFrom, setTo } = useDolar()
  const [value, setValue] = useState<number>(0)
  const [input, setInput] = useState<number>(0)
  const [salaryLastMonth, setSalaryLastMonth] = useState<number>(0)
  const [percentaje, setPercentage] = useState<number>(0)
  
  const handleClick = async  () => {
    const data = await getDolarInfo(from !== 'ars' ? from : to)
    const date = new Date()
    date.setMonth(date.getMonth() - 1);
    const formattedDate = date.toLocaleDateString()
                              .split('/')
                              .reverse()
                              .map((el) => (parseInt(el) < 10 ? `0${el}` : el))
                              .join('/');
    console.log(formattedDate)
    const lastDolar = await getDolarByTime(from !== 'ars' ? from : to, formattedDate)
    if(from === 'ars') {
      setValue(input / data?.venta)
      setSalaryLastMonth(input / lastDolar.venta)  
      const percentageChange = ((input / data.venta - input / lastDolar.venta) / (input / lastDolar.venta)) * 100;
      setPercentage(percentageChange)
      return;
    }  
    setValue(input * data?.compra)
    setSalaryLastMonth(lastDolar.compra * input)
    const percentageChange = (((data.compra * input) - (lastDolar.compra * input)) / (lastDolar.compra * input)) * 100;
    setPercentage(percentageChange)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(parseFloat(e.target.value))
  }


  return (
    <div className='flex flex-col gap-2 max-w-96 justify-center mx-auto'>
      <div className='flex gap-2'>
        <Options options={fromOptions} value={from} handleOptionChange={setFrom}/>
        <Button onClick={() => {swapOptions(); setValue(0)}} size='small' variant='secondary'> <ArrowRightLeft className='h-4 w-4'/> </Button>
        <Options options={toOptions} value={to} handleOptionChange={setTo}/>
      </div>
      <div className='flex flex-col gap-2'>
        <Input placeholder='Cuanto cobraste?' type='number' onChange={handleChange} value={input}/>
        <Button onClick={handleClick} variant='primary' size='small'>Calculate</Button>
        <CalculatorResult result={value} lastSalary={salaryLastMonth} currency={toOptions[0]?.moneda} percentaje={percentaje} />
      </div>
    </div>
  )
}

Calculator.displayName = 'Calculator'
export default Calculator