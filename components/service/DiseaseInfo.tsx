import { useDiseaseByName } from "@/query/useDiseaseFetch";
import Symptom from "./Symptom";
import SectionSkeleton from "./SectionSkeleton";

function DiseaseInfo({ diseaseName }: { diseaseName: string | null }) {
  const { data: disease, isLoading: diseaseLoading } = useDiseaseByName(
    diseaseName || ""
  );

  if (!diseaseName || diseaseLoading) {
    return <SectionSkeleton />;
  }

  const symptoms =
    disease?.details
      .filter((detail) => detail.detail_type === "증상")
      .map((detail) => detail.detail_value) || [];

  const definition = disease?.details.find(
    (detail) => detail.detail_type === "정의"
  )?.detail_value;

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">주요 증상</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {symptoms.map((symptom) => (
          <Symptom key={symptom} symptom={symptom} />
        ))}
      </ul>
      <h2 className="text-lg font-semibold mt-6 mb-2">상세 정보</h2>
      <p className="text-gray-600">{definition || "정보가 없습니다."}</p>
    </div>
  );
}

export default DiseaseInfo;
