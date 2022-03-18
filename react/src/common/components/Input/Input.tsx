import React from 'react';
import cn from 'classnames';
import { Props } from './Input.types';
import './Input.css';

export const Input: React.FC<Props> = ({
    className,
    name,
    onChange,
    masked,
    title,
    errors,
    form,
    ...other
}) => {
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(name, event.currentTarget.value);
    }

    const value = form[name] || '';
    const hasError = errors?.[name];

    return (
        <input
            className={cn('input', className, { error: hasError })}
            type={masked ? 'password' : 'input'}
            onChange={handleChange}
            title={title || other.placeholder}
            value={value}
            {...other}
        />
    )
}