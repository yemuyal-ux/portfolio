
import React from 'react';

const pixelFont = {
  fontFamily: '"Press Start 2P", system-ui, sans-serif',
};

const education = [
  {
    year: 'SEE',
    school: 'SAMB',
    desc: 'Passed SEE from SAMB',
  },
  {
    year: 'College',
    school: 'CCRC',
    desc: 'Completed +2 at CCRC',
  },
  {
    year: 'BSc AI',
    school: 'Sunway',
    desc: 'Currently studying BSc AI at Sunway',
  },
];

const Education = () => {
  return (
    <section id="education" className="w-full flex flex-col items-center justify-center bg-white select-none py-20 px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2d1e5e] mb-12 tracking-widest" style={pixelFont}>EDUCATION</h2>
      <div className="w-full max-w-2xl flex flex-col gap-10 relative">
        {education.map((item, idx) => (
          <div key={item.year} className="flex items-center gap-6">
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 rounded-full bg-[#a259ff] border-4 border-[#2d1e5e] z-10" />
              {idx < education.length - 1 && (
                <div className="w-1 h-20 bg-[#a259ff]" />
              )}
            </div>
            <div className="bg-white rounded-xl shadow-pixel border-2 border-[#e0e0e0] px-6 py-4" style={pixelFont}>
              <div className="text-lg sm:text-xl font-bold text-[#2d1e5e] mb-1">{item.year} - {item.school}</div>
              <div className="text-sm text-[#444]">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education