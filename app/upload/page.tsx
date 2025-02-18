"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePredictionStore } from "@/store/prediction";
import Upload from "@/components/service/Upload";
import Image from "next/image";
import Loading from "@/components/service/Loading";

function UploadPage() {
  const router = useRouter();
  const { isLoading, predictions } = usePredictionStore();
  console.log("predictions", predictions);

  useEffect(() => {
    if (predictions && !isLoading) {
      router.replace("/result");
    }
  }, [predictions, isLoading, router]);

  return (
    <div className="min-h-screen p-4">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Loading />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen gap-2">
          <Image src="/images/logo.png" alt="logo" width={50} height={50} />
          <h1 className="text-3xl font-bold">반려동물 사진 업로드</h1>
          <p className="text-gray-600">반려동물의 사진을 업로드해주세요.</p>
          <Upload />
        </div>
      )}
    </div>
  );
}

export default UploadPage;
