import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filter.name;

export const getIsLoading = (state) => state.contacts.isLoading;

export const getError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (items, name) => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
  }
);
