import { createAction } from '@reduxjs/toolkit';

export const filterContacts = createAction('contacts/filter', contact => ({
    payload: contact,
}));
