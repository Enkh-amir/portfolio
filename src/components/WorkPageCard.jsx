import { SingleTittleText } from "./Row";

export const WorkCard = ({ image, title, content }) => {
  return (
      <div className="lg:w-[95%]  flex lg:flex-row flex-col rounded-xl justify-center shadow-md bg-[#FFF] dark:bg-[#1f2937] ">
        <div className="flex lg:p-12 p-8 lg:rounded-[12px_0px_0px_12px] rounded- justify-center items-center lg:rounded-tl-xl rounded-t-xl dark:bg-[#374151] bg-[rgb(243,244,246)] lg:w-[50%] object-cover ">
          <img className=" w-[100%] rounded-xl shadow-lg " src={image} alt="" />
        </div>
        <div className="p-12 flex flex-col items-start gap-6 lg:w-[50%]">
          <div className="text-xl dark:text-[#F9FAFB] font-semibold text-[#111827] ">
            {title}
          </div>

          <div className="leading-6 text-[16px] font-normal text-[#4B5563] dark:text-[#D1D5DB] ">
            {content}
          </div>
          <div className="flex items-center content-center gap-2 flex-wrap ">
            <SingleTittleText text={"React"} />
            <SingleTittleText text={"Next.js"} />
            <SingleTittleText text={"Typescript"} />
            <SingleTittleText text={"Nest.js"} />
            <SingleTittleText text={"PostgreSQL"} />
            <SingleTittleText text={"Tailwindcss"} />
            <SingleTittleText text={"Figma"} />
            <SingleTittleText text={"Cypress"} />
          </div>
          <button className="mt-8 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 3H21V9"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 14L21 3"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
  );
};
