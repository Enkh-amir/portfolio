import { LiItem } from "./LiItem";
import { UpworkLogo } from "./svg/UpworkLogo";

export const UpWorkCard = ({ title, date }) => {
  return (
    <div className="lg:w-[70%] p-8 flex lg:flex-row flex-col  rounded-xl bg-[#FFFFFF] dark:bg-[#1F2937] shadow-md justify-between gap-4 ">
      <div className="flex lg:flex-col w-[206px] items-start ">
        <UpworkLogo />
      </div>
      <div className="flex flex-col gap-[12px]">
        <div className="text-[16px] lg:hidden flex font-normal leading-6 dark:text-[#D1D5DB] text-[#374151] ">
          {date}
        </div>
        <div className="text-xl font-semibold dark:text-[#F9FAFB] text-[#111827] ">{title}</div>
        <ul className="list-disc list-inside lg:max-w-96 flex flex-col gap-y-1">
          <LiItem
            liItem={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          />
          <LiItem
            liItem={"Ut pretium arcu et massa semper, id fringilla leo semper."}
          />
          <LiItem
            liItem={"Ut pretium arcu et massa semper, id fringilla leo semper."}
          />
          <LiItem 
            liItem={"Ut pretium arcu et massa semper, id fringilla leo semper."}
          />
        </ul>
      </div>
      <div className="text-[16px] hidden lg:flex font-normal leading-6 dark:text-[#D1D5DB] text-[#374151] ">
        {date}
      </div>
    </div>
  );
};
