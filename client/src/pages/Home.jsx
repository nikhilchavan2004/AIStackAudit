import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AuditForm from "../components/AuditForm";

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white">

      <Navbar />

      <Hero />

      <div className="px-6 pb-20">
        <AuditForm />
      </div>

    </div>
  );
};

export default Home;