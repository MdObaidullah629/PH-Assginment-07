"use client";
import { useTimeline } from "@/context/TimelineContext";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const StatsPage = () => {
  const { interactions } = useTimeline();

  // ডাটা ফরম্যাট করা Recharts এর জন্য
  const dataMap = interactions.reduce((acc, curr) => {
    acc[curr.type] = (acc[curr.type] || 0) + 1;
    return acc;
  }, {});

  const chartData = [
    { name: "Call", value: dataMap["Call"] || 0 },
    { name: "Text", value: dataMap["Text"] || 0 },
    { name: "Video", value: dataMap["Video"] || 0 },
  ];

  const COLORS = ["#3B82F6", "#10B981", "#8B5CF6"];

  return (
    <div className="max-w-4xl mx-auto px-10 py-16">
      <h1 className="text-4xl font-bold mb-10 text-[#1E3A2F]">Friendship Analytics</h1>
      
      <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
        <h3 className="text-xl font-bold mb-8 text-center">Interaction Breakdown</h3>
        
        <div className="h-[400px] w-full">
          {interactions.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              No data available. Log some interactions first!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsPage;