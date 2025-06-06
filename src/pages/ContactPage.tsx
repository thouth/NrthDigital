import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

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
              {t('contact.title')}
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              {t('contact.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">
                {t('contact.info.title')}
              </h3>
              
              <div className="space-y-6">
                <ContactInfo
                  icon={<MapPin size={20} />}
                  title={t('contact.info.address')}
                  detail="Inndalsveien 90, 5063 Bergen"
                />
                <ContactInfo
                  icon={<Mail size={20} />}
                  title={t('contact.info.email')}
                
                  link="mailto:hello@nrthdigital.com"
                />
                <ContactInfo
                  icon={<Phone size={20} />}
                  title={t('contact.info.phone')}
                  link="tel:+4712345678"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-dark-200 rounded-lg overflow-hidden h-96">
            {/* This will be replaced with an actual map integration */}
            <div className="w-full h-full bg-dark-300 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{t('contact.location.findUs')}
                </h3>
                <p className="text-gray-400">{t('contact.location.address')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  detail: string;
  link?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, detail, link }) => {
  const content = (
    <>
      <div className="flex items-center mb-2">
        <span className="text-primary-500 mr-3">{icon}</span>
        <span className="text-gray-300">{title}</span>
      </div>
      <p className="text-gray-400 pl-8">{detail}</p>
    </>
  );

  if (link) {
    return (
      <a href={link} className="block hover:text-primary-400 transition-colors">
        {content}
      </a>
    );
  }

  return <div>{content}</div>;
};

export default ContactPage;