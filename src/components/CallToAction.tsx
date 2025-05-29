import { useState } from "react";
import { Download } from "lucide-react";

const CallToAction = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact request:", email);
    alert("Thank you for your interest! We'll get back to you soon.");
    setEmail("");
  };

  return (
    <section id="download" className="py-20 px-4 bg-yellow-400">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Ready to Support Sustainable Cotton?
        </h2>
        <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
          Download our detailed report to learn more about the impact.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <form onSubmit={handleSubmit} className="flex gap-4 w-full md:w-auto justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <button
              type="submit"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Updates
            </button>
          </form>

          {/* PDF Download Button */}
          <a
            href="/SustainableCottonReport.pdf"
            download
            className="inline-flex items-center justify-center bg-white text-gray-800 border border-gray-400 hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Report
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
