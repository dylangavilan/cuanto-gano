'use client'

import { useState } from 'react'
import Button from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import DropdownOptions from './stadistic-options'
import { years } from '@/constants'
import { months } from '@/constants'
import { getDolarByTime } from '@/services/services'
import InflationTable from './inflation-table'

type Row = {  
  id: number;
  price: string;
  month: string;
  year: string;
}

export interface CalculationResult {
  date: string;
  priceUSD: number;
  exchangeRate: number;
  priceARS: number;
}

export default function PriceCalculator() {
  const [rows, setRows] = useState<Row[]>([{ id: 1, price: '', month: '', year: '' }])
  const [results, setResults] = useState<CalculationResult[]>([])
  const addRow = () => {
    setRows([...rows, { id: Date.now(), price: '', month: '', year: '' }])
  }
  const addZero = (value: number) => {
    return value < 10 ? `0${value}` : value
  }

  const handleCalculate = async () => {
    const validRows = rows.filter(row => row.price && row.month && row.year)
    const dates = validRows.map(row => `${row.year}/${addZero(months.indexOf(row.month) + 1)}/01`)
    
    const exchangeRates = await Promise.all(dates.map(date => getDolarByTime('blue', date)))

    const newResults: CalculationResult[] = validRows.map((row, index) => {
      const exchangeRate = exchangeRates[index]
      const priceUSD = parseInt(row.price) / exchangeRate.venta
      const priceARS = parseInt(row.price)
      return {
        date: dates[index],
        priceUSD,
        exchangeRate: exchangeRate.venta,
        priceARS
      }
    })
    
    setResults(newResults)
  }

  const handleInputChange = (id: number, field: string, value: string) => {
    setRows(rows.map(row => 
      row.id === id ? { ...row, [field]: value } : row
    ))
  }
  return (
    <>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Calculadora de Precios</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {rows.map((row) => (
            <div key={row.id} className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`price-${row.id}`}>Precio</Label>
                <Input
                  id={`price-${row.id}`}
                  placeholder="Precio"
                  value={row.price}
                  onChange={(e) => handleInputChange(row.id, 'price', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`month-${row.id}`}>Mes</Label>
                <DropdownOptions options={months} handleOptionChange={(value) => handleInputChange(row.id, 'month', value)} value={row.month}/>
              </div>
              <div className="space-y-2">
                <Label htmlFor={`year-${row.id}`}>Año</Label>
                <DropdownOptions options={years} handleOptionChange={(value) => handleInputChange(row.id, 'year', value)} value={row.year} />
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full" onClick={addRow} >
            Agregar
          </Button>
          <Button className="w-full" onClick={handleCalculate}>
            Calcular
          </Button>
        </CardFooter>
      </Card>
      <InflationTable results={results} />
    </>
  )
}


