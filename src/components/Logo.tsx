import React from 'react';
import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <Code2 size={32} className="text-primary-500" />
      <div className="text-xl font-bold">
        <span className="text-white">Nrth</span>
        <span className="text-primary-500">Digital</span>
      </div>
    </Link>
  );
};

export default Logo;