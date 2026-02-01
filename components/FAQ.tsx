"use client";

import React from "react";
import { FaqItem } from "@/lib/types";
import { motion } from "framer-motion";
import BlurText from "./BlurText";
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
  title = "Frequently asked questions",
  description = "Everything you need to know about working with us.",
  items = faqs,
}) => {
  return (
    <section id="faq" className="py-24 bg-background relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <BlurText
            text={title}
            className="text-3xl md:text-5xl font-semibold mb-4 text-text-main tracking-tight"
          />
          <div className="mt-4">
            <BlurText
              text={description}
              className="text-text-muted inline-block"
              delay={0.2}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {items.map((faq, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className="border-none bg-surface/30 rounded-xl px-2 transition-all hover:bg-surface/50 border border-transparent data-[state=open]:border-border data-[state=open]:bg-surface"
              >
                <AccordionTrigger className="text-left py-6 px-4 hover:no-underline text-lg font-medium text-text-secondary data-[state=open]:text-text-main">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-6 pt-0 text-text-muted leading-relaxed text-base">
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
