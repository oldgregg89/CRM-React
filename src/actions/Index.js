import * as c from './ActionTypes'

export const addContact = (contact) => {
  const {id, firstName, lastName, phoneNumber, email, contract, companyName, notes, contractClosed } = contact
  return {
    type: c.ADD_CONTACT,
    id: id,
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email,
    contract: contract,
    companyName: companyName,
    notes: notes,
    contractClosed: contractClosed
  }
}

export const deleteContact = id => ({
  type: c.DELETE_CONTACT,
  id
})

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
})