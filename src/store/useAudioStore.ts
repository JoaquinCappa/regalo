import { create } from 'zustand';

interface AudioState {
  isPlaying: boolean;
  hasStarted: boolean;
  togglePlay: () => void;
  startExperience: () => void;
}

export const useAudioStore = create<AudioState>((set) => ({
  isPlaying: false,
  hasStarted: false,
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  startExperience: () => set({ isPlaying: true, hasStarted: true }),
}));
