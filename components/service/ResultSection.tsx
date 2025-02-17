"use client";

import Chart from "./Chart";
import DiseaseInfo from "./DiseaseInfo";

import { usePredictionStore } from "@/store/prediction";
import Loading from "./Loading";
import Section from "./Section";

export default function ResultSection() {
  const { predictions, isLoading } = usePredictionStore();
  console.log("predictions", predictions);

  if (isLoading) {
    return <Loading />;
  }

  if (!predictions) {
    return null;
  }

  return (
    <Section className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white">
      <Chart predictions={predictions} />
      <DiseaseInfo />
    </Section>
  );
}
