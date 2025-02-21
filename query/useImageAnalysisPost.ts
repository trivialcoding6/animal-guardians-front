import { useMutation } from "@tanstack/react-query";

interface Prediction {
  probability: number;
  tag_name: string;
}

const analyzeImage = async (imageUrl: string): Promise<Prediction[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/prediction/predict`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image_url: imageUrl }), // 'image_url'로 필드명 변경
    }
  );

  if (!response.ok) {
    throw new Error("API 호출 실패");
  }
  const data = await response.json();
  console.log("data", data);

  return data;
};

export const useImageAnalysisPost = () => {
  return useMutation({
    mutationFn: analyzeImage,
  });
};
