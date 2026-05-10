import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  Sparkles,
  BrainCircuit,
  DollarSign,
  Users,
  Cpu,
  Zap,
} from "lucide-react";

const AuditForm = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    tool: "",
    plan: "",
    spend: "",
    seats: "",
    teamSize: "",
    useCase: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/audit`,
        formData
      );

      navigate(`/results/${response.data.auditId}`, {
        state: response.data,
      });

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* BACKGROUND GLOW */}

      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-green-500/20 blur-[140px] rounded-full" />

      <div className="absolute bottom-[-200px] right-[-100px] w-[400px] h-[400px] bg-emerald-400/10 blur-[150px] rounded-full" />

      {/* GRID */}

      <div className="absolute inset-0 opacity-[0.05]">

        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />

      </div>

      <div className="relative z-10 px-6 py-20">

        <div className="max-w-5xl mx-auto">

          {/* HERO */}

          <div className="text-center mb-16">

            <div className="inline-flex items-center gap-3 bg-zinc-900/70 border border-zinc-800 px-6 py-3 rounded-full backdrop-blur-xl mb-8 shadow-lg shadow-green-500/10">

              <Sparkles className="text-green-400" size={18} />

              <span className="text-zinc-300 font-medium">

                AI SaaS Optimization Engine

              </span>

            </div>

            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8">

              Optimize Your
              <br />

              <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 text-transparent bg-clip-text">

                AI Stack Costs

              </span>

            </h1>

            <p className="text-zinc-400 text-xl leading-relaxed max-w-3xl mx-auto">

              Analyze ChatGPT, Claude, Cursor, Copilot and enterprise AI subscriptions to uncover hidden cost inefficiencies instantly.

            </p>

          </div>

          {/* FORM CARD */}

          <div className="relative">

            {/* OUTER GLOW */}

            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-400/10 blur-2xl rounded-[40px]" />

            <form
              onSubmit={handleSubmit}
              className="relative bg-zinc-950/80 backdrop-blur-2xl border border-zinc-800 rounded-[40px] p-10 md:p-14 shadow-2xl"
            >

              <div className="grid md:grid-cols-2 gap-8">

                {/* TOOL */}

                <div>

                  <label className="flex items-center gap-3 text-zinc-300 mb-4 font-medium">

                    <BrainCircuit className="text-green-400" size={20} />

                    AI Tool

                  </label>

                 <div className="relative">

  <select
    name="tool"
    value={formData.tool}
    onChange={handleChange}
    required
    className="w-full appearance-none bg-zinc-950 border border-zinc-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-500/30 transition"
  >

    <option value="" className="bg-zinc-950 text-white">
      Select Tool
    </option>

    <option value="ChatGPT" className="bg-zinc-950 text-white">
      ChatGPT
    </option>

    <option value="Claude" className="bg-zinc-950 text-white">
      Claude
    </option>

    <option value="Cursor" className="bg-zinc-950 text-white">
      Cursor
    </option>

    <option value="Copilot" className="bg-zinc-950 text-white">
      GitHub Copilot
    </option>

  </select>

  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-400">

    ▼

  </div>

</div>

                </div>

                {/* PLAN */}

                <div>

                  <label className="flex items-center gap-3 text-zinc-300 mb-4 font-medium">

                    <Cpu className="text-green-400" size={20} />

                    Current Plan

                  </label>

                  <input
                    type="text"
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    placeholder="Enterprise / Team / Pro"
                    required
                    className="w-full bg-black/60 border border-zinc-700 rounded-2xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-500/30 transition"
                  />

                </div>

                {/* SPEND */}

                <div>

                  <label className="flex items-center gap-3 text-zinc-300 mb-4 font-medium">

                    <DollarSign className="text-green-400" size={20} />

                    Monthly Spend ($)

                  </label>

                  <input
                    type="number"
                    name="spend"
                    value={formData.spend}
                    onChange={handleChange}
                    placeholder="1200"
                    required
                    className="w-full bg-black/60 border border-zinc-700 rounded-2xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-500/30 transition"
                  />

                </div>

                {/* SEATS */}

                <div>

                  <label className="flex items-center gap-3 text-zinc-300 mb-4 font-medium">

                    <Users className="text-green-400" size={20} />

                    Number Of Seats

                  </label>

                  <input
                    type="number"
                    name="seats"
                    value={formData.seats}
                    onChange={handleChange}
                    placeholder="25"
                    required
                    className="w-full bg-black/60 border border-zinc-700 rounded-2xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-500/30 transition"
                  />

                </div>

                {/* TEAM */}

                <div>

                  <label className="flex items-center gap-3 text-zinc-300 mb-4 font-medium">

                    <Users className="text-green-400" size={20} />

                    Team Size

                  </label>

                  <input
                    type="number"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    placeholder="40"
                    required
                    className="w-full bg-black/60 border border-zinc-700 rounded-2xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-500/30 transition"
                  />

                </div>

                {/* USE CASE */}

                <div>

                  <label className="flex items-center gap-3 text-zinc-300 mb-4 font-medium">

                    <Zap className="text-green-400" size={20} />

                    Primary Use Case

                  </label>

                 <div className="relative">

  <select
    name="useCase"
    value={formData.useCase}
    onChange={handleChange}
    required
    className="w-full appearance-none bg-zinc-950 border border-zinc-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-500/30 transition"
  >

    <option value="" className="bg-zinc-950 text-white">
      Select Use Case
    </option>

    <option value="Development" className="bg-zinc-950 text-white">
      Development
    </option>

    <option value="Research" className="bg-zinc-950 text-white">
      Research
    </option>

    <option value="Marketing" className="bg-zinc-950 text-white">
      Marketing
    </option>

    <option value="Content Creation" className="bg-zinc-950 text-white">
      Content Creation
    </option>

  </select>

  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-400">

    ▼

  </div>

</div>

                </div>

              </div>

              {/* BUTTON */}

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-12 bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold text-xl py-5 rounded-2xl hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/30 transition duration-300"
              >

                {loading
                  ? "Generating AI Audit..."
                  : "Generate AI Audit"}

              </button>

            </form>

          </div>

        </div>

      </div>

    </div>

  );

};

export default AuditForm;