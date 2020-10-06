import ContactListReducer from './ContactListReducer';
import FormVisableReducer from './FormVisableReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  ContactList: ContactListReducer,
  FormSwitch: FormVisableReducer,
  firestore: firestoreReducer
});

export default rootReducer
