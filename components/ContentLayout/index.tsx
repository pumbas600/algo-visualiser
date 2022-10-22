import { Box, Stack } from '@mui/material';
import React, { Children, cloneElement, ReactElement, ReactNode, useCallback } from 'react';
import { getChildren, isComponent } from '../Utilities';
import Heading, { HeadingProps } from './Heading';

interface HeadingGroup {
  heading: HeadingProps | null;
  subHeadings: HeadingProps[];
}

const ContentLayout = ({ children }: { children?: ReactNode }) => {
  const getId = useCallback((props: HeadingProps): string => {
    return props.id ?? props.title.replaceAll(/\s+/g, '-').toLowerCase();
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

  const getHeadingGroups = useCallback((): HeadingGroup[] => {
    const headings = getChildHeadings();
    const groups: HeadingGroup[] = [];
    const emptyGroup = {
      heading: null,
      subHeadings: [],
    };

    let currentGroup: HeadingGroup = emptyGroup;

    headings.forEach((heading) => {
      if (heading.subHeading) {
        currentGroup.subHeadings.push(heading);
      } else {
        if (currentGroup !== emptyGroup) {
          groups.push(currentGroup);
          currentGroup = emptyGroup;
        }
        currentGroup.heading = heading;
      }
    });

    if (currentGroup !== emptyGroup) {
      groups.push(currentGroup);
    }

    return groups;
  }, [getChildHeadings]);

  const renderContent = useCallback((): ReactNode => {
    const groups = getHeadingGroups();

    return null;
  }, [getHeadingGroups]);

  return (
    <Stack mx={8} my={4} spacing={1}>
      {renderChildren()}
    </Stack>
  );
};

export default ContentLayout;
