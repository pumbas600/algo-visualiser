import { Typography } from '@mui/material';

export interface HeadingProps {
  title: string;
  subHeading?: boolean;
  id?: string;
}

const Heading = ({ title, subHeading, id }: HeadingProps) => {
  return (
    <Typography id={id} variant={subHeading ? 'h5' : 'h4'} fontWeight={subHeading ? undefined : 'bold'}>
      {title}
    </Typography>
  );
};

export default Heading;
