import React from 'react';
import CaseStudyCard from './CaseStudyCard';

interface CaseStudy {
    image:string,
    title: string,
    category:string,
    categoryDisplay:string,
    description:string,
    index?:number,
}

interface Props {
    cases: CaseStudy[];
}


const CaseStudyCarousel: React.FC<Props> = ({ cases }) => {
    const slides = [];
    for ( let i = 0; i < cases.length; i += 2) {
        slides.push(cases.slice(i, i + 2));
    }

    return(
        <div className="w-full overflow-hidden">
      <p className="flex items-center gap-2 text-sm text-gray-300 mb-4 sm:hidden px-6">
        <span>Swipe to view more case studies</span>
        <span className="text-black text-lg">➡️</span>
      </p>

      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-2 scroll-smooth">
        {slides.map((pair, index) => (
          <div
            key={index}
            className="snap-center shrink-0 w-full max-w-[400px] bg-dark-900 rounded-lg shadow-lg"
          >
            {pair.map((study, idx) => (
                <CaseStudyCard
                image={study.image}
                title={study.title}
                category={study.categoryDisplay}
                description={study.description}
                index={index * 2 + idx}
                    />
                ))}
            </div>
            ))}
        </div>
    </div>
    );
};

export default CaseStudyCarousel;