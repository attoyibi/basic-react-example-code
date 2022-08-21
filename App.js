//tempat untuk import semua component, hook, dan logic component
import React from 'react'
import {Counter} from './Counter'

export default function App() {
//tempat logic dalam component digunakan

    return (
    // semua hal dalam return akan di render
    <div>
      <Counter/>
    </div>
  )
}
