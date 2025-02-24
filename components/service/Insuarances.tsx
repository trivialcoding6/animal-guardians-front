import Recommend from "./Recommend";
import { useDiseaseByType } from "@/query/useDiseaseByNameFetch";

import { ShieldCheck, ClipboardList } from "lucide-react";
import Link from "next/link";
import SectionSkeleton from "./SectionSkeleton";

type Props = {
  diseaseType: string | null;
};

function Insuarances({ diseaseType }: Props) {
  const { data: disease, isLoading: diseaseLoading } =
    useDiseaseByType(diseaseType);

  if (!diseaseType || diseaseLoading || !disease) {
    return <SectionSkeleton />;
  }

  if (disease.insurances.length === 0) {
    return null;
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
            <Link
              href={`https://${insurance.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-4 py-2 bg-indigo-500 text-white rounded-md text-sm hover:bg-indigo-600 transition-colors"
            >
              사이트 바로가기
            </Link>
          </li>
        ))}
      </ul>
    </Recommend>
  );
}

export default Insuarances;
