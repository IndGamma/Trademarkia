import React from 'react';
import Link from 'next/link';
import { global } from 'styled-jsx/css';
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
    <Link href={`/details?data=${serializedData}`} className="block no-underline">
      <div className="grid grid-cols-4 bg-white shadow-md rounded-lg hover:bg-gray-500">
        {/* Leftmost section: Logo */}
        <div className="flex items-center justify-center col-span-1">
          <div className="w-30 h-30 bg-gray-100 flex items-center justify-center rounded-lg">
          <svg width="166" height="128" viewBox="0 0 166 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_16_32)">
<rect width="158" height="120" rx="12" transform="matrix(1 0 0 -1 4 120)" fill="white"/>
<path d="M104.303 29.0001C104.303 29 104.303 29 104.303 29H56.8971C56.4486 29 56 29.374 56 29.8971V86.0513C56 86.4999 56.374 86.9485 56.8971 86.9485L87.0305 86.949C87.3293 86.949 87.5541 86.575 87.4044 86.2761C84.3386 81.341 84.5629 74.8359 88.5258 70.0505C89.3483 69.0037 90.3205 68.1812 91.3673 67.4332C91.7413 67.2089 91.517 66.6852 91.143 66.6852L60.1872 66.6858C60.1126 66.6858 60.0375 66.6112 60.0375 66.5361V32.8136C60.0375 32.739 60.1121 32.6639 60.1872 32.6639H100.938C101.013 32.6639 101.088 32.7385 101.088 32.8136V64.7415V64.7415C101.088 65.1379 101.66 65.1387 102.049 65.2151C102.9 65.3821 103.751 65.6479 104.602 66.0126C104.901 66.1623 105.201 65.938 105.201 65.6386V29.8973C105.201 29.3743 104.827 29.0004 104.304 29.0002C104.304 29.0002 104.303 29.0002 104.303 29.0001V29.0001Z" fill="#C8C8C8"/>
<path d="M104.303 29.0001C104.303 29 104.303 29 104.303 29H56.8971C56.4486 29 56 29.374 56 29.8971V86.0513C56 86.4999 56.374 86.9485 56.8971 86.9485L87.0305 86.949C87.3293 86.949 87.5541 86.575 87.4044 86.2761C84.3386 81.341 84.5629 74.8359 88.5258 70.0505C89.3483 69.0037 90.3205 68.1812 91.3673 67.4332C91.7413 67.2089 91.517 66.6852 91.143 66.6852L60.1872 66.6858C60.1126 66.6858 60.0375 66.6112 60.0375 66.5361V32.8136C60.0375 32.739 60.1121 32.6639 60.1872 32.6639H100.938C101.013 32.6639 101.088 32.7385 101.088 32.8136V64.7415V64.7415C101.088 65.1379 101.66 65.1387 102.049 65.2151C102.9 65.3821 103.751 65.6479 104.602 66.0126C104.901 66.1623 105.201 65.938 105.201 65.6386V29.8973C105.201 29.3743 104.827 29.0004 104.304 29.0002C104.304 29.0002 104.303 29.0002 104.303 29.0001V29.0001Z" fill="#C8C8C8"/>
<path d="M78.1884 50.0151C76.6443 48.471 76.6443 45.9676 78.1884 44.4235V44.4235C79.7325 42.8794 82.2359 42.8794 83.78 44.4235L84.7837 45.4272C86.3278 46.9713 86.3278 49.4747 84.7837 51.0188V51.0188C83.2396 52.5629 80.7362 52.5629 79.1921 51.0188L78.1884 50.0151Z" fill="#C8C8C8"/>
<path d="M84.2147 56.3534C83.7329 56.8351 82.9518 56.8351 82.47 56.3534C81.9882 55.8716 81.9882 55.0905 82.47 54.6087L88.3749 48.7037C88.8567 48.222 89.6378 48.222 90.1196 48.7037C90.6014 49.1855 90.6014 49.9666 90.1196 50.4484L84.2147 56.3534Z" fill="#C8C8C8"/>
<path d="M74.597 46.7356C74.1152 47.2173 73.3341 47.2173 72.8523 46.7356C72.3705 46.2538 72.3705 45.4727 72.8523 44.9909L78.7572 39.0859C79.239 38.6042 80.0201 38.6042 80.5019 39.0859C80.9837 39.5677 80.9837 40.3488 80.5019 40.8306L74.597 46.7356Z" fill="#C8C8C8"/>
<path d="M77.393 50.5162C77.7512 50.1579 78.332 50.158 78.6903 50.5162V50.5162C79.0485 50.8744 79.0485 51.4553 78.6903 51.8135L69.9445 60.5588C69.5862 60.9171 69.0026 60.9143 68.6444 60.556C68.4652 60.3768 68.377 60.1436 68.377 59.9089C68.377 59.674 68.468 59.4407 68.6472 59.2615L77.393 50.5162Z" fill="#C8C8C8"/>
<path d="M79.852 60.8155C77.7412 60.8155 76.3548 58.3824 78.4656 58.3824V58.3824H90.2109V58.3824C92.3218 58.3824 90.9355 60.8155 88.8246 60.8155H79.852Z" fill="#C8C8C8"/>
<path d="M106.322 70.3493C101.611 66.461 94.5821 67.1343 90.6942 71.8446C86.8059 76.5554 87.4793 83.5842 92.1895 87.4721C96.9003 91.3604 103.929 90.6871 107.817 85.9768C111.705 81.2665 111.033 74.2378 106.322 70.3493ZM104.228 72.8915C104.228 72.8914 104.228 72.8915 104.228 72.8915C106.995 75.1348 107.817 78.9479 106.396 82.0883C106.322 82.238 106.097 82.3126 105.948 82.1629L94.8068 72.9666C94.6571 72.8169 94.6571 72.5926 94.8068 72.518C97.6483 70.5737 101.462 70.6487 104.228 72.8914C104.228 72.8914 104.228 72.8915 104.228 72.8915V72.8915ZM94.2833 85.005C94.2833 85.005 94.2833 85.005 94.2833 85.005C91.5168 82.7617 90.6944 78.9486 92.1152 75.8081C92.1897 75.6584 92.414 75.5838 92.5637 75.7335L103.78 84.9304C103.929 85.0801 103.929 85.3044 103.78 85.379C100.938 87.3229 97.0504 87.2483 94.2834 85.005C94.2834 85.005 94.2833 85.005 94.2833 85.005V85.005Z" fill="#C8C8C8"/>
</g>
<defs>
<filter id="filter0_d_16_32" x="0" y="0" width="166" height="128" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.368627 0 0 0 0 0.368627 0 0 0 0 0.368627 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_32"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_32" result="shape"/>
</filter>
</defs>
</svg>



          </div>
        </div>
        {/* Middle section: Trademark details */}
        <div className="col-span-2 ">
          <h2 className="font-bold text-sm text-black">{search_bar.mark_identification}</h2>
          <p className="text-black">{search_bar.owner}</p>
          <p className="text-black font-bold">{registration_number}</p>
          <p className="text-black">{new Date(registration_date * 1000).toLocaleDateString()}</p>
        </div>
        {/* Rightmost section: Status and classes */}
        <div className="col-span-1 flex flex-col justify-between">
          <div className="flex items-center space-x-2 mb-2">
            <span
              className={`${status_type === 'registered' ? 'text-green-600' : 'text-red-600'
                } font-bold text-sm`}
            >
              ● {status_type === 'registered' ? 'Live / Registered' : 'Inactive / Expired'}
            </span>
            <p className="text-black font-bold text-sm">on {new Date(registration_date * 1000).toLocaleDateString()}</p>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <p className="text-black text-sm"><svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.0308 10.7612C14.0227 10.7887 14.0143 10.8072 14.0055 10.8166C13.2175 12.1903 12.1259 13.1705 10.7308 13.7572C9.33566 14.3439 7.88277 14.4148 6.37209 13.9699C5.56713 13.7328 4.83301 13.3518 4.16974 12.8269C3.50647 12.302 2.96269 11.6715 2.53839 10.9354L1.15732 11.688C1.02171 11.7619 0.882234 11.7778 0.738885 11.7355C0.595536 11.6933 0.486911 11.6044 0.413009 11.4688C0.339107 11.3332 0.323267 11.1937 0.365487 11.0504L1.45672 7.34534C1.49894 7.20199 1.58785 7.09336 1.72346 7.01946C1.85907 6.94556 1.99855 6.92972 2.1419 6.97194L5.84692 8.06317C5.99027 8.10539 6.09889 8.1943 6.1728 8.32991C6.2467 8.46552 6.26254 8.605 6.22032 8.74835C6.1781 8.8917 6.08918 9.00032 5.95357 9.07422L4.48686 9.87353C4.77114 10.3527 5.13216 10.7646 5.5699 11.1092C6.00765 11.4539 6.49393 11.7049 7.02873 11.8625C7.76753 12.0801 8.50948 12.1039 9.25459 11.9339C9.9997 11.7638 10.6578 11.4214 11.2288 10.9066C11.3171 10.8307 11.5582 10.5512 11.9521 10.068C12.0336 9.95423 12.135 9.91518 12.2563 9.9509L13.8441 10.4186C13.9158 10.4397 13.9701 10.4841 14.0071 10.5519C14.044 10.6198 14.0519 10.6895 14.0308 10.7612ZM16.1862 4.20595L15.095 7.91097C15.0528 8.05432 14.9639 8.16295 14.8282 8.23685C14.6926 8.31075 14.5532 8.32659 14.4098 8.28437L10.7048 7.19314C10.5614 7.15092 10.4528 7.062 10.3789 6.9264C10.305 6.79079 10.2892 6.65131 10.3314 6.50796C10.3736 6.36461 10.4625 6.25598 10.5981 6.18208L12.0756 5.37694C11.482 4.38127 10.6312 3.72024 9.52298 3.39384C8.78418 3.17625 8.04223 3.15245 7.29712 3.32246C6.55201 3.49246 5.89393 3.83489 5.32287 4.34975C5.23461 4.42562 4.99351 4.70512 4.59956 5.18826C4.51811 5.30208 4.41673 5.34113 4.29543 5.3054L2.64968 4.82068C2.578 4.79957 2.52369 4.75511 2.48674 4.68731C2.44979 4.61951 2.44187 4.54977 2.46298 4.47809L2.48003 4.4202C3.2736 3.04815 4.37069 2.06958 5.77131 1.48449C7.17194 0.899396 8.63035 0.830129 10.1465 1.27669C10.9515 1.51377 11.6893 1.89736 12.3601 2.42745C13.0308 2.95753 13.5791 3.58788 14.0051 4.31849L15.3944 3.56829C15.53 3.49439 15.6695 3.47855 15.8128 3.52077C15.9562 3.56299 16.0648 3.65191 16.1387 3.78752C16.2126 3.92312 16.2284 4.0626 16.1862 4.20595Z" fill="#EC4A4A" />
            </svg>
            </p>
            <p className="text-gray-600 font-bold text-sm">{new Date(renewal_date * 1000).toLocaleDateString()}</p>
          </div>
          <div className="space-y-2">
            <div>
              <p className="text-black text-sm">{shortDescription}</p>
            </div>
            {class_codes.length > 0 && (
              <div className="space-y-1">
                {class_codes.map((code, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <i className="fas fa-gavel text-black"><svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3535 10.1218L15.5293 5.61839L16.0585 5.87407C16.4331 6.05504 16.8835 5.89808 17.0645 5.52351C17.2454 5.14891 17.0885 4.69851 16.7139 4.51754C16.5365 4.43181 9.52726 1.04538 9.0317 0.805952C8.65713 0.624983 8.20672 0.781945 8.02576 1.15651C7.84479 1.53108 8.00175 1.98148 8.37632 2.16245L8.90553 2.41814L6.72974 6.92159C-0.231682 7.56705 -2.11465 17.1719 4.35274 20.2965C10.8288 23.4254 17.1741 15.9749 13.3535 10.1218ZM7.24151 8.39842C7.52139 8.38916 7.77301 8.22537 7.89482 7.97325L10.262 3.07357L14.1727 4.96298L11.8055 9.86266C11.6837 10.1148 11.7118 10.4137 11.8784 10.6387C13.0548 12.2269 13.189 13.8731 12.8169 15.2646L8.51577 13.1866C8.80534 12.4928 8.50396 11.683 7.81896 11.352L4.02486 9.51896C4.83805 8.88053 5.90103 8.44287 7.24151 8.39842ZM5.00813 18.94C1.58416 17.2857 1.09516 13.3112 2.94218 10.669L7.09449 12.6752C6.80492 13.3689 7.1063 14.1788 7.7913 14.5097L12.2403 16.6592C10.8616 19.0657 7.91467 20.3443 5.00813 18.94Z" fill="#575757" />
                    </svg>
                    </i>
                    <p className="text-black text-sm">Class {code}</p>
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
