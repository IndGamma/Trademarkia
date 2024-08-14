import { GetServerSideProps } from 'next';
import Fullcard from '../components/Fullcard';

type Props = {
  data: any; // Adjust the type according to your data
};

const DetailsPage: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <Fullcard data={data} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = context.query; // Extract serialized data from query

  // If data is not available, handle it accordingly
  if (!data) {
    return {
      notFound: true,
    };
  }

  // Deserialize data
  let deserializedData;
  try {
    deserializedData = JSON.parse(decodeURIComponent(data as string));
  } catch (error) {
    console.error('Failed to deserialize data:', error);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: deserializedData,
    },
  };
};

export default DetailsPage;
