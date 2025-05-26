import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-dark-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-dark-300 hover:border-primary-500 group"
    >
      <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary-400 transition-colors duration-300">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;