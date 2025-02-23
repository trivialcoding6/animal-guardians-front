import { useMutation } from "@tanstack/react-query";

interface Prediction {
  probability: number;
  tag_name: string;
}

export type AnalysisVariables = {
  imageUrl: string;
  type: "dog" | "cat";
};

const analyzeImage = async (
  variables: AnalysisVariables
): Promise<Prediction[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/prediction/${process.env.NEXT_PUBLIC_MODEL_TOOL}/predict`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image_url: variables.imageUrl,
        pet_type: variables.type,
      }), // 'image_url'로 필드명 변경
    }
  );

  if (!response.ok) {
    throw new Error("API 호출 실패");
  }
  const data = await response.json();

  return data;
};

export const useImageAnalysisPost = () => {
  return useMutation({
    mutationFn: analyzeImage,
  });
};
