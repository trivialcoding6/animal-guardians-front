import { MapPin, Phone, Building2 } from "lucide-react";
import Recommend from "./Recommend";
import { useDiseaseByType } from "@/query/useDiseaseByNameFetch";
import { Button } from "../ui/button";
import SectionSkeleton from "./SectionSkeleton";

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
            <Button className="mt-3 px-4 py-1 bg-blue-500 text-white rounded-md text-sm">
              지도 보러가기
            </Button>
          </li>
        ))}
      </ul>
    </Recommend>
  );
}

export default Hospitals;
