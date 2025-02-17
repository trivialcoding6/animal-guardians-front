"use client";
import Section from "./Section";
import Chart from "./Chart";
import DiseaseInfo from "./DiseaseInfo";

export default function ResultSection() {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white">
      <Chart />
      <DiseaseInfo />
    </Section>
  );
}
