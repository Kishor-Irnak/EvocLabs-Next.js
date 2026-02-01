"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BlurText from "./BlurText";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "JERRY WAKO",
    role: "CMO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "STEVE MICHEALS",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "ANNIE BADEJO",
    role: "COO",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
];

const Team: React.FC = () => {
  // Duplicate members for infinite scroll effect on mobile
  const infiniteTeamMembers = [
    ...teamMembers,
    ...teamMembers,
    ...teamMembers,
    ...teamMembers,
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="secondary"
              className="gap-2 bg-primary/10 border-primary/20 text-primary text-xs font-mono uppercase tracking-wider"
            >
              <Users className="w-3 h-3" />
              <span>The Leadership</span>
            </Badge>
          </motion.div>

          <BlurText
            text="Meet The Team"
            className="text-4xl md:text-5xl font-bold text-text-main tracking-tight"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-muted max-w-2xl text-lg"
          >
            The minds ensuring we never settle for average.
          </motion.p>
        </div>

        {/* Desktop Grid (Hidden on Mobile) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start justify-center">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={`${member.name}-desktop`}
              member={member}
              index={index}
            />
          ))}
        </div>

        {/* Mobile Auto-Scrolling Carousel (Visible on Mobile) */}
        <div className="md:hidden relative w-full overflow-hidden">
          {/* Gradient Masks for smooth fade edges */}
          <div className="absolute top-0 left-0 w-12 h-full z-10 bg-linear-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-12 h-full z-10 bg-linear-to-l from-background to-transparent pointer-events-none" />

          <div className="flex w-max animate-scroll-mobile gap-6 pl-4">
            {infiniteTeamMembers.map((member, index) => (
              <div
                key={`${member.name}-mobile-${index}`}
                className="w-[280px] shrink-0"
              >
                <TeamCard member={member} index={index} isMobile />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-mobile {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-mobile {
          animation: scroll-mobile 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

const TeamCard = ({
  member,
  index,
  isMobile = false,
}: {
  member: TeamMember;
  index: number;
  isMobile?: boolean;
}) => (
  <motion.div
    initial={!isMobile ? { opacity: 0, y: 20 } : undefined}
    whileInView={!isMobile ? { opacity: 1, y: 0 } : undefined}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15, duration: 0.6 }}
    className="relative group mx-auto w-full"
  >
    {/* Image Container */}
    <div className="relative aspect-3/4 w-full rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 shadow-xl">
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-20 group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity" />
    </div>

    {/* Floating Name Card */}
    <div className="absolute bottom-6 -left-4 md:-left-6 right-8 bg-[#3b82f6] p-5 rounded-lg shadow-2xl backdrop-blur-md border border-white/10 group-hover:translate-x-2 transition-transform duration-300 overflow-hidden">
      {/* Inner Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-blue-700 opacity-100 rounded-lg -z-10" />

      <h3 className="text-white font-bold text-lg uppercase tracking-wider">
        {member.name}
      </h3>
      <p className="text-blue-100/90 text-sm font-medium mt-1">{member.role}</p>
    </div>
  </motion.div>
);

export default Team;
