const TrustedBy = () => {
  return (
    <div className="flex items-center gap-[6px] w-[350px] h-[30px] border border-[#0000000D] rounded-[23px] px-[3px] py-[3px] pr-[9px]">
      <div className="flex -space-x-2">
        <img
          src="/hero-avatar.svg"
          alt="Avatar 1"
          className="w-6 h-6 rounded-full border-2 border-white"
        />
        <img
          src="/hero-avatar.svg"
          alt="Avatar 2"
          className="w-6 h-6 rounded-full border-2 border-white"
        />
        <img
          src="/hero-avatar.svg"
          alt="Avatar 3"
          className="w-6 h-6 rounded-full border-2 border-white"
        />
        <img
          src="/hero-avatar.svg"
          alt="Avatar 4"
          className="w-6 h-6 rounded-full border-2 border-white"
        />
      </div>
      <span className="text-[12px] text-gray-700 font-normal">
        Trusted by 1,200+ designers and developers.
      </span>
    </div>
  );
};

export default TrustedBy;
