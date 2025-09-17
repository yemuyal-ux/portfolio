
import React, { useState, useRef, useEffect } from 'react';
import '../cartoonName.css';




const Skill = () => {
  // Use cartoon font for headings and skill names

  const skills = [
    {
      group: 'Frontend',
      items: [
        { name: 'HTML', color: '#e44d26', icon: '🌐' },
        { name: 'CSS', color: '#1572b6', icon: '🎨' },
        { name: 'React', color: '#61dafb', icon: '⚛️' },
      ],
    },
    {
      group: 'Backend',
      items: [
        { name: 'MongoDB', color: '#47a248', icon: '🍃' },
        { name: 'FastAPI', color: '#009688', icon: '⚡' },
        { name: 'Node.js', color: '#8cc84b', icon: '🟩' },
        { name: 'Express', color: '#222', icon: '🚂' },
      ],
    },
    {
      group: 'Design',
      items: [
        { name: 'Figma', color: '#a259ff', icon: '🎨' },
        { name: 'Canva', color: '#00c4cc', icon: '🖌️' },
        { name: 'Da Vinci', color: '#ffb300', icon: '🎬' },
      ],
    },
  ];

  // Animation state for each skill
  const [visible, setVisible] = useState({});
  const [broken, setBroken] = useState({});
  const skillRefs = useRef({});

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const key = entry.target.getAttribute('data-key');
          setVisible((prev) => ({
            ...prev,
            [key]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.2 }
    );
    Object.values(skillRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="w-full min-h-screen flex flex-col items-center justify-center bg-white select-none py-20 px-4 mt-0 mb-0">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2d1e5e] mb-12 tracking-widest cartoon-font">TECH-STACK</h2>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-10">
        {skills.map((group) => (
          <div key={group.group} className="flex flex-col items-center">
            <h3 className="text-lg sm:text-xl font-bold mb-6 text-[#2d1e5e] cartoon-font">{group.group}</h3>
            <div className="w-full flex flex-col gap-6">
              {group.items.map((skill) => {
                const key = group.group + '-' + skill.name;
                const isBroken = broken[key];
                // Split skill name in half for break effect
                const name = skill.name;
                const mid = Math.ceil(name.length / 2);
                const left = name.slice(0, mid);
                const right = name.slice(mid);
                return (
                  <div
                    key={skill.name}
                    ref={el => (skillRefs.current[key] = el)}
                    data-key={key}
                    className={`flex items-center gap-4 px-5 py-4 rounded-xl shadow-pixel bg-white border-2 border-[#e0e0e0] hover:scale-105 transition-all duration-700 ease-in-out funny-skill
                      ${visible[key] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'} ${isBroken ? 'broken-skill' : ''}`}
                    onClick={() => setBroken(prev => ({ ...prev, [key]: !prev[key] }))}
                    style={{ cursor: 'pointer' }}
                  >
                    <span className="text-2xl funky-top" style={{ color: skill.color }}>{skill.icon}</span>
                    <span className="text-base sm:text-lg md:text-xl font-bold text-[#2d1e5e] cartoon-font funky-bottom skill-name-split">
                      <span className={`skill-half left-half${isBroken ? ' break-left' : ''}`}>{left}</span>
                      <span className={`skill-half right-half${isBroken ? ' break-right' : ''}`}>{right}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>  
        ))}
      </div>
    </section>
  );
}

export default Skill
