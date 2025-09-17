import React from 'react';


const ProjectCard = ({ title, description, tech, url, image, livePreview, label, small }) => {
  // Fix image path if it starts with '/portfolio_mine/public/'
  let imgSrc = image;
  if (imgSrc && imgSrc.startsWith('/portfolio_mine/public/')) {
    imgSrc = imgSrc.replace('/portfolio_mine/public', '');
  }
  // Compact/tight style if 'small' prop is true
  const cardClass = small
    ? "rounded-xl shadow-pixel p-3 flex flex-col gap-2 transition-transform hover:scale-105 duration-200 w-full relative z-10 min-h-0"
    : "rounded-xl shadow-pixel p-6 flex flex-col gap-4 transition-transform hover:scale-105 duration-200 w-full relative z-10";
  const imgClass = small
    ? "w-full h-32 object-cover rounded-lg mb-2 border border-[#e0e0e0]"
    : "w-full h-56 object-cover rounded-lg mb-4 border border-[#e0e0e0]";
  const titleClass = small
    ? "text-base sm:text-lg font-bold text-[#2d1e5e]"
    : "text-lg sm:text-xl font-bold text-[#2d1e5e]";
  const techClass = small
    ? "flex flex-wrap gap-1 mb-2 items-center"
    : "flex flex-wrap gap-2 mb-4 items-center";
  const btnClass = small
    ? "inline-block px-3 py-1 bg-[#2d1e5e] text-white rounded shadow hover:bg-[#5e35b1] transition-colors text-xs font-bold"
    : "inline-block px-4 py-2 bg-[#2d1e5e] text-white rounded shadow hover:bg-[#5e35b1] transition-colors text-xs font-bold";
  const liveBtnClass = small
    ? "inline-block px-3 py-1 bg-green-600 text-white rounded shadow hover:bg-green-700 transition-colors text-xs font-bold"
    : "inline-block px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700 transition-colors text-xs font-bold";
  return (
    <>
  <div className={cardClass + ' cartoon-font'} style={{ background: '#fff' }}>
        {imgSrc && (
          <img src={imgSrc} alt={title + ' screenshot'} className={imgClass} />
        )}
        <div className="flex items-center gap-2 mb-1">
          <h3 className={titleClass + ' cartoon-font'}>{title}</h3>
          {label === 'ongoing' && (
            <span className="ml-2 px-2 py-1 bg-yellow-300 text-yellow-900 rounded text-xs font-bold cartoon-font">Ongoing</span>
          )}
        </div>
        <p className={(small
          ? "text-xs text-[#444] mb-1"
          : "text-sm text-[#444] mb-2") + ' cartoon-font font-normal'} style={{ fontWeight: 300 }}>{description}</p>
        <div className={techClass}>
          {tech.map((item, idx) => {
            // Map tech name to logo (SVG or PNG in public folder)
            const techLogos = {
            'React': '/tech/react.svg',
            'MongoDB': '/tech/mongodb.svg',
            'Nodejs': '/tech/nodejs.svg',
            'Express': '/tech/express.svg',
            'HTML': '/tech/html5.svg',
            'CSS': '/tech/css3.svg',
            'JS': '/tech/javascript.svg',
            'Figma': '/tech/figma.svg',
            'Python': '/tech/python.svg',
            'FastAPI': '/tech/fastapi.svg',
            'HuggingFace': '/tech/huggingface.png',
            'JavaScript': '/tech/javascript.svg',
            'Html': '/tech/html5.svg',
            'Css': '/tech/css3.svg',
            // Add more as needed
          };
          const logo = techLogos[item] || null;
          return (
            <span key={idx} className="flex items-center gap-1 bg-[#ede7f6] text-[#5e35b1] px-2 py-1 rounded text-xs font-normal cartoon-font" style={{ fontWeight: 300 }}>
              {logo && <img src={logo} alt={item + ' logo'} className="w-4 h-4 mr-1 inline-block" />}
              {item}
            </span>
          );
        })}
      </div>
        <div className="flex gap-2 mt-auto">
          <a href={url} target="_blank" rel="noopener noreferrer" className={btnClass + ' cartoon-font'}>
            Find out more
          </a>
          {livePreview && (
            <a href={livePreview} target="_blank" rel="noopener noreferrer" className={liveBtnClass + ' cartoon-font'}>
              Live Preview
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
