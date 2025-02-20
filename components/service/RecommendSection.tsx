"use client";

import { usePredictionStore } from "@/store/prediction";
import Section from "./Section";
import Hospitals from "./Hospitals";
import Insuarances from "./Insuarances";

export default function RecommendationSection() {
  const { predictions } = usePredictionStore();

  const highestProbabilityDisease = predictions
    ? Object.entries(predictions).reduce((max, current) =>
        current[1] > max[1] ? current : max
      )[0]
    : null;

  if (!predictions) {
    return null;
  }

  return (
    <Section className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white">
      {/* 주변 동물병원 추천 */}
      <Hospitals diseaseName={highestProbabilityDisease} />
      {/* 반려동물 보험 추천 */}
      <Insuarances diseaseName={highestProbabilityDisease} />
    </Section>
  );
}
