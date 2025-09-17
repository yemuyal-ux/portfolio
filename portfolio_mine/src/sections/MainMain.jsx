import React from 'react'


const MainMain = () => {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 animate-gradient-slow opacity-90"></div>
      {/* Animated floating blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-300 opacity-30 rounded-full blur-3xl animate-blob1"></div>
      <div className="absolute top-2/3 left-2/3 w-80 h-80 bg-blue-300 opacity-30 rounded-full blur-3xl animate-blob2"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-300 opacity-30 rounded-full blur-3xl animate-blob3"></div>

      {/* Simple animated particles */}
      {[...Array(30)].map((_, i) => (
        <span
          key={i}
          className={
            `absolute block rounded-full bg-white opacity-40 pointer-events-none animate-particle` +
            ` w-[3px] h-[3px]`
          }
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${4 + Math.random() * 6}s`,
          }}
        />
      ))}
    </div>
  );
}

export default MainMain