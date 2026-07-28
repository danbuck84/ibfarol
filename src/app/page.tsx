export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#faf9f5] text-[#010506] font-sans p-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#FFB63D]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-[#FFB63D]/10 rounded-full blur-3xl"></div>

      <header className="absolute top-0 w-full p-6 md:p-10 flex justify-between items-center max-w-7xl z-20">
        <div className="text-2xl font-black tracking-tighter">IBF</div>
        <nav>
          <span className="text-xs md:text-sm uppercase font-bold text-[#FFB63D] tracking-widest border-2 border-[#FFB63D]/30 bg-[#FFB63D]/5 px-4 py-2 rounded-full backdrop-blur-sm">
            Em Construção
          </span>
        </nav>
      </header>

      <main className="flex flex-col items-center text-center max-w-3xl z-10">
        <div className="mb-10 p-8 bg-[#010506] rounded-[2rem] shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-out">
          <svg className="w-16 h-16 md:w-20 md:h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <rect width="100" height="100" fill="#010506" rx="20"></rect>
            <g fill="#FFB63D">
              <rect x="46" y="42" width="8" height="26" rx="1"></rect>
              <path d="M50 30l6 10H44z"></path>
              <rect x="42" y="68" width="16" height="4" rx="1"></rect>
              <rect x="30" y="33" width="7" height="2" rx="1"></rect>
              <rect x="63" y="33" width="7" height="2" rx="1"></rect>
            </g>
          </svg>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight text-balance">
          Igreja Batista <br/><span className="text-[#FFB63D]">Farol</span>
        </h1>
        <p className="text-lg md:text-2xl text-[#010506]/70 mb-12 leading-relaxed max-w-2xl font-medium">
          Nosso novo site está sendo preparado com muito carinho. Em breve, um novo espaço para nos conectarmos e compartilharmos a luz do evangelho.
        </p>
        <button className="bg-[#FFB63D] text-[#010506] font-bold text-lg px-10 py-5 rounded-full shadow-[0_8px_30px_rgb(255,182,61,0.3)] hover:shadow-[0_8px_40px_rgb(255,182,61,0.5)] hover:bg-[#ffc666] hover:-translate-y-1 transition-all duration-300">
          Novidades em Breve
        </button>
      </main>
    </div>
  );
}
