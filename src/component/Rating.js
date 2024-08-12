import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Rating = ({rating}) => {
  return (
    [...Array(5).keys()].map(x=>{
        if((x+1)<=rating){
            return <AiFillStar/>
        }
        else{
            return <AiOutlineStar/>
        }
    })
)   
}

export default Rating