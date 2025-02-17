import Symptom from "./Symptom";

const symptoms = ["피부 발진 및 붉은 반점", "가려움증 동반", "피부염 확산"];

function DiseaseInfo() {
  return (
    <div className="p-4 ">
      <h2 className="text-lg font-semibold mb-4">주요 증상</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {symptoms.map((symptom) => (
          <Symptom key={symptom} symptom={symptom} />
        ))}
      </ul>
      <h2 className="text-lg font-semibold mt-6 mb-2">상세 정보</h2>
      <p className="text-gray-600">
        피부 염려증이 의심됩니다. 정확한 진단을 위해 전문의의 상담이 필요합니다.
      </p>
    </div>
  );
}

export default DiseaseInfo;
