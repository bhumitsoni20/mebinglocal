import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PreferencesState {
  language: string;
  currency: string;
  setPreferences: (prefs: Partial<PreferencesState>) => void;
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      language: 'en',
      currency: 'USD',
      setPreferences: (prefs) => set((state) => ({ ...state, ...prefs })),
    }),
    {
      name: 'preferences-storage',
    }
  )
);
