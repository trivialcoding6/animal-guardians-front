import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

interface ChartProps {
  predictions: Record<string, number>;
}

function Chart({ predictions }: ChartProps) {
  const data = Object.entries(predictions).map(([name, percentage]) => ({
    name,
    percentage,
  }));

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">분석 결과</h2>
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
          <Bar dataKey="percentage" fill="#6366F1" barSize={20}>
            {/* 퍼센트 값 표시 */}
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
  );
}

export default Chart;
