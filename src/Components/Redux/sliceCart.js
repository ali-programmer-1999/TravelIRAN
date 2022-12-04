import { createSlice } from '@reduxjs/toolkit'
let Order_cart;

const initialState = {
    Order_cart,
}

const sliceCart = createSlice({
    name: "CartSlice",
    initialState,
    reducers: {
        choiceOrder: (state, action) => {
            state.Order_cart = action.payload
        }
        ,
        cancelOrder: (state, action) => {
            state.Order_cart = action.payload
        }
    }
});

export const { choiceOrder, cancelOrder } = sliceCart.actions

export default sliceCart.reducer