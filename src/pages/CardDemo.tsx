// src/pages/CardDemo.tsx
import React from 'react';
import Card from '../components/Card';
import reactIconUrl from '../assets/react.svg';

const CardDemo: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center gap-6">
      <h1 className="text-3xl font-semibold mb-6">Card Component Demo</h1>

      {/* 1. Card with icon on top */}
      <Card
        title="Card Title Top Icon"
        body="This is the body text of the card component with icon on top."
        icon={<img src={reactIconUrl} alt="React Icon" className="w-10 h-10" />}
        iconPosition="top"
      />

      {/* 2. Card with icon on the left */}
      <Card
        title="Card Title Left Icon"
        body="This is the body text of the card component with icon on the left."
        icon={<img src={reactIconUrl} alt="React Icon" className="w-10 h-10" />}
        iconPosition="left"
      />

      {/* 3. Card without icon */}
      <Card
        title="Card Title No Icon"
        body="This is the body text of the card component with no icon."
      />
    </div>
  );
};

export default CardDemo;
