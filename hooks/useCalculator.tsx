import { getDolarByTime, getDolarInfo } from '@/services/services'
import React, { useState } from 'react'

function useSalaryCalculator() {
  const [salary, setSalary] = useState<number>(0)
  const [convertedSalary, setConvertedSalary] = useState<number>(0)
  const [salaryLastMonth, setSalaryLastMonth] = useState<number>(0)
  const [percentaje, setPercentage] = useState<number>(0)


  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(parseInt(e.target.value) === 0) {
      return setSalary(0)
    }
    setSalary(parseFloat(e.target.value))
  }

  const getLastMonthDate = () => { 
    const date = new Date()
    date.setMonth(date.getMonth() - 1);
    return date.toLocaleDateString()
          .split('/')
          .reverse()
          .map((el) => (parseInt(el) < 10 ? `0${el}` : el))
          .join('/');
  }


  const calculateFromArs = (salary: number, dolarNow: number, dolarLastMonth: number) => {
    const salaryNow = salary / dolarNow
    const salaryLast = salary / dolarLastMonth
    const percentageChange = ((salaryNow - salaryLast) / salaryLast) * 100;
    setConvertedSalary(salaryNow)
    setSalaryLastMonth(salaryLast)  
    setPercentage(percentageChange)
  }

  const calculateFromDolar = (salary: number, dolarNow: number, dolarLastMonth: number) => {
    const salaryNow = salary * dolarNow
    const salaryLast = salary * dolarLastMonth
    const percentageChange = ((salaryNow - salaryLast) / salaryLast) * 100;
    setConvertedSalary(salaryNow)
    setSalaryLastMonth(salaryLast)  
    setPercentage(percentageChange)
  }

  const handleCalculate = async (from: Casas, to: Casas) => {
    const casa = from !== 'ars' ? from : to
    const data = await getDolarInfo(casa);
    const formattedDate = getLastMonthDate();
    const lastDolar = await getDolarByTime(casa, formattedDate);

    return from === 'ars' ? calculateFromArs(salary, data?.compra, lastDolar.compra) : 
    calculateFromDolar(salary, data?.venta, lastDolar.venta)
  }

  return {
    salary, 
    handleSalaryChange,
    handleCalculate,
    salaryLastMonth,
    percentaje,
    convertedSalary
  }
}
export { useSalaryCalculator }
