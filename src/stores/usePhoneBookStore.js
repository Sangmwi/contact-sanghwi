import { create } from "zustand";

const usePhoneBookStore = create((set) => ({
  phoneBook: [],
  searchKeyword: "",

  addContact: (name, phone) =>
    set((state) => ({
      phoneBook: [...state.phoneBook, { id: Date.now(), name, phone }],
    })),

  deleteContact: (id) =>
    set((state) => ({
      phoneBook: state.phoneBook.filter((contact) => contact.id !== id),
    })),

  setSearchPhoneBook: (query) =>
    set({ searchKeyword: query.trim() }),

  clearSearchPhoneBook: () =>
    set({ searchKeyword: "" }),
}));

export default usePhoneBookStore;
