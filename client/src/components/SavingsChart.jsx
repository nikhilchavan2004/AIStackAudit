import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";

import {
  TrendingUp,
} from "lucide-react";

const SavingsChart = ({ result }) => {

  const data = [

    {
      name: "Current Spend",
      amount: Number(
        result.currentSpend || result.spend || 0
      ),
    },

    {
      name: "Potential Savings",
      amount: Number(result.savings || 0),
    },

  ];

  const CustomTooltip = ({ active, payload }) => {

    if (active && payload && payload.length) {

      return (

        <div className="bg-[#0d1117]/95 border border-emerald-400/20 backdrop-blur-2xl px-5 py-4 rounded-2xl shadow-2xl shadow-emerald-500/10">

          <p className="text-zinc-400 text-sm mb-1">

            {payload[0].payload.name}

          </p>

          <p className="text-emerald-400 text-2xl font-black">

            ${payload[0].value}

          </p>

        </div>

      );

    }

    return null;

  };

  return (

    <div className="relative overflow-hidden bg-white/[0.03] border border-white/[0.06] backdrop-blur-3xl rounded-[40px] p-10 shadow-[0_0_80px_rgba(16,185,129,0.06)]">

      {/* glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent" />

      {/* HEADER */}

      <div className="relative flex items-center gap-5 mb-10">

        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-400/10 flex items-center justify-center">

          <TrendingUp
            className="text-emerald-400"
            size={30}
          />

        </div>

        <div>

          <h2 className="text-5xl font-black tracking-tight">

            Savings Analytics

          </h2>

          <p className="text-zinc-500 text-lg mt-2">

            AI-powered financial optimization insights

          </p>

        </div>

      </div>

      {/* METRICS */}

      <div className="relative grid md:grid-cols-2 gap-6 mb-10">

        <div className="bg-black/20 border border-white/[0.05] rounded-3xl p-6">

          <p className="text-zinc-500 text-lg mb-3">

            Current Monthly Cost

          </p>

          <h3 className="text-5xl font-black text-white">

            ${data[0].amount}

          </h3>

        </div>

        <div className="bg-emerald-500/10 border border-emerald-400/10 rounded-3xl p-6">

          <p className="text-emerald-300 text-lg mb-3">

            Optimized Savings

          </p>

          <h3 className="text-5xl font-black text-emerald-400">

            ${data[1].amount}

          </h3>

        </div>

      </div>

      {/* CHART */}

      <div className="relative h-[420px] w-full">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={data}
            barCategoryGap="25%"
          >

            <defs>

              <linearGradient
                id="greenGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#34d399"
                  stopOpacity={1}
                />

                <stop
                  offset="100%"
                  stopColor="#059669"
                  stopOpacity={0.8}
                />

              </linearGradient>

              <linearGradient
                id="darkGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#3f3f46"
                  stopOpacity={1}
                />

                <stop
                  offset="100%"
                  stopColor="#18181b"
                  stopOpacity={1}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#27272a"
              vertical={false}
            />

            <XAxis
              dataKey="name"
              tick={{
                fill: "#a1a1aa",
                fontSize: 18,
                fontWeight: 600,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{
                fill: "#71717a",
                fontSize: 15,
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                fill: "rgba(16,185,129,0.05)",
              }}
            />

            <Bar
              dataKey="amount"
              radius={[24, 24, 0, 0]}
            >

              {data.map((entry, index) => (

                <Cell
                  key={index}
                  fill={
                    index === 0
                      ? "url(#darkGradient)"
                      : "url(#greenGradient)"
                  }
                />

              ))}

            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* FOOTER */}

      <div className="relative mt-10 bg-gradient-to-r from-emerald-500/10 to-green-500/5 border border-emerald-400/10 rounded-3xl p-6">

        <p className="text-zinc-300 text-xl leading-relaxed">

          Your AI stack can potentially reduce operational
          SaaS costs by

          <span className="text-emerald-400 font-bold">

            {" "} ${data[1].amount}/month

          </span>

          through intelligent optimization strategies.

        </p>

      </div>

    </div>

  );

};

export default SavingsChart;