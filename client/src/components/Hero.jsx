const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6">

      <p className="text-green-400 mb-4 font-medium">
        Reduce AI SaaS Spending
      </p>

      <h1 className="text-6xl font-bold max-w-4xl leading-tight mb-6">
        Find Hidden Savings In Your AI Stack
      </h1>

      <p className="text-zinc-400 max-w-2xl text-lg mb-8">
        Audit ChatGPT, Claude, Cursor, Copilot and other AI subscriptions instantly.
      </p>

      <button className="bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-200 transition">
        Audit My Stack
      </button>

    </section>
  );
};

export default Hero;