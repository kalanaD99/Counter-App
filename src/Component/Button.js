import React from 'react'
import './Button.css'

export default function (props) {
  return (
    <div>
        <button onClick={props.click} className={props.name}>{props.type}</button>
    </div>
  )
}
