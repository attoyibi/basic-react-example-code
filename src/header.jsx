import React from 'react'

export default function header(props) {
    console.log(props)
  return (
    <div>
        <h1>{props.data}</h1>
    <h1>{props.dataStatus}</h1>
    </div>
  )
}
