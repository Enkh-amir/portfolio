import { RowText } from "./Row";
import { WorkCard } from "./WorkPageCard";

export const WorkPage = () => {
  return (
    <div id="work" className="flex w-[full] dark:bg-[#030712] justify-center">
      <div className="flex flex-col lg:py-[96px] py-16 lg:px-[112px] px-4 justify-center w-[1440px] gap-12">
        <div className="flex flex-col items-center gap-4 ">
          <RowText text={"Work"} />
          <div className="text-[#4B5563] dark:text-[#D1D5DB] font-normal text-[20px] ">
            Some of the noteworthy projects I have built:
          </div>
        </div>
        <div className="w-100% flex flex-col items-center gap-12">
          <WorkCard
            title={"Makima"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
            }
            image={
              "https://pbs.twimg.com/media/GRHwJuBboAAtYr2?format=jpg&name=medium"
            }
          />
          <WorkCard
            title={"Kobeni"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
            }
            image={
              "https://pbs.twimg.com/media/GVEMebNaEAE50Nu?format=jpg&name=medium"
            }
          />
          <WorkCard
            title={"Yoru"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
            }
            image={
              "https://pbs.twimg.com/media/GTxXOvebwAAAjLx?format=jpg&name=medium"
            }
          />
        </div>
      </div>
    </div>
  );
};
