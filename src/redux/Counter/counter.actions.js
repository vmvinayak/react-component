import {INCREMENT, DECREMENT} from './counter.type'

export const increaseCounter = ()=>({
    type:INCREMENT
})

export const decreaseCounter = ()=>({
    type:DECREMENT
})