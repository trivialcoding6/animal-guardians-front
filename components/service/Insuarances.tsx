import Recommend from "./Recommend";
import { useDiseaseByName } from "@/query/useDiseaseFetch";
import { Button } from "../ui/button";
import { ShieldCheck, ClipboardList } from "lucide-react";
import SectionSkeleton from "./SectionSkeleton";

type Props = {
  diseaseName: string | null;
};

function Insuarances({ diseaseName }: Props) {
  const { data: disease, isLoading: diseaseLoading } =
    useDiseaseByName(diseaseName);

  if (!diseaseName || diseaseLoading || !disease) {
    return <SectionSkeleton />;
  }
  return (
    <Recommend title="반려동물 보험">
      <ul className="space-y-4">
        {disease.insurances.map((insurance, index) => (
          <li key={index} className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-md font-semibold flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-indigo-500" />
              {insurance.insurance_name}
            </h3>
            <p className="mt-2 text-gray-600 flex items-center gap-2">
              <ClipboardList className="w-5 h-5 text-red-500" />
              {insurance.policy_details}
            </p>
            <Button className="mt-3 px-4 py-1 bg-indigo-500 text-white rounded-md text-sm mb-6">
              상담 신청
            </Button>
          </li>
        ))}
      </ul>
    </Recommend>
  );
}

export default Insuarances;
