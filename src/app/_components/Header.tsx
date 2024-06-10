import React from 'react';
import { Navigation, NavigationItem, NavigationContent } from "@/components/ui/navigation";
import { Path } from '@/types/links';

const paths = [
  { 
    title: 'Login',
    href: Path.LOGIN,
  },
  { 
    title: 'Sign up',
    href: Path.SIGNUP,
  },
];

function Header() {
  return (
    <Navigation className='h-4'>
      <NavigationContent className='bg-transparent h-20'>
        <div className='flex justify-end h-full'>
          <li className='list-none flex justify-center items-center'>
            {paths
              .map(path => 
                <ul className='rounded-lg' key={path.href}>
                  <NavigationItem 
                    href={path.href} 
                    title={path.title}
                    className='p-4 font-semibold text-slate-800 hover:text-blue-400'
                  />
                </ul>,
              )
            }
          </li>
        </div>
      </NavigationContent>
    </Navigation>
  );
}

export default Header;