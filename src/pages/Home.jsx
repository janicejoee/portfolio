import React, { useState } from 'react';
import { Menu, Github, Linkedin, Mail, ExternalLink, X } from 'lucide-react';

export const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const projects = [
    {
      title: "Mood-based Activities Recommender",
      description: "A database-focus application built with Flask and HTML/CSS",
      tags: ["PostgreSQL",  "HTML/CSS", "Flask", "Google Cloud"],
      link: "https://github.com/kimmyna/w4111-proj1",
      image: "YOUR_IMAGE_URL_HERE_1"
    },
    {
      title: "Campus Wellness Smart Calendar",
      description: "A smart multi-functional calendar integrated with Google Gemini",
      tags: ["LangChain", "Streamlit", "MongoDB", "Google Gemini"],
      link: "https://github.com/Sallyliubj/smart-calendar-chatbot",
      image: "YOUR_IMAGE_URL_HERE_2"
    },
    ];

    const hobbies = [
    {
      title: "Competitive Mental Math",
      link: "#",
      image: "https://raw.githubusercontent.com/janicejoee/portfolio/main/src/assets/images/hobby-math.jpeg"
    },
    {
      title: "Piano",
      link: "https://www.youtube.com/watch?v=4h5QeWyjAEw",
      image: "https://raw.githubusercontent.com/janicejoee/portfolio/main/src/assets/images/hobby-piano.png"
    },
    {
      title: "Film Photography",
      link: "https://www.instagram.com/filmcucikeringpake",
      image: "https://raw.githubusercontent.com/janicejoee/portfolio/main/src/assets/images/hobby-photo.jpg"
    },
    {
      title: "Food Blogging",
      link: "https://www.instagram.com/brokecolumbian",
      image: "https://raw.githubusercontent.com/janicejoee/portfolio/main/src/assets/images/hobby-food.jpeg"
    },
    {
      title: "Taekwondo",
      link: "#",
      image: "https://raw.githubusercontent.com/janicejoee/portfolio/main/src/assets/images/hobby-taekwondo.JPG"
    },
    ];

    const skills = [
    {
      category: "Languages",
      items: ["Python", "Java", "C", "SQL", "JavaScript", "TypeScript", "VBA", "MATLAB"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Next.js", "Flask", "Pandas", "LangChain", "BeautifulSoup", "Selenium"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB"],
    },
    {
      category: "Cloud & Tools",
      items: ["AWS", "Docker", "Git", "Tableau", "Figma"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-800">Veronica Janice Joe</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#hobbies" className="text-gray-600 hover:text-gray-900">Hobbies</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a href="#about" className="block py-2 text-gray-600 hover:text-gray-900">About</a>
              <a href="#projects" className="block py-2 text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#skills" className="block py-2 text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#hobbies" className="block py-2 text-gray-600 hover:text-gray-900">Hobbies</a>
              <a href="#contact" className="block py-2 text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Janice</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Mathematics & Computer Science at Columbia University
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Get in Touch
            </a>
            <a href="#projects" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
              View Work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I've had the chance to work across multiple countries and industries—from a wealth management firm in Hong Kong, to a private bank in Indonesia, and most recently at Amazon in the United States. These roles exposed me to diverse teams, fast-moving environments, and complex problem-solving, all of which helped shape the way I approach both technical and collaborative work.
            <br/><br/>
            Throughout my academic and professional journey, I've also worked on a wide range of projects spanning AI, data analytics, and full-stack development. Whether it's building predictive models, analyzing real-world datasets, or creating end-to-end applications, I enjoy working across the stack and turning ideas into practical solutions.
            </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="inline-flex items-center text-blue-600 hover:text-blue-700">
                    View Project <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Skills & Technologies
          </h2>

          <div className="space-y-10">
            {skills.map((group, idx) => (
              <div key={idx} className="text-center">
                {/* category title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {group.category}
                </h3>

                {/* skill tags */}
                <div className="flex flex-wrap justify-center gap-3">
                  {group.items.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 px-4 py-2 rounded-lg text-gray-800 font-medium hover:bg-blue-100 hover:text-blue-600 transition"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Hobbies Section */}
      <section id="hobbies" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Hobbies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hobbies.map((hobby, index) => (
              <a 
                key={index} 
                href={hobby.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={hobby.image} 
                    alt={hobby.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:from-black/80 transition flex items-end">
                    <h3 className="text-2xl font-bold text-white p-6 w-full">{hobby.title}</h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            I'm on the lookout for Full-time job opportunities starting summer 2026!
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:janice.joe@columbia.edu" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition">
              <Mail size={24} />
              <span>Email</span>
            </a>
            <a href="https://github.com/janicejoee" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition">
              <Github size={24} />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/janicejoe" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition">
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2025 Veronica Janice Joe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}