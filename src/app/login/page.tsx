'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router'

interface LoginProps {
    onLogin: (username: string, password: string) => void;
}

const LoginPage: React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const router = useRouter();

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onLogin(username, password);
        // router.push('/homepage');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-md mx-auto bg-white p-8 shadow-md">
                <div className="mb-6">
                    <Image src="Brand.svg" width={139} height={90} alt="The PUC project" className="mx-auto" />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                            className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-blue-700 text-white font-bold border rounded-2xl w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default LoginPage;




































