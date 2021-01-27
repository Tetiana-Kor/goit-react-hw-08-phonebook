import * as serviceAPI from '../services/service-api';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './actions';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await serviceAPI.fetchContacts();
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

export const addContact = (name, number) => async dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  try {
    const { data } = await serviceAPI.addContact(contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());

  serviceAPI
    .deleteContact(id)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};
