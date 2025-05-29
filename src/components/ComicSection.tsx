interface ComicSectionProps {
  title: string;
  type: 'farming-practices' | 'farmer-expectations' | 'family-impact';
}

const ComicSection = ({ title, type }: ComicSectionProps) => {
  const getComicContent = () => {
    switch (type) {
      case 'farming-practices':
        return (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md border-l-8 border-teal-500 animate-fade-in">
              <h4 className="text-2xl font-bold text-teal-800 mb-4">🌱 Organic Farming</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-2xl">🐛</div>
                  <p className="text-gray-800">Natural pest control with beneficial insects</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-2xl">💧</div>
                  <p className="text-gray-800">Water conservation techniques</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-2xl">🌿</div>
                  <p className="text-gray-800">Organic fertilizers and compost</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md border-l-8 border-yellow-500 animate-fade-in">
              <h4 className="text-2xl font-bold text-yellow-800 mb-4">⚗️ Conventional Farming</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl">💊</div>
                  <p className="text-gray-800">Chemical pesticides and fertilizers</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl">💰</div>
                  <p className="text-gray-800">Higher input costs</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl">⚡</div>
                  <p className="text-gray-800">Quick but temporary results</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'farmer-expectations':
        return (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm animate-fade-in border-l-4 border-teal-400">
              <h4 className="text-xl font-bold text-teal-800 mb-4">💭 Expectations</h4>
              <ul className="space-y-2 text-gray-800">
                <li>• Higher profits immediately</li>
                <li>• Easy transition process</li>
                <li>• No learning curve</li>
                <li>• Instant market access</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm animate-fade-in border-l-4 border-yellow-500">
              <h4 className="text-xl font-bold text-yellow-800 mb-4">⚡ Reality Check</h4>
              <ul className="space-y-2 text-gray-800">
                <li>• 2-3 year transition period</li>
                <li>• Initial yield reduction</li>
                <li>• Learning new techniques</li>
                <li>• Building market connections</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm animate-fade-in border-l-4 border-green-500">
              <h4 className="text-xl font-bold text-green-800 mb-4">🎯 Long-term Benefits</h4>
              <ul className="space-y-2 text-gray-800">
                <li>• Sustainable higher income</li>
                <li>• Reduced input costs</li>
                <li>• Premium market prices</li>
                <li>• Environmental health</li>
              </ul>
            </div>
          </div>
        );

      case 'family-impact':
        return (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-pink-50 rounded-2xl p-8 shadow-md border-l-4 border-teal-300 animate-fade-in">
              <h4 className="text-2xl font-bold text-teal-800 mb-4">👩‍🌾 Women's Empowerment</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-semibold text-gray-800">Decision Making</p>
                  <p className="text-gray-600">Increased participation in farm decisions</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-semibold text-gray-800">Financial Control</p>
                  <p className="text-gray-600">Better access to income and savings</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-semibold text-gray-800">Skills Development</p>
                  <p className="text-gray-600">Training in organic farming techniques</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 shadow-md border-l-4 border-yellow-400 animate-fade-in">
              <h4 className="text-2xl font-bold text-yellow-800 mb-4">👶 Child Welfare</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-semibold text-gray-800">Education Priority</p>
                  <p className="text-gray-600">Higher school enrollment rates</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-semibold text-gray-800">Reduced Labor</p>
                  <p className="text-gray-600">Less child involvement in farming</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-semibold text-gray-800">Health Benefits</p>
                  <p className="text-gray-600">Reduced exposure to chemicals</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12 animate-fade-in">
          {title}
        </h2>
        {getComicContent()}
      </div>
    </section>
  );
};

export default ComicSection;
