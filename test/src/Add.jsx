import React from 'react'

export default function Add(props) {

  return (
    <div>
      add 2 numbers
    <h1>answer</h1>
    <h2>{props.num1+props.num2}</h2>
    </div>
  )
}
