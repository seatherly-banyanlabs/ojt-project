import React from 'react';

interface CardProps {
  title: string;
  body: string;
  icon?: React.ReactNode;
  iconPosition?: 'top' | 'left';
}

const Card: React.FC<CardProps> = ({
  title,
  body,
  icon,
  iconPosition = 'top',
}) => {
  const isLeft = icon && iconPosition === 'left';

  return (
    <div
      className={`bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-md 
        ${isLeft ? 'flex items-center gap-4 text-left' : 'flex flex-col items-center text-center'}`}
    >
      {icon && (
        <div className={`${isLeft ? 'flex-shrink-0' : 'mb-4'}`}>
          {icon}
        </div>
      )}

      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-base font-normal text-gray-700">{body}</p>
      </div>
    </div>
  );
};

export default Card;
