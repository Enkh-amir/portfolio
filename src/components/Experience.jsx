import { RowText } from "./Row";
import { UpWorkCard } from "./UpWork";

export const ExperiencePage = () => {
  return (
    <div className="flex w-[full] dark:bg-[#111827] bg-[#F9FAFB] justify-center">
      <div
        id="experience"
        className="flex flex-col items-center lg:py-[96px] py-16 lg:px-[112px] px-4 justify-
 self-stretch lg:w-[1440px] lg:gap-12 gap-6"
      >
        <div className="flex flex-col gap-4">
          <RowText text={"Experience"} />
          <div className="text-[#4B5563] dark:text-[#D1D5DB] font-normal lg:text-[20px] ">
            Here is a quick summary of my most recent experiences:
          </div>
        </div>
        <UpWorkCard
          date={"Nov 2021 - Present"}
          title={"Sr. Frontend Developer"}
        />
        <UpWorkCard date={"Jul 2017 - Oct 2021"} title={"Team Lead"} />
        <UpWorkCard
          date={"Dec 2015 - May 2017"}
          title={"Full Stack Developer"}
        />
      </div>
    </div>
  );
};
