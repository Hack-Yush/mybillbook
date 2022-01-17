// file for parties reducer

// reducer function 
export const partyReducer = (state, action) => {


let newState = {};
const {payLoad} = action;    
switch (action.type) {


case 'changeField':
  
  newState = {...state, fields:payLoad};
  console.log(newState);
  break;

  
case 'collect_pay':

  if (payLoad==="collect" || payLoad==="pay") {
    newState = {...state, collect_pay:payLoad};
    console.log(newState);
  }
  
  break;
  case 'save':
    break;

  case 'saveAndNew':
    break;

  case 'delete':
    break;

default:
  throw new Error();



}

return newState;

}