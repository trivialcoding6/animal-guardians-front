import { useMutation } from "@tanstack/react-query";

const analyzeImage = async (
  imageUrl: string
): Promise<Record<string, number>> => {
  const response = await fetch("/api/prediction", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ imageUrl }),
  });

  if (!response.ok) {
    throw new Error("API 호출 실패");
  }

  return response.json();
};

export const useImageAnalysisPost = () => {
  return useMutation({
    mutationFn: analyzeImage,
  });
};
