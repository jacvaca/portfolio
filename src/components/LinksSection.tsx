
const LinksSection = () => {
  const links = [
    {
      title: "LinkedIn",
      description: "Connect with me professionally",
      url: "https://www.linkedin.com/in/jacq-vaca/",
      icon: "💼",
      color: "from-blue-600 to-blue-700"
    },
    {
      title: "X",
      description: "Follow me on X",
      url: "https://x.com/jacqvaca",
      icon: "❌",
      color: "from-gray-800 to-black"
    },
    {
      title: "Resume",
      description: "Download my latest resume",
      url: "https://www.canva.com/design/DAGHsBz05dI/173uhfUw40aveIozHOO2GQ/view?utm_content=DAGHsBz05dI&utm_campaign=designshare&utm_medium=link&utm_source=viewer",
      icon: "📄",
      color: "from-orange-600 to-orange-700"
    }
  ];

  return (
    <section id="links" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Links
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${link.color} rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {link.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {link.title}
                  </h3>
                  <p className="text-gray-600">{link.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Let's connect and build something amazing together...
          </p>
          <a
            href="mailto:jacqvaca@gmail.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
