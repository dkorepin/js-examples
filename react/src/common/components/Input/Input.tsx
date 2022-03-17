import React from 'react';
import cn from 'classnames';
import { Props } from './Input.types';
import './Input.css';

export const Input: React.FC<Props> = ({
    className,
    onChange,
    masked,
    title,
    ...other
}) => {
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.currentTarget.value);
    }

    return (
        <input
            className={cn('input', className)}
            type={masked ? 'password' : 'input'}
            onChange={handleChange}
            title={title || other.placeholder}
            {...other}
        />
    )
}