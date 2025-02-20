// app/result/detail/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { useDiseaseByName } from "@/query/useDiseaseFetch";
import { usePredictionStore } from "@/store/prediction";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { use } from "react";
import DetailPageSkeleton from "@/components/service/DetailPageSkeleton";

export default function DiseaseDetailPage({
  params,
}: {
  params: Promise<{ diseaseName: string }>;
}) {
  const resolvedParams = use(params);
  const { diseaseName } = resolvedParams;
  const { data: disease, isLoading } = useDiseaseByName(
    decodeURIComponent(diseaseName)
  );
  const { reset } = usePredictionStore();
  const router = useRouter();

  if (isLoading) {
    return <DetailPageSkeleton />;
  }

  // 데이터 가공
  const definition = disease?.details.find(
    (item) => item.detail_type === "정의"
  )?.detail_value;
  const causes = disease?.details
    .filter((item) => item.detail_type === "원인")
    .map((item) => item.detail_value);
  const symptoms = disease?.details
    .filter((item) => item.detail_type === "증상")
    .map((item) => item.detail_value);
  const careMethods = disease?.details
    .filter((item) => item.detail_type === "케어방법")
    .map((item) => item.detail_value);

  const handleRetry = () => {
    reset();
    router.push("/upload");
  };
  return (
    <div className="max-w-screen-lg mx-auto p-6 space-y-10">
      {/* 상단 타이틀 */}
      <section className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">상세 진단 결과</h1>
        <hr className="mx-auto w-full border-gray-100" />
      </section>

      {/* 유사 증상 사례 */}
      <section className="space-y-4">
        <div className="space-y-2 text-center">
          <h2 className="text-xl font-semibold">유사 증상 사례</h2>
          <hr className="mx-auto w-full border-gray-100" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center">
          {Array.from({ length: 3 }).map((_, index) => (
            <Image
              key={index}
              src={`/images/${diseaseName}/example${index + 1}.jpg`}
              alt={`similiar case ${index + 1}`}
              width={300}
              height={300}
              className="rounded-md"
            />
          ))}
        </div>
      </section>

      {/* 증상 정의 */}
      <section className="space-y-4">
        <div className="space-y-2 text-center">
          <h2 className="text-xl font-semibold">증상 정의</h2>
          <hr className="mx-auto w-full border-gray-100" />
        </div>
        <p className="text-gray-700 leading-relaxed text-left sm:text-center">
          {definition}
        </p>
      </section>

      {/* 주요 원인 & 관련 증상 */}
      <section className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 text-center">
            <h3 className="text-xl font-semibold">주요 원인</h3>
            <hr className="mx-auto w-full border-gray-100" />
            <ul className="pl-5 space-y-1 text-gray-700 text-center">
              {causes?.map((cause, index) => (
                <li key={index}>{cause}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2 text-center">
            <h3 className="text-xl font-semibold">관련 증상</h3>
            <hr className="mx-auto w-full border-gray-100" />
            <ul className="pl-5 space-y-1 text-gray-700 text-center">
              {symptoms?.map((symptom, index) => (
                <li key={index}>{symptom}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 가정 케어 방법 */}
      <section className="space-y-4">
        <div className="space-y-2 text-center">
          <h2 className="text-xl font-semibold">가정 케어 방법</h2>
          <hr className="mx-auto w-full border-gray-100" />
        </div>
        <div className="bg-blue-50 p-4 rounded">
          <ul className="list-none space-y-2 text-gray-700">
            {careMethods?.map((method, index) => (
              <li key={index} className="flex items-center justify-center">
                <span className="text-left">{method}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center p-4 gap-4">
          <Button size="lg" onClick={() => router.back()}>
            돌아 가기
          </Button>
          <Button size="lg" onClick={handleRetry}>
            다시 해보기
          </Button>
        </div>
      </section>
    </div>
  );
}
