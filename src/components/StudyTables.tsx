import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const certificationStandards = [
  { aspect: "Facilitate biodiversity through landscape management", organic: "✓", bci: "" },
  { aspect: "Use certified organic seed and plant material", organic: "✓", bci: "" },
  { aspect: "Crop rotation", organic: "✓", bci: "" },
  { aspect: "Use only biomass-based fertilizers", organic: "✓", bci: "" },
  { aspect: "Ecological pest management practices", organic: "✓", bci: "" },
  { aspect: "Buffer zones between conventional farms", organic: "✓", bci: "" },
  { aspect: "Sustainable soil management practices", organic: "✓", bci: "" },
  { aspect: "Use Integrated Pest Management (IPM) practices", organic: "", bci: "✓" },
  { aspect: "Pesticides not applied by vulnerable groups", organic: "", bci: "✓" },
  { aspect: "Water management practices", organic: "", bci: "✓" },
  { aspect: "Soil management practices", organic: "", bci: "✓" },
  { aspect: "Conservation of natural habitats", organic: "", bci: "✓" },
  { aspect: "Collective bargaining", organic: "", bci: "✓" },
  { aspect: "Prohibition of child labour", organic: "", bci: "✓" },
  { aspect: "Prohibition of discrimination or workers", organic: "", bci: "✓" },
  { aspect: "Elimination of forced labour", organic: "", bci: "✓" },
];

const studyIndicators = [
  { indicator: "Wealth", measurement: "Asset index", organic: "", bci: "" },
  { indicator: "Debt", measurement: "Outstanding debt and interest rate on debt", organic: "", bci: "" },
  { indicator: "Consumption Expenditure", measurement: "Total expenditure on main categories of consumption", organic: "", bci: "" },
  { indicator: "Income", measurement: "Farm income + business income + labour income", organic: "", bci: "" },
  { indicator: "Physical Well-Being", measurement: "Self-reported exposure to pesticides", organic: "Only organic pesticides", bci: "Integrated Pest Management (reduced chemical pesticides)" },
  { indicator: "Female Empowerment", measurement: "Self-reported role of women in decision related to agriculture", organic: "Decent work; No discrimination", bci: "" },
  { indicator: "Child Labour", measurement: "Self-reported, and qualitative instruments", organic: "Decent work; No child labour", bci: "" },
  { indicator: "Child Welfare", measurement: "School attendance", organic: "", bci: "" },
  { indicator: "Material Inputs", measurement: "Use of pesticide, fertilizer, organic inputs", organic: "Only biomass-based inputs", bci: "" },
  { indicator: "Labour Inputs", measurement: "Labour inputs by gender/age", organic: "", bci: "" },
  { indicator: "Cotton Cost", measurement: "Farming costs and labour inputs", organic: "", bci: "" },
  { indicator: "Cotton Revenue", measurement: "Harvest quantity and market price", organic: "", bci: "" },
  { indicator: "Cotton Profit", measurement: "Cotton costs vs revenue", organic: "", bci: "" },
];

const StudyTables = () => {
  return (
    <section className="py-20 px-4 bg-[#F8F8F5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12 animate-fade-in">
          📋 Study Tables & Standards
        </h2>

        <div className="space-y-16">
          {/* Table 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg animate-scale-in">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Table 1: Certification Standards of Organic Cotton Farming and Licensing Standards of BCI Cotton Farming
            </h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-white text-[#236A74]">
                    <TableHead className="font-bold">Standard/Practice</TableHead>
                    <TableHead className="font-bold text-center">Organic Cotton Farming</TableHead>
                    <TableHead className="font-bold text-center">BCI Cotton Farming</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {certificationStandards.map((row, index) => (
                    <TableRow key={index} className="hover:bg-gray-50">
                      <TableCell className="font-medium">{row.aspect}</TableCell>
                      <TableCell className="text-center text-[#D4AF37] font-bold text-lg">{row.organic}</TableCell>
                      <TableCell className="text-center text-[#236A74] font-bold text-lg">{row.bci}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Source:</strong> APEDA (2014) for Organic Cotton Farming; BCI (2013) for BCI Cotton Farming
            </p>
          </div>

          {/* Table 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg animate-scale-in">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Table 2: Study Indicators for the Socio-Economic Impact Assessment
            </h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-white text-[#236A74]">
                    <TableHead className="font-bold">Indicator</TableHead>
                    <TableHead className="font-bold">Main Measurement Tool</TableHead>
                    <TableHead className="font-bold">Organic Standard</TableHead>
                    <TableHead className="font-bold">BCI Standard</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {studyIndicators.map((row, index) => (
                    <TableRow key={index} className="hover:bg-gray-50">
                      <TableCell className="font-medium">{row.indicator}</TableCell>
                      <TableCell>{row.measurement}</TableCell>
                      <TableCell className="text-[#D4AF37]">{row.organic}</TableCell>
                      <TableCell className="text-[#236A74]">{row.bci}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyTables;
