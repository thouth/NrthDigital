import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';
import { Home, Code, Users, Briefcase, Mail, Globe } from 'lucide-react';
import Logo from './Logo';

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex flex-col h-full w-64 bg-dark-200 text-gray-300 shadow-lg">
      {/* Logo */}
      <div className="p-6">
        <Logo />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 pt-8">
        <ul className="space-y-2">
          <NavItem to="/" icon={<Home size={20} />} label={t('navigation.home')} />
          <NavItem to="/services" icon={<Code size={20} />} label={t('navigation.services')} />
          <NavItem to="/about" icon={<Users size={20} />} label={t('navigation.about')} />
          <NavItem to="/cases" icon={<Briefcase size={20} />} label={t('navigation.cases')} />
          <NavItem to="/contact" icon={<Mail size={20} />} label={t('navigation.contact')} />
        </ul>
      </nav>

      {/* Language Switcher */}
      <div className="p-6 border-t border-dark-300">
        <div className="flex items-center space-x-2 mb-2">
          <Globe size={16} className="text-gray-400" />
          <span className="text-sm text-gray-400">Language</span>
        </div>
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              language === 'en'
                ? 'bg-primary-600 text-white'
                : 'bg-dark-300 text-gray-300 hover:bg-dark-400'
            }`}
            onClick={() => changeLanguage('en')}
          >
            English
          </button>
          <button
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              language === 'no'
                ? 'bg-primary-600 text-white'
                : 'bg-dark-300 text-gray-300 hover:bg-dark-400'
            }`}
            onClick={() => changeLanguage('no')}
          >
            Norsk
          </button>
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center px-4 py-3 rounded-lg transition-colors ${
            isActive
              ? 'bg-primary-600 text-white'
              : 'text-gray-300 hover:bg-dark-300'
          }`
        }
      >
        <span className="mr-3">{icon}</span>
        <span className="font-medium">{label}</span>
      </NavLink>
    </li>
  );
};

export default Sidebar;