import Image from "next/image";
import problemBg from "../public/assets/problem-bg.png";

export default function ProblemStatement() {
  return (
    <div className="relative z-10 flex min-h-screen items-center justify-center bg-[#08070b] p-6 overflow-hidden">
      {/* Background Image */}
      <Image
        src={problemBg}
        alt="Background"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="max-w-[460px] relative z-10">
        <p className="font-serif text-3xl text-white leading-snug tracking-tight">
          Built for speed, optimized for conversions,
          <br />
          designed to scale your business.
        </p>
      </div>
    </div>
  );
}
