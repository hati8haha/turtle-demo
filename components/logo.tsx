const Logo = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-[6px]">
      <div className="h-2 w-2 rounded-tl border-solid border-t-2 border-l-2 border-[#161616]"></div>
      <div className="h-2 w-2 rounded-tr border-solid border-t-2 border-r-2 border-[#161616]"></div>
      <div className="h-2 w-2 rounded-bl border-solid border-b-2 border-l-2 border-[#161616]"></div>
      <div className="h-2 w-2 rounded-br border-solid border-b-2 border-r-2 border-[#161616]"></div>
    </div>
  );
};

export default Logo;
