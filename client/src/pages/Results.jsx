import { useEffect, useState } from "react";

import {
  useLocation,
  useParams,
} from "react-router-dom";

import axios from "axios";

import {
  Copy,
  TrendingUp,
  DollarSign,
  Sparkles,
  BrainCircuit,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

import SavingsChart from "../components/SavingsChart";
import LeadForm from "../components/LeadForm";

const Results = () => {

  const location = useLocation();

  const { id } = useParams();

  const [result, setResult] = useState(
    location.state || null
  );

  const [loading, setLoading] = useState(false);

  const copyLink = async () => {

    try {

      await navigator.clipboard.writeText(
        window.location.href
      );

      alert("Share link copied");

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    const fetchAudit = async () => {

      if (!result && id) {

        try {

          setLoading(true);

          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/audit/${id}`
          );

          setResult(response.data);

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);

        }

      }

    };

    fetchAudit();

  }, [id, result]);

  if (loading) {

    return (

      <div className="min-h-screen bg-black text-white flex items-center justify-center text-4xl font-black">

        Loading Audit...

      </div>

    );

  }

  if (!result) {

    return (

      <div className="min-h-screen bg-black text-white flex items-center justify-center text-4xl font-black">

        Audit Not Found

      </div>

    );

  }

  const annualSavings =
    Number(result.savings || 0) * 12;

  return (

    <div className="min-h-screen bg-[#020303] text-white overflow-hidden relative px-6 py-20">

      {/* PREMIUM BACKGROUND */}

      <div className="absolute top-[-300px] left-[-150px] w-[650px] h-[650px] bg-emerald-500/10 blur-[250px] rounded-full" />

      <div className="absolute bottom-[-300px] right-[-150px] w-[650px] h-[650px] bg-green-500/5 blur-[250px] rounded-full" />

      <div className="absolute inset-0 opacity-[0.03]">

        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:55px_55px]" />

      </div>

      {/* MAIN */}

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TOP HERO */}

        <div className="relative overflow-hidden rounded-[42px] border border-white/[0.07] bg-white/[0.03] backdrop-blur-3xl p-12 md:p-16 mb-12 shadow-[0_0_80px_rgba(16,185,129,0.08)]">

          {/* glow */}

          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-green-500/5" />

          {/* TOP BAR */}

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 mb-8">

                <BrainCircuit
                  className="text-emerald-400"
                  size={18}
                />

                <span className="text-emerald-300 font-medium tracking-wide">

                  AI COST ANALYSIS COMPLETE

                </span>

              </div>

              <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight mb-6">

                ${result.savings}

                <span className="text-emerald-400">

                  /mo

                </span>

              </h1>

              <p className="text-2xl text-zinc-400 leading-relaxed">

                Potential Annual Savings:

                <span className="text-white font-bold">

                  {" "} ${annualSavings}

                </span>

              </p>

            </div>

            {/* RIGHT */}

            <div className="flex flex-col gap-5">

              <button
                onClick={copyLink}
                className="group bg-white/5 border border-white/10 hover:border-emerald-400/30 px-8 py-5 rounded-2xl text-lg font-semibold backdrop-blur-xl hover:bg-emerald-500/10 transition-all duration-300 flex items-center gap-4"
              >

                <Copy size={20} />

                Copy Share Link

              </button>

              <div className="bg-emerald-500/10 border border-emerald-400/10 rounded-2xl p-5">

                <p className="text-zinc-400 mb-2">

                  Optimization Score

                </p>

                <h2 className="text-5xl font-black text-emerald-400">

                  92%

                </h2>

              </div>

            </div>

          </div>

        </div>

        {/* METRICS */}

        <div className="grid md:grid-cols-3 gap-8 mb-12">

          {/* CARD */}

          <div className="group relative overflow-hidden bg-white/[0.03] border border-white/[0.06] rounded-[32px] p-8 backdrop-blur-3xl hover:border-emerald-400/20 transition-all duration-500 hover:-translate-y-2">

            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative">

              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-400/10 flex items-center justify-center mb-8">

                <DollarSign
                  className="text-emerald-400"
                  size={30}
                />

              </div>

              <p className="text-zinc-500 text-lg mb-4">

                Current Spend

              </p>

              <h2 className="text-6xl font-black tracking-tight">

                ${result.currentSpend || result.spend}

              </h2>

            </div>

          </div>

          {/* CARD */}

          <div className="group relative overflow-hidden bg-white/[0.03] border border-white/[0.06] rounded-[32px] p-8 backdrop-blur-3xl hover:border-emerald-400/20 transition-all duration-500 hover:-translate-y-2">

            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative">

              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-400/10 flex items-center justify-center mb-8">

                <TrendingUp
                  className="text-emerald-400"
                  size={30}
                />

              </div>

              <p className="text-zinc-500 text-lg mb-4">

                Monthly Savings

              </p>

              <h2 className="text-6xl font-black tracking-tight text-emerald-400">

                ${result.savings}

              </h2>

            </div>

          </div>

          {/* CARD */}

          <div className="group relative overflow-hidden bg-white/[0.03] border border-white/[0.06] rounded-[32px] p-8 backdrop-blur-3xl hover:border-emerald-400/20 transition-all duration-500 hover:-translate-y-2">

            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative">

              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-400/10 flex items-center justify-center mb-8">

                <Sparkles
                  className="text-emerald-400"
                  size={30}
                />

              </div>

              <p className="text-zinc-500 text-lg mb-4">

                Annual Savings

              </p>

              <h2 className="text-6xl font-black tracking-tight">

                ${annualSavings}

              </h2>

            </div>

          </div>

        </div>

        {/* ANALYSIS PANEL */}

        <div className="relative overflow-hidden bg-white/[0.03] border border-white/[0.06] rounded-[42px] backdrop-blur-3xl p-12 mb-12 shadow-[0_0_70px_rgba(16,185,129,0.06)]">

          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent" />

          <div className="relative">

            <div className="flex items-center gap-4 mb-10">

              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-400/10 flex items-center justify-center">

                <ShieldCheck
                  className="text-emerald-400"
                  size={30}
                />

              </div>

              <div>

                <h2 className="text-5xl font-black tracking-tight">

                  Audit Breakdown

                </h2>

                <p className="text-zinc-500 text-lg mt-2">

                  AI-generated optimization insights

                </p>

              </div>

            </div>

            {/* GRID */}

            <div className="grid md:grid-cols-2 gap-10">

              {/* LEFT */}

              <div className="space-y-10">

                <div>

                  <p className="text-zinc-500 text-lg mb-3">

                    Current Monthly Spend

                  </p>

                  <h3 className="text-5xl font-black">

                    ${result.currentSpend || result.spend}

                  </h3>

                </div>

                <div>

                  <p className="text-zinc-500 text-lg mb-3">

                    Recommendation

                  </p>

                  <div className="flex items-start gap-4">

                    <ArrowUpRight
                      className="text-emerald-400 mt-2"
                      size={28}
                    />

                    <h3 className="text-4xl font-bold text-emerald-400 leading-tight">

                      {result.recommendation}

                    </h3>

                  </div>

                </div>

              </div>

              {/* RIGHT */}

              <div className="space-y-10">

                <div>

                  <p className="text-zinc-500 text-lg mb-3">

                    Why This Matters

                  </p>

                  <p className="text-2xl text-zinc-300 leading-relaxed">

                    {result.reason}

                  </p>

                </div>

                <div>

                  <p className="text-zinc-500 text-lg mb-3">

                    AI Summary

                  </p>

                  <p className="text-2xl text-zinc-300 leading-relaxed">

                    {result.aiSummary}

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* CHART */}

        <div className="mb-14">

          <SavingsChart result={result} />

        </div>

        {/* LEAD FORM */}

        <LeadForm auditId={result.auditId || result._id} />

      </div>

    </div>

  );

};

export default Results;