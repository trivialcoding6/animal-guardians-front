// app/result/detail/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { usePredictionStore } from "@/store/prediction";
import { CircleCheck } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DiseaseDetailPage() {
  const { reset } = usePredictionStore();
  const router = useRouter();
  const handleRetry = () => {
    reset();
    router.push("/upload");
  };
  return (
    <div className="max-w-screen-lg mx-auto p-6 space-y-10">
      {/* 상단 타이틀 */}
      <section className="text-center space-y-2">
        <h1 className="text-2xl font-bold">상세 진단 결과</h1>
        {/* 가운데 짧은 구분선 */}
        <hr className="mx-auto w-full border-gray-100" />
      </section>

      {/* 유사 증상 사례 */}
      <section className="space-y-4">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">유사 증상 사례</h2>
          <hr className="mx-auto w-full border-gray-100" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* 실제 이미지를 사용한다면 <Image /> 컴포넌트로 교체 */}
          <div className="h-32 bg-gray-200 flex items-center justify-center rounded">
            Image
          </div>
          <div className="h-32 bg-gray-200 flex items-center justify-center rounded">
            Image
          </div>
          <div className="h-32 bg-gray-200 flex items-center justify-center rounded">
            Image
          </div>
        </div>
      </section>

      {/* 증상 정의 */}
      <section className="space-y-4">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">증상 정의</h2>
          <hr className="mx-auto w-full border-gray-100" />
        </div>
        <p className="text-gray-700 leading-relaxed">
          피부 건조증(건성 피부염)은 피부의 수분이 부족해져 발생하는 증상으로,
          피부가 건조하고 각질이 일어나며 가려움증을 동반할 수 있습니다.
        </p>
      </section>

      {/* 주요 원인 & 관련 증상 - 각각 별도 제목으로 구성 */}
      <section className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 주요 원인 */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">주요 원인</h3>
            <hr className="mx-auto w-full border-gray-100" />
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>실내 난방으로 인한 건조한 환경</li>
              <li>불균형한 식단</li>
              <li>알레르기 반응</li>
              <li>피부 장벽 손상</li>
            </ul>
          </div>

          {/* 관련 증상 */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">관련 증상</h3>
            <hr className="mx-auto w-full border-gray-100" />
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>피부 각질 및 붉은 반점</li>
              <li>가려움증 및 발진</li>
              <li>털 빠짐</li>
              <li>피부 갈라짐</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 가정 케어 방법 */}
      <section className="space-y-4">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">가정 케어 방법</h2>
          <hr className="mx-auto w-full border-gray-100" />
        </div>
        {/* 파란색 박스 */}
        <div className="bg-blue-50 p-4 rounded">
          <ul className="list-none space-y-2 text-gray-700">
            <li className="flex items-center">
              <CircleCheck className="w-4 h-4 text-blue-600 mr-2" />
              실내 습도 유지 (40~60%)
            </li>
            <li className="flex items-center">
              <CircleCheck className="w-4 h-4 text-blue-600 mr-2" />
              저자극 브러싱 및 샴푸 사용
            </li>
            <li className="flex items-center">
              <CircleCheck className="w-4 h-4 text-blue-600 mr-2" />
              건강한 지방산이 함유된 사료 급여
            </li>
            <li className="flex items-center">
              <CircleCheck className="w-4 h-4 text-blue-600 mr-2" />
              오랜 가려움증이 지속될 경우 전문의 상담
            </li>
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
