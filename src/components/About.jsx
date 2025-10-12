import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 md:py-20 px-4 md:px-6">
        {/* Center About Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-12 md:mb-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent text-center">
          About
        </h1>
        
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 w-full">
            <div className="space-y-6 md:space-y-8 text-gray-300 text-base md:text-lg leading-relaxed">
              <p className="text-justify">
                NIST is promoted by <span className="text-orange-400 font-semibold">SM Charitable Educational Trust</span>, established in <span className="text-orange-400 font-semibold">1995</span> by <span className="text-orange-400">Dr Sukant K Mohapatra</span> and <span className="text-orange-400">Ms Sanjeeta Mohapatra</span> (both US-based NRIs). Founded in <span className="text-orange-400 font-semibold">1996</span>, NIST proudly stands as Odisha's <span className="text-orange-400 font-semibold">first NRI educational venture</span> and the pioneering engineering college under Berhampur University in southern Odisha, driven by a visionary mission to establish a world-class <span className="text-orange-400 font-semibold">center of academic excellence and cutting-edge research</span>.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/30 rounded-xl p-6 md:p-8 hover:border-orange-500 transition-all duration-300 hover:scale-105 group">
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform">1995</div>
                <div className="text-sm md:text-base text-gray-400 font-medium">Trust Established</div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/30 rounded-xl p-6 md:p-8 hover:border-orange-500 transition-all duration-300 hover:scale-105 group">
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform">1996</div>
                <div className="text-sm md:text-base text-gray-400 font-medium">NIST Founded</div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/30 rounded-xl p-6 md:p-8 hover:border-orange-500 transition-all duration-300 hover:scale-105 group">
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform">#1</div>
                <div className="text-sm md:text-base text-gray-400 font-medium">First NRI Venture</div>
              </div>

              <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/30 rounded-xl p-6 md:p-8 hover:border-orange-500 transition-all duration-300 hover:scale-105 group">
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform">25+</div>
                <div className="text-sm md:text-base text-gray-400 font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Coming Soon Card */}
          <div className="lg:sticky lg:top-24 flex-shrink-0 w-full lg:w-auto">
            <div className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500 rounded-2xl p-10 md:p-14 min-w-full lg:min-w-[360px] shadow-2xl shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-2xl"></div>
              <div className="relative text-center">
                <div className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-3">
                  <span className="bg-gradient-to-br from-yellow-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl">
                    COMING
                  </span>
                </div>
                <div className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-6 md:mb-10">
                  <span className="bg-gradient-to-br from-yellow-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl">
                    SOON
                  </span>
                </div>
                <div className="text-base md:text-lg text-orange-400 font-semibold tracking-wider bg-orange-500/10 py-2 px-4 rounded-lg inline-block">
                  www.sankalpnist.in
                </div>
              </div>
              
              <div className="absolute -top-2 -right-2 w-28 h-28 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-28 h-28 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Bottom Marquee */}
        <div className="mt-20 md:mt-28 relative py-6 md:py-8 border-y border-yellow-600/30 overflow-hidden">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...Array(8)].map((_, i) => (
              <span key={i} className={`text-6xl md:text-8xl font-black mx-8 md:mx-12 ${
                i % 2 === 0 
                  ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent' 
                  : 'text-yellow-500/20'
              }`}>
                SANKALP
              </span>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-12 md:mt-20 text-center max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-orange-500/5 to-yellow-500/5 border border-orange-500/20 rounded-xl p-8 md:p-10 hover:border-orange-500/40 transition-all duration-300 group">
            <h3 className="text-2xl md:text-3xl font-bold text-orange-400 mb-4 md:mb-6 group-hover:scale-105 transition-transform">Our Vision</h3>
            <p className="text-base md:text-xl text-gray-300 leading-relaxed font-medium">
              To establish a premier center of academic excellence and innovative research that rivals international universities, cultivating future leaders and innovators who will shape tomorrow's world through knowledge and technology.
            </p>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="fixed top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full blur-3xl opacity-5 -z-10 animate-pulse"></div>
      <div className="fixed bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full blur-3xl opacity-5 -z-10 animate-pulse"></div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default About