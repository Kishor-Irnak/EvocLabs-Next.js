"use client";

import React from "react";
import { FaqItem } from "@/lib/types";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs: FaqItem[] = [
  {
    question: "What is Evoc Labs?",
    answer:
      "Evoc Labs is a performance-driven eCommerce technology company that helps brands grow profitably by managing checkout, orders, ads, operations, and insights from one unified ecosystem.",
  },
  {
    question: "What pricing model does Evoc Labs follow?",
    answer:
      "No subscription. No service fee. Only 4% commission on delivered orders. Zero charges on RTO or failed deliveries.",
  },
  {
    question: "What kind of brands can use Evoc Labs?",
    answer:
      "Evoc Labs is built for: D2C brands, COD-heavy businesses, Dropshipping & hybrid brands, Shopify-based stores, and brands looking to scale profitably.",
  },
  {
    question: "Does Evoc Labs integrate with Shopify?",
    answer:
      "Yes. Evoc Labs integrates seamlessly with Shopify and related tools to streamline your entire tech stack.",
  },
  {
    question: "Will Evoc Labs help reduce RTO?",
    answer:
      "Yes. Our systems are built to reduce fake orders, improve order confirmation, and optimize COD performance through proprietary data models.",
  },
  {
    question: "Is Evoc Labs suitable for new brands?",
    answer:
      "Yes. It’s especially useful for new brands that want to grow without burning money on fixed costs and expensive retainers.",
  },
];

interface FAQProps {
  title?: string;
  description?: string;
  items?: FaqItem[];
}

const FAQ: React.FC<FAQProps> = ({
  title = "Frequently Asked Questions",
  description = "Everything you need to know about scaling with the Profit Engine™.",
  items = faqs,
}) => {
  return (
    <section
      id="faq"
      className="container border-x overflow-hidden max-w-7xl z-20 border-white/10 border-b mx-auto py-24 px-6 bg-[#020202]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Headers */}
        <div>
          <div className="inline-flex items-center justify-center px-3 py-1 mb-6 border border-zinc-500/30 bg-zinc-500/10 text-zinc-300 text-[10px] font-medium tracking-widest uppercase font-mono">
            Support Protocol
          </div>
          <h2 className="text-5xl md:text-6xl font-oswald uppercase tracking-tight leading-[0.9] text-white mb-8">
            Common <span className="text-zinc-500">Queries</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-sm">
            {description}
          </p>
        </div>

        {/* Right: FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-2">
            {items.map((faq, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className="border border-white/5 bg-zinc-900/10 rounded-xl px-2 transition-all hover:bg-zinc-900/20 data-[state=open]:border-white/10 data-[state=open]:bg-zinc-900/30 overflow-hidden"
              >
                <AccordionTrigger className="text-left py-6 px-4 hover:no-underline text-base font-medium text-zinc-400 data-[state=open]:text-white transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-6 pt-0 text-zinc-500 leading-relaxed text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
