import { formatNumber } from '@/lib/utils';
import React from 'react';

type Props = {
    result: number;
    lastSalary?: number;
    currency: string;
    percentaje: number
}

const CalculatorResult = ({ result, lastSalary, currency, percentaje }: Props): JSX.Element => {
    return (
        <div className='text-center'>{
            result > 0 && <>
                <p className='font-semibold text-2xl'>{formatNumber(result)}</p>
                {lastSalary && <p className='text-gray-500'>Tu anterior salario fue: {formatNumber(lastSalary)} </p>}        
                {percentaje && <p className='text-gray-500'>
                    Tu sueldo {percentaje > 0 ? ' aumento un ': ' se devaluo un '} {(percentaje * -1).toFixed(2) }% en {currency}
                </p>}
            </>
    }   
        </div>
    );
};

export default CalculatorResult;