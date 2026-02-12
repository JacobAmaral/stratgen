import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="relative h-10 w-40">
      <Image 
        src="/stratgen_manual_images/logo.png"
        alt="StratGen automated trading strategy generator logo"
        fill
        style={{ objectFit: 'contain' }}
        priority
      />
    </div>
  );
};

export default Logo;