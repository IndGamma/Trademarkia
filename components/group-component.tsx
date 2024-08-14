import { useState } from "react";
import type { NextPage } from "next";

export type GroupComponentType = {
  className?: string;
  data: any;
  setData: any;
};

type SearchResult = {
  _id: string;
  _source: {
    mark_identification: string;
    current_owner: string;
    attorney_name: string;

  };
};

const GroupComponent: NextPage<GroupComponentType> = ({ className = "", data, setData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    // Construct the request object
    const requestBody = {
      input_query: searchQuery,
      input_query_type: "",
      sort_by: "default",
      status: [],
      exact_match: false,
      date_query: false,
      owners: [],
      attorneys: [],
      law_firms: [],
      mark_description_description: [],
      classes: [],
      page: 1,
      rows: 10,
      sort_order: "desc",
      states: [],
      counties: [],
    };

    try {
      const response = await fetch("https://vit-tm-task.api.trademarkia.app/api/v3/us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Uncomment the following line if an API key is required
          cors: "no-cors",
          // "Authorization": "Bearer YOUR_API_KEY",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data.body.hits.hits);
      if (data.body.hits && data.body.hits.hits) {
        setData(data.body.hits.hits);
      } else {
        setData([]);
      }
    
    } catch (error) {
      console.error("Error fetching search results:", error);
      setError("Failed to fetch search results. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <header
      className={`mr-[-30px] w-[1440px] bg-ghostwhite flex flex-col items-start justify-start pt-[15.5px] px-0 pb-[0.4px] box-border gap-[30.5px] max-w-[103%] shrink-0 text-left text-sm text-white font-questrial mq750:gap-[15px] ${className}`}
    >
      <div className="self-stretch h-[118px] relative bg-ghostwhite hidden" />
      <div className="w-[1419px] flex flex-row items-start justify-start py-0 px-[78px] box-border max-w-full mq1225:pl-[39px] mq1225:pr-[39px] mq1225:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq1225:flex-wrap">
          <div className="w-[795.5px] flex flex-col items-start justify-start pt-[1.3px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="flex flex-row items-start justify-start gap-[31px]">
                <div className="relative font-semibold z-[1]">
                  Call Us: 1-877-794-9511
                </div>
                <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[55px] z-[1]">
                  Email Us
                </a>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[49.3px] max-w-full mt-[-2.7px] mq750:flex-wrap mq450:gap-[25px]">
                <div className="w-[155.4px] flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border">
                  <img
                    className="self-stretch h-[21.9px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                    loading="lazy"
                    alt="Company Logo"
                    src="/logo@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-row items-start justify-start gap-3 min-w-[384px] max-w-full mq750:flex-wrap mq750:min-w-full">
                  <div className="flex-1 rounded-xl bg-white border-lightgray-100 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[7px] px-[15px] pb-2 gap-2 min-w-[292px] max-w-full z-[1]">
                    <div className="h-[50px] w-[454.8px] relative rounded-xl bg-white border-lightgray-100 border-[1px] border-solid box-border hidden max-w-full" />
                    <div className="h-[20.1px] w-[20.1px] relative overflow-hidden shrink-0 hidden" />
                    <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                        alt="Search Icon"
                        src="/akariconssearch.svg"
                      />
                    </div>
                    <input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-[268px] [border:none] [outline:none] font-medium font-questrial text-sm bg-[transparent] h-[31px] relative leading-[30.96px] text-dimgray-100 text-center flex items-center justify-center p-0 z-[1]"
                      placeholder="Search Trademark Here eg. Mickey Mouse"
                      type="text"
                    />
                  </div>
                  <button
                    onClick={handleSearch}
                    className="cursor-pointer [border:none] py-[9.5px] px-[35px] bg-tmo-blue rounded-xl flex flex-row items-start justify-start z-[1] hover:bg-cornflowerblue"
                  >
                    <a className="[text-decoration:none] w-[52px] relative text-base leading-[31px] font-bold font-questrial text-white text-center flex items-center justify-center min-w-[52px]">
                      Search
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <nav className="m-0 h-[17px] w-[301px] relative text-left text-sm text-white font-questrial">
            <a className="[text-decoration:none] absolute top-[0px] left-[0px] font-semibold text-[inherit] inline-block min-w-[54px] z-[1]">
              Services
            </a>
            <a className="[text-decoration:none] absolute top-[0px] left-[86px] font-semibold text-[inherit] inline-block min-w-[62px] z-[1]">
              Attorneys
            </a>
            <a className="[text-decoration:none] absolute top-[0px] left-[180px] font-semibold text-[inherit] inline-block min-w-[53px] z-[1]">
              Support
            </a>
            <a className="[text-decoration:none] absolute top-[0px] left-[265px] font-semibold text-[inherit] inline-block min-w-[36px] z-[1]">
              Login
            </a>
          </nav>
        </div>
      </div>
      <div className="self-stretch h-1.5 relative bg-aliceblue-200 z-[2]" />

    </header>
  );
};

export default GroupComponent;
