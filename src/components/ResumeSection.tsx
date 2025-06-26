
const ResumeSection = () => {
  const experience = [
    {
      title: "Director of Community",
      company: "Polygon Labs",
      year: "2022-2024",
      description: "Led community building initiatives and produced large-scale events including NFT NYC. Influenced the entire Polygon ecosystem from researcher to shitcoiner."
    },
    {
      title: "Expert Panelist, & Public Representative",
      company: "Devcon, Eth Global, Art Basel, NFT NYC",
      year: "2021-Present",
      description: "Served as expert panelist on industry topics, facilitating deep dives on emerging tech discussions like ZK and DA, as well as community development."
    },
    {
      title: "Co-Founder",
      company: "GENRE / FISH & CHiPS",
      year: "2020-Present",
      description: "Wearing all the hats. Leading creative solutions, strategic projects, and collaborative events. Grants and fundraising. Leading product design."
    },
    {
      title: "Event Producer",
      company: "GENRE / Polygon Labs / FWB",
      year: "2016-Present",
      description: "Producer of a monthly music event in Los Angeles. City Key events for FWB. Helped Polygon Labs prepare details for conferences including programming, design, and logistics. "
    }
  ];

  return (
    <section id="resume" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Resume
        </h2>
        
        <div>
          <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Experience</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{exp.title}</h4>
                <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-500 text-sm mb-3">{exp.year}</p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.canva.com/design/DAGHsBz05dI/173uhfUw40aveIozHOO2GQ/view?utm_content=DAGHsBz05dI&utm_campaign=designshare&utm_medium=link&utm_source=viewer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
