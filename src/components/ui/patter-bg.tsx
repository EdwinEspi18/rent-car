export default function PatternBg() {
  return (
    <>
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] -z-50 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(44,66,120,.4),rgba(255,255,255,0))]" />
      <div className="absolute bottom-0 right-[-20%] top-[-10%] -z-50 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(44,66,120,.4),rgba(255,255,255,0))]" />
      <div className="absolute bottom-0 left-0 right-0 top-0 -z-50 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" /> */}
    </>
  );
}
