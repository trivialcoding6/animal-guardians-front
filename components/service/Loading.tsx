"use client";

import Image from "next/image";
import Section from "./Section";

export default function Loading() {
  return (
    <Section className="flex flex-col justify-center items-center bg-white p-10">
      <div className="animate-spin-slow">
        <Image
          src="/images/loading.png"
          alt="loading"
          width={100}
          height={100}
        />
      </div>
      <p className="text-xl font-semibold">
        이미지를 분석 중입니다. 잠시만 기다려 주세요
      </p>
    </Section>
  );
}
