import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
    'px-4 py-2 font-semibold text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2', 
    {
        variants: {
            variant: {
                primary: 'bg-blue-500 text-white hover:bg-blue-600',
                secondary: 'bg-gray-500 text-white hover:bg-gray-600',
            },
            size: {
                small: 'text-xs px-2 py-1',
                medium: 'text-sm px-4 py-2',
                large: 'text-lg px-6 py-3',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'medium',
        },
    }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyles> {}

const Button = ({ variant, size, className, children,  ...props }: ButtonProps) => {
    return (
        <button className={buttonStyles({ variant, size, className })} {...props}>
            {children}
        </button>
    );
};

export default Button;