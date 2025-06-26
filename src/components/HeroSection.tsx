
const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
            Hi, I'm Jacq! 👋
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed font-medium">
            At the confluence of people and creative strategy
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get to Know Me
          </button>
          <button
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 bg-white/80 backdrop-blur-sm rounded-full font-medium hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
