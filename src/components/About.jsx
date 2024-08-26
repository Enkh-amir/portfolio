import { RowText } from "./Row";

export const AboutPage = () => {
  return (
    <div id="about" className="flex w-[full] dark:bg-[#111827] bg-[#F9FAFB] justify-center">
      <div
        className="flex flex-col  lg:py-[96px] py-16 lg:px-[112px] px-4
    lg:items-start items-center self-stretch lg:w-[1440px] gap-12"
      >
        <RowText text={"About me"} />
        <div className="flex lg:flex-row lg:items-start items-center flex-col gap-12">
          <div className="relative top-6 lg:mr-[6vw] lg:min-w-[440px] ">
            <img
              className="absolute lg:left-10 bottom-5 left-5 border-8 rounded-3xl dark:border-[#111827] border-[#F9FAFB] z-20 lg:w-[400px] w-[280px] lg:h-[480px] h-[380px] object-cover"
              src="https://pbs.twimg.com/media/GP6oYxDasAABYZe?format=jpg&name=900x900"
              alt=""
            />
            <div className="rounded-3xl top-10 lg:w-[400px] w-[320px] lg:h-[480px] h-[360px] dark:bg-[#374151] bg-[#E5E7EB] z-10 "></div>
          </div>
          <div className="flex flex-col gap-6 lg:max-w-[40vw] ">
            <div className="text-[30px] dark:text-[#F9FAFB] font-semibold ">
              Curious about me? Here you have it:
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-[16px] font-normal font-inter text-[#4B5563] dark:text-[#D1D5DB] ">
                I'm a designer turned full stack developer, passionate about
                React.js and Node.js. I excel in blending technical and visual
                aspects to craft exceptional digital products, prioritizing user
                experience, precise design, and optimized code.
              </div>
              <div className="text-[16px] font-normal text-[#4B5563] dark:text-[#D1D5DB] ">
                Since starting my web development journey in 2015, I've embraced
                challenges and kept up with the latest tech trends. Now in my
                early thirties, seven years in, I'm building cutting-edge web
                apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase,
                and more.
              </div>
              <div className="text-[16px] font-normal text-[#4B5563] dark:text-[#D1D5DB] ">
                With a progressive mindset, I enjoy the entire product
                development process, from ideation to execution. Off duty,
                you'll find me on Twitter, tracking startup journeys, or
                unwinding. Follow me for tech insights and public project
                updates on Twitter or GitHub.
              </div>
              <div className="text-[16px] font-normal text-[#4B5563] dark:text-[#D1D5DB] ">
                Finally, some quick bits about me.
              </div>
              <div className="flex gap-[10px] ">
                <div className="lg:w-[50%]">
                  <ul className="list-disc list-inside gap-y-4 text-[16px] font-normal dark:text-[#D1D5DB] text-[#4B5563]  ">
                    <li>B.E. in Computer Engineering</li>
                    <li>Full time freelancer</li>
                  </ul>
                </div>
                <div className="lg:w-[50%]">
                  <ul className="list-disc list-inside text-[16px] font-normal dark:text-[#D1D5DB] text-[#4B5563]  ">
                    <li>Avid learner</li>
                  </ul>
                </div>
              </div>
              <div className="text-[16px] font-normal text-[#4B5563] dark:text-[#D1D5DB] ">
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
