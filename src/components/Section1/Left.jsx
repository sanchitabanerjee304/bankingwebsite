import React from 'react'

const Left = () => {
  return (
    <div className='h-full flex flex-col justify-center px-8'>
      <h1 className='text-5xl font-bold mb-4'>
        Digital Banking Made Easy
      </h1>

      <p className='text-gray-600 text-lg'>
        Manage your money, transfer funds, pay bills,
        and track your expenses anytime, anywhere.
      </p>

      <button className='mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg w-fit'>
        Open Account
      </button>
    </div>
  )
}

export default Left