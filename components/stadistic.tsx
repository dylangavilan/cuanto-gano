import { months, years } from '@/constants'
import React from 'react'
import DropdownOptions from './stadistic-options'
import { Input } from './ui/input'
import PriceCalculator from './inflation-calculator'

const Stadistic = () => {
  return (
    <div>
      <PriceCalculator />

    </div>
  )
}

export default Stadistic