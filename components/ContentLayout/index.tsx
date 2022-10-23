import { Box, CSSObject, List, Stack, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Children, cloneElement, ReactNode, useCallback, useEffect } from 'react';
import { getChildren, isComponent } from '../Utilities';
import Heading, { HeadingProps } from './Heading';

interface HeadingGroup {
  heading: HeadingProps | null;
  subHeadings: HeadingProps[];
}

const typographyStyle: CSSObject = {
  cursor: 'pointer',
  borderLeft: `1px solid transparent`,
  pl: 2,
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
  const router = useRouter();

  useEffect(() => {
    console.log(window.location.pathname + window.location.hash);
  }, []);

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

  const isEmptyGroup = useCallback((group: HeadingGroup): boolean => {
    return group.heading !== null || group.subHeadings.length !== 0;
  }, []);

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
        if (!isEmptyGroup(currentGroup)) {
          groups.push(currentGroup);
          currentGroup = emptyGroup;
        }
        currentGroup.heading = heading;
      }
    });
    if (!isEmptyGroup(currentGroup)) {
      groups.push(currentGroup);
    }

    return groups;
  }, [getChildHeadings, isEmptyGroup]);

  const renderSubHeadings = useCallback(
    (subHeadings: HeadingProps[]) => {
      return subHeadings.map((heading) => {
        const id = getId(heading);

        return (
          <Link key={id} href={`${router.pathname}/#${id}`}>
            <Typography sx={{ ...typographyStyle, pl: 4 }}>{heading.title}</Typography>
          </Link>
        );
      });
    },
    [getId, router.pathname],
  );

  const renderHeadingGroup = useCallback(
    (group: HeadingGroup, index: number): ReactNode => {
      return (
        <Box key={index} width="200px">
          {group.heading && (
            <Link href={`${router.pathname}/#${getId(group.heading)}`}>
              <Typography sx={typographyStyle}>{group.heading.title}</Typography>
            </Link>
          )}
          {group.subHeadings.length !== 0 && <List>{renderSubHeadings(group.subHeadings)}</List>}
        </Box>
      );
    },
    [router.pathname, getId, renderSubHeadings],
  );

  const renderContents = useCallback((): ReactNode => {
    const groups = getHeadingGroups();

    return (
      <List
        sx={{ position: 'fixed', top: '32px', right: '64px' }}
        subheader={
          <Typography fontFamily="monospace" fontWeight="bold" color={grey[500]} mb={1} pl={2}>
            CONTENTS
          </Typography>
        }
      >
        {groups.map((group, index) => renderHeadingGroup(group, index))}
      </List>
    );
  }, [getHeadingGroups, renderHeadingGroup]);

  return (
    <Box display="flex" flexDirection="row" mx={8} my={4} gap={2} justifyContent="space-between">
      <Stack spacing={1}>{renderChildren()}</Stack>
      {renderContents()}
    </Box>
  );
};

export default ContentLayout;
