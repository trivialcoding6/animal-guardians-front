"use client";

import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface CardData {
  title: string;
  description: string;
}

interface CardCarouselProps {
  cards: CardData[];
}

const CardCarousel: FC<CardCarouselProps> = ({ cards }) => {
  // 768px 이하를 모바일로 가정
  const isMobile = useMediaQuery({ maxWidth: 768 });
  console.log(isMobile);
  if (isMobile) {
    // 모바일: 가로 스크롤
    return (
      <ScrollArea className="w-full overflow-x-auto">
        <div className="flex space-x-4">
          {cards.map((card, idx) => (
            <Card key={idx} className="min-w-[250px] border">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {card.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </ScrollArea>
    );
  }

  // 데스크톱: 3열 그리드
  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map((card, idx) => (
        <Card key={idx} className="border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              {card.title}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {card.description}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default CardCarousel;
