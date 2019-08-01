//This is the file where we will create our redux store
//this file is also where we will pass in middleware/devTools to our redux store;
//this file is also where we will pass in a reducer function or reducer functions thanks to combineReducers to our redux store;
// this is the file where we will export our redux store by default so that we can pass it to the provider componenet so that our componenet tree is provided with the store;



//Imports
//combineReducers: it takes in all of your reducer functions and puts the output of those reducer functions as the values for the coressponding keys in your redux store
//applyMiddleware: 
//createStore: this establishes your redux store that holds your appplication states
//createLogger: it allows you to see in your browser console the action that was just dispatched, the previous state prior to the action being dispatched, and the next state after the action was dispatched;
//thunkMiddleware: because your reducer function only accepts ojects, it cannot accept promises or any other data type/data structure --- so thunkmiddleware will hijack and intercept any actiopn that is dispatched to the redux store and trpe check if the value is an object which thiunkmiddleare will permit to ho through to the redix store or  if it is a function, it will invoke that function and then dispatch that result to the reducer ultoamtely the result is an object'
//thunkmiddleware II:  
import {combineReducers, applyMiddleware, createStore} from 'redux';
import {createLogger} from "redux-logger";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers(/*pass in reducers here */);
const logger = createLogger({collapsed : true});
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware,logger));
const store = createStore(rootReducer,middleware);


export default store;