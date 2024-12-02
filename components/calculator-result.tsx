import React from 'react';

type Props = {
    result: number;
}

const CalculatorResult = ({ result }: Props): JSX.Element => {
    return (
        <div className='text-center'>
            <p className='font-semibold text-2xl'>{result.toFixed(2)}</p>
        </div>
    );
};

export default CalculatorResult;