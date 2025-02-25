"use client";
import { Button } from "@/components/ui/button";
import { UploadCloud, Loader2 } from "lucide-react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";
import { useImageUploadPost } from "@/query/useImageUploadPost";
import { useImageAnalysisPost } from "@/query/useImageAnalysisPost";
import { usePredictionStore } from "@/store/prediction";
import { useRouter } from "next/navigation";

function Upload({ type }: { type: "dog" | "cat" }) {
  const { previewUrl, setPredictions, setIsLoading, setPreviewUrl, reset } =
    usePredictionStore();
  const router = useRouter();
  const uploadMutation = useImageUploadPost();
  const analysisMutation = useImageAnalysisPost();

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    uploadMutation.mutate(formData, {
      onSuccess: (data) => {
        setPreviewUrl(data.url);
        toast.success("이미지 업로드에 성공했습니다.");
      },
      onError: (error) => {
        console.error("이미지 업로드 중 오류 발생:", error);
        toast.error("이미지 업로드에 실패했습니다.");
      },
    });
  };

  const handleReupload = () => {
    if (previewUrl) {
      setPreviewUrl(null);
      reset();
    }
  };

  const onSubmit = async () => {
    if (!previewUrl) {
      toast.error("먼저 이미지를 업로드해주세요.");
      return;
    }

    setIsLoading(true);
    try {
      const data = await analysisMutation.mutateAsync({
        imageUrl: previewUrl,
        type: type,
      });
      setPredictions(data);
      setPreviewUrl(previewUrl);
      toast.success("이미지 분석이 완료되었습니다.");
      router.push("/result");
    } catch (error) {
      console.error("이미지 분석 중 오류 발생:", error);
      toast.error("이미지 분석에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    multiple: false,
  });

  return (
    <div className="flex flex-col items-center w-[90%] md:w-[50%] mt-4">
      {previewUrl ? (
        <div className="flex flex-col items-center">
          <div className="mt-4">
            <Image
              src={previewUrl}
              alt="업로드된 이미지"
              width={600}
              height={600}
              className="w-auto h-auto object-contain"
              priority
            />
          </div>
          <div className="flex gap-4 mt-4">
            <Button onClick={onSubmit} disabled={analysisMutation.isPending}>
              판별하기
            </Button>
            <Button variant="outline" onClick={handleReupload}>
              취소
            </Button>
          </div>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={`flex flex-col items-center border-2 border-dashed rounded-lg p-10 w-full cursor-pointer
            ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}
            ${
              uploadMutation.isPending ? "opacity-50 pointer-events-none" : ""
            }`}
        >
          <input {...getInputProps()} />
          {uploadMutation.isPending ? (
            <Loader2 className="w-12 h-12 text-gray-400 animate-spin" />
          ) : (
            <>
              <UploadCloud className="w-12 h-12 text-gray-400" />
              <p className="text-gray-500 text-center">
                이미지를 드래그하거나 클릭하여 업로드
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Upload;
