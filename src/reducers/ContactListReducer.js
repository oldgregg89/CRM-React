import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const {id, firstName, lastName, phoneNumber, email, contract, companyName, notes, contractClosed } = action;
  
  switch (action.type) {
    case c.ADD_CONTACT:
      return Object.assign({}, state , {
        [id]: {
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          email: email,
          contract: contract,
          companyName: companyName,
          notes: notes,
          contractClosed: contractClosed
        }
      })
    case c.DELETE_CONTACT:
      const newState = {...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
}