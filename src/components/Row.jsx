export const RowText = ({ text }) => {
  return (
    <div className="flex justify-center w-[100%] ">
      <div className="flex w-[max-content] px-5 py-1 justify-center items-center rounded-xl dark:bg-[#374151] bg-[#E5E7EB] text-[#4B5563] dark:text-[#D1D5DB] text-[14px] ">
        {text}
      </div>
    </div>
  );
};

export const SingleTittleText = ({ text }) => {
  return (
    <div className="flex w-[max-content] px-5 py-1 justify-center items-center rounded-xl dark:bg-[#374151] bg-[#E5E7EB] text-[#4B5563] dark:text-[#D1D5DB] text-[14px] ">
      {text}
    </div>
  );
};
