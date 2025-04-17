import React, { useState } from 'react';
import './App.css';
import myImage from './Ahs.jpeg';

const projectsData = [
  {
    title: 'RU‑Novel (MERN Stack)',
    description: [
      'Led development of a 104‑page book management platform with modular user/admin interfaces.',
      'Improved scalability by implementing component‑based architecture.'
    ],
    github: 'https://github.com/mohammadahsanghazanfar/ahsankhan19/tree/master',
    video: 'https://www.youtube.com/watch?v=6hQeRKKNX6Ae',
    live: 'https://ru-novel.ru/',
    note: 'Give YouTube link because live app has issues.'
  },
  {
    title: 'Home Services Application (MERN Stack) (Ongoing)',
    description: [
      'Platform connecting customers with local service professionals (plumbers, electricians, etc.).',
      'Customer features: service browsing, online orders, order tracking.',
      'Worker module: job management, status updates, messaging.',
      'Admin module: role management, transaction monitoring.'
    ],
    github: 'https://github.com/mohammadahsanghazanfar/service-snap/tree/master',
    video: 'https://www.youtube.com/watch?v=IeoOFDCmCC4e'
  },
  {
    title: 'CRUD Admin Dashboard (React, REST API)',
    description: [
      'CRUD application built to complete internship tasks.',
      'Username: Admin, Password: Admin.'
    ],
    github: 'https://github.com/mohammadahsanghazanfar/movies-hub',
    live: 'https://umt-admin.vercel.app/'
  }
];

function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleProject = (index) => {
    setSelectedProject(selectedProject === index ? null : index);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <div className="header">
        <img src={myImage} alt="Mohammad Ahsan" className="profile-image" />
        <h1>Mohammad Ahsan</h1>
        <p>📞 92 306 0820272 | 📧 mohammadahsan1965@gmail.com</p>
        <p>
          <a href="https://www.linkedin.com/in/mohammad-ahsan-8046a8297/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="https://github.com/mohammadahsanghazanfar" target="_blank" rel="noopener noreferrer"> GitHub</a>
        </p>
        <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Light' : 'Dark'} Theme
        </button>
      </div>

      <div className="experience">
        <h2>Work Experience</h2>
        <h3>Intern, Netsol Technologies (June 2022 – Aug 2022)</h3>
        <ul>
          <li>Developed 5+ reusable React components and integrated RESTful APIs to streamline internal workflows.</li>
          <li>Collaborated in daily stand‑ups and code reviews, gaining practical exposure to Agile team processes.</li>
          <li><strong>Tools:</strong> React.js, Git, Postman, Agile methodologies</li>
        </ul>
      </div>

      <div className="projects">
        <h2>Projects <p>(See details of project by clicking on it) </p></h2>
        {projectsData.map((project, index) => (
          <div key={index} className="project" onClick={() => toggleProject(index)}>
            <h3>{project.title}</h3>
            {selectedProject === index && (
              <div className="project-details">
                <ul>
                  {project.description.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
                {project.github && <p><a href={project.github} target="_blank" rel="noopener noreferrer">GitHub Repo</a></p>}
                {project.video && <p><a href={project.video} target="_blank" rel="noopener noreferrer">Video Demo</a></p>}
                {project.live && <p><a href={project.live} target="_blank" rel="noopener noreferrer">Live App</a></p>}
                {project.note && <p><em>{project.note}</em></p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

