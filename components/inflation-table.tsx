'use client'
import React from 'react'
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from './ui/table'
import { CalculationResult } from './inflation-calculator'

type Props = {
    results: CalculationResult[]
}

function InflationTable({ results }: Props) {
  return (
        <div className="mt-6 w-full">
          <h3 className="text-lg font-semibold mb-2">Resultados de inflación</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fecha</TableHead>
                <TableHead>Precio USD</TableHead>
                <TableHead>Tasa de Cambio</TableHead>
                <TableHead>Precio ARS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((result, index) => (
                <TableRow key={index}>
                  <TableCell>{result.date}</TableCell>
                  <TableCell>{result.priceUSD.toFixed(2)}</TableCell>
                  <TableCell>{result.exchangeRate.toFixed(2)}</TableCell>
                  <TableCell>{result.priceARS.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

        </div>
    )
}


export default InflationTable