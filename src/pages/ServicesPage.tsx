import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code, Smartphone, Cpu, Cloud, BarChart3, Lightbulb } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/Footer';
import ProcessesCarousel from '../components/ProcessesCarousel';
import ServiceCarousel from '../components/serviceCarousel';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Code size={24} />,
      title: t('services.webDev.title'),
      description: t('services.webDev.description'),
    },
    {
      icon: <Smartphone size={24} />,
      title: t('services.mobileDev.title'),
      description: t('services.mobileDev.description'),
    },
    {
      icon: <Cpu size={24} />,
      title: t('services.aiSolutions.title'),
      description: t('services.aiSolutions.description'),
    },
    {
      icon: <Cloud size={24} />,
      title: t('services.cloudServices.title'),
      description: t('services.cloudServices.description'),
    },
    {
      icon: <BarChart3 size={24} />,
      title: t('services.dataAnalytics.title'),
      description: t('services.dataAnalytics.description'),
    },
    {
      icon: <Lightbulb size={24} />,
      title: t('services.digitalStrategy.title'),
      description: t('services.digitalStrategy.description'),
    },
  ];

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
              {t('services.title')}
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              {t('services.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8">
        <div className="container mx-auto px-6">

          {/*mobile layout*/}
          <div className='block md:hidden mt-8'>
            <ServiceCarousel services={services}/>
          </div>

            {/*desktop layout*/}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title={t('services.process.headingTitle')}
            description={t('services.process.headingDescription')}
          />


          {/*Mobile view*/}
          <div className='block md:hidden mt-8'>
            <ProcessesCarousel/>
          </div>

            {/*desktop view*/}
          <div className="hidden md:grid grid-cols-2 gap-x-8 gap-y-12 mt-8">
              <ProcessStep 
                number="01" 
                title={t('services.process.discover.title')}
                description={t('services.process.discover.description')}
              />
              <ProcessStep 
                number="02" 
                title={t('services.process.planning.title')}
                description={t('services.process.planning.description')}
              />
              <ProcessStep 
                number="03" 
                title={t('services.process.design.title')}
                description={t('services.process.design.description')}
              />
            
              <ProcessStep 
                number="04" 
                title={t('services.process.development.title')}
                description={t('services.process.development.description')}
              />
              <ProcessStep 
                number="05" 
                title={t('services.process.testing.title')}
                description={t('services.process.testing.description')}
              />
              <ProcessStep 
                number="06" 
                title={t('services.process.deployment.title')}
                description={t('services.process.deployment.description')}
              />
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-dark-200/50">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title={t('services.technologies.title')} 
            description={t('services.technologies.description')}
            center
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <TechItem name="React" />
            <TechItem name="Node.js" />
            <TechItem name="Python" />
            <TechItem name="TensorFlow" />
            <TechItem name="AWS" />
            <TechItem name="Firebase" />
            <TechItem name="Docker" />
            <TechItem name="Kubernetes" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex"
    >
      <div className="mr-6">
        <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500 font-bold">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

interface TechItemProps {
  name: string;
}

const TechItem: React.FC<TechItemProps> = ({ name }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-dark-300 rounded-lg p-4 flex items-center justify-center h-20 border border-dark-400 hover:border-primary-500 transition-colors"
    >
      <span className="text-lg font-medium text-white">{name}</span>
    </motion.div>
  );
};

export default ServicesPage;