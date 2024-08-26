import { RenderIcons } from "./RenderIcons";
import { RowText } from "./Row";
import {
  CypressIcon,
  ExpressIcon,
  FigmaIcon,
  GitIcon,
  JsIcon,
  MongoDb,
  NestJsIcon,
  NextIcon,
  NodeJsIcon,
  ReactIcon,
  SassIcon,
  SocketIoIcon,
  StoryBook,
  TailWindIcon,
  TsIcon,
} from "./SkillsIcons";

export const SkillsPage = () => {
  return (
    <div id="skills" className="flex w-[full] dark:bg-[#030712] justify-center">
      <div className="flex-col flex lg:py-[96px] py-16 lg:px-[112px] px-4  justify-center self-stretch lg:w-[1440px] lg:gap-12 gap-6">
        <div className="flex flex-col items-center gap-4 ">
          <RowText text={"Skills"} />
          <div className="text-[#4B5563] font-normal text-[20px] dark:text-[#D1D5DB] ">
            The skills, tools and technologies I am really good at:
          </div>
        </div>
        <div className="flex flex-col lg:gap-12 gap-6">
          <div className="grid grid-cols-3 lg:gap-y-12 gap-y-4 lg:grid-cols-8 justify-between items-center ">
            <RenderIcons text={"Javascript"} icon={<JsIcon />} />
            <RenderIcons text={"Javascript"} icon={<ReactIcon />} />
            <RenderIcons text={"TypeScript"} icon={<TsIcon />} />
            <RenderIcons text={"Next.js"} icon={<NextIcon />} />
            <RenderIcons text={"Node.js"} icon={<NodeJsIcon />} />
            <RenderIcons text={"Express.js"} icon={<ExpressIcon />} />
            <RenderIcons text={"Nest.js"} icon={<NestJsIcon />} />
            <RenderIcons text={"Socket.js"} icon={<SocketIoIcon />} />
            <RenderIcons text={"Socket.js"} icon={<MongoDb />} />
            <RenderIcons text={"Socket.js"} icon={<SassIcon />} />
            <RenderIcons text={"Socket.js"} icon={<TailWindIcon />} />
            <RenderIcons text={"Socket.js"} icon={<FigmaIcon />} />
            <RenderIcons text={"Socket.js"} icon={<CypressIcon />} />
            <RenderIcons text={"Socket.js"} icon={<StoryBook />} />
            <RenderIcons text={"Socket.js"} icon={<GitIcon />} />
          </div>
        </div>
      </div>
    </div>
  );
};
