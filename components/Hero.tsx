import React from 'react';
import { FlaskConical } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full py-20 px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Background decoration - Adapted for Light/Dark */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        {/* Light mode blobs (softer) */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/40 rounded-full blur-[100px] animate-pulse-slow dark:hidden"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-200/40 rounded-full blur-[100px] animate-pulse-slow dark:hidden"></div>
        
        {/* Dark mode blobs (neon) */}
        <div className="hidden dark:block absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-lab-accent rounded-full blur-[120px] opacity-20 animate-pulse-slow"></div>
        <div className="hidden dark:block absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600 rounded-full blur-[120px] opacity-20 animate-pulse-slow"></div>
      </div>

      <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 backdrop-blur-sm shadow-md dark:shadow-lg transition-colors duration-300">
        <FlaskConical className="w-4 h-4 text-sky-600 dark:text-lab-accent" />
        <span className="text-xs md:text-sm font-medium text-slate-600 dark:text-slate-300">
          교사가 만든 실험실 (Teacher's Lab)
        </span>
      </div>

      <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-slate-900 dark:text-transparent dark:bg-gradient-to-r dark:from-white dark:via-slate-200 dark:to-slate-400 dark:bg-clip-text drop-shadow-sm transition-colors duration-300">
        권쌤과 바이브 코딩!
      </h1>

      <h2 className="text-xl md:text-2xl font-light text-slate-600 dark:text-slate-300 mb-8 max-w-2xl transition-colors duration-300">
        수업·행정·체육·놀이까지,
        <span className="block mt-2 md:inline md:mt-0 font-bold dark:font-medium text-sky-600 dark:text-lab-accent"> 필요해서 직접 만든 웹 서비스 모음</span>
      </h2>

      <p className="max-w-xl text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed transition-colors duration-300">
        현장에서 겪는 불편함을 기술로 해결합니다. <br className="hidden md:block"/>
        딱딱한 교육 도구가 아닌, 
        <span className="text-slate-900 dark:text-white font-medium"> 감각적이고 실용적인 도구</span>를 실험하고 만듭니다.
      </p>

      <div className="mt-12 flex flex-col items-center">
        <div className="w-px h-16 bg-gradient-to-b from-slate-300 to-transparent dark:from-slate-700"></div>
      </div>
    </section>
  );
};

export default Hero;