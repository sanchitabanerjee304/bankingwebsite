import React from 'react'

const Section2 = () => {
  return (
    <div className='min-h-screen w-full bg-blue-500 flex flex-col items-center justify-center px-6'>
      <h1 className='text-5xl font-bold text-white mb-4'>
        Why Choose Our Bank?
      </h1>

      <p className='text-white text-center max-w-2xl mb-10'>
        Experience secure, fast, and modern banking with services designed
        to make your financial journey easier.
      </p>

      <div className='flex gap-8 flex-wrap justify-center'>
        <div className='bg-white p-6 rounded-2xl shadow-lg w-64 text-center'>
          <h2 className='text-2xl mb-2'>🔒</h2>
          <h3 className='font-semibold text-lg'>Secure Banking</h3>
          <p className='text-gray-500 mt-2'>
            Your transactions are protected with advanced security.
          </p>
        </div>

        <div className='bg-white p-6 rounded-2xl shadow-lg w-64 text-center'>
          <h2 className='text-2xl mb-2'>⚡</h2>
          <h3 className='font-semibold text-lg'>Fast Transfers</h3>
          <p className='text-gray-500 mt-2'>
            Send and receive money instantly anytime.
          </p>
        </div>

        <div className='bg-white p-6 rounded-2xl shadow-lg w-64 text-center'>
          <h2 className='text-2xl mb-2'>📱</h2>
          <h3 className='font-semibold text-lg'>Mobile Banking</h3>
          <p className='text-gray-500 mt-2'>
            Manage your account easily from your phone.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Section2