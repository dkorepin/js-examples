import React from 'react';
import { Input } from '../../common';
import { useLoginHook } from './Login.hooks';
import './Login.css';

export const Login: React.FC = () => {

    const { handleLogin, login, setLogin, password, setPassword } = useLoginHook();

    return (
        <div className='login'>
            <div className='form'>
                <div className='logo-wrap'></div>
                <div className='logo'></div>
                <div className='inputs-wrap'>
                    <Input
                        value={login}
                        onChange={setLogin}
                        placeholder='Phone number, username, or email'
                    />
                    <Input
                        value={password}
                        onChange={setPassword}
                        placeholder='password'
                        masked
                    />
                </div>
                <div className='buttons-wrap'>
                    <input className='button' type='button' value='log in' onClick={handleLogin}/>
                    <input className='button' type='button' value='sign in'/>
                </div>
            </div>
        </div>
    )
}