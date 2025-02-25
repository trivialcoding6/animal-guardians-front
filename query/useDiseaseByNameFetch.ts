import { useQuery } from "@tanstack/react-query";

interface Details {
  id: string;
  detail_type: string;
  detail_value: string;
  created_at: string;
}

interface Hospital {
  id: string;
  disease_id: string;
  hospital_name: string;
  address: string;
  contact_info: string;
  website: string;
  created_at: string;
  updated_at: string;
}

interface Insurance {
  id: string;
  disease_id: string;
  insurance_name: string;
  policy_details: string;
  website: string;
  created_at: string;
  updated_at: string;
}

interface Disease {
  id: string;
  name: string;
  type: string;
  details: Details[];
  created_at: string;
  updated_at: string;
  hospitals: Hospital[];
  insurances: Insurance[];
  // 필요한 다른 질병 정보 필드들을 여기에 추가하세요
}

const fetchDiseaseByType = async (type: string | null) => {
  if (!type) {
    return null;
  }

  // 유효한 타입 검증
  const validTypes = ["A0", "A1", "A2", "A3", "A4", "A5", "A6", "Negative"];
  const validType = validTypes.includes(type) ? type : "A0";

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/diseases/type/${validType}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch disease");
  }

  return data;
};

export const useDiseaseByType = (type: string | null) => {
  return useQuery<Disease>({
    queryKey: ["disease", type],
    queryFn: () => fetchDiseaseByType(type),
    enabled: !!type,
  });
};
