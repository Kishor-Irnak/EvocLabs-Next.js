import Image from "next/image";
import bgImage from "../public/assets/problem-bg.png";

export default function ProblemStatement() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black overflow-hidden p-6">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Background"
        fill
        className="object-cover opacity-80"
        priority
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/5 z-0" />

      <div className="max-w-[460px] relative z-10">
        <p className="font-serif text-3xl text-white leading-snug tracking-tight">
          Launching a Brand
          <br />
          Shouldn’t Cost You Before Your First Order.
        </p>
      </div>
    </div>
  );
}
