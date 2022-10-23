import { Box, Typography } from '@mui/material';
import ContentLayout from '../../components/ContentLayout';
import Heading from '../../components/ContentLayout/Heading';

const DataStructures = () => {
  return (
    <ContentLayout>
      <Heading title="This is a heading" />
      Hi!
      <Box height="600px">Another child</Box>
      <Heading title={'This is a subheading'} subHeading />
      <Box height="600px" />
      <Heading title={'One more subheading'} subHeading />
    </ContentLayout>
  );
};

export default DataStructures;
