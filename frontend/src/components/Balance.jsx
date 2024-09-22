

// export const Balance = ({value}) => {
//     return <div className="flex">
//         <div className="font-bold text-lg">
//             Your Balance
//         </div>
//         <div className="font-semibold ml-4 text-lg">
//             Rs {value}
//         </div>
//     </div>
// }

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Balance = () => {
    const [balance, setBalance] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [username, setUsername] = useState(null);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get("http://localhost:3000/api/v1/account/balance",{
                    headers: {
                        Authorization: `Bearer ${token}`
                    } 
                });
                setUsername(response.data.username);
                setBalance(response.data.balance);
            } catch (error) {
                setError('Failed to fetch balance');
            } finally {
                setLoading(false);
            }
        };

        fetchBalance();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="flex flex-col items-center">
            <div className="font-bold text-lg mb-2">Welcome, {username}</div>
            <div className="flex">
                <div className="font-bold text-lg">Your Balance:</div>
                <div className="font-semibold ml-4 text-lg">Rs {balance}</div>
            </div>
        </div>
    );
    
};
