import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import CaseStudyCard from '../components/CaseStudyCard';
import Footer from '../components/Footer';
import CaseStudyCarousel from '../components/caseStudyCarousel';

const CasesPage: React.FC = () => {
  const { t } = useTranslation();
  {caseStudies.map((study, index) => (
      <CaseStudyCard
      key={index}
      image={study.image}
      title={t(study.title)}
      category={t(study.category)}
      categoryDisplay={t(study.categoryDisplay)}
      description={t(study.description)}
      />
    ))}

  const [activeFilter, setActiveFilter] = useState('all');

  const caseStudies = [
    {
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'AI-Powered Analytics Platform',
      category: 'ai',
      categoryDisplay: 'AI / Data Analytics',
      description: 'A comprehensive analytics platform that uses AI to provide actionable insights for a leading retail company.',
    },
    {
      image: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'E-commerce Mobile App',
      category: 'mobile',
      categoryDisplay: 'Mobile Development',
      description: 'A cross-platform mobile application for a leading e-commerce brand, enabling seamless shopping experiences.',
    },
    {
      image: 'https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Smart City Infrastructure',
      category: 'web',
      categoryDisplay: 'IoT / Web Development',
      description: 'An integrated solution for smart city management and monitoring using IoT sensors and real-time data.',
    },
    {
      image: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Financial Trading Platform',
      category: 'web',
      categoryDisplay: 'Web Development',
      description: 'A secure and high-performance trading platform with real-time data visualization and analysis tools.',
    },
    {
      image: 'https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Healthcare Patient Portal',
      category: 'web',
      categoryDisplay: 'Web / Mobile',
      description: 'A patient management portal for healthcare providers, streamlining appointment scheduling and medical records.',
    },
    {
      image: 'https://images.pexels.com/photos/3182761/pexels-photo-3182761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Predictive Maintenance System',
      category: 'ai',
      categoryDisplay: 'AI / IoT',
      description: 'An AI-driven predictive maintenance system for industrial equipment, reducing downtime and maintenance costs.',
    },
  ];

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

          {/*mobile layout*/}
          <div className='block md:hidden mt-8'>
            <CaseStudyCarousel cases={filteredCases} />
          </div>

          {/*desktop layout*/}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((study, index) => (
              <CaseStudyCard
                key={index}
                image={study.image}
                title={study.title}
                category={study.categoryDisplay}
                description={study.description}
                index={index}
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