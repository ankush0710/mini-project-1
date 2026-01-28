import React from 'react';

const Login = () =>{
    return(
        <div id='card' className='w-64 bg-[#94B4C1] md:w-96 lg:w-xl shadow-lg rounded-lg'>
            <div id='heading' className='flex justify-center items-center border-b border-gray-500 py-5'><h2 className='text-3xl md:text-5xl font-bold'>Login</h2></div>
            <div id='form' className='flex flex-col px-3 py-5 gap-2'>
                <label htmlFor="userName">Username:</label>
                <input type="text" placeholder='Enter Your Username' className='bg-white rounded-sm px-2'/>
                <label htmlFor="passwd">Password:</label>
                <input type="password" placeholder='Enter Your Password' className='bg-white rounded-sm px-2'/>
                <div className='flex gap-2'>
                    <button type='submit' className='bg-[#008BFF] text-white font-semibold py-1 w-20 mt-5 rounded-md'>Login</button>
                    <button type='submit' className='bg-[#008BFF] text-white font-semibold py-1 w-20 mt-5 rounded-md'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Login;