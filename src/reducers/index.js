import {combineReducers} from 'redux';

function currentCount(state=0, action){
  if(action.type === "INCREASE_COUNTER"){
    return state +1
  }
  if(action.type === "DECREASE_COUNTER"){
    return state -1
  }
  return state;
}   

function users(state =[], action){
  if(action.type === "ADD_USER"){

    // normally what you do, but can not change the state
    // state.push(action.value)

    // let users = []
    // loop through the array
    // add all things from the old array to the new one
    // then add the new user

    // es6 version
    return [...state,action.value];

    // different way of code, but basically the same thing
    // let newArray = [...state];
    // newArray.push(action.value)
    // return newArray;

  }
  if(action.type === "REMOVE_USER"){
    // one way, but
    // can't change the original array
    // we need a new array that has everything from state but one thing
    // by using the slice method
    return state.slice(0, state.length-1)
  }
  return state;
}


function specialText(state = "", action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}

function currentCity(state = "", action){
  if(action.type === "SET_CURRENT_CITY"){
    return action.value;
  }
  return state;
}

function currentTemp(state = "", action){
  if(action.type === "SET_TEMP"){
    return action.value;
  }
  return state;
}

function isLoading(state = "", action){
  if(action.type === "SET_IS_LOADING"){
    return action.value;
  }
  return state;
}

function videoURL(state = "", action){
  if(action.type === "SET_VIDEO_URL"){
    return action.value;
  }
  return state;
}

function searchText(state = "", action){
  if(action.type === "SET_SEARCH_TEXT"){
    return action.value;
  }
  return state;
}

function currentUserSort(state = "", action){
  if(action.type === "SET_CURRENT_USER_SORT"){
    return action.value;
  }
  return state;
}

function videoScale(state = "", action){
  if(action.type === "SET_VIDEO_SCALE"){
    return action.value;
  }
  return state;
}

// calling the key value in state
const rootReducer = combineReducers({
  users, currentCount, specialText, currentCity, currentTemp, 
  isLoading, videoURL, searchText, currentUserSort, videoScale
 });
 export default rootReducer;