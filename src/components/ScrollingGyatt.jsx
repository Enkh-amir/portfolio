export const HeaderButton = (header) => {
  const { text, textType, click } = header;
  return (
    <a
      href={textType}
      className="text-base not-italic font-medium dark:text-[#D1D5DB] text-gray-600"
      onClick={click}
    >
      {text}
    </a>
  );
};
