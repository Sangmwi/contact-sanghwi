import { create } from 'zustand'

export const useCounterStore = create((set) => ({
  count: 0,
  increase: (value) => set((state) => ({ count: state.count + value })),
  decrease: (value) => set((state) => ({ count: state.count - value })),
}))
