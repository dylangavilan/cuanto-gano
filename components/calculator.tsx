'use client'
import React from 'react'
import { useDolar } from '@/context'
import Options from './calculator-options'
import { ArrowRightLeft } from 'lucide-react'
import { Input } from './ui/input'
import Button from './ui/button'
import CalculatorResult from './calculator-result'
import { useSalaryCalculator } from '@/hooks/useCalculator'


const Calculator = () => {
  const { toOptions, fromOptions, swapOptions, from, to, setFrom, setTo } = useDolar()
  const { salary, 
          percentaje,
          convertedSalary,
          salaryLastMonth,
          handleSalaryChange,
          handleCalculate } = useSalaryCalculator()
  
  return (
    <div className='flex flex-col gap-2 max-w-96 justify-center mx-auto'>
      <div className='flex gap-2'>
        <Options options={fromOptions} value={from} handleOptionChange={setFrom}/>
        <Button onClick={() => { swapOptions();}} size='small' variant='secondary'> <ArrowRightLeft className='h-4 w-4'/> </Button>
        <Options options={toOptions} value={to} handleOptionChange={setTo}/>
      </div>
      <div className='flex flex-col gap-2'>
        <Input placeholder='Cuanto cobraste?' type='number' onChange={handleSalaryChange} value={salary}/>
        <Button onClick={() => handleCalculate(from, to)} 
                variant='primary'
                size='small'
                >Calcular
        </Button>
        <CalculatorResult result={convertedSalary} 
        lastSalary={salaryLastMonth} currency={toOptions[0]?.moneda} percentaje={percentaje} />
      </div>
    </div>
  )
}

Calculator.displayName = 'Calculator'
export default Calculator