const Footer = () => {
  return (
    <footer className="text-white">
      {/* CTA Banner */}
      <div className="bg-yellow-300 py-12 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#071b3b] mb-4">
          Ready to Support Sustainable Cotton?
        </h2>
        <p className="text-[#071b3b] mb-6">
          Download our detailed report to learn more about the impact.
        </p>
        <a
          href="/report.pdf"
          download
          className="inline-block bg-white text-gray-800 border border-gray-300 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Download Report
        </a>
      </div>

      {/* White Info Section */}
      <div className="bg-white text-[#071b3b] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Column 1 */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#236A74]">Cotton Fields of Change</h3>
              <p className="text-gray-700 mb-4">
                Transforming cotton farming through research, innovation, and sustainable practices in Madhya Pradesh.
              </p>
              <div className="text-sm text-teal-600">
                Research by American Institutes for Research & Outline India
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#B8860B]">Key Topics</h4>
              <ul className="space-y-2 text-gray-800">
                <li>• Organic vs Conventional Farming</li>
                <li>• BCI (Better Cotton Initiative)</li>
                <li>• Women's Empowerment</li>
                <li>• Child Labor Reduction</li>
                <li>• Economic Impact Assessment</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#B8860B]">Research Impact</h4>
              <div className="space-y-3">
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="text-2xl font-bold text-[#236A74]">2,500+</div>
                  <div className="text-sm text-gray-600">Farmers Surveyed</div>
                </div>
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="text-2xl font-bold text-[#B8860B]">15</div>
                  <div className="text-sm text-gray-600">Districts Covered</div>
                </div>
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="text-2xl font-bold text-[#B8860B]">3 Years</div>
                  <div className="text-sm text-gray-600">Study Duration</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-2xl text-[#B8860B]">🔖</span>
              <span className="text-lg font-semibold text-[#071b3b]">
                Licensed & Designed by Outline India
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              © 2024 Social and Economic Impact Assessment of Cotton Farming in Madhya Pradesh. All rights reserved.
            </p>
            <div className="mt-4 text-xs text-gray-500 max-w-4xl mx-auto">
              This research was conducted to assess the impact of sustainable cotton farming practices on farmer livelihoods,
              women's empowerment, and child welfare in Madhya Pradesh.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
