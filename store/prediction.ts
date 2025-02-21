import { create } from "zustand";

interface Prediction {
  probability: number;
  tag_name: string;
}

interface PredictionState {
  predictions: Prediction[] | null;
  isLoading: boolean;
  previewUrl: string | null;
  setPredictions: (predictions: Prediction[]) => void;
  setIsLoading: (isLoading: boolean) => void;
  setPreviewUrl: (previewUrl: string | null) => void;
  reset: () => void;
}

export const usePredictionStore = create<PredictionState>((set) => ({
  predictions: null,
  isLoading: false,
  previewUrl: null,
  setPredictions: (predictions: Prediction[]) => set({ predictions }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setPreviewUrl: (previewUrl) => set({ previewUrl }),
  reset: () =>
    set({
      predictions: null,
      isLoading: false,
      previewUrl: null,
    }),
}));
