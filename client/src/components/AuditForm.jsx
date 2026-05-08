import { useState, useEffect } from "react";

const AuditForm = () => {

  const [formData, setFormData] = useState({
    tool: "",
    plan: "",
    spend: "",
    seats: "",
    teamSize: "",
    useCase: "",
  });

  // Load localStorage data
  useEffect(() => {
    const savedData = localStorage.getItem("auditForm");

    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("auditForm", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-2xl border border-zinc-800">

      <h2 className="text-3xl font-bold mb-6">
        Audit Your AI Stack
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {/* TOOL */}

        <div>
          <label className="block mb-2 text-sm text-zinc-400">
            AI Tool
          </label>

          <select
            name="tool"
            value={formData.tool}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 outline-none"
          >
            <option value="">Select Tool</option>

            <option>ChatGPT</option>
            <option>Claude</option>
            <option>Cursor</option>
            <option>GitHub Copilot</option>
            <option>Gemini</option>

          </select>
        </div>

        {/* PLAN */}

        <div>
          <label className="block mb-2 text-sm text-zinc-400">
            Current Plan
          </label>

          <input
            type="text"
            name="plan"
            placeholder="Example: Team Plan"
            value={formData.plan}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 outline-none"
          />
        </div>

        {/* MONTHLY SPEND */}

        <div>
          <label className="block mb-2 text-sm text-zinc-400">
            Monthly Spend ($)
          </label>

          <input
            type="number"
            name="spend"
            placeholder="100"
            value={formData.spend}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 outline-none"
          />
        </div>

        {/* SEATS */}

        <div>
          <label className="block mb-2 text-sm text-zinc-400">
            Number Of Seats
          </label>

          <input
            type="number"
            name="seats"
            placeholder="5"
            value={formData.seats}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 outline-none"
          />
        </div>

        {/* TEAM SIZE */}

        <div>
          <label className="block mb-2 text-sm text-zinc-400">
            Team Size
          </label>

          <input
            type="number"
            name="teamSize"
            placeholder="10"
            value={formData.teamSize}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 outline-none"
          />
        </div>

        {/* USE CASE */}

        <div>
          <label className="block mb-2 text-sm text-zinc-400">
            Primary Use Case
          </label>

          <select
            name="useCase"
            value={formData.useCase}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 outline-none"
          >
            <option value="">Select Use Case</option>

            <option>Coding</option>
            <option>Writing</option>
            <option>Research</option>
            <option>Data Analysis</option>
            <option>Mixed</option>

          </select>
        </div>

        {/* BUTTON */}

        <button
          type="submit"
          className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          Generate Audit
        </button>

      </form>

    </div>
  );
};

export default AuditForm;