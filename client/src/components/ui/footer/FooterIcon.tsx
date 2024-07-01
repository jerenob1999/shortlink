import React, { ReactNode } from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';


interface Props {
  href: string
  icon: string | IconType
}

function FooterIcon({ href, icon: Icon }: Props) {

  return (
    <Link target="_blank" href={href}>
      <Icon/>
    </Link>
  );
}

export default FooterIcon;