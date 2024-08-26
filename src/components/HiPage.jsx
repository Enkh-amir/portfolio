import { FigmaIcon } from "./svg/FigmaIcon";
import { GitIcon } from "./svg/GitIcon";
import { LocIcon } from "./svg/LocIcon";
import { TwitterIcon } from "./svg/TwitterIcon";

export const Hero = () => {
  return (
    <div id="hi_page" className="flex lg:w-[100%] dark:bg-[#030712] justify-center">
      <div className="lg:flex  lg:py-[96px] mt-14 py-16 lg:px-[112px] px-4 justify-items-start lg:self-stretch lg:w-[1440px] ">
        <div className="lg:flex flex flex-col-reverse lg:flex-row gap-12 lg:items-start  ">
          <div className="flex lg:max-w-[768px] flex-col  justify-center items-start gap-12 ">
            <div className="flex flex-wrap lg-gap-2 gap-12 flex-col">
              <div className="lg:text-[60px] text-[36px] dark:text-[#F9FAFB] lg-font-bold font-semibold ">
                Hi, I'm Amar👋
              </div>
              <div className="dark:text-[#D1D5DB]">
                I specialize in full stack development, particularly with
                React.js and Node.js. My main goal is to create exceptional
                digital experiences that are fast, visually appealing, and
                accessible to everyone. With over 4 months of experience in web
                development, I continue to find joy in crafting innovative
                solutions and designs.
              </div>
            </div>
            <div className="flex flex-col gap-2 items-start justify-center">
              <div className="flex dark:text-[#D1D5DB] items-center gap-2">
                <LocIcon /> Ulaanbaatar, Mongolia
              </div>
              <div className="flex dark:text-[#D1D5DB] items-center gap-2">
                <div className="w-2 h-2 m-[8px] rounded-[20px] bg-[#10B981]  "></div>{" "}
                Available for new projects
              </div>
            </div>
            <div className="flex gap-4">
              <GitIcon />
              <TwitterIcon />
              <FigmaIcon />
            </div>
          </div>
          <div className="flex justify-center lg:justify-end lg:min-w-[468px] z-10 relative">
            <img
              className="rounded-2xl lg:w-[280px] w-[240px] lg:h-[320px] h-[280px]  border-8 border-[#FFFFFF] dark:border-[#030712] shrink-0 lg:right-10 lg:bottom-0 bottom-5 absolute lg:static z-10  "
              src="https://pbs.twimg.com/media/GQezhFXaIAAKECF?format=jpg&name=medium"
              alt=""
            />
            <div className="bg-[#E5E7EB] dark:bg-[#374151] w-[280px] lg:h-[320px] h-[280px] lg:absolute z-[1]  top-5 lg:top-10 lg:left-[220px] rounded-2xl "></div>
          </div>
        </div>
      </div>
    </div>
  );
};
