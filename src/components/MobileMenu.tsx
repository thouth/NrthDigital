import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';
import { Home, Code, Users, Briefcase, Mail, Globe } from 'lucide-react';
import Logo from './Logo';

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = (lang: 'en' | 'no') => {
    changeLanguage(lang);
    onClose();
  };

  return (
    <div className="flex flex-col h-full p-6">
      <div className="mb-8">
        <Logo />
      </div>

      <nav className="flex-1">
        <ul className="space-y-4">
          <MobileNavItem to="/" icon={<Home size={24} />} label={t('navigation.home')} onClick={onClose} />
          <MobileNavItem to="/services" icon={<Code size={24} />} label={t('navigation.services')} onClick={onClose} />
          <MobileNavItem to="/about" icon={<Users size={24} />} label={t('navigation.about')} onClick={onClose} />
          <MobileNavItem to="/cases" icon={<Briefcase size={24} />} label={t('navigation.cases')} onClick={onClose} />
          <MobileNavItem to="/contact" icon={<Mail size={24} />} label={t('navigation.contact')} onClick={onClose} />
        </ul>
      </nav>

      <div className="mt-8 pt-8 border-t border-dark-300">
        <div className="flex items-center space-x-2 mb-4">
          <Globe size={20} className="text-gray-400" />
          <span className="text-gray-400">Language</span>
        </div>
        <div className="flex space-x-3">
          <button
            className={`px-4 py-2 rounded-md transition-colors ${
              language === 'en'
                ? 'bg-primary-600 text-white'
                : 'bg-dark-300 text-gray-300 hover:bg-dark-400'
            }`}
            onClick={() => handleLanguageChange('en')}
          >
            English
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors ${
              language === 'no'
                ? 'bg-primary-600 text-white'
                : 'bg-dark-300 text-gray-300 hover:bg-dark-400'
            }`}
            onClick={() => handleLanguageChange('no')}
          >
            Norsk
          </button>
        </div>
      </div>
    </div>
  );
};

interface MobileNavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({ to, icon, label, onClick }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center py-4 transition-colors ${
            isActive ? 'text-primary-500' : 'text-gray-300'
          }`
        }
        onClick={onClick}
      >
        <span className="mr-4">{icon}</span>
        <span className="text-lg font-medium">{label}</span>
      </NavLink>
    </li>
  );
};

export default MobileMenu;