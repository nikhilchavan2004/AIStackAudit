import { useState } from "react";

import axios from "axios";

import {
  Mail,
  Building2,
  BriefcaseBusiness,
  Sparkles,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const LeadForm = ({ auditId }) => {

  const [form, setForm] = useState({

    email: "",
    company: "",
    role: "",

  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/leads`,
        {
          ...form,
          auditId,
        }
      );

      alert("Audit Saved Successfully");

      setForm({
        email: "",
        company: "",
        role: "",
      });

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="relative overflow-hidden bg-white/[0.03] border border-white/[0.06] backdrop-blur-3xl rounded-[42px] p-10 md:p-14 shadow-[0_0_80px_rgba(16,185,129,0.08)]">

      {/* BACKGROUND GLOW */}

      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent" />

      <div className="absolute top-[-120px] right-[-120px] w-[280px] h-[280px] bg-emerald-500/10 blur-[120px] rounded-full" />

      {/* HEADER */}

      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">

        <div>

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/10 mb-6">

            <Sparkles
              className="text-emerald-400"
              size={18}
            />

            <span className="text-emerald-300 text-sm tracking-wide font-semibold">

              AI OPTIMIZATION REPORT

            </span>

          </div>

          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-5">

            Save Full
            <br />
            Audit Report

          </h2>

          <p className="text-zinc-400 text-xl leading-relaxed max-w-2xl">

            Receive AI-powered optimization reports,
            future savings insights, and premium cost
            recommendations directly in your inbox.

          </p>

        </div>

        {/* SIDE CARD */}

        <div className="bg-emerald-500/10 border border-emerald-400/10 rounded-3xl p-6 min-w-[260px]">

          <div className="flex items-center gap-4 mb-5">

            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center">

              <ShieldCheck
                className="text-emerald-400"
                size={28}
              />

            </div>

            <div>

              <p className="text-zinc-400 text-sm">

                Enterprise Grade

              </p>

              <h3 className="text-2xl font-black">

                Secure Insights

              </h3>

            </div>

          </div>

          <p className="text-zinc-300 leading-relaxed">

            Your audit data stays encrypted and
            protected using enterprise-level security.

          </p>

        </div>

      </div>

      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        className="relative space-y-8"
      >

        {/* EMAIL */}

        <div className="group relative">

          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-emerald-400">

            <Mail size={22} />

          </div>

          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full bg-black/30 border border-white/[0.06] focus:border-emerald-400/40 outline-none rounded-3xl py-6 pl-16 pr-6 text-xl text-white placeholder:text-zinc-500 backdrop-blur-xl transition-all duration-300 focus:shadow-[0_0_40px_rgba(16,185,129,0.15)]"
          />

        </div>

        {/* COMPANY */}

        <div className="group relative">

          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-emerald-400">

            <Building2 size={22} />

          </div>

          <input
            type="text"
            name="company"
            placeholder="Company or organization"
            value={form.company}
            onChange={handleChange}
            required
            className="w-full bg-black/30 border border-white/[0.06] focus:border-emerald-400/40 outline-none rounded-3xl py-6 pl-16 pr-6 text-xl text-white placeholder:text-zinc-500 backdrop-blur-xl transition-all duration-300 focus:shadow-[0_0_40px_rgba(16,185,129,0.15)]"
          />

        </div>

        {/* ROLE */}

        <div className="group relative">

          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-emerald-400">

            <BriefcaseBusiness size={22} />

          </div>

          <input
            type="text"
            name="role"
            placeholder="Your role or position"
            value={form.role}
            onChange={handleChange}
            required
            className="w-full bg-black/30 border border-white/[0.06] focus:border-emerald-400/40 outline-none rounded-3xl py-6 pl-16 pr-6 text-xl text-white placeholder:text-zinc-500 backdrop-blur-xl transition-all duration-300 focus:shadow-[0_0_40px_rgba(16,185,129,0.15)]"
          />

        </div>

        {/* BUTTON */}

        <button
          type="submit"
          disabled={loading}
          className="group relative overflow-hidden w-full bg-gradient-to-r from-emerald-400 to-green-500 text-black py-6 rounded-3xl text-2xl font-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(16,185,129,0.35)]"
        >

          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300" />

          <span className="relative flex items-center justify-center gap-3">

            {loading
              ? "Saving Audit..."
              : "Save Premium Audit"}

            <ArrowRight size={24} />

          </span>

        </button>

      </form>

    </div>

  );

};

export default LeadForm;