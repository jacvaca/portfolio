i
const WorkSection = () => {
  const projects = [
    {
      title: "Re-Imagined Public Spaces",
      description: "Innovative approach to transforming public spaces through community engagement and creative design thinking, focusing on accessibility and inclusive experiences. Hosted most impactful Polygon spaces from 2022-2023.",
      tags: ["Community", "Programming", "Web3"],
      image: "🏙️",
      link: "https://jacqvaca.notion.site/Re-Imagined-Public-Spaces-72e7ac99432c4e14a53755bed6caf9d9"
    },
    {
      title: "Polygon Learn",
      description: "Educational initiative focused on blockchain technology and beginner-friendly Web3 learning, diversifying accessible & evergreen content and resources for developers and community members alike.",
      tags: ["Education", "Blockchain", "Web3"],
      image: "📚",
      link: "https://jacqvaca.notion.site/Polygon-Learn-db2da3e03cd24228b29e8cc6a5584ed6"
    },
    {
      title: "Fish & Chips Community Playbook",
      description: "Comprehensive guide for building and nurturing online communities, sharing best practices and strategies for authentic engagement.",
      tags: ["Community", "Strategy", "Documentation"],
      image: "🐟",
      link: "https://jacqvaca.notion.site/Fish-Chips-Community-Playbook-1b4be6b3114680faa65ada1b3e86b49e"
    },
    {
      title: "Hub Hunt x DeHidden @ NFT NYC 2022",
      description: "Large-scale collaborative event production and web app development. Brought together Web3 communities, artists, and collectors during one of the industry's premiere conferences.",
      tags: ["Events", "NFT", "Collaboration"],
      image: "🎨",
      link: "https://jacqvaca.notion.site/Hub-Hunt-x-DeHidden-NFT-NYC-2022-eaac41208b3240fb88075876fa5b8a67"
    },
    {
      title: "Expert Panelist & Public Representative",
      description: "Regular participation in industry panels and public forums, advocating for community interests and sharing deep insights on emerging technologies.",
      tags: ["Public Speaking", "Advocacy", "Expertise"],
      image: "🎤",
      link: "https://jacqvaca.notion.site/Expert-Panelist-Public-Representative-fefa8662abcf40f0a64cf43dff69a731"
    },
    {
      title: "Listen To Music Outside In The Daylight Under A Tree",
      description: "Creative monthly public good initiative promoting thoughtful outdoor experiences that combines music, nature, and community for a unique, deep connection.",
      tags: ["Community", "Events", "Connection"],
      image: "🌳",
      link: "https://jacqvaca.notion.site/Listen-To-Music-Outside-In-The-Daylight-Under-A-Tree-26e0b232ef0d47d88ea79545f9741600"
    }
  ];

  return (
    <section id="work" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Work
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-6xl">{project.image}</div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-300 text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
