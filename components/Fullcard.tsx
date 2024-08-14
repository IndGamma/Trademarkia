import React from 'react';
import MarkCard from './card'; // Ensure the import path is correct

type FullcardProps = {
  data: any; // Adjust the type according to your data
};

const Fullcard: React.FC<FullcardProps> = ({ data }) => {
  return (
    <div>
      <MarkCard data={data} />
    </div>
  );
};

export default Fullcard;
