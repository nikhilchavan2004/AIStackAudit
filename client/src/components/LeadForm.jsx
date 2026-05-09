import { useState } from "react";
import axios from "axios";

const LeadForm = ({ auditId }) => {

  const [formData, setFormData] = useState({
    email: "",
    company: "",
    role: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
       `${import.meta.env.VITE_API_URL}/api/leads`,
        {
          ...formData,
          auditId,
        }
      );

      setSuccess(true);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mt-10">

      <h2 className="text-3xl font-bold mb-3">
        Save Full Audit Report
      </h2>

      <p className="text-zinc-400 mb-8">
        Get notified when new AI savings opportunities appear.
      </p>

      {
        success ? (

         <div className="bg-green-500/20 border border-green-500 p-5 rounded-xl text-green-300">

  <h3 className="text-2xl font-bold mb-2">
    Audit Saved Successfully
  </h3>

  <p>
    A confirmation email has been sent.
  </p>

</div>

        ) : (

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-black border border-zinc-700 outline-none"
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-black border border-zinc-700 outline-none"
            />

            <input
              type="text"
              name="role"
              placeholder="Your Role"
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-black border border-zinc-700 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Save Audit
            </button>

          </form>

        )
      }

    </div>

  );
};

export default LeadForm;