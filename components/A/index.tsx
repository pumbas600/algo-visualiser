import Link from 'next/link';
import { ReactNode } from 'react';
import useCategoryContext from '../../state/contexts/CategoryContext';

interface InlineLinkProps {
  href: string;
  children?: ReactNode;
}

const InlineLink = ({ href, children }: InlineLinkProps) => {
  const category = useCategoryContext();

  return (
    <Link href={href}>
      <a style={{ color: category.current.colour, textDecoration: 'underline' }}>{children}</a>
    </Link>
  );
};

export default InlineLink;
