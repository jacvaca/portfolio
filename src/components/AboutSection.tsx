
const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a community & retention specialist who loves bringing ideas to life through thoughtful design and strategic thinking. My journey has taken me through many varied & exciting projects where I've had the opportunity to blend creativity with practical solutions.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                When I'm not working on projects, you can find me exploring new music as a DJ, gardening, writing, staying up-to-date with industry trends.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-8">
              {['Creative Strategy', 'Project Management', 'Design Thinking', 'Problem Solving'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-100/80 to-purple-100/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl overflow-hidden">
              <img
                src="/lovable-uploads/e0d8334e-f628-43e5-9916-24793f08f340.png"
                alt="Jacq Vaca"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
