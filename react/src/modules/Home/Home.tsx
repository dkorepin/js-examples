import React from 'react';
import { useHomeHook } from './Home.hooks';

export const Home: React.FC = () => {

    const {handleLogout} = useHomeHook();

    return (
        <div>
            <h1>Home frame</h1>
            <div>
                <input type='button' value='log out' onClick={handleLogout}/>
            </div>
        </div>
    )
}