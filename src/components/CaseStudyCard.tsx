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
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark-100 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95"></div>
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <div className="text-sm text-primary-400 mb-2">{category}</div>
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary-400 transition-colors duration-300">{title}</h3>
        <p className="text-gray-400 mb-4 leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center text-primary-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {t('home.cases.viewCase')} <ExternalLink size={16} className="ml-2" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;