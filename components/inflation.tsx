import React from 'react';
import { Input } from './ui/input';
import Options from './calculator-options';
import Button from './ui/button';
const Inflation: React.FC = () => {
    return (
        <div>
            <h1>Inflation Component</h1>
            {/* <div className='flex gap-2'>
                <Options options={fromOptions} value={from} handleOptionChange={setFrom}/>
                <Button onClick={() => {swapOptions(); setValue(0)}} size='small' variant='secondary'> <ArrowRightLeft className='h-4 w-4'/> </Button>
                <Options options={toOptions} value={to} handleOptionChange={setTo}/>
            </div> */}
        </div>
    );
};

export default Inflation;