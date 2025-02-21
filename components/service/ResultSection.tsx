"use client";

import Chart from "./Chart";
import DiseaseInfo from "./DiseaseInfo";

import { usePredictionStore } from "@/store/prediction";
import Section from "./Section";

export default function ResultSection() {
  const { predictions } = usePredictionStore();

  // predictions에서 가장 높은 확률을 가진 질병 이름 찾기
  const highestProbabilityDisease = predictions
    ? predictions.reduce((max, current) =>
        current.probability > max.probability ? current : max
      ).tag_name
    : null;

  return (
    <Section className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white">
      <Chart predictions={predictions} />
      <DiseaseInfo diseaseName={highestProbabilityDisease} />
    </Section>
  );
}
