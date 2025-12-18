import React from 'react';
import { Heart, Code2, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 mt-20 border-t border-slate-300 dark:border-slate-800 bg-slate-300 dark:bg-slate-950 text-center transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="p-3 bg-slate-200 dark:bg-slate-900 rounded-full border border-slate-300 dark:border-slate-800 shadow-sm">
             <Code2 className="w-6 h-6 text-slate-500 dark:text-slate-500" />
          </div>
          
          <div className="space-y-2">
            <p className="text-slate-800 dark:text-slate-300 font-medium transition-colors">
              현직 초등교사가 직접 기획 · 디자인 · 개발
            </p>
            <p className="text-slate-600 dark:text-slate-500 text-sm max-w-md mx-auto">
              이곳은 교육 현장에 필요한 도구들을 실험하고 공유하는 공간입니다. <br/>
              자유로운 활용과 피드백은 언제나 환영합니다.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-400/20 dark:border-slate-800 w-full max-w-xs mx-auto">
            <p className="text-slate-700 dark:text-slate-400 text-sm mb-2">
              제안이나 문의사항이 있으시면 언제든 메일 주세요.
            </p>
            <a 
              href="mailto:sinjoppo@naver.com" 
              className="inline-flex items-center gap-2 text-sky-700 dark:text-lab-accent font-semibold hover:underline group transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Contact: sinjoppo@naver.com</span>
            </a>
          </div>
          
          <p className="text-sm text-slate-600 dark:text-slate-600 mt-8 transition-colors">
            ⓒ 2025. Kwon's class. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;