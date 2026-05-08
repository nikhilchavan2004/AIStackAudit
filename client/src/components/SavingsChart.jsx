import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SavingsChart = ({ result }) => {

  const data = [
    {
      name: "Current Spend",
      amount: result.currentSpend || result.spend,
    },
    {
      name: "Potential Savings",
      amount: result.savings,
    },
  ];

  return (

    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mt-10">

      <h2 className="text-3xl font-bold mb-8">
        Savings Visualization
      </h2>

      <div className="h-[350px]">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="amount"
              radius={[10, 10, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

};

export default SavingsChart;