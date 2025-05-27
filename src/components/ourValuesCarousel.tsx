import React from 'react';
import { Sparkles, Code2, Share2 } from 'lucide-react';

interface Value {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const values: Value[] = [
    {
        icon: <Sparkles size={24} className="text-primary-500" />,
        title:'Innovation',
        description:'We strive to stay ahead by embracing new ideas and creative thinking.',
  },
  {
        icon: <Code2 size={24} className="text-primary-500" />,
        title:'Quality',
        description:'We are committed to delivering exceptional results with precision.',
  },
  {
        icon: <Share2 size={24} className="text-primary-500" />,
        title: 'Collaboration',
        description: 'Working together empowers us to achieve more.',
  },
];

const OurValuesCarousel: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Mobile-only swipe hint */}
      <p className="flex items-center gap-2 text-sm text-gray-300 mb-4 sm:hidden px-6">
        <span>Swipe to explore our values</span>
        <span className="text-black text-lg">➡️</span>
      </p>

      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-2 scroll-smooth">
        {values.map((value, i) => (
          <div
            key={i}
            className="snap-center shrink-0 w-full max-w-[400px] bg-dark-900 rounded-lg p-6 shadow-lg min-h-[180px] flex flex-col justify-between"
          >
            <div className="flex items-center gap-3 mb-3">
              <div>{value.icon}</div>
              <h4 className="text-white text-base font-semibold">{value.title}</h4>
            </div>
            <p className="text-gray-400 text-sm">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValuesCarousel;
