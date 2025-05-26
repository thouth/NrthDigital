import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  href, 
  onClick, 
  className = '',
  type = 'button'
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-100';
  
  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 active:bg-secondary-800',
    outline: 'bg-transparent border border-gray-600 text-gray-300 hover:bg-dark-300 hover:text-white'
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };
  
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  if (href) {
    return (
      <Link to={href} className={styles}>
        {children}
      </Link>
    );
  }
  
  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default Button;