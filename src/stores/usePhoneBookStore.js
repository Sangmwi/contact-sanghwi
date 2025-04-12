import { create } from "zustand";


const usePhoneBookStore = create((set) => ({
  phoneBook: [],
  searchPhoneBook: null,

  addContact: (name, phone) =>
    set((state) => ({ phoneBook: [...state.phoneBook, { id: Date.now(), name, phone }] })),
  deleteContact: (id) =>
    set((state) => ({
      phoneBook: state.phoneBook.filter((contact) => contact.id !== id),
    })),
  setSearchPhoneBook: (query) =>
  set((state) => {
    const trimmed = query.trim();
    if (!trimmed) return { searchPhoneBook: null };
    return {
      searchPhoneBook: state.phoneBook.filter((contact) =>
        contact.name.includes(trimmed)
      ),
    };
  }),
  clearSearchPhoneBook: () =>
    set((state) => ({
      searchPhoneBook: null,
    })),
}));

export default usePhoneBookStore;
