import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home } from 'lucide-react';
import Button from '../components/Button';

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      <h1 className="text-6xl md:text-8xl font-bold text-primary-500 mb-6">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Page Not Found</h2>
      <p className="text-gray-400 max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Button href="/" variant="primary" size="lg">
        <Home size={18} className="mr-2" />
        {t('navigation.home')}
      </Button>
    </div>
  );
};

export default NotFoundPage;