import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark-200 text-gray-400 py-12 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm">
              Innovative digital solutions for modern businesses.
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialLink href="#" icon={<Github size={18} />} />
              <SocialLink href="#" icon={<Twitter size={18} />} />
              <SocialLink href="#" icon={<Linkedin size={18} />} />
              <SocialLink href="#" icon={<Mail size={18} />} />
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="/services">Web Development</FooterLink>
              <FooterLink href="/services">Mobile Development</FooterLink>
              <FooterLink href="/services">AI Solutions</FooterLink>
              <FooterLink href="/services">Cloud Services</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/cases">Case Studies</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <address className="not-italic">
              <p>Oslo, Norway</p>
              <p className="mt-2">
                <a href="mailto:hello@nrthdigital.com" className="hover:text-primary-400 transition-colors">
                  hello@nrthdigital.com
                </a>
              </p>
              <p className="mt-2">
                <a href="tel:+4712345678" className="hover:text-primary-400 transition-colors">
                  +47 123 456 789
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-dark-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm hover:text-primary-400 transition-colors">
              {t('footer.links.privacy')}
            </Link>
            <Link to="/terms" className="text-sm hover:text-primary-400 transition-colors">
              {t('footer.links.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
  return (
    <a 
      href={href} 
      className="w-8 h-8 flex items-center justify-center rounded-full bg-dark-300 text-gray-400 hover:bg-primary-600 hover:text-white transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <li>
      <Link to={href} className="hover:text-primary-400 transition-colors">
        {children}
      </Link>
    </li>
  );
};

export default Footer;