import { create } from 'zustand';

interface BookingState {
  currentBooking: any | null;
  setBooking: (booking: any) => void;
  clearBooking: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  currentBooking: null,
  setBooking: (booking) => set({ currentBooking: booking }),
  clearBooking: () => set({ currentBooking: null }),
}));
