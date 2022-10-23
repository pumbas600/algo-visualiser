import { Box, CSSObject, List, Stack, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Children, cloneElement, ReactNode, useCallback, useEffect, useState } from 'react';
import { getChildren, isComponent } from '../Utilities';
import Heading, { HeadingProps } from './Heading';

interface HeadingGroup {
  heading: HeadingProps | null;
  subHeadings: HeadingProps[];
}

const typographyStyle: CSSObject = {
  cursor: 'pointer',
  borderLeft: `1px solid transparent`,
  '&:hover': {
    color: grey[500],
    borderColor: grey[500],
  },
};

const activeTypographyStyle: CSSObject = {
  color: blue[500],
  borderColor: blue[500],
};

const ContentLayout = ({ children }: { children?: ReactNode }) => {
  const [currentId, setCurrentId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash;
      console.log(hash);
      if (hash.length === 0) {
        setCurrentId(hash);
      } else {
        setCurrentId(hash.substring(1));
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getId = useCallback((props: HeadingProps): string => {
    return props.id ?? props.title.replaceAll(/\s+/g, '-').toLowerCase();
  }, []);

  const scrollIntoView = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView();
  }, []);

  const renderChildren = useCallback((): ReactNode => {
    return Children.map(children, (c) => {
      if (isComponent(Heading, c) && !c.props.id) {
        const id = getId(c.props);
        return cloneElement(c, { ...c.props, id });
      }

      return c;
    });
  }, [children, getId]);

  const getChildHeadings = useCallback((): HeadingProps[] => {
    return getChildren(children)
      .filter((c) => c.type === Heading)
      .map((c) => c.props as HeadingProps);
  }, [children]);

  const renderHeading = useCallback(
    (heading: HeadingProps) => {
      const id = getId(heading);
      const inSection = id === currentId;

      const styles = {
        ...typographyStyle,
        ...(inSection ? activeTypographyStyle : {}),
        pl: heading.subHeading ? 4 : 2,
      };

      return (
        <Typography key={id} sx={styles} onClick={() => scrollIntoView(id)}>
          {heading.title}
        </Typography>
      );
    },
    [getId, currentId, scrollIntoView],
  );

  const renderContents = useCallback((): ReactNode => {
    const headings = getChildHeadings();

    return (
      <List
        sx={{ position: 'fixed', top: '32px', right: '64px' }}
        subheader={
          <Typography fontFamily="monospace" fontWeight="bold" color={grey[500]} mb={1} pl={2}>
            CONTENTS
          </Typography>
        }
      >
        {headings.map(renderHeading)}
      </List>
    );
  }, [getChildHeadings, renderHeading]);

  return (
    <Box display="flex" flexDirection="row" mx={8} my={4} gap={2} justifyContent="space-between">
      <Stack spacing={1}>{renderChildren()}</Stack>
      {renderContents()}
    </Box>
  );
};

export default ContentLayout;
