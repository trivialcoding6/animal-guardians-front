import { create } from "zustand";

interface Prediction {
  [key: string]: number;
}

interface PredictionState {
  predictions: Prediction | null;
  isLoading: boolean;
  setPredictions: (predictions: Prediction) => void;
  setIsLoading: (isLoading: boolean) => void;
  reset: () => void;
}

export const usePredictionStore = create<PredictionState>((set) => ({
  predictions: null,
  isLoading: false,
  setPredictions: (predictions) => set({ predictions }),
  setIsLoading: (isLoading) => set({ isLoading }),
  reset: () => set({ predictions: null, isLoading: false }),
}));
