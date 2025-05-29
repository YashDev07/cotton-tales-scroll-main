import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const DataVisualization = () => {
  const laborInputsData = [
    { category: 'Total Labor Days/Family', exclusive: 140, nonExclusive: 160, conventional: 120 },
    { category: 'Seed Preparation', exclusive: 15, nonExclusive: 18, conventional: 12 },
    { category: 'Sowing', exclusive: 45, nonExclusive: 50, conventional: 40 },
    { category: 'Weeding', exclusive: 180, nonExclusive: 190, conventional: 160 },
    { category: 'Fertilizer Application', exclusive: 25, nonExclusive: 28, conventional: 35 },
    { category: 'Pesticide Application', exclusive: 15, nonExclusive: 20, conventional: 45 },
    { category: 'Irrigation', exclusive: 110, nonExclusive: 120, conventional: 100 },
    { category: 'Picking', exclusive: 200, nonExclusive: 210, conventional: 180 },
  ];

  const organicFinancialsData = [
    { category: 'Material Costs', value: 18000 },
    { category: 'Family Labor Value', value: 19000 },
    { category: 'Wage Labor Cost', value: 12000 },
    { category: 'Total Revenue', value: 45000 },
    { category: 'Profit excl. Family Labor', value: 15000 },
    { category: 'Profit incl. Bio Audit', value: 13500 },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12 animate-fade-in">
          📊 Research Findings
        </h2>

        <div className="space-y-16">
          {/* Labour Inputs Chart */}
          <div className="rounded-2xl p-8 shadow-md animate-fade-in">
            <h3 className="text-2xl font-semibold text-[#236A74] mb-6 text-center">
              Labour Inputs: Organic Cotton Farmers
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={laborInputsData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="category"
                  angle={-30}
                  textAnchor="end"
                  height={100}
                  interval={0}
                  fontSize={11}
                />
                <YAxis />
                <Tooltip />
                <Bar dataKey="exclusive" fill="#236A74" name="Exclusive" />
                <Bar dataKey="nonExclusive" fill="#f5c518" name="Non-Exclusive" />
                <Bar dataKey="conventional" fill="#4b5563" name="Conventional" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Organic Financials */}
          <div className="rounded-2xl p-8 shadow-md animate-fade-in">
            <h3 className="text-2xl font-semibold text-[#236A74] mb-6 text-center">
              Financials: Organic Cotton (Per Acre)
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={organicFinancialsData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="category"
                  angle={-30}
                  textAnchor="end"
                  height={100}
                  interval={0}
                  fontSize={11}
                />
                <YAxis />
                <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, '']} />
                <Bar dataKey="value" fill="#236A74" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataVisualization;
