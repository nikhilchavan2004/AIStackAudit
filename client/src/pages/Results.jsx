import { useEffect, useState } from "react";
import SavingsChart from "../components/SavingsChart";
import { Copy } from "lucide-react";
import {
  useLocation,
  useParams,
} from "react-router-dom";

import axios from "axios";

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

    alert("Link copied successfully");

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
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-2xl">
        Loading Audit...
      </div>
    );

  }

  if (!result) {

    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-2xl">
        Audit Not Found
      </div>
    );

  }

  return (

    <div className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-4xl mx-auto">

        {/* HERO */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 mb-10">

          <p className="text-green-400 mb-3">
            Estimated Savings
          </p>

          <h1 className="text-6xl font-bold mb-4">
            ${result.savings}/mo
          </h1>

          <p className="text-zinc-400 text-xl">
            Potential Annual Savings: ${result.annualSavings}
          </p>
 <button
  onClick={copyLink}
  className="mt-6 flex items-center gap-2 bg-white text-black px-5 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
>

  <Copy size={18} />

  Copy Share Link

</button>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-10">

  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

    <p className="text-zinc-400 mb-2">
      Current Spend
    </p>

    <h3 className="text-4xl font-bold">
      ${result.currentSpend || result.spend}
    </h3>

  </div>

  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

    <p className="text-zinc-400 mb-2">
      Monthly Savings
    </p>

    <h3 className="text-4xl font-bold text-green-400">
      ${result.savings}
    </h3>

  </div>

  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

    <p className="text-zinc-400 mb-2">
      Annual Savings
    </p>

    <h3 className="text-4xl font-bold">
      ${result.annualSavings}
    </h3>

  </div>

</div>

        {/* DETAILS */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-6">
            Audit Breakdown
          </h2>

          <div className="space-y-6">

            <div>
              <p className="text-zinc-400 mb-2">
                Current Monthly Spend
              </p>

              <h3 className="text-2xl font-semibold">
                ${result.currentSpend || result.spend}
              </h3>
            </div>

            <div>
              <p className="text-zinc-400 mb-2">
                Recommendation
              </p>

              <h3 className="text-2xl font-semibold text-green-400">
                {result.recommendation}
              </h3>
            </div>

            <div>
              <p className="text-zinc-400 mb-2">
                Reason
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed">
                {result.reason}
              </p>
            </div>

            <div className="mt-10 border-t border-zinc-800 pt-8">

              <p className="text-zinc-400 mb-3">
                AI Generated Summary
              </p>

              <p className="text-lg text-zinc-300 leading-relaxed">
                {result.aiSummary}
              </p>

            </div>

          </div>

        </div>

        <LeadForm auditId={result.auditId || result._id} />
        <SavingsChart result={result} />
      </div>

    </div>

  );
};

export default Results;