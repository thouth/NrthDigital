import React from "react";
import { useTranslation } from "react-i18next"; 

interface Step {
    number: string;
    title: string;
    description: string;
}

const ProcessCarousel: React.FC = () => {
  const { t } = useTranslation();

  const steps: Step[] = [
      {
          number:"01", 
          title: t('services.process.discover.title'),
          description: t('services.process.discover.description'),
      },
      {
          number:"02", 
          title:t('services.process.planning.title'),
          description:t('services.process.planning.description'),
      },
      {
          number:"03", 
          title:t('services.process.design.title'), 
          description:t('services.process.design.description'),
      },
      {
          number:"04", 
          title:t('services.process.development.title'),
          description:t('services.process.development.description'),
      },
      {
          number:"05", 
          title:t('services.process.testing.title'), 
          description:t('services.process.testing.description'),
      },
      {
          number:"06", 
          title:t('services.process.deployment.title'), 
          description:t('services.process.deployment.description'),
      },
  ];


    return (
      <div className="w-full overflow-hidden">
        {/* ✅ Text should show on all screen sizes now */}
        <p className="text-sm text-white-400 mb-4 px-0 sm:hidden">
          <span>Swipe to move between steps</span>
        </p>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-2 scroll-smooth">
          {steps.map((step, i) => (
            <div
              key={i}
              className="snap-center shrink-0 w-full max-w-[400px] bg-dark-900 rounded-lg p-6 shadow-lg min-h-[200px] flex flex-col justify-between"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-primary-700 rounded-full text-white flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
                <h4 className="text-white text-sm font-semibold">{step.title}</h4>
              </div>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default ProcessCarousel;
               