"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Testimonials from "./Testimonials";
import Services from "./Services";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

interface BookDemoProps {
  onBack: () => void;
}

const BookDemo: React.FC<BookDemoProps> = ({ onBack }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    category: "",
    revenueRange: "",
    agreedToTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError("");
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError("");
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      agreedToTerms: checked,
    }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreedToTerms) {
      setError("Please agree to T&C and Privacy Policy");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Save to Firebase Firestore
      const formSubmissionData = {
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        category: formData.category,
        revenueRange: formData.revenueRange,
        formType: "book-demo",
        timestamp: serverTimestamp(),
        createdAt: new Date().toISOString(),
      };

      await addDoc(collection(db, "formSubmissions"), formSubmissionData);

      // Track Meta Pixel Lead event
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead", {
          content_name: "Book Demo Form",
          content_category: formData.category,
          value: 0,
          currency: "INR",
        });
      }

      // Show success state immediately
      setIsSubmitted(true);

      // Secondary API call
      const apiBase = "https://evoc-labz-backend.onrender.com";
      const apiUrl = `${apiBase}/api/book-demo`;

      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formSubmissionData),
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

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
      title: "Grow Your Business",
      subtitle: "Data-driven strategies designed for scale.",
    },
    {
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
      title: "Expert Marketing",
      subtitle: "Performance-driven campaigns that convert.",
    },
    {
      url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
      title: "Scale with Confidence",
      subtitle: "End-to-end solutions for D2C success.",
    },
  ];

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-background animate-fade-in min-h-screen pt-20 md:pt-24 pb-10">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-subtle-grid bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] opacity-[0.03] pointer-events-none" />
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-center min-h-[calc(100vh-180px)]">
          {/* Left Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-lg mx-auto lg:mx-0"
          >
            {!isSubmitted ? (
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main tracking-tight leading-[1.1]">
                    Powering Online <br />
                    Growth for D2C <br />
                    Brands
                  </h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-500 text-sm">
                      {error}
                    </div>
                  )}

                  {/* Name */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-sm font-bold text-text-main flex items-center gap-1"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-surface border-border rounded-lg px-4 py-6 text-sm text-text-main focus-visible:ring-primary h-12"
                      placeholder="Select Your Name"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="phoneNumber"
                      className="text-sm font-bold text-text-main flex items-center gap-1"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex gap-3">
                      <div className="bg-surface border border-border rounded-lg px-3 py-3 text-sm text-text-main font-medium min-w-[60px] flex items-center justify-center h-12">
                        +91
                      </div>
                      <Input
                        id="phoneNumber"
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                        className="bg-surface border-border rounded-lg px-4 py-6 text-sm text-text-main focus-visible:ring-primary h-12"
                        placeholder="Enter 10 Digit Phone Number"
                      />
                    </div>
                  </div>

                  {/* Category */}
                  <div className="space-y-2">
                    <Label className="text-sm font-bold text-text-main flex items-center gap-1">
                      Category of products you sell?{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      onValueChange={(val) =>
                        handleSelectChange("category", val)
                      }
                      value={formData.category}
                      required
                    >
                      <SelectTrigger className="bg-surface border-border rounded-lg px-4 py-6 text-sm text-text-main h-12 focus:ring-primary">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-surface border-border">
                        <SelectItem value="fashion">
                          Fashion & Apparel
                        </SelectItem>
                        <SelectItem value="beauty">
                          Beauty & Personal Care
                        </SelectItem>
                        <SelectItem value="electronics">
                          Electronics & Gadgets
                        </SelectItem>
                        <SelectItem value="home">Home & Living</SelectItem>
                        <SelectItem value="food">Food & Beverage</SelectItem>
                        <SelectItem value="wholesaler">Wholesaler</SelectItem>
                        <SelectItem value="dropshipping">
                          Dropshipping
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Revenue Range */}
                  <div className="space-y-2">
                    <Label className="text-sm font-bold text-text-main flex items-center gap-1">
                      Monthly revenue range{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      onValueChange={(val) =>
                        handleSelectChange("revenueRange", val)
                      }
                      value={formData.revenueRange}
                      required
                    >
                      <SelectTrigger className="bg-surface border-border rounded-lg px-4 py-6 text-sm text-text-main h-12 focus:ring-primary">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-surface border-border">
                        <SelectItem value="20000-30000">
                          ₹20,000 – ₹30,000
                        </SelectItem>
                        <SelectItem value="30000-50000">
                          ₹30,000 – ₹50,000
                        </SelectItem>
                        <SelectItem value="50000-70000">
                          ₹50,000 – ₹70,000
                        </SelectItem>
                        <SelectItem value="70000-100000">
                          ₹70,000 – ₹1,00,000
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Terms */}
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="terms"
                      onCheckedChange={handleCheckboxChange}
                      checked={formData.agreedToTerms}
                      className="border-border data-[state=checked]:bg-white data-[state=checked]:text-black"
                    />
                    <Label
                      htmlFor="terms"
                      className="text-sm text-text-muted cursor-pointer select-none font-normal"
                    >
                      I've read the T&C & Privacy Policy
                    </Label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-white hover:bg-white/90 text-black font-bold py-6 rounded-lg transition-all shadow-lg text-base mt-4"
                  >
                    {isLoading ? "Sending..." : "Request a Call"}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="min-h-[400px] flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 ring-8 ring-primary/5">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-text-main mb-3">
                  Request Received!
                </h3>
                <p className="text-text-muted max-w-[280px] mx-auto mb-8 text-lg">
                  We'll call you shortly to discuss your growth.
                </p>
                <Button
                  variant="link"
                  onClick={() => setIsSubmitted(false)}
                  className="text-base font-medium text-white hover:text-white/80 p-0 h-auto"
                >
                  Submit another request
                </Button>
              </motion.div>
            )}
          </motion.div>

          {/* Right Side: Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl h-[640px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 1.2,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                  className="absolute inset-0"
                >
                  <img
                    src={carouselImages[currentSlide].url}
                    alt={carouselImages[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>

                  {/* Overlay Text */}
                  <motion.div
                    className="absolute bottom-10 left-10 right-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    }}
                  >
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {carouselImages[currentSlide].title}
                    </h3>
                    <p className="text-white/80 text-lg">
                      {carouselImages[currentSlide].subtitle}
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Carousel Indicators */}
              <div className="absolute bottom-10 right-10 flex gap-2 z-10">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-500 ease-out ${
                      index === currentSlide
                        ? "bg-white w-8"
                        : "bg-white/30 w-2 hover:bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Official Business Partners */}
      <div className="mt-20 lg:mt-32">
        <Testimonials />
      </div>

      {/* Client Reviews */}
      <div className="mt-16">
        <Services />
      </div>
    </div>
  );
};

export default BookDemo;
