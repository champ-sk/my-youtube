import React from 'react'

const Button = ({data}) => {
  return (
    <div className='bg-gray-100 m-3 p-2 px-3 rounded-lg'>
        <button >{data}</button>
    </div>
  )
}

export default Button