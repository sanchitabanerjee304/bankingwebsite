import React from 'react'
import Left from './Left'
import Right from './Right'
import Center from './Center'

const Page1Component = () => {
  return (
    <div className='flex h-screen'>
      <div className='w-1/3'>
        <Left />
      </div>

      <div className='w-1/3'>
        <Center />
      </div>

      <div className='w-1/3'>
        <Right />
      </div>
    </div>
  )
}

export default Page1Component