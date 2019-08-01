// this file will have action types, action creaters, reducer functions

//action types;
const INCREMENT = "INCREMEMT";
const DECREMENT = "DECREMENT";

//action creaters
const increment = () => {
    return {
        type: INCREMENT
    }
}

const decrement = () => {
    return  {
        type: DECREMENT
    }
}

export default (state = 0, action) => {
    switch (action.type){
        case INCREMENT: 
            return state + 1;
        case DECREMENT: 
            return state - 1;
        default:
            return state;
    }
}