import { MapPin, Phone, Building2 } from "lucide-react";
import Recommend from "./Recommend";
import { useDiseaseByType } from "@/query/useDiseaseByNameFetch";
import SectionSkeleton from "./SectionSkeleton";
import Link from "next/link";

type Props = {
  diseaseType: string | null;
};

function Hospitals({ diseaseType }: Props) {
  const { data: disease, isLoading: diseaseLoading } =
    useDiseaseByType(diseaseType);

  if (!diseaseType || diseaseLoading || !disease) {
    return <SectionSkeleton />;
  }

  if (disease.hospitals.length === 0) {
    return null;
  }

  return (
    <Recommend title="주변 동물병원">
      <ul className="space-y-4">
        {disease.hospitals.map((hospital, index) => (
          <li key={index} className="p-4 border rounded-lg shadow-sm">
            <h3 className="flex items-center gap-2 text-md font-semibold">
              <Building2 className="w-5 h-5 text-purple-500" />
              {hospital.hospital_name}
            </h3>
            <p className="mt-2 flex items-center gap-2 text-gray-600">
              <MapPin className="w-5 h-5 text-blue-500" />
              {hospital.address}
            </p>
            <p className="flex items-center gap-2 text-gray-600">
              <Phone className="w-5 h-5 text-green-500" />
              {hospital.contact_info}
            </p>
            <Link
              href={`https://${hospital.website}`}
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

export default Hospitals;
