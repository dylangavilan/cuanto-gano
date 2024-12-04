import { cn, formatNumber } from '@/lib/utils';
import React from 'react';

type Props = {
    result: number;
    lastSalary: number;
    currency: string;
    percentaje: number
}

const CalculatorResult = ({ result, lastSalary, currency, percentaje }: Props): JSX.Element => {
    const parsedPercentaje = percentaje < 0 ? percentaje : percentaje*-1
    const difference = result - lastSalary
    
    const format = (num: number) => {
        const parsed = num < 0 ? num * -1 : num
        return formatNumber(parsed)
    }

    return (
        <div className='text-center'>{
            result > 0 && <>
                <p className='font-semibold text-2xl'>{currency + formatNumber(result)}</p>
                {lastSalary && 
                    <p className='text-gray-500'>Tu anterior salario fue:  {currency + formatNumber(lastSalary)} ({format(difference) } {difference > 0 ? 'más' : 'menos'}) 
                    </p>
                }        
                {percentaje && <p className={cn(percentaje > 0 ? 'text-green-600' : 'text-red-600 font-bold')}>
                    Tu sueldo {percentaje > 0 ? ' aumento un ': ' se devaluo un '} {(parsedPercentaje * -1).toFixed(2) }% en {currency}
                </p>
                }
            </>
    }   
        </div>
    );
};

export default CalculatorResult;