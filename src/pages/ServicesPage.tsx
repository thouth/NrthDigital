import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code, Smartphone, Cpu, Cloud, BarChart3, Lightbulb } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/Footer';

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            title="Our Process" 
            description="We follow a structured approach to deliver high-quality solutions that meet your business needs."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <ProcessStep 
                number="01" 
                title="Discovery" 
                description="We start by understanding your business, goals, and requirements through in-depth consultations."
              />
              <ProcessStep 
                number="02" 
                title="Planning" 
                description="Based on the discovery phase, we create a detailed plan including timelines, resources, and deliverables."
              />
              <ProcessStep 
                number="03" 
                title="Design" 
                description="Our designers create wireframes and visual designs that align with your brand and requirements."
              />
            </div>
            
            <div className="space-y-12">
              <ProcessStep 
                number="04" 
                title="Development" 
                description="Our development team brings the designs to life using the latest technologies and best practices."
              />
              <ProcessStep 
                number="05" 
                title="Testing" 
                description="We thoroughly test all aspects of the solution to ensure quality and performance."
              />
              <ProcessStep 
                number="06" 
                title="Deployment & Support" 
                description="After successful testing, we deploy the solution and provide ongoing support and maintenance."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-dark-200/50">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Technologies We Use" 
            description="We leverage cutting-edge technologies to deliver innovative solutions."
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