import React from 'react';
import { useLoginHook } from './Login.hooks';

export const Login: React.FC = () => {

    const { handleLogin } = useLoginHook();

    return (
        <div>
            <h1>Login frame</h1>
            <div>
                <input type='button' value='log in' onClick={handleLogin}/>
                <input type='button' value='sign in'/>
            </div>
        </div>
    )
}