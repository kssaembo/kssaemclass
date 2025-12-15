import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  item: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  const Icon = item.icon;

  return (
    <div className="group relative flex flex-col h-full bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/10 dark:hover:shadow-lab-accent/10 dark:hover:border-lab-accent/50 hover:border-sky-400 dark:hover:bg-slate-750 overflow-hidden">
      
      {/* Glow Effect on Hover (Adaptive) */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400/0 via-sky-400/0 to-sky-400/5 dark:from-lab-accent/0 dark:via-lab-accent/0 dark:to-lab-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col flex-grow">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-slate-100 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700 group-hover:border-sky-300 dark:group-hover:border-lab-accent/50 group-hover:text-sky-600 dark:group-hover:text-lab-accent transition-colors duration-300 text-slate-500 dark:text-slate-300 shadow-sm dark:shadow-inner">
            <Icon size={28} strokeWidth={1.5} />
          </div>
          <ExternalLink className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-sky-600 dark:group-hover:text-lab-accent transition-colors duration-300 opacity-50 group-hover:opacity-100" />
        </div>

        {/* Titles */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-sky-700 dark:group-hover:text-lab-glow transition-colors">
          {item.title}
        </h3>
        <p className="text-sm font-medium text-sky-700 dark:text-lab-accent/90 mb-4 h-auto min-h-[1.25rem]">
          {item.subtitle}
        </p>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
          {item.description}
        </p>

        {/* Catchphrase & Action */}
        <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-700">
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-200 font-medium mb-4 italic">
            {item.catchphrase}
          </p>
          
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full gap-2 py-3 px-4 bg-slate-100 dark:bg-slate-700/50 hover:bg-sky-500 dark:hover:bg-lab-accent text-slate-700 dark:text-white hover:text-white rounded-lg transition-all duration-300 font-semibold group-hover:shadow-lg group-hover:shadow-sky-500/20 dark:group-hover:shadow-lab-accent/25"
          >
            <span>바로 사용하기</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;