"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const router = useRouter();

  const handleSelectPet = (pet: "dog" | "cat") => {
    router.push(`/upload?type=${pet}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <header className="flex flex-col items-center justify-center space-y-2 mb-8">
        <Image src="/images/logo.png" alt="logo" width={50} height={50} />
        <h1 className="text-3xl font-bold">반려동물 피부 진단</h1>
        <p className="text-gray-600">반려동물의 종을 선택해주세요.</p>
      </header>

      {/* 카드 영역 */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* 강아지 카드 */}
        <Card
          className="w-60 cursor-pointer transition-transform hover:scale-105"
          onClick={() => handleSelectPet("dog")}
        >
          <CardContent className="flex flex-col items-center justify-center p-4">
            <Image
              src="/images/dog.png"
              alt="강아지"
              width={600}
              height={600}
              className="mb-2"
            />
            <p className="font-semibold text-lg">강아지</p>
          </CardContent>
        </Card>

        {/* 고양이 카드 */}
        <Card
          className="w-60 cursor-pointer transition-transform hover:scale-105"
          onClick={() => handleSelectPet("cat")}
        >
          <CardContent className="flex flex-col items-center justify-center p-4">
            <Image
              src="/images/cat.png"
              alt="고양이"
              width={600}
              height={600}
              className="mb-2"
            />
            <p className="font-semibold text-lg">고양이</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
