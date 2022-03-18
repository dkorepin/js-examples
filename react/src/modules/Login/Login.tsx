import React from 'react';
import { Input } from '../../common';
import { useLoginHook } from './Login.hooks';
import './Login.css';

export const Login: React.FC = () => {

    const { handleLogin,
        form,
        errors,
        canLogin,
        handleChangeForm,
    } = useLoginHook();

    return (
        <div className='login'>
            <div className='form'>
                <div className='logo-wrap'></div>
                <div className='logo'></div>
                <div className='inputs-wrap'>
                    <Input
                        name='login'
                        form={form}
                        onChange={handleChangeForm}
                        placeholder='Phone number, username, or email'
                        errors={errors}
                    />
                    <Input
                        name='password'
                        form={form}
                        onChange={handleChangeForm}
                        placeholder='Password'
                        masked
                        errors={errors}
                    />
                </div>
                <div className='buttons-wrap'>
                    <input className='button' type='button' value='Log in' onClick={handleLogin} disabled={!canLogin}/>
                    <input className='button' type='button' value='Sign in'/>
                </div>
            </div>
        </div>
    )
}