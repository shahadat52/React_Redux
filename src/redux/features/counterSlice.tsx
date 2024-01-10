import { createSlice } from "@reduxjs/toolkit"
export type TInitialState = {
    count: number
}

const initialState:TInitialState = {
    count: 0
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) =>{
            state.count += 1
        },
        decrement: (state) =>{
            state.count -=1
        }
    }
})
export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer