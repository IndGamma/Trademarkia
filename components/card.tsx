import React from 'react';
import Link from 'next/link';

type MarkData = {
  _id: string;
  _index: string;
  _score: number;
  sort: [string, number, number];
  _source: {
    registration_number: string;
    registration_date: number;
    filing_date: number;
    status_date: number;
    renewal_date: number;
    date_type: string;
    status_code: number;
    status_type: string;
    search_bar: {
      attorneys: string;
      law_firm: string;
      mark_identification: string;
      owner: string;
    };
    starting_letter: {
      attorney: string;
      law_firm: string;
      mark_name: string;
      owner: string;
    };
    mark_identification: string;
    law_firm: string;
    law_firm_cleaned: string;
    attorney_name: string;
    attorney_name_cleaned: string;
    current_owner: string;
    current_owner_cleaned: string;
    mark_description_code: string[];
    mark_description_description: string[];
    first_use_anywhere_date: number;
    class_codes: string[];
    country: string;
    owner_location: {
      lat: number;
      lon: number;
    };
    mark_status_key: number;
  };
};

type MarkCardProps = {
  data: MarkData;
};

// Utility function to truncate description to a maximum of `maxWords` words
const truncateDescription = (description: string[], maxWords: number) => {
  const descriptionText = description.join(' ');
  const words = descriptionText.split(' ');
  const limitedWords = words.slice(0, maxWords);
  return limitedWords.join(' ') + (words.length > maxWords ? '...' : '');
};

const MarkCard: React.FC<MarkCardProps> = ({ data }) => {
  // Check if _source is defined before destructuring
  const { _source } = data || {};
  const {
    registration_number = '',
    status_type = 'inactive',
    registration_date = 0,
    renewal_date = 0,
    search_bar = { mark_identification: '', owner: '' },
    class_codes = [],
    mark_description_description = []
  } = _source || {};

  // Truncate description to 20 words
  const shortDescription = truncateDescription(mark_description_description, 20);

  // Serialize data to query string
  const serializedData = encodeURIComponent(JSON.stringify(data));

  return (
    <Link href={`/details?data=${serializedData}`} className="block">
      <div className="grid grid-cols-4 gap-4 p-4 bg-white shadow-md rounded-lg">
        {/* Leftmost section: Logo */}
        <div className="flex items-center justify-center col-span-1">
          <div className="w-16 h-16 bg-gray-100 flex items-center justify-center rounded-lg">
            {/* SVG logo here */}
          </div>
        </div>

        {/* Middle section: Trademark details */}
        <div className="col-span-2">
          <h2 className="font-semibold text-lg">{search_bar.mark_identification}</h2>
          <p className="text-gray-600">{search_bar.owner}</p>
          <p className="text-gray-500">{registration_number}</p>
          <p className="text-gray-500">{new Date(registration_date * 1000).toLocaleDateString()}</p>
        </div>

        {/* Rightmost section: Status and classes */}
        <div className="col-span-1 flex flex-col justify-between">
          <div className="flex items-center space-x-2 mb-2">
            <span
              className={`text-${status_type === 'registered' ? 'green' : 'red'}-600 font-medium`}
            >
              ● {status_type === 'registered' ? 'Live / Registered' : 'Inactive / Expired'}
            </span>
            <p className="text-gray-500">on {new Date(registration_date * 1000).toLocaleDateString()}</p>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <p className="text-gray-600">Expires on</p>
            <p className="text-red-600 font-medium">{new Date(renewal_date * 1000).toLocaleDateString()}</p>
          </div>
          <div className="space-y-2">
            <div>
              <p className="text-gray-600 text-sm">{shortDescription}</p>
            </div>
            {class_codes.length > 0 && (
              <div className="space-y-1">
                {class_codes.map((code, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <i className="fas fa-gavel text-gray-600"></i>
                    <p className="text-gray-600">Class {code}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MarkCard;
