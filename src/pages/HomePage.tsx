import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code, Server, Cpu, ChevronRight, BarChart, Users, Rocket } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import CaseStudyCard from '../components/CaseStudyCard';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Code size={24} />,
      title: t('home.services.development.title'),
      description: t('home.services.development.description'),
    },
    {
      icon: <Cpu size={24} />,
      title: t('home.services.ai.title'),
      description: t('home.services.ai.description'),
    },
    {
      icon: <Users size={24} />,
      title: t('home.services.consulting.title'),
      description: t('home.services.consulting.description'),
    },
  ];

  const caseStudies = [
    {
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'AI-Powered Analytics Platform',
      category: 'AI / Data Analytics',
      description: 'A comprehensive analytics platform that uses AI to provide actionable insights.',
    },
    {
      image: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'E-commerce Mobile App',
      category: 'Mobile Development',
      description: 'A cross-platform mobile application for a leading e-commerce brand.',
    },
    {
      image: 'https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Smart City Infrastructure',
      category: 'IoT / Web Development',
      description: 'An integrated solution for smart city management and monitoring.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {t('home.hero.title')} <br />
                <span className="text-primary-500">{t('home.hero.subtitle')}</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                {t('home.hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button href="/services" variant="primary" size="lg">
                  {t('home.hero.cta')}
                  <ChevronRight size={16} className="ml-2" />
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  {t('home.contact.cta')}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-dark-200/50">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title={t('home.services.title')}
            description={t('home.services.description')}
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">
                {t('home.about.title')}
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {t('home.about.description')}
              </p>
              <Button href="/about" variant="outline">
                Learn More About Us
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <StatsCard 
                icon={<Rocket size={24} />}
                value="8+"
                label={t('home.about.stats.years')}
              />
              <StatsCard 
                icon={<BarChart size={24} />}
                value="200+"
                label={t('home.about.stats.projects')}
              />
              <StatsCard 
                icon={<Server size={24} />}
                value="50+"
                label="Technologies"
              />
              <StatsCard 
                icon={<Users size={24} />}
                value="100+"
                label={t('home.about.stats.clients')}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <SectionTitle 
              title={t('home.cases.title')}
              description={t('home.cases.description')}
            />
            <Button href="/cases" variant="outline">
              {t('home.cases.viewAll')}
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                image={study.image}
                title={study.title}
                category={study.category}
                description={study.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-primary-900 to-secondary-900 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.05),transparent)]"></div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl font-bold mb-6 text-white">
                {t('home.contact.title')}
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {t('home.contact.description')}
              </p>
              <Button href="/contact" variant="primary" size="lg">
                {t('home.contact.cta')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

interface StatsCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, value, label }) => {
  return (
    <div className="bg-dark-200 rounded-lg p-6 border border-dark-300">
      <div className="text-primary-500 mb-4">{icon}</div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  );
};

export default HomePage;