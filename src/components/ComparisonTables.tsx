import { BarChart2, Info } from "lucide-react";

const costData = [
  { category: "Seeds", organic: "₹2,500", bci: "₹2,200", conventional: "₹2,000", tooltip: "Includes certified seed cost" },
  { category: "Fertilizers", organic: "₹8,000", bci: "₹12,000", conventional: "₹15,000", tooltip: "Includes organic or chemical fertilizers" },
  { category: "Pesticides", organic: "₹3,000", bci: "₹8,000", conventional: "₹12,000", tooltip: "IPM or synthetic pesticides" },
  { category: "Labor", organic: "₹14,500", bci: "₹12,000", conventional: "₹11,000", tooltip: "Based on local wages and intensity" },
  { category: "Total Cost", organic: "₹28,000", bci: "₹34,200", conventional: "₹40,000", tooltip: "Sum of all input categories" }
];

const yieldData = [
  { metric: "Average Yield (kg/acre)", organic: "450", bci: "520", conventional: "480", tooltip: "Reported yield per acre" },
  { metric: "Price per kg", organic: "₹100", bci: "₹73", conventional: "₹73", tooltip: "Market price per kg of cotton" },
  { metric: "Gross Income", organic: "₹45,000", bci: "₹37,960", conventional: "₹35,040", tooltip: "Yield x Price" },
  { metric: "Net Profit", organic: "₹17,000", bci: "₹3,760", conventional: "₹-4,960", tooltip: "Gross Income - Total Cost" }
];

const TooltipIcon = ({ tooltip }: { tooltip: string }) => (
  <span className="relative group">
    <Info className="w-4 h-4 text-gray-400" />
    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-gray-700 text-white px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-10">
      {tooltip}
    </span>
  </span>
);

const ComparisonTables = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12 animate-fade-in">
          📋 Detailed Comparison Tables
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Cost Breakdown Table */}
          <div className="animate-scale-in">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center flex justify-center items-center gap-2">
              <BarChart2 className="w-6 h-6 text-[#236A74]" /> Cost Breakdown (per acre)
            </h3>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-3 px-2 font-bold text-gray-700">Category</th>
                    <th className="text-center py-3 px-2 font-bold text-[#236A74]">Organic</th>
                    <th className="text-center py-3 px-2 font-bold text-[#B8860B]">BCI</th>
                    <th className="text-center py-3 px-2 font-bold text-gray-600">Conventional</th>
                  </tr>
                </thead>
                <tbody>
                  {costData.map((row, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-200 hover:bg-yellow-50 transition-colors ${index === costData.length - 1 ? "font-semibold" : ""}`}
                    >
                      <td className="py-3 px-2 text-gray-800 flex items-center gap-2">
                        {row.category} <TooltipIcon tooltip={row.tooltip} />
                      </td>
                      <td className="py-3 px-2 text-center text-[#236A74] font-medium">{row.organic}</td>
                      <td className="py-3 px-2 text-center text-[#B8860B] font-medium">{row.bci}</td>
                      <td className="py-3 px-2 text-center text-gray-600 font-medium">{row.conventional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Yield & Income Table */}
          <div className="animate-scale-in">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center flex justify-center items-center gap-2">
              📈 Yield & Income Analysis
            </h3>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-3 px-2 font-bold text-gray-700">Metric</th>
                    <th className="text-center py-3 px-2 font-bold text-[#236A74]">Organic</th>
                    <th className="text-center py-3 px-2 font-bold text-[#B8860B]">BCI</th>
                    <th className="text-center py-3 px-2 font-bold text-gray-600">Conventional</th>
                  </tr>
                </thead>
                <tbody>
                  {yieldData.map((row, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-200 hover:bg-yellow-50 transition-colors ${index === yieldData.length - 1 ? "font-semibold" : ""}`}
                    >
                      <td className="py-3 px-2 text-gray-800 flex items-center gap-2">
                        {row.metric} <TooltipIcon tooltip={row.tooltip} />
                      </td>
                      <td className="py-3 px-2 text-center text-[#236A74] font-medium">{row.organic}</td>
                      <td className="py-3 px-2 text-center text-[#B8860B] font-medium">{row.bci}</td>
                      <td className="py-3 px-2 text-center text-gray-600 font-medium">{row.conventional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl p-6 text-center animate-fade-in">
            <div className="text-4xl mb-3">🏆</div>
            <h4 className="font-bold text-[#236A74] text-lg mb-2">Organic Leads</h4>
            <p className="text-[#236A74] text-sm">Highest net profit despite higher labor costs due to premium pricing</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl p-6 text-center animate-fade-in">
            <div className="text-4xl mb-3">⚖️</div>
            <h4 className="font-bold text-[#B8860B] text-lg mb-2">BCI Balance</h4>
            <p className="text-[#B8860B] text-sm">Moderate costs with sustainable practices and positive returns</p>
          </div>

          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 text-center animate-fade-in">
            <div className="text-4xl mb-3">⚠️</div>
            <h4 className="font-bold text-gray-800 text-lg mb-2">Conventional Challenge</h4>
            <p className="text-gray-600 text-sm">High input costs leading to negative returns in many cases</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTables;
