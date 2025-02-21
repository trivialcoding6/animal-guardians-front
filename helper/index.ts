import { DiseaseType } from "@/enum/disease";

export function getValidDiseaseType(type: string): string {
  const validTypes = ["A1", "A2", "A3", "A4", "A5", "A6", "Negative"];
  return validTypes.includes(type)
    ? DiseaseType[type as keyof typeof DiseaseType]
    : DiseaseType.A0;
}

export function getDiseaseTypeKey(value: string): string {
  const entries = Object.entries(DiseaseType);
  const found = entries.find(([_, val]) => val === value);
  return found ? found[0] : "A0";
}
