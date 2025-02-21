"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePredictionStore } from "@/store/prediction";
import ResultSection from "@/components/service/ResultSection";
import RecommendSection from "@/components/service/RecommendSection";
import Section from "@/components/service/Section";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Result() {
  const router = useRouter();
  const { predictions, previewUrl, reset } = usePredictionStore();

  // 예측 결과가 없으면 업로드 페이지로 이동
  useEffect(() => {
    if (!predictions) {
      router.push("/upload");
    }
  }, [predictions, router]);

  // 예측 결과가 없으면 아무것도 렌더링하지 않음
  if (!predictions) {
    return null;
  }

  const handleRetry = () => {
    reset();
    router.push("/upload");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="p-4 space-y-10">
        <Section className="flex flex-col items-center gap-6 bg-white p-6">
          <h1 className="text-3xl font-bold">분석 결과</h1>
          {previewUrl && (
            <Image
              src={previewUrl}
              alt="업로드 이미지"
              width={600}
              height={600}
              className="w-full max-w-md object-contain rounded-lg"
            />
          )}
        </Section>

        {/* 분석 결과 섹션 */}
        <ResultSection />

        {/* 추천 섹션 */}
        <RecommendSection />
      </div>
      <div className="flex justify-center p-4">
        <Button size="lg" onClick={handleRetry}>
          다시 해보기
        </Button>
      </div>
    </div>
  );
}
