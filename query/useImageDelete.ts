import { useMutation } from "@tanstack/react-query";

interface DeleteResponse {
  message: string;
}

const deleteImage = async (imageUrl: string): Promise<DeleteResponse> => {
  const response = await fetch("/api/upload", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ imageUrl }),
  });

  if (!response.ok) {
    throw new Error("이미지 삭제 실패");
  }

  return response.json();
};

export const useImageDelete = () => {
  return useMutation({
    mutationFn: deleteImage,
  });
};
