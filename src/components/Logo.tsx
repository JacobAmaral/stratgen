import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="relative h-10 w-40">
      <Image 
        src="https://assets.co.dev/dc630d7c-c620-481b-9ee9-1959feae8edc/newlogo2ext-94a7d0c.png"
        alt="StratGen automated trading strategy generator logo"
        fill
        style={{ objectFit: 'contain' }}
        priority
      />
    </div>
  );
};

export default Logo;