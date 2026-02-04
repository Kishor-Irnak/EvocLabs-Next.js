"use client";

import React, { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    budget: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError("");
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      budget: value,
    }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const formSubmissionData = {
        name: formData.name,
        email: formData.email,
        website: formData.website,
        budget: formData.budget,
        message: formData.message,
        formType: "contact",
        timestamp: serverTimestamp(),
        createdAt: new Date().toISOString(),
      };

      await addDoc(collection(db, "formSubmissions"), formSubmissionData);

      setIsSubmitted(true);

      const apiBase = "https://evoc-labz-backend.onrender.com";
      const apiUrl = `${apiBase}/api/book-demo`;

      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          workEmail: formData.email,
          website: formData.website,
          budget: formData.budget,
          goals: formData.message,
        }),
      }).catch((apiErr) => {
        console.warn("Background API submission error:", apiErr);
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="container border-x overflow-hidden max-w-7xl z-20 border-white/10 border-b mx-auto py-24 px-6 bg-[#020202]"
    >
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-6 border border-zinc-500/30 bg-zinc-500/10 text-zinc-300 text-[10px] font-medium tracking-widest uppercase font-mono">
            Origin Point
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-oswald uppercase tracking-tight leading-[0.9] text-white mb-10"
          >
            Ready to <span className="text-zinc-500">ignite</span> your growth?
          </motion.h2>

          <p className="text-zinc-400 text-lg mb-12 leading-relaxed max-w-md">
            Whether you're ready to scale aggressively or just need a second
            opinion on your current ad stack—we're here to help.
          </p>

          <div className="flex flex-col gap-6">
            {/* Calendly Widget Styled as a subtle box */}
            <div className="rounded-2xl border border-white/5 bg-[#050505] overflow-hidden shadow-2xl">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/connect-sociodesk/evoc-labz?hide_event_type_details=1&hide_gdpr_banner=1"
                style={{ minWidth: "320px", height: "500px" }}
              ></div>
            </div>

            <div className="flex items-center gap-3 text-zinc-500 text-sm font-mono uppercase tracking-widest mt-4">
              <Mail className="w-4 h-4" />
              <span>hello@evoclabs.com</span>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="relative pt-12 lg:pt-24">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-white/5 pointer-events-none" />

          <div className="p-8 border border-white/10 bg-zinc-900/10 backdrop-blur-sm rounded-none shadow-2xl relative">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-none p-3 text-red-500 text-xs font-mono">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-black border-white/10 rounded-none h-12 text-white placeholder:text-zinc-700"
                      placeholder="EX. JOHN DOE"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest"
                    >
                      Work Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-black border-white/10 rounded-none h-12 text-white placeholder:text-zinc-700"
                      placeholder="EX. JOHN@COMPANY.COM"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="website"
                      className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest"
                    >
                      Website
                    </Label>
                    <Input
                      id="website"
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      required
                      className="bg-black border-white/10 rounded-none h-12 text-white placeholder:text-zinc-700"
                      placeholder="HTTPS://WWW.DOMAIN.COM"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      Monthly Budget
                    </Label>
                    <Select
                      onValueChange={handleSelectChange}
                      value={formData.budget}
                      required
                    >
                      <SelectTrigger className="bg-black border-white/10 rounded-none h-12 text-white">
                        <SelectValue placeholder="SELECT RANGE" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0A0A0A] border-white/10 text-white rounded-none">
                        <SelectItem value="<1L">LESS THAN ₹1L</SelectItem>
                        <SelectItem value="1L-3L">₹1L – ₹3L</SelectItem>
                        <SelectItem value="3L-5L">₹3L – ₹5L</SelectItem>
                        <SelectItem value="5L+">₹5L+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest"
                    >
                      Growth Goals
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-black border-white/10 rounded-none min-h-[120px] text-white placeholder:text-zinc-700"
                      placeholder="TELL US ABOUT YOUR SCALING GOALS..."
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-white hover:bg-zinc-200 text-black font-bold h-14 rounded-none transition-all uppercase tracking-widest text-xs"
                >
                  {isLoading ? "PROCESSSING..." : "Request Access"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            ) : (
              <div className="h-[400px] flex flex-col items-center justify-center text-center">
                <CheckCircle className="w-12 h-12 text-emerald-500 mb-6" />
                <h3 className="text-2xl font-oswald text-white uppercase tracking-tight mb-2">
                  Request Received
                </h3>
                <p className="text-zinc-500 text-sm mb-8 max-w-[200px]">
                  We've received your details and will be in touch shortly.
                </p>
                <Button
                  variant="link"
                  onClick={() => setIsSubmitted(false)}
                  className="text-zinc-400 uppercase text-[10px] tracking-widest"
                >
                  Send Another
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
