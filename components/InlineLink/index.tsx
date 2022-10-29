import Link from 'next/link';
import { ReactNode } from 'react';
import { Link as MuiLink } from '@mui/material';

interface InlineLinkProps {
  href: string;
  children?: ReactNode;
}

const InlineLink = ({ href, children }: InlineLinkProps) => {
  return (
    <Link href={href}>
      <MuiLink>{children}</MuiLink>
    </Link>
  );
};

export default InlineLink;
