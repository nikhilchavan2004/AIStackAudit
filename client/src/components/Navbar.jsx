const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-zinc-800">

      <h1 className="text-2xl font-bold text-white">
        AIStackAudit
      </h1>

      <button className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
        Get Audit
      </button>
    </nav>
  );
};

export default Navbar;