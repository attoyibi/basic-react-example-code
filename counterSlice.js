
import { createSlice } from '@reduxjs/toolkit'
const data = [
    {
        id: 1,
        name: 'A',
    }, 
    {
        id: 2,
        name: 'B',
    }
]
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    data
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
        console.log("incrementByAmount")
        console.log("action.payload",action)
        console.log("state.data",state.data)
        state.value += action.payload
        state.data[1].id = action.payload
    
    },
    changeName: (state, action) => {
        console.log("action payload",action.payload)
        console.log("state data before push ",state.data)
        //mengganti data di dalam state
        const id = 1;
        state.data.map((item, index) => {
            if(item.id === id){
            item.name = action.payload
            }
        })
        console.log("state data after push ",state.data)
    },
    insertName: (state, action) => {
        //menggunakan spread operator
        // state.data = [...state.data, {id:3, name:action.payload}]
        //menggunakan push
        state.data.push({id:3, name:action.payload})
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,changeName, insertName } = counterSlice.actions

export default counterSlice.reducer