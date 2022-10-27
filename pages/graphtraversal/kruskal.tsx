import ContentLayout from '../../components/ContentLayout';
import Heading from '../../components/ContentLayout/Heading';

const Kruskal = () => {
  return (
    <ContentLayout>
      <Heading title="Kruskal's Algorithm" />
      <Heading subHeading title="Facts">
        <ul>
          <li>Greedy.</li>
          <li>Finds a minimum spanning tree (MST).</li>
          <li>Selects edges in order of increasing weight.</li>
          <li>Can support negative weights.</li>
        </ul>
      </Heading>
    </ContentLayout>
  );
};

export default Kruskal;
