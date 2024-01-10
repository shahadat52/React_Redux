import { createSlice } from "@reduxjs/toolkit"
export type TInitialState = {
    count: number
}

const initialState: TInitialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            console.log(state);
            state.count += 1
            
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByAmount: (state, action) => {
            state.count = state.count + action.payload
        }
    }
})
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer