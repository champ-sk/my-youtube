import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const arr  = ["All", "Wealth", "Podcast" ,"AI" ,"Protein" ,"Gym","Music","Thoughts","Cricket","React"];
  return (
    <div className='flex  '>
      {arr.map((item)=><Button data={item}/>)}
    </div>
  )
}

export default ButtonList