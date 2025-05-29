import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import { useTranslation } from 'react-i18next';


interface CaseStudyCardProps {
  image: string;
  title: string;
  category: string;
  categoryDisplay: string;
  description: string;
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ image, title, category, categoryDisplay, description, index }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="overflow-hidden rounded-lg group relative"
    >
      <div className="aspect-video overflow-hidden rounded-lg min-h-[300px] sm:min-h-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>

      <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-between h-full">
        <div>
          <div className="mmin-h-[1.5rem] text-sm text-primary-100 bg-primary-900/80 px-3 py-0.5 rounded-md w-fit mb-5 font-medium shadow-sm">
            {categoryDisplay}
        </div>
        <h3 className="min-h-[2.5rem] text-xl font-semibold mb-1 text-white group-hover:text-primary-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed max-w-md
          opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 min-h-[3.5rem]">
          {description}
        </p>
      </div>

  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="flex items-center text-primary-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4"
  >
    {t('home.cases.viewCase')} <ExternalLink size={16} className="ml-2" />
  </motion.div>
</div>
    </motion.div>
  );
};

export default CaseStudyCard;