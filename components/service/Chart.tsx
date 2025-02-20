"use client";

import { Info } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { useRouter } from "next/navigation";
import SectionSkeleton from "./SectionSkeleton";

interface ChartProps {
  predictions: Record<string, number> | null;
}

function Chart({ predictions }: ChartProps) {
  const router = useRouter();

  const handleBarClick = (diseaseName: string) => {
    router.push(`/result/detail/${diseaseName}`);
  };

  if (!predictions) {
    return <SectionSkeleton />;
  }

  const data = Object.entries(predictions).map(([name, percentage]) => ({
    name,
    percentage,
  }));

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">분석 결과</h2>
      <p className="text-sm text-gray-500 mb-4 flex items-center">
        <Info className="w-4 h-4 mr-2" />각 차트를 클릭하면 좀 더 자세한 정보를
        확인할 수 있습니다.
      </p>

      <div className="flex items-center gap-4">
        <div className="flex-1">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis type="number" hide />
              <YAxis
                type="category"
                dataKey="name"
                width={120}
                tick={{ fontSize: 12 }}
              />
              <Tooltip />
              <Bar
                dataKey="percentage"
                fill="#6366F1"
                barSize={20}
                cursor="pointer"
                onClick={(barData) => handleBarClick(barData.name)}
              >
                <LabelList
                  dataKey="percentage"
                  position="right"
                  fill="#333"
                  fontSize={12}
                  formatter={(value: number) => `${value.toFixed(2)}%`}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Chart;
