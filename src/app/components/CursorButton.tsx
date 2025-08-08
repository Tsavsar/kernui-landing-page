"use client";

interface CursorButtonProps {
  text: string;
  backgroundColor?: string;
  arrowColor?: string;
  className?: string;
}

const CursorButton = ({
  text,
  backgroundColor = "#171717",
  arrowColor = "#FFFFFF",
  className = "",
}: CursorButtonProps) => {
  const cursorSize = 20;

  return (
    <div className={`relative ${className}`}>
      {/* Cursor using public SVG with CSS mask to allow coloring */}
      <div
        className="absolute -top-4 -left-4"
        style={
          {
            width: cursorSize,
            height: cursorSize,
            backgroundColor: arrowColor,
            WebkitMaskImage: "url(/Cursor.svg)",
            maskImage: "url(/Cursor.svg)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            transform: "rotate(-12deg)",
            transformOrigin: "top left",
          } as React.CSSProperties
        }
      />

      <div
        className="flex items-center justify-center w-[119px] h-[40px] rounded-[24px]"
        style={{ backgroundColor }}
      >
        <span className="text-white text-sm font-medium">{text}</span>
      </div>
    </div>
  );
};

export default CursorButton;
