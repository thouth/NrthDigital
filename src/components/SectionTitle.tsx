import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  description?: string;
  center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, description, center = false }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      <h2 className="text-3xl font-bold mb-4 text-white">
        {title}
      </h2>
      {description && (
        <p className="text-gray-400 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;