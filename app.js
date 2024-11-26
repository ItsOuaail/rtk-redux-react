const { createAction, nanoid, createReducer } = require("@reduxjs/toolkit");
//InitialisteState
const initialisteState = {
    counter: 0,
};
//Action creater 
const increment = createAction("INCREMENT");
const decrement = createAction("DECREMENT");
const resetCounter = createAction("RESET");
//Custumise createApp
const incrementBy = createAction("INCREMENT_BY", (amount, user) => {
    return {
        payload: {
            amount,
        },
    };
});
//Reducer
//Create Reducer
//1.Builder callback
//2.map object notaion

//Builder callback
createReducer(initialisteState, (builder) => {
    //increment
    builder.addCase(increment, (state) => {
        state.counter += 1;
    });
    //decrement
    builder.addCase(decrement, (state) => {
        state.counter -= 1;
    });
    //reset
    builder.addCase(resetCounter, (state) => {
        state.counter = 0;
    });
    //unvrement By
    builder.addCase(incrementBy, (state) => {
        state.counter += isAction.payload.amount;
    });
})
//Store
