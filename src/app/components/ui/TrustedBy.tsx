import Image from "next/image";

const TrustedBy = () => {
  return (
    <div className="flex items-center gap-[6px] w-[350px] h-[30px] border border-[#0000000D] rounded-[23px] px-[3px] py-[3px] pr-[9px] self-start md:self-center">
      <div className="flex -space-x-2">
        <Image
          src="/hero-avatar.svg"
          alt="Avatar 1"
          width={80}
          height={80}
          style={{ objectFit: "cover", width: "24px", height: "24px" }}
          className="rounded-full border-2 border-white"
        />
        <Image
          src="/hero-avatar.svg"
          alt="Avatar 2"
          width={80}
          height={80}
          style={{ objectFit: "cover", width: "24px", height: "24px" }}
          className="rounded-full border-2 border-white"
        />
        <Image
          src="/hero-avatar.svg"
          alt="Avatar 3"
          width={80}
          height={80}
          style={{ objectFit: "cover", width: "24px", height: "24px" }}
          className="rounded-full border-2 border-white"
        />
        <Image
          src="/hero-avatar.svg"
          alt="Avatar 4"
          width={80}
          height={80}
          style={{ objectFit: "cover", width: "24px", height: "24px" }}
          className="rounded-full border-2 border-white"
        />
      </div>
      <span className="text-[12px] text-gray-700 font-normal">
        Trusted by 1,200+ designers and developers.
      </span>
    </div>
  );
};

export default TrustedBy;
