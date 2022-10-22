import { Box, Stack } from '@mui/material';
import React, { Children, cloneElement, ReactElement, ReactNode, useCallback } from 'react';
import { getChildren, isComponent } from '../Utilities';
import Heading, { HeadingProps } from './Heading';

const ContentLayout = ({ children }: { children?: ReactNode }) => {
  const getId = useCallback((title: string) => {
    return title.replaceAll(/\s+/g, '-').toLowerCase();
  }, []);

  const renderChildren = useCallback((): ReactNode => {
    return Children.map(children, (c) => {
      if (isComponent(Heading, c) && !c.props.id) {
        const id = getId(c.props.title);
        return cloneElement(c, { ...c.props, id });
      }

      return c;
    });
  }, [children, getId]);

  const getChildHeadings = useCallback((): ReactElement<HeadingProps>[] => {
    return getChildren(children)
      .filter((c) => c.type === Heading)
      .map((c) => c as ReactElement<HeadingProps>);
  }, [children]);

  return (
    <Stack mx={8} my={4} spacing={1}>
      {renderChildren()}
    </Stack>
  );
};

export default ContentLayout;
