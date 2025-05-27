import React from "react";

interface Step {
    number: string;
    title: string;
    description: string;
}

const steps: Step[] = [
    {
        number:"01", 
        title:"Discovery", 
        description:"We start by understanding your business, goals, and requirements through in-depth consultations.",
    },
    {
        number:"02", 
        title:"Planning", 
        description:"Based on the discovery phase, we create a detailed plan including timelines, resources, and deliverables.",
    },
    {
        number:"03", 
        title:"Design", 
        description:"Our designers create wireframes and visual designs that align with your brand and requirements.",
    },
    {
        number:"04", 
        title:"Development", 
        description:"Our development team brings the designs to life using the latest technologies and best practices.",
    },
    {
        number:"05", 
        title:"Testing", 
        description:"We thoroughly test all aspects of the solution to ensure quality and performance.",
    },
    {
        number:"06", 
        title:"Deployment & Support", 
        description:"After successful testing, we deploy the solution and provide ongoing support and maintenance.",
    },
];

const ProcessCarousel: React.FC = () => {
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
               