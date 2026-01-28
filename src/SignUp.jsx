import React from 'react';

const SignUp = () =>{
    return(
        <div id='card' className='w-64 bg-[#94B4C1] md:w-96 lg:w-xl shadow-lg rounded-lg'>
            <div id='heading' className='flex justify-center items-center border-b border-gray-500 py-5 px-2'><h2 className='text-3xl md:text-5xl font-bold'>Create Account</h2></div>
            <div id='form' className='flex flex-col px-3 py-5 gap-2'>
                <label htmlFor="userName">Username:</label>
                <input type="text" placeholder='Enter Your Username' className='bg-white rounded-sm px-2'/>
                <label htmlFor="passwd">New Password:</label>
                <input type="password" placeholder='Enter Your Password' className='bg-white rounded-sm px-2'/>
                <label htmlFor="passwd">Confirm Password:</label>
                <input type="password" placeholder='Enter Your Password' className='bg-white rounded-sm px-2'/>
                <div className='flex flex-row gap-2'>
                    <button type='submit' className='bg-[#008BFF] text-white font-semibold py-2 px-3 w-40 mt-5 rounded-md'>Back to Login</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp;