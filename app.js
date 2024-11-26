const { createAction, nanoid } = require("@reduxjs/toolkit");
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
            user,
            id:nanoid(),
        },
    };
});
console.log(incrementBy('ouaail',20));
//Reducer
//Store