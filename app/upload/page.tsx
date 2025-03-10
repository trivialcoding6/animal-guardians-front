"use client";
import { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePredictionStore } from "@/store/prediction";
import Upload from "@/components/service/Upload";

import Loading from "@/components/service/Loading";
import Logo from "@/components/service/Logo";

function UploadPage({
  searchParams,
}: {
  searchParams: Promise<{ type: "dog" | "cat" }>;
}) {
  const router = useRouter();
  const resolvedParams = use(searchParams);
  const { type } = resolvedParams;
  const { isLoading, predictions } = usePredictionStore();

  useEffect(() => {
    if (!type) {
      router.push("/choose");
    }
    if (predictions && !isLoading) {
      router.replace("/result");
    }
  }, [predictions, isLoading, router, type]);

  return (
    <div className="min-h-screen p-4">
      {isLoading || predictions ? (
        <div className="flex justify-center items-center h-screen">
          <Loading />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen gap-2">
          <Logo />
          <h1 className="text-3xl font-bold">반려동물 사진 업로드</h1>
          <p className="text-gray-600">반려동물의 사진을 업로드해주세요.</p>
          <Upload type={type} />
        </div>
      )}
    </div>
  );
}

export default UploadPage;
