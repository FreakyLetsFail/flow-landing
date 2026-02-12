"use client";

import { useEffect, useRef } from "react";

// Navigation Component
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#FFE4CC]/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFE4CC] to-[#FFDAB3] flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-[#2D2A26]" />
          </div>
          <span className="text-xl font-bold text-[#2D2A26]">Flow</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-[#6B6660] hover:text-[#2D2A26] transition-colors font-medium">
            Features
          </a>
          <a href="#how-it-works" className="text-[#6B6660] hover:text-[#2D2A26] transition-colors font-medium">
            How it Works
          </a>
          <a href="#download" className="text-[#6B6660] hover:text-[#2D2A26] transition-colors font-medium">
            Download
          </a>
        </div>

        {/* CTA */}
        <a
          href="#download"
          className="bg-[#2D2A26] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-[#1a1917] transition-all hover:shadow-lg hover:-translate-y-0.5"
        >
          Try Free
        </a>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#FFE4CC] rounded-full blur-3xl opacity-60 animate-pulse-soft" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4E5F7] rounded-full blur-3xl opacity-60 animate-pulse-soft" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#D4F0E7] rounded-full blur-3xl opacity-40 animate-pulse-soft" style={{ animationDelay: "1s" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#2D2A26] leading-tight mb-6 animate-fade-in-up">
              Find Your Flow.{" "}
              <span className="bg-gradient-to-r from-[#FFDAB3] to-[#B8D4E3] bg-clip-text text-transparent">
                Do More.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#6B6660] mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in-up delay-100">
              The productivity app that helps you focus deeply, manage tasks effortlessly, and achieve your goals with a smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-200">
              <a
                href="#download"
                className="bg-[#2D2A26] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#1a1917] transition-all hover:shadow-xl hover:-translate-y-1"
              >
                Start Free Trial
              </a>
              <a
                href="#features"
                className="bg-white text-[#2D2A26] px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-[#FFE4CC] hover:bg-[#FFE4CC]/20 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* App Mockup */}
          <div className="relative animate-fade-in-up delay-300">
            <div className="animate-float">
              {/* Phone Frame */}
              <div className="relative mx-auto w-72 h-[580px] bg-[#2D2A26] rounded-[3rem] p-3 shadow-2xl">
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#2D2A26] rounded-full z-10" />
                <div className="w-full h-full bg-gradient-to-br from-[#FFE4CC] via-[#D4F0E7] to-[#D4E5F7] rounded-[2.5rem] overflow-hidden">
                  {/* Mock App Content */}
                  <div className="p-6 pt-10">
                    <div className="text-center mb-8">
                      <p className="text-[#6B6660] text-sm mb-2">Focus Time</p>
                      <p className="text-5xl font-bold text-[#2D2A26]">25:00</p>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white/70 rounded-2xl p-4 backdrop-blur-sm">
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full border-2 border-[#FFDAB3]" />
                          <span className="text-[#2D2A26] font-medium">Complete project proposal</span>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-2xl p-4 backdrop-blur-sm">
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#D4F0E7] flex items-center justify-center">
                            <svg className="w-3 h-3 text-[#2D2A26]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-[#6B6660] line-through">Review emails</span>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-2xl p-4 backdrop-blur-sm">
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full border-2 border-[#B8D4E3]" />
                          <span className="text-[#2D2A26] font-medium">Team meeting prep</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      title: "Pomodoro Timer",
      description: "Focus sessions that work. Stay productive with scientifically-backed time intervals.",
      color: "bg-[#FFE4CC]",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Task Management",
      description: "Organize effortlessly. Keep all your tasks in one place with smart categorization.",
      color: "bg-[#D4E5F7]",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Focus Sessions",
      description: "Deep work made easy. Block distractions and enter your flow state naturally.",
      color: "bg-[#D4F0E7]",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Statistics",
      description: "Track your progress. Beautiful insights to celebrate your productivity wins.",
      color: "bg-[#FFDAB3]",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2A26] mb-4">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-[#FFDAB3] to-[#B8D4E3] bg-clip-text text-transparent">
              stay focused
            </span>
          </h2>
          <p className="text-lg text-[#6B6660] max-w-2xl mx-auto">
            Simple tools that work together to help you do your best work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-[#FFFBF7] rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center text-[#2D2A26] mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#2D2A26] mb-3">{feature.title}</h3>
              <p className="text-[#6B6660] text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Set your focus time",
      description: "Choose how long you want to focus. We recommend starting with 25 minutes.",
      color: "bg-[#FFE4CC]",
    },
    {
      number: "2",
      title: "Work without distractions",
      description: "Flow blocks notifications and helps you stay in the zone.",
      color: "bg-[#D4E5F7]",
    },
    {
      number: "3",
      title: "Review your progress",
      description: "See your productivity stats and celebrate your achievements.",
      color: "bg-[#D4F0E7]",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#FFFBF7] relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#D4E5F7] rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#FFE4CC] rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2A26] mb-4">
            How it{" "}
            <span className="bg-gradient-to-r from-[#D4F0E7] to-[#B8D4E3] bg-clip-text text-transparent">
              works
            </span>
          </h2>
          <p className="text-lg text-[#6B6660] max-w-2xl mx-auto">
            Getting started is as easy as 1, 2, 3.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="text-center group">
              <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <span className="text-3xl font-bold text-[#2D2A26]">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-[#2D2A26] mb-3">{step.title}</h3>
              <p className="text-[#6B6660]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Flow completely changed how I work. I've never been more productive or less stressed.",
      name: "Sarah Chen",
      role: "Product Designer",
      accent: "border-[#FFE4CC]",
    },
    {
      quote: "The perfect balance of features without being overwhelming. Exactly what I needed.",
      name: "Marcus Johnson",
      role: "Software Engineer",
      accent: "border-[#D4E5F7]",
    },
    {
      quote: "Finally, an app that understands how I actually want to work. Simple and beautiful.",
      name: "Emily Rodriguez",
      role: "Content Creator",
      accent: "border-[#D4F0E7]",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2A26] mb-4">
            Loved by{" "}
            <span className="bg-gradient-to-r from-[#FFDAB3] to-[#D4F0E7] bg-clip-text text-transparent">
              thousands
            </span>
          </h2>
          <p className="text-lg text-[#6B6660] max-w-2xl mx-auto">
            See what our community has to say about finding their flow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-[#FFFBF7] rounded-3xl p-8 border-l-4 ${testimonial.accent} hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              <p className="text-[#2D2A26] text-lg mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <p className="font-bold text-[#2D2A26]">{testimonial.name}</p>
                <p className="text-[#6B6660] text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Download CTA Section
function DownloadSection() {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFE4CC]/50 via-[#FFFBF7] to-[#D4E5F7]/50" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4F0E7] rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FFDAB3] rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2A26] mb-6">
          Ready to find your{" "}
          <span className="bg-gradient-to-r from-[#FFDAB3] to-[#B8D4E3] bg-clip-text text-transparent">
            flow?
          </span>
        </h2>
        <p className="text-xl text-[#6B6660] mb-10 max-w-2xl mx-auto">
          Join thousands of focused individuals who have transformed their productivity. Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          {/* App Store Button */}
          <a
            href="#"
            className="group bg-[#2D2A26] text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#1a1917] transition-all hover:shadow-xl hover:-translate-y-1"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <p className="text-xs opacity-80">Download on the</p>
              <p className="text-lg font-semibold">App Store</p>
            </div>
          </a>

          {/* Google Play Button */}
          <a
            href="#"
            className="group bg-[#2D2A26] text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#1a1917] transition-all hover:shadow-xl hover:-translate-y-1"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            <div className="text-left">
              <p className="text-xs opacity-80">Get it on</p>
              <p className="text-lg font-semibold">Google Play</p>
            </div>
          </a>
        </div>

        <p className="text-[#6B6660] text-sm">
          Free 14-day trial. No credit card required.
        </p>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-white border-t border-[#FFE4CC]/30 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFE4CC] to-[#FFDAB3] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#2D2A26]" />
            </div>
            <span className="text-xl font-bold text-[#2D2A26]">Flow</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[#6B6660]">
            <a href="#" className="hover:text-[#2D2A26] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#2D2A26] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#2D2A26] transition-colors">Contact</a>
            <a href="#" className="hover:text-[#2D2A26] transition-colors">Support</a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-[#FFFBF7] flex items-center justify-center text-[#6B6660] hover:bg-[#FFE4CC] hover:text-[#2D2A26] transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#FFFBF7] flex items-center justify-center text-[#6B6660] hover:bg-[#D4E5F7] hover:text-[#2D2A26] transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#FFE4CC]/30 text-center">
          <p className="text-[#6B6660] text-sm">
            &copy; {new Date().getFullYear()} Flow. Made with love for productivity enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Intersection Observer for fade-in animations
function useIntersectionObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".observe-fade");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

// Main Page Component
export default function Home() {
  useIntersectionObserver();

  return (
    <main className="min-h-screen bg-[#FFFBF7]">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <DownloadSection />
      <Footer />
    </main>
  );
}
