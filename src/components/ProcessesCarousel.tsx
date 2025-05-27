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
        <div className="flex overflow-a-auto snap-x snap-mandatory gap-4 px-4 -mx-4 pb-2">
            {steps.map((step, i) => (
        <div
            key={i}
            className="min-w-[80%] snap-center bg-dark-900 rounded-lg p-5 shrink-0 shadow-lg"
        >
            <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-primary-700 rounded-full text-white flex items-center justify-center text-sm font-bold">
                    {step.number}
                </div>
                <h4 className="text-gray-400 text-sm">{step.title}</h4>
            </div>
            <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
            ))}
        </div>
    );
};

export default ProcessCarousel;
               