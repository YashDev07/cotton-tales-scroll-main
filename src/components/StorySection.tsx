interface StorySectionProps {
  title: string;
  subtitle: string;
  content: string;
}

const StorySection = ({ title, subtitle, content }: StorySectionProps) => {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-in">
          {title}
        </h2>
        <h3 className="text-xl md:text-2xl text-secondary mb-6 animate-fade-in">
          {subtitle}
        </h3>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-in">
          {content}
        </p>
      </div>
    </section>
  );
};

export default StorySection;
