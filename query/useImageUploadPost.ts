import { useMutation } from "@tanstack/react-query";

interface UploadResponse {
  imageUrl: string;
  message: string;
}

const uploadImage = async (formData: FormData): Promise<UploadResponse> => {
  const response = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error);
  }

  return response.json();
};

export const useImageUploadPost = () => {
  return useMutation({
    mutationFn: uploadImage,
  });
};
