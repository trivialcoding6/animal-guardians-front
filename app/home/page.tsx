"use client";

import React from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function HomePage() {
  // 모바일 판단 (768px 이하를 모바일로 가정)
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // 첫 번째 섹션(상단) 카드 3개
  const topCards = [
    {
      title: "AI 학습 및 정확도",
      description:
        "업로드한 사진은 AI 모델의 지속적인 학습에 활용되며, 이를 통해 더욱 정밀한 진단이 가능합니다.",
    },
    {
      title: "책임 있는 AI 원칙",
      description:
        "AI 윤리 원칙을 준수하며, 분석 결과는 참고용으로 활용됩니다. 최종 진단은 전문 수의사의 판단이 필요합니다.",
    },
    {
      title: "데이터 보안",
      description:
        "사용자의 데이터는 개인정보 보호 원칙에 따라 안전하게 저장되며, 동의 없이 외부로 공유되지 않습니다.",
    },
  ];

  const analysisCards = [
    {
      title: "각질/비듬/상피성잔고리",
      description: "피부가 건조해지고 각질이 떨어지거나 비듬이 생기는 증상",
    },
    {
      title: "태선화/과다색소침착",
      description: "피부가 원래보다 어두워지거나 두꺼워지는 증상",
    },
    {
      title: "농포/여드름",
      description: "피부에 고름이 찬 뾰루지나 여드름이 발생하는 증상",
    },
    {
      title: "미란/궤양",
      description: "피부가 벗겨지거나 상처가 깊어지는 증상",
    },
    {
      title: "결절/종괴",
      description: "혹처럼 부어오르거나 덩어리가 만져지는 증상",
    },
  ];

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-8 text-center">
      {/* 상단 헤더 영역 */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold leading-tight md:text-3xl whitespace-break-spaces">
          반려동물 피부 질환 진단 AI 업로드 가이드
        </h1>
        <p className="mt-2 text-gray-600 text-sm md:text-base whitespace-break-spaces">
          AI를 통한 정확하고 신뢰할 수 있는 피부 진단을 위한 가이드라인
        </p>
      </header>

      {/* ───────────────────────────────────────────────────
          [1] 상단 3개 카드 섹션 
          모바일: Carousel / 데스크톱: 3열 그리드
      ─────────────────────────────────────────────────── */}
      <section className="w-full">
        {isMobile ? (
          /* 모바일 화면: shadcn-ui Carousel 활용 */
          <Carousel className="relative w-full">
            <CarouselContent className="flex">
              {topCards.map((card, idx) => (
                <CarouselItem key={idx} className="w-full flex-shrink-0 px-2">
                  <Card className="border mx-16">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">
                        {card.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 whitespace-break-spaces">
                        {card.description}
                      </CardDescription>
                    </CardHeader>
                    {idx === 0 && (
                      <CardContent>
                        <Badge className="bg-blue-500 text-white">
                          <RefreshCw className="h-3 w-3 mr-1" />
                          실시간 업데이트 중
                        </Badge>
                      </CardContent>
                    )}
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
          </Carousel>
        ) : (
          /* 데스크톱 화면: 3열 그리드 */
          <div className="grid grid-cols-3 gap-4">
            {topCards.map((card, idx) => (
              <Card key={idx} className="border">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    {card.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 whitespace-break-spaces">
                    {card.description}
                  </CardDescription>
                </CardHeader>
                {idx === 0 && (
                  <CardContent>
                    <Badge className="bg-blue-500 text-white space-x-2">
                      <RefreshCw className="h-3 w-3 mr-1" />
                      실시간 업데이트 중
                    </Badge>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* ───────────────────────────────────────────────────
          추가 간격
      ─────────────────────────────────────────────────── */}
      <div className="w-full">
        {/* ───────────────────────────────────────────────────
            [2] AI 분석 가능성 향상 범위 섹션 
            모바일: Carousel / 데스크톱: 3열 그리드
        ─────────────────────────────────────────────────── */}
        <section className="mt-8 py-8 w-full">
          <h2 className="mb-4 text-2xl font-semibold">분석 가능한 증상 범위</h2>

          <Carousel className="relative w-full">
            <CarouselContent className="flex">
              {analysisCards.map((card, idx) => (
                <CarouselItem key={idx} className="w-full flex-shrink-0 px-2">
                  <Card className="border mx-16 h-30 flex flex-col justify-center">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">
                        {card.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 whitespace-break-spaces">
                        {card.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
          </Carousel>
        </section>

        {/* 공정한 데이터 학습 윤리 준수 (녹색 박스) */}
        <section className="w-full mt-8">
          <div className="w-full rounded-lg bg-green-100 p-6 text-left">
            <h2 className="mb-4 text-xl font-semibold text-center md:text-left">
              공정한 데이터 학습과 윤리적 고려
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />
                <span>
                  AI는 편향된 데이터를 배제하고 공정한 진단을 제공합니다.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />
                <span>지속적인 검토와 업데이트로 정확도를 향상시킵니다.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />
                <span>수의사의 추가 상담을 권장합니다.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 업로드 버튼 */}
        <section className="mt-8">
          <Link href="/choose">
            <Button
              variant="default"
              size="lg"
              className="bg-black text-white hover:bg-gray-900"
            >
              업로드 하고 진단 시작하기
            </Button>
          </Link>
        </section>
      </div>
    </main>
  );
}

export default HomePage;
