type Props = {
  from?: string;
  to?: string;
  flip?: boolean;
};

export default function WaveDivider({
  from = "#FFFFFF",
  to = "#FBF7EF",
  flip = false,
}: Props) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}
      style={{ background: to }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="relative block w-full h-[40px] sm:h-[60px] md:h-[80px]"
      >
        <path
          d="M0,32 C180,80 360,0 540,40 C720,80 900,10 1080,40 C1200,58 1320,20 1440,32 L1440,0 L0,0 Z"
          fill={from}
        />
      </svg>
    </div>
  );
}
