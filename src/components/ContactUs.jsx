import React from 'react';

const ContactUs = () => {
  const contacts = [
    {
      id: 1,
      position: "President",
      name: "Suvam Mishra",
      phone: "7894409607",
      icon: "👑"
    },
    {
      id: 2,
      position: "Secretary",
      name: "Faizan Ahmed",
      phone: "7909045539",
      icon: "📋"
    },
    {
      id: 3,
      position: "Treasurer",
      name: "Soumyashree Rath",
      phone: "7205852774",
      icon: "💰"
    }
  ];

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-5 py-24 bg-gradient-to-b from-[#0a0e1a] via-[#151b2e] via-30% to-[#1a2540] to-70%"
      style={{
        background: `
          radial-gradient(ellipse at top left, rgba(255, 140, 0, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at top right, rgba(0, 200, 255, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at bottom left, rgba(255, 100, 0, 0.1) 0%, transparent 50%),
          radial-gradient(ellipse at bottom right, rgba(0, 255, 255, 0.12) 0%, transparent 50%),
          linear-gradient(180deg, #0a0e1a 0%, #151b2e 30%, #1a2540 70%, #0f1828 100%)
        `
      }}
    >
      {/* Background overlay effects */}
      <div className="absolute inset-0 pointer-events-none opacity-60 animate-pulse"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 20%, rgba(255, 140, 0, 0.3) 0%, transparent 15%),
            radial-gradient(circle at 85% 20%, rgba(0, 200, 255, 0.3) 0%, transparent 15%),
            radial-gradient(circle at 10% 80%, rgba(255, 100, 0, 0.25) 0%, transparent 12%),
            radial-gradient(circle at 90% 85%, rgba(0, 255, 255, 0.3) 0%, transparent 15%)
          `
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {[
          { top: '10%', left: '10%', delay: '0s', duration: '12s' },
          { top: '20%', left: '80%', delay: '2s', duration: '18s' },
          { top: '60%', left: '15%', delay: '4s', duration: '14s' },
          { top: '70%', left: '70%', delay: '6s', duration: '16s' },
          { top: '40%', left: '50%', delay: '8s', duration: '20s' },
          { top: '80%', left: '40%', delay: '10s', duration: '13s' },
        ].map((particle, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full shadow-[0_0_10px_#FFD700,0_0_20px_#FFB700] animate-particle-drift"
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          />
        ))}
      </div>

      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none z-[1] hidden md:block">
        <div className="absolute left-[15%] top-0 w-0.5 h-full opacity-30 animate-pulse"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(255, 140, 0, 0.4) 10%, rgba(255, 140, 0, 0.6) 50%, rgba(255, 140, 0, 0.4) 90%, transparent 100%)',
            boxShadow: '0 0 20px rgba(255, 140, 0, 0.6)'
          }}
        />
        <div className="absolute right-[15%] top-0 w-0.5 h-full opacity-30 animate-pulse"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(0, 200, 255, 0.4) 10%, rgba(0, 255, 255, 0.6) 50%, rgba(0, 200, 255, 0.4) 90%, transparent 100%)',
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)',
            animationDelay: '1.5s'
          }}
        />
      </div>

      {/* Geometric shapes */}
      <div className="absolute inset-0 pointer-events-none z-[1] opacity-15 hidden md:block">
        {/* Triangles */}
        <div
          className="absolute top-[10%] left-[10%] animate-pulse"
          style={{
            width: 0,
            height: 0,
            borderLeft: '60px solid transparent',
            borderRight: '60px solid transparent',
            borderBottom: '100px solid rgba(255, 140, 0, 0.3)',
            filter: 'blur(2px)'
          }}
        />
        <div
          className="absolute bottom-[15%] right-[12%] animate-pulse"
          style={{
            width: 0,
            height: 0,
            borderLeft: '50px solid transparent',
            borderRight: '50px solid transparent',
            borderTop: '80px solid rgba(0, 200, 255, 0.3)',
            filter: 'blur(2px)',
            animationDelay: '1s'
          }}
        />
        {/* Circles */}
        <div className="absolute top-[25%] left-[8%] w-10 h-10 border-2 border-orange-500/40 rounded-full shadow-[0_0_20px_rgba(255,140,0,0.4)] animate-pulse" />
        <div className="absolute top-[20%] right-[10%] w-12 h-12 border-2 border-cyan-400/40 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.4)] animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Main content container */}
      <div className="relative z-[2] w-full max-w-[1400px]">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-[3px] mb-4 animate-pulse-glow">
            Sankalp'25 Contacts
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-300 font-light tracking-wider">
            Feel free to contact us
          </p>
        </div>

        {/* Contact cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16 max-w-6xl mx-auto">
          {contacts.map((contact, index) => (
            <div
              key={contact.id}
              className="group relative bg-gradient-to-br from-slate-700/70 via-slate-600/85 to-slate-700/70 backdrop-blur-md border-2 border-amber-500/20 rounded-3xl p-12 text-center overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-5 hover:scale-105 hover:border-amber-500 hover:shadow-[0_30px_80px_rgba(0,0,0,0.9),0_0_70px_rgba(255,183,0,0.6)] animate-card-fade-in"
              style={{
                animationDelay: `${index * 0.2}s`,
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 183, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Decorative top and bottom lines */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4/5 h-0.5 opacity-50 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'linear-gradient(90deg, transparent, #FFB700, #FFD700, #FFB700, transparent)',
                  boxShadow: '0 0 10px rgba(255, 183, 0, 0.6)'
                }}
              />
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-4/5 h-0.5 opacity-50 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'linear-gradient(90deg, transparent, #FFB700, #FFD700, #FFB700, transparent)',
                  boxShadow: '0 0 10px rgba(255, 183, 0, 0.6)'
                }}
              />

              {/* Icon with ring */}
              <div className="relative inline-block mb-6">
                <div className="absolute top-1/2 left-1/2 w-24 h-24 border-2 border-amber-500 rounded-full -translate-x-1/2 -translate-y-1/2 animate-ring-pulse shadow-[0_0_20px_rgba(255,183,0,0.6),inset_0_0_20px_rgba(255,183,0,0.3)]" />
                <div className="relative z-[2] text-6xl animate-icon-float drop-shadow-[0_0_25px_rgba(255,183,0,0.8)]">
                  {contact.icon}
                </div>
              </div>

              {/* Position */}
              <div className="relative z-[2] text-2xl font-extrabold text-amber-500 uppercase tracking-[3px] mb-2.5"
                style={{ textShadow: '0 0 15px rgba(255, 183, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.5)' }}
              >
                {contact.position}
              </div>

              {/* Underline */}
              <div className="h-0.5 w-16 mx-auto my-3 rounded opacity-70 group-hover:w-20 transition-all duration-300"
                style={{
                  background: 'linear-gradient(90deg, transparent, #FFB700, transparent)',
                  boxShadow: '0 0 10px rgba(255, 183, 0, 0.6)'
                }}
              />

              {/* Name */}
              <div className="relative z-[2] text-3xl font-bold text-white mb-6 tracking-wide"
                style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.7), 0 0 15px rgba(255, 183, 0, 0.3)' }}
              >
                {contact.name}
              </div>

              {/* Phone button */}
              <div className="relative z-[2]">
                <a
                  href={`tel:${contact.phone}`}
                  className="inline-flex items-center gap-2.5 text-lg text-white no-underline px-9 py-4 border-2 border-amber-500 rounded-full transition-all duration-400 relative overflow-hidden group/btn shadow-[0_5px_20px_rgba(255,183,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:text-[#0a0e1a] hover:border-amber-400 hover:shadow-[0_8px_30px_rgba(255,183,0,0.7),0_0_40px_rgba(255,183,0,0.5)] hover:scale-105 hover:-translate-y-1"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 183, 0, 0.15) 0%, rgba(255, 140, 0, 0.15) 100%)'
                  }}
                >
                  <span className="before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:bg-[radial-gradient(circle,#FFB700,#FF8C00)] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all before:duration-500 before:-z-10 group-hover/btn:before:w-[400px] group-hover/btn:before:h-[400px]" />
                  <span className="text-xl animate-phone-ring">📞</span>
                  <span className="font-semibold tracking-wide">Ph no : {contact.phone}</span>
                </a>
              </div>

              {/* Hover effects - sparkles */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border-2 border-amber-500 shadow-[0_0_30px_rgba(255,183,0,0.6),inset_0_0_30px_rgba(255,183,0,0.3)]">
                {[
                  { top: '15%', left: '15%', delay: '0s' },
                  { top: '15%', right: '15%', delay: '0.7s' },
                  { bottom: '15%', left: '50%', delay: '1.4s' },
                  { bottom: '50%', right: '20%', delay: '0.7s' }
                ].map((pos, i) => (
                  <span
                    key={i}
                    className="absolute w-2.5 h-2.5 bg-amber-400 rounded-full opacity-0 group-hover:animate-sparkle shadow-[0_0_15px_#FFD700,0_0_30px_#FFB700] before:absolute before:top-1/2 before:left-1/2 before:w-full before:h-0.5 before:bg-amber-400 before:-translate-x-1/2 before:-translate-y-1/2 before:shadow-[0_0_10px_#FFD700] after:absolute after:top-1/2 after:left-1/2 after:w-full after:h-0.5 after:bg-amber-400 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-90 after:shadow-[0_0_10px_#FFD700]"
                    style={{ ...pos, animationDelay: pos.delay }}
                  />
                ))}
              </div>

              {/* Corner ornaments - hidden on mobile */}
              {[
                { top: '15px', left: '15px' },
                { top: '15px', right: '15px' },
                { bottom: '15px', left: '15px' },
                { bottom: '15px', right: '15px' }
              ].map((pos, i) => (
                <div
                  key={i}
                  className="hidden md:block absolute w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity z-[5] before:absolute before:w-full before:h-0.5 before:bg-gradient-to-r before:from-amber-500 before:to-amber-400 before:shadow-[0_0_10px_rgba(255,183,0,0.8)] after:absolute after:w-0.5 after:h-full after:bg-gradient-to-b after:from-amber-500 after:to-amber-400 after:shadow-[0_0_10px_rgba(255,183,0,0.8)]"
                  style={{
                    ...pos,
                    ...(pos.top && pos.left && {
                      top: pos.top,
                      left: pos.left,
                    }),
                    ...(pos.top && pos.right && {
                      top: pos.top,
                      right: pos.right,
                    }),
                    ...(pos.bottom && pos.left && {
                      bottom: pos.bottom,
                      left: pos.left,
                    }),
                    ...(pos.bottom && pos.right && {
                      bottom: pos.bottom,
                      right: pos.right,
                    })
                  }}
                />
              ))}

              {/* Glow effect on hover */}
              <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-[radial-gradient(circle,rgba(255,183,0,0.3)_0%,transparent_70%)] -translate-x-1/2 -translate-y-1/2 transition-all duration-500 pointer-events-none rounded-full group-hover:w-[200%] group-hover:h-[200%] group-hover:animate-pulse" />
            </div>
          ))}
        </div>

        {/* Email contact section */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="inline-block bg-gradient-to-br from-slate-700/50 to-slate-600/50 backdrop-blur-md border-2 border-amber-500/30 rounded-3xl px-16 py-8 transition-all duration-400 hover:border-amber-500 hover:shadow-[0_10px_40px_rgba(255,183,0,0.3)] hover:-translate-y-2">
            <p className="text-base text-slate-300 m-0 mb-2.5 tracking-widest uppercase">
              Get in Touch
            </p>
            <a
              href="mailto:sankalp@nist.edu"
              className="text-2xl font-semibold text-amber-500 no-underline block transition-all duration-300 hover:text-amber-400 hover:scale-105"
              style={{ textShadow: '0 0 10px rgba(255, 183, 0, 0.5)' }}
            >
              sankalp@nist.edu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
