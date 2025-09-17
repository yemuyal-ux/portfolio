
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const categorizedProjects = {
  Development: [
    {
      title: 'MatchPoint',
      description: 'MatchPoint – A full-stack web app (React + Express/MongoDB) for managing futsal games, teams, tournaments, and player profiles. Enables booking matches, tracking stats, and organizing tournaments.',
      tech: ['React', 'MongoDB','Nodejs','Express'],
      url: 'https://github.com/Abkas/FUTSAL-SITE',
  image: '/futsal.png',
  livePreview: 'https://match-point-qcs1.onrender.com/'
    },
    {
      title: 'KITAB - Online Book Trading Platform',
      description: 'KITAB – An eCommerce platform for buying, selling, and trading second-hand books. Features user accounts, book listings, and a Figma-designed UI/UX with HTML & CSS frontend.',
      tech: ['HTML','CSS','JS','Figma'],
      url: 'https://github.com/Abkas/BookSwapEcommerce',
  image: '/kitab.png',
    },
    {
      title: 'Hospital-Management-System',
      description: 'A fully functional Hospital Management System built using Python. This project allows administrators to manage doctors, patients, and hospital operations efficiently.',
      tech: ['Python'],
      url: 'https://github.com/Abkas/Simple-Hospital-Management-System-Python-Based',
  image: '/Hospital.png',
    },
    {
      title: 'Guitar-Vision',
      description: '**GuitarChordAI** is a Python-based app that detects guitar chords from audio recordings. Currently, the focus is on **open chords**: - Major: C, A, G, E, D - Minor: Am, Em, Dm',
      tech: ['React','FastAPI','MongoDB'],
      url: 'https://github.com/Abkas/LearnGuitarAI',
  image: '/GuitarVision.png',
  label: 'ongoing'
    }
  ],  
  'Fun Projects': [
    {
      title: 'Dice Game ',
      description: 'A simple dice game using HTML,CSS and JS to get a winnder.(Reload to roll)',
      tech: ['JavaScript','Html','Css'],
      url: 'https://github.com/Abkas/Simple_dice_game_JS',
  image: '/DiceGame.png',
  livePreview: 'https://simple-dice-game-js.vercel.app/'
    },
    {
      title: 'Simon Game',
      description: 'A simple interactive Simon Game built using HTML, CSS, jQuery and JavaScript. Recreate the classic memory game and test your skills!',
      tech: ['JavaScript','Html','Css'],
      url: 'https://github.com/Abkas/Simon-Game',
  image: '/SimonGame.png',
  livePreview: 'https://simon-game-eight-virid.vercel.app/'
    },
  ],
};

const categoryList = Object.keys(categorizedProjects);

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="w-full min-h-screen flex flex-col items-center justify-center bg-white select-none py-20 px-4">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2d1e5e] mb-12 tracking-widest cartoon-font">PROJECTS</h2>
      <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {categoryList.map((category) => (
          <button
            key={category}
            className={`flex flex-col items-center justify-center px-8 py-6 w-full rounded-xl border-2 shadow-pixel font-bold text-base sm:text-lg transition-all duration-300 cursor-pointer focus:outline-none cartoon-font ${selectedCategory === category ? 'bg-[#5e35b1] text-white border-[#5e35b1] scale-105' : 'bg-white text-[#5e35b1] border-[#e0e0e0] hover:bg-[#ede7f6]'}`}
            style={{ minHeight: '80px', transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)' }}
            onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div
        className={`w-full max-w-5xl flex flex-col items-center transition-all duration-500 ${selectedCategory ? 'opacity-100 max-h-[2000px] scale-100' : 'opacity-0 max-h-0 scale-95 pointer-events-none'}`}
        style={{ overflow: 'hidden', transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)' }}
      >
        {selectedCategory && (
          <>
            <h3 className="text-xl sm:text-2xl font-bold text-[#5e35b1] mb-6 tracking-wider cartoon-font" style={{ transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)' }}>{selectedCategory}</h3>
            {categorizedProjects[selectedCategory].length === 0 ? (
              <p className="text-[#888] italic mb-8">No projects yet in this category.</p>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full transition-all duration-500">
                  {(showAll ? categorizedProjects[selectedCategory] : categorizedProjects[selectedCategory].slice(0, 3)).map((project, idx) => (
                    <ProjectCard key={project.title + idx} {...project} />
                  ))}
                </div>
                {categorizedProjects[selectedCategory].length > 3 && (
                  <button
                    className="mt-8 px-8 py-3 rounded-lg bg-[#5e35b1] text-white font-bold shadow-lg hover:bg-[#2d1e5e] transition-colors text-base tracking-wide"
                    onClick={() => setShowAll((prev) => !prev)}
                  >
                    {showAll ? 'Show Less' : 'See More'}
                  </button>
                )}
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default Projects