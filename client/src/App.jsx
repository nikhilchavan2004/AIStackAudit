import { Link } from "react-router-dom";

function App() {

  return (

    <div className="min-h-screen bg-black text-white px-6">

      {/* NAVBAR */}

      <nav className="max-w-6xl mx-auto py-8 flex justify-between items-center border-b border-zinc-800">

        <h1 className="text-4xl font-bold">
          AIStackAudit
        </h1>

        <Link to="/audit">

          <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:bg-zinc-200 transition">

            Get Audit

          </button>

        </Link>

      </nav>

      {/* HERO SECTION */}

      <section className="max-w-5xl mx-auto text-center py-32">

        <p className="text-green-400 text-2xl font-semibold mb-8">

          Reduce AI SaaS Spending

        </p>

        <h1 className="text-7xl md:text-8xl font-bold leading-tight mb-10">

          Find Hidden
          <br />
          Savings In
          <br />
          Your AI Stack

        </h1>

        <p className="text-zinc-400 text-3xl leading-relaxed max-w-4xl mx-auto mb-16">

          Audit ChatGPT, Claude, Cursor, Copilot and other AI subscriptions instantly.

        </p>

        <Link to="/audit">

          <button className="bg-white text-black px-12 py-5 rounded-3xl text-2xl font-semibold hover:bg-zinc-200 transition">

            Audit My Stack

          </button>

        </Link>

      </section>

    </div>

  );

}

export default App;