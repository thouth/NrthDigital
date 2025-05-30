import React from 'react';
import ServiceCard from './ServiceCard';
import { useTranslation } from 'react-i18next';

interface Service {
    title:string;
    description:string;
    icon: React.ReactNode;
}

interface Props {
    services: Service[];
}


const ServiceCarousel: React.FC<Props> = ({services}) => {
  const { t } = useTranslation();
    const slides = [];
    for (let i = 0; i < services.length; i += 2) {
    slides.push(services.slice(i, i + 2));
    }

    return (
    <div className="w-full overflow-hidden">
      <p className="flex items-center gap-2 text-sm text-gray-300 mb-4 sm:hidden px-6">
        <span>{t('services.process.mobileswipe')}</span>
        <span className="text-black text-lg">➡️</span>
      </p>

      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-2 scroll-smooth">
        {slides.map((pair, index) => (
          <div
            key={index}
            className="snap-center shrink-0 w-full max-w-[600px] flex flex-col gap-4"
          >
            {pair.map((service, i) => (
              <ServiceCard
                key={i}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index * 2 + i}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;