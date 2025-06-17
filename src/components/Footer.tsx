import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Logo from './Logo';


const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark-200 text-gray-400 py-12 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm">
              {t('footer.text')}
            </p>

          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.sections.services')}</h3>
            <ul className="space-y-2">
              <FooterLink href="/services">{t('footer.services.web')}</FooterLink>
              <FooterLink href="/services">{t('footer.services.mobile')}</FooterLink>
              <FooterLink href="/services">{t('footer.services.ai')}</FooterLink>
              <FooterLink href="/services">{t('footer.services.cloud')}</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.sections.company')}</h3>
            <ul className="space-y-2">
              <FooterLink href="/about">{t('footer.company.about')}</FooterLink>
              <FooterLink href="/cases">{t('footer.company.cases')}</FooterLink>
              <FooterLink href="/contact">{t('footer.company.contact')}</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.sections.contact')}</h3>
            <address className="not-italic">
              <p>{t('footer.contactInfo.location')}</p>
              <p className="mt-2">
                <a href="mailto:post@nrthdigital.com" className="hover:text-primary-400 transition-colors">
                  thomas@nrth.no
                </a>
              </p>
              <p className="mt-2">
                <a href="tel:+4791130646" className="hover:text-primary-400 transition-colors">
                  +47 911 30 646
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