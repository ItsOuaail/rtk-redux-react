const { createSlice, configureStore} = require("@reduxjs/toolkit");

//initial state
const initialState = {
    counter:0,
}

//createSlice
const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers: {
        //increment
        increment: (state, action) => {
            state.counter +=1;
        },
        //decrement
        decrement: (state, action) => {
            state.counter -=1;
        },
        //reset
        reset: (state, action) => {
            state.counter =0;
        },
        //increment By
        incrementByAmouant: (state, action) => {
            state.counter += action.payload;
        },

    }
})
//Generate actions
const { decrement, increment, reset ,incrementByAmouant } = counterSlice.actions;
//Generate reducer
const counterReducer = counterSlice.reducer;
//store
const store = configureStore({
    reducer: counterReducer,
});

//dispatch
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(incrementByAmouant(200));
//store.dispatch(reset());
console.log(store.getState());