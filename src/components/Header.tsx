import { useRouter } from 'next/router';
import Logo from './Logo';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();

  return (
    <div className="w-full border-b border-border/40">
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="cursor-pointer" onClick={() => router.push("/")}>
          <Logo />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="/#screenshots" className="text-sm font-medium hover:text-primary transition-colors">
            Screenshots
          </Link>
          <Link href="/#faq" className="text-sm font-medium hover:text-primary transition-colors">
            FAQ
          </Link>
          <Link href="/user-manual" className="text-sm font-medium hover:text-primary transition-colors">
            User Manual
          </Link>
          <Link href="/#pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="/#disclaimer" className="text-sm font-medium hover:text-primary transition-colors">
            Risk Disclaimer
          </Link>
          <Link href="mailto:jacob@wetradelabs.com?subject=StratGen&body=Hey%2C%20I%20am%20interested%20in%20StratGen%20and%20wanted%20to%20know%20more!" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;