import { useMutation } from "@tanstack/react-query";

interface UploadResponse {
  url: string;
  filename: string;
}

const uploadImage = async (formData: FormData): Promise<UploadResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/upload/`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error);
  }
  const data = await response.json();

  return data;
};

export const useImageUploadPost = () => {
  return useMutation({
    mutationFn: uploadImage,
  });
};
