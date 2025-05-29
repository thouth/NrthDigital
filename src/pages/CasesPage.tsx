import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import CaseStudyCard from '../components/CaseStudyCard';
import Footer from '../components/Footer';
import CaseStudyCarousel from '../components/caseStudyCarousel';
import { caseStudies } from '../data/caseStudies';

const CasesPage: React.FC = () => {
  const { t } = useTranslation();

  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCases = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  return (
    <div>
      {/* Header */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('cases.title')}
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              {t('cases.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 mb-12">
            <FilterButton 
              label={t('cases.filters.all')} 
              isActive={activeFilter === 'all'} 
              onClick={() => setActiveFilter('all')}
            />
            <FilterButton 
              label={t('cases.filters.web')} 
              isActive={activeFilter === 'web'} 
              onClick={() => setActiveFilter('web')}
            />
            <FilterButton 
              label={t('cases.filters.mobile')} 
              isActive={activeFilter === 'mobile'} 
              onClick={() => setActiveFilter('mobile')}
            />
            <FilterButton 
              label={t('cases.filters.ai')} 
              isActive={activeFilter === 'ai'} 
              onClick={() => setActiveFilter('ai')}
            />
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-8">
        <div className="container mx-auto px-6">

          {/*desktop layout*/}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((study, index) => (
              <CaseStudyCard
                key={index}
                image={study.image}
                title={t(study.title)}
                category={t(study.category)}
                categoryDisplay={t(study.categoryDisplay)}
                description={t(study.description)}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md transition-colors ${
        isActive
          ? 'bg-primary-600 text-white'
          : 'bg-dark-200 text-gray-300 hover:bg-dark-300'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CasesPage;