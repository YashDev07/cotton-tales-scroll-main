const FarmerStories = () => {
  const stories = [
    {
      name: "Rajesh Kumar",
      location: "Betul District",
      type: "Organic Farmer",
      image: "👨‍🌾",
      story: "After switching to organic farming, my family's health improved and our income increased by 40%. The soil is richer now, and buyers pay premium prices for our cotton.",
      impact: "₹17,000 net profit per acre",
      color: "gray"
    },
    {
      name: "Sunita Devi",
      location: "Khandwa District", 
      type: "BCI Licensed Farmer",
      image: "👩‍🌾",
      story: "BCI training helped me reduce water usage and chemical inputs. My children now attend school regularly instead of working in the fields.",
      impact: "30% reduction in input costs",
      color: "yellow"
    },
    {
      name: "Mohan Singh",
      location: "Dewas District",
      type: "Transitioning Farmer",
      image: "🧑‍🌾",
      story: "The transition wasn't easy, but with proper support and training, I'm seeing the benefits. My debt burden has reduced significantly.",
      impact: "50% debt reduction in 2 years",
      color: "amber"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4 animate-fade-in">
          🔣 Voices from the Field
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 animate-fade-in">
          Real stories from cotton farmers in Madhya Pradesh
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 shadow-lg border-l-8 border-${story.color}-500 hover:shadow-xl transition-all duration-300 animate-scale-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="text-6xl mb-4">{story.image}</div>
                <h3 className="text-2xl font-bold text-gray-800">{story.name}</h3>
                <p className="text-gray-600">{story.location}</p>
                <p className={`mt-2 text-sm font-semibold text-${story.color}-700`}>
                  {story.type}
                </p>
              </div>

              <blockquote className="text-gray-700 italic mb-6 text-center">
                "{story.story}"
              </blockquote>

              {story.impact && (
                <div className="flex justify-center">
                  <div className={`text-2xl font-bold text-${story.color}-700 text-center`}>
                    {story.impact}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FarmerStories;
