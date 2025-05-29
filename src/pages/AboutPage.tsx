import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code2, Sparkles, Share2 } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Footer from '../components/Footer';
{/* import below if we want to roll back to carousel for mobile view.
import OurValuesCarousel from '../components/ourValuesCarousel';
*/}

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: 'Emma Hansen',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Anders Olsen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Sofie Berg',
      role: 'Lead Designer',
      image: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Magnus Larsen',
      role: 'AI Specialist',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
              {t('about.title')}
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              {t('about.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-dark-200/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">
                {t('about.mission.title')}
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {t('about.mission.description')}
              </p>
              <p className="text-gray-400 leading-relaxed">
                Founded in 2017, Nrth Digital has grown from a small team of passionate developers to a full-service digital agency. We combine technical expertise with creative thinking to deliver solutions that drive business growth and innovation.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-96 rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-100 to-transparent opacity-70"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title={t('about.values.title')}
            center
          />
          
          

          {/*our values layout for desktop*/}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Sparkles size={24} />}
              title={t('about.values.innovation.title')}
              description={t('about.values.innovation.description')}
            />
            <ValueCard 
              icon={<Code2 size={24} />}
              title={t('about.values.quality.title')}
              description={t('about.values.quality.description')}
            />
            <ValueCard 
              icon={<Share2 size={24} />}
              title={t('about.values.collaboration.title')}
              description={t('about.values.collaboration.description')}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title={t('about.team.title')}
            description={t('about.team.description')}
            center
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
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

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-dark-200 rounded-lg p-6 text-center"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-500/10 text-primary-500 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
};

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-100 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
      </div>
      <h3 className="text-lg font-semibold text-white">{name}</h3>
      <p className="text-primary-400">{role}</p>
    </motion.div>
  );
};

export default AboutPage;