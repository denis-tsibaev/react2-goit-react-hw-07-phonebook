import { createAction } from '@reduxjs/toolkit';

const filterContacts = createAction('contacts/filter', contact => ({
    payload: contact,
}));

export { filterContacts };
