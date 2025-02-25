import { useDiseaseByType } from "@/query/useDiseaseByNameFetch";
import Symptom from "./Symptom";
import SectionSkeleton from "./SectionSkeleton";

function DiseaseInfo({ diseaseType }: { diseaseType: string | null }) {
  const { data: disease, isLoading: diseaseLoading } = useDiseaseByType(
    diseaseType || ""
  );

  if (!diseaseType || diseaseLoading) {
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
    <>
      {disease?.type !== "Negative" ? (
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
      ) : (
        <div className="p-4 flex flex-col justify-center items-center">
          <p className="text-gray-600 text-xl">
            🎉 현재 이상 징후가 감지되지는 않아요. <br />
            피부 상태는 건강해보이지만 지속적인 관찰이 필요할 수 있어요. <br />
            또 다른 부위가 궁금하다면, 하단 버튼을 통해 한 번 더 촬영해주세요!
            <br />
            버튼을 통해 한 번 더 촬영해주세요! 🎉
          </p>
        </div>
      )}
    </>
  );
}

export default DiseaseInfo;
