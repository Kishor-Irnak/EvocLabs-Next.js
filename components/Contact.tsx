"use client";

import React, { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import BlurText from "./BlurText";
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
      // Save to Firebase Firestore
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

      // Track Meta Pixel Contact event
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Contact", {
          content_name: "Contact Form",
          value: 0,
          currency: "INR",
        });
      }

      // Show success state immediately after Firebase save
      setIsSubmitted(true);

      // Secondary API call
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
      className="relative min-h-screen flex items-center py-12 lg:py-0 bg-background overflow-hidden"
    >
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      {/* Optional: Subtle Background Gradient Blob for Premium feel */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border w-fit mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">
                Get Started
              </span>
            </div>

            <div className="mb-6">
              <BlurText
                text="Ready to ignite your growth?"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main tracking-tight leading-[1.1]"
              />
            </div>

            <p className="text-text-muted text-lg mb-10 leading-relaxed max-w-md">
              Whether you're ready to scale aggressively or just need a second
              opinion on your current ad stack — we're here to help.
            </p>

            {/* Calendly Inline Widget */}
            <div className="rounded-3xl border border-border bg-white overflow-hidden shadow-2xl shadow-primary/5">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/connect-sociodesk/evoc-labz?hide_event_type_details=1&hide_gdpr_banner=1"
                style={{ minWidth: "320px", height: "500px" }}
              ></div>
            </div>

            <div className="mt-8 flex items-center gap-3 text-text-muted text-sm font-medium">
              <Mail className="w-4 h-4" />
              <span>hello@evoclabs.com</span>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Form Container */}
            <div className="p-6 mt-12 md:p-8 lg:p-10 rounded-3xl border border-border bg-surface shadow-2xl shadow-black/5">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-500 text-sm">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="name"
                        className="text-xs font-semibold text-text-secondary uppercase tracking-wider ml-1"
                      >
                        Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border rounded-xl px-4 py-6 text-text-main focus-visible:ring-primary h-12"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="email"
                        className="text-xs font-semibold text-text-secondary uppercase tracking-wider ml-1"
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
                        className="bg-background border-border rounded-xl px-4 py-6 text-text-main focus-visible:ring-primary h-12"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Website & Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="website"
                        className="text-xs font-semibold text-text-secondary uppercase tracking-wider ml-1"
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
                        className="bg-background border-border rounded-xl px-4 py-6 text-text-main focus-visible:ring-primary h-12"
                        placeholder="https://..."
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-xs font-semibold text-text-secondary uppercase tracking-wider ml-1">
                        Budget
                      </Label>
                      <Select
                        onValueChange={handleSelectChange}
                        value={formData.budget}
                        required
                      >
                        <SelectTrigger className="bg-background border-border rounded-xl px-4 py-6 text-text-main h-12 focus:ring-primary">
                          <SelectValue placeholder="Select Range" />
                        </SelectTrigger>
                        <SelectContent className="bg-surface border-border">
                          <SelectItem value="<1L">Less than ₹1L</SelectItem>
                          <SelectItem value="1L-3L">₹1L – ₹3L</SelectItem>
                          <SelectItem value="3L-5L">₹3L – ₹5L</SelectItem>
                          <SelectItem value="5L+">₹5L+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="message"
                      className="text-xs font-semibold text-text-secondary uppercase tracking-wider ml-1"
                    >
                      Goals
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="bg-background border-border rounded-xl px-4 py-3 text-text-main focus-visible:ring-primary min-h-[100px]"
                      placeholder="Tell us about your goals..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-text-main hover:bg-text-secondary text-background font-bold py-6 rounded-xl transition-all shadow-lg active:scale-[0.98] disabled:opacity-70"
                  >
                    {isLoading ? "Sending..." : "Send Request"}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>

                  <p className="text-center text-xs text-text-muted/70">
                    We usually respond within 24 hours.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-[480px] flex flex-col items-center justify-center text-center"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 ring-8 ring-primary/5">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>

                  <h3 className="text-2xl font-bold text-text-main mb-2">
                    Request Received!
                  </h3>

                  <p className="text-text-muted max-w-[250px] mx-auto mb-8">
                    Thanks! We've received your details and will be in touch
                    shortly.
                  </p>

                  <Button
                    variant="link"
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary hover:text-primary-hover p-0 h-auto"
                  >
                    Send another request
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
