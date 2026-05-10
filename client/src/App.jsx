import { Link } from "react-router-dom";

import {
  Sparkles,
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Zap,
  DollarSign,
  BrainCircuit,
} from "lucide-react";

function App() {

  return (

    <div className="min-h-screen bg-[#030504] text-white overflow-hidden relative">

      {/* PREMIUM BACKGROUND */}

      <div className="absolute top-[-250px] left-[-150px] w-[550px] h-[550px] bg-emerald-500/10 blur-[220px] rounded-full" />

      <div className="absolute bottom-[-250px] right-[-150px] w-[550px] h-[550px] bg-green-500/5 blur-[240px] rounded-full" />

      {/* GRID */}

      <div className="absolute inset-0 opacity-[0.04]">

        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:50px_50px]" />

      </div>

      {/* NOISE EFFECT */}

      <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* NAVBAR */}

      <nav className="relative z-10 max-w-7xl mx-auto px-6 py-8 flex items-center justify-between border-b border-white/[0.05]">

        {/* LOGO */}

        <div className="flex items-center gap-4">

          {/* PREMIUM LOGO */}

          <div className="relative">

            <div className="absolute inset-0 bg-emerald-400/20 blur-2xl rounded-full scale-150" />

            <div className="relative w-14 h-14 rounded-2xl bg-[#07110d] border border-emerald-400/20 flex items-center justify-center backdrop-blur-xl shadow-lg shadow-emerald-500/10">

              <BrainCircuit
                className="text-emerald-400"
                size={28}
              />

            </div>

          </div>

          {/* TEXT */}

          <div>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">

              <span className="bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-500 text-transparent bg-clip-text">

                AIStackAudit

              </span>

            </h1>

            <p className="text-zinc-500 text-xs tracking-[0.25em] uppercase mt-1">

              Intelligent Cost Optimization

            </p>

          </div>

        </div>

        {/* BUTTON */}

        <Link to="/audit">

          <button className="group bg-white/5 border border-white/10 hover:border-emerald-400/30 text-white px-8 py-4 rounded-2xl font-semibold backdrop-blur-xl hover:bg-emerald-500/10 transition-all duration-300 flex items-center gap-3">

            Get Audit

            <ArrowRight
              className="group-hover:translate-x-1 transition"
              size={18}
            />

          </button>

        </Link>

      </nav>

      {/* HERO */}

      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-24 text-center">

        {/* TAG */}

        <div className="inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] px-7 py-3 rounded-full backdrop-blur-2xl mb-10 shadow-lg shadow-emerald-500/5">

          <Sparkles className="text-emerald-400" size={18} />

          <span className="text-emerald-300 font-medium tracking-wide">

            AI COST OPTIMIZATION ENGINE

          </span>

        </div>

        {/* MAIN TITLE */}

        <h1 className="text-5xl md:text-7xl font-bold leading-[1] tracking-tight mb-10 max-w-6xl mx-auto">

          Reduce AI SaaS Costs

          <br />

          With Intelligent

          <span className="bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-500 text-transparent bg-clip-text">

            {" "}Stack Auditing

          </span>

        </h1>

        {/* SUBTITLE */}

        <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-16">

          Discover hidden spending leaks across ChatGPT, Claude,
          Cursor, Copilot and enterprise AI tools with AI-powered
          optimization insights.

        </p>

        {/* CTA */}

       <div className="flex items-center justify-center">
          <Link to="/audit">

            <button className="group relative overflow-hidden bg-gradient-to-r from-emerald-400 to-green-500 text-black px-12 py-5 rounded-3xl text-xl font-bold hover:scale-[1.03] transition-all duration-300 shadow-2xl shadow-emerald-500/20 flex items-center gap-4">

              Audit My Stack

              <ArrowRight
                className="group-hover:translate-x-1 transition"
                size={24}
              />

            </button>

          </Link>

          

        </div>

        {/* PREMIUM STATUS */}

        <div className="mt-16 flex justify-center">

          <div className="relative overflow-hidden bg-white/[0.03] border border-white/[0.06] backdrop-blur-2xl px-8 py-5 rounded-3xl shadow-xl shadow-emerald-500/5">

            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-green-400/5 to-emerald-500/5" />

            <div className="relative flex items-center gap-5">

              <div className="flex gap-2">

                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />

                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse delay-150" />

                <div className="w-3 h-3 rounded-full bg-emerald-300 animate-pulse delay-300" />

              </div>

              <div className="text-left">

                <p className="text-white font-semibold text-lg">

                  AI Optimization Engine Active

                </p>

                <p className="text-zinc-500 text-sm">

                  Real-time SaaS spending intelligence

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-28">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* CARD 1 */}

          <div className="group bg-white/[0.03] border border-white/[0.06] backdrop-blur-2xl rounded-3xl p-8 hover:border-emerald-400/20 hover:-translate-y-2 transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-400/10">

              <BarChart3
                className="text-emerald-400"
                size={30}
              />

            </div>

            <h3 className="text-2xl font-bold mb-4">

              Deep Analysis

            </h3>

            <p className="text-zinc-400 leading-relaxed">

              Analyze AI subscription spending patterns instantly.

            </p>

          </div>

          {/* CARD 2 */}

          <div className="group bg-white/[0.03] border border-white/[0.06] backdrop-blur-2xl rounded-3xl p-8 hover:border-emerald-400/20 hover:-translate-y-2 transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-400/10">

              <DollarSign
                className="text-emerald-400"
                size={30}
              />

            </div>

            <h3 className="text-2xl font-bold mb-4">

              Cost Reduction

            </h3>

            <p className="text-zinc-400 leading-relaxed">

              Identify unnecessary enterprise AI expenses quickly.

            </p>

          </div>

          {/* CARD 3 */}

          <div className="group bg-white/[0.03] border border-white/[0.06] backdrop-blur-2xl rounded-3xl p-8 hover:border-emerald-400/20 hover:-translate-y-2 transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-400/10">

              <ShieldCheck
                className="text-emerald-400"
                size={30}
              />

            </div>

            <h3 className="text-2xl font-bold mb-4">

              Smart Suggestions

            </h3>

            <p className="text-zinc-400 leading-relaxed">

              Receive AI-generated optimization recommendations.

            </p>

          </div>

          {/* CARD 4 */}

          <div className="group bg-white/[0.03] border border-white/[0.06] backdrop-blur-2xl rounded-3xl p-8 hover:border-emerald-400/20 hover:-translate-y-2 transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-400/10">

              <Zap
                className="text-emerald-400"
                size={30}
              />

            </div>

            <h3 className="text-2xl font-bold mb-4">

              Instant Results

            </h3>

            <p className="text-zinc-400 leading-relaxed">

              Generate actionable SaaS savings insights in seconds.

            </p>

          </div>

        </div>

      </section>

    </div>

  );

}

export default App;