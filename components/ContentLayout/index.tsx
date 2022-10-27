import { Box, CSSObject, List, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React, { Children, cloneElement, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import useDebounce from '../../hooks/UseDebounce';
import useCategoryContext from '../../state/contexts/CategoryContext';
import { getChildren, isComponent } from '../Utilities';
import Heading, { HeadingProps } from './Heading';

const typographyStyle: CSSObject = {
  fontSize: '0.9rem',
  cursor: 'pointer',
  mb: 0.5,
  borderLeft: `1px solid transparent`,
  '&:hover': {
    color: grey[500],
    borderColor: grey[500],
  },
};

const ContentLayout = ({ children }: { children?: ReactNode }) => {
  const [currentId, setCurrentId] = useState('');
  const { current: category } = useCategoryContext();
  const activeTypographyStyle = useMemo<CSSObject>(
    () => ({
      color: category.colour,
      borderColor: category.colour,
      '&:hover': {
        borderColor: grey[500],
      },
    }),
    [category.colour],
  );

  const getId = useCallback((props: HeadingProps): string => {
    return props.id ?? props.title.replaceAll(/\s+/g, '-').toLowerCase();
  }, []);

  const getChildHeadings = useCallback((): HeadingProps[] => {
    return getChildren(children)
      .filter((c) => c.type === Heading)
      .map((c) => c.props as HeadingProps);
  }, [children]);

  const determineCurrentHeaderId = useCallback(() => {
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

    for (const id of getChildHeadings().map(getId)) {
      const element = document.getElementById(id);
      if (!element) continue;

      const rect = element.getBoundingClientRect();
      if (rect.bottom >= 0 && rect.top - viewHeight < 0) {
        setCurrentId(id);
        return;
      }
    }
    setCurrentId('');
  }, [setCurrentId, getChildHeadings, getId]);

  useEffect(() => {
    determineCurrentHeaderId();

    const handleScroll = () => {
      determineCurrentHeaderId();
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [determineCurrentHeaderId]);

  const scrollIntoView = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView();
  }, []);

  const renderChildren = useCallback((): ReactNode => {
    const allIds: string[] = [];

    const renderedChildren = Children.map(children, (c) => {
      if (isComponent(Heading, c) && !c.props.id) {
        const id = getId(c.props);
        allIds.push(id);
        return cloneElement(c, { ...c.props, id });
      }
      return c;
    });
    return renderedChildren;
  }, [children, getId]);

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
    [getId, currentId, activeTypographyStyle, scrollIntoView],
  );

  const renderContents = useCallback((): ReactNode => {
    const headings = getChildHeadings();

    if (headings.length === 0) return null;

    return (
      <List
        sx={{ position: 'fixed', right: '64px', width: '200px', display: { md: 'block', xs: 'none' } }}
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
    <Box display="flex" flexDirection="row" my={4}>
      <Stack spacing={1} width="100%" mr={{ xs: 0, md: '264px' }} px={8}>
        {renderChildren()}
      </Stack>
      {renderContents()}
    </Box>
  );
};

export default ContentLayout;
