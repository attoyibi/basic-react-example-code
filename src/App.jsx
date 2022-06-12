import React from 'react'

export default function App() {
  return (
      <>
        <div>App = {process.env.REACT_APP_TITLE}</div>
        <div>App = {process.env.REACT_APP_DESCRIPTION}</div> 
      </>
  )
}