import React,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount,changeName, insertName } from './redux/slicer/counterSlice'
// import styles from './Counter.module.css'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const data = useSelector((state) => state.counter.data)
  console.log(data)
  const dispatch = useDispatch()
    const [formData, setFormData] = useState(0)
    console.info(formData)
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(1))}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <br></br>
        <input type="text" onChange={(e)=>{setFormData(e.target.value)}}></input>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(changeName(formData))}
        >
          Change Name
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(insertName(formData))}
        >
          Insert Name
        </button>
        <br></br>
        {data.map((item, index) => (
            //hati2 untuk key karena harus besifat unik jangan menggunakan ID, lebih enak menggunakan index
            <div key={index}> {item.id} - {item.name}</div>
        ))}

      </div>
    </div>
  )
}