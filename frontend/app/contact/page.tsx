"use client";

import React, { useState } from "react";
import { Mail, Clock, MessageSquare, Send, CheckCircle2, Sparkles, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#FCFAF6] py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 border border-gold-300 text-gold-800 text-xs font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>We are here to assist • मदत व संपर्क</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serifDevanagari text-wine-950">
            आमच्याशी संपर्क साधा
          </h1>

          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            Have a question regarding Marathi fonts, payment confirmation, or template customization? Reach out to our dedicated support team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-border shadow-card-soft space-y-6">
              <h2 className="text-xl font-bold text-wine-950 font-serif">
                Support & Inquiries
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-charcoal-700">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-wine-50 text-wine-800 flex items-center justify-center shrink-0 border border-wine-200">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-wine-950 block">Email Support</span>
                    <span className="text-charcoal-500">support@vivahpatrika.online</span>
                    <span className="text-[11px] text-emerald-700 font-medium block mt-0.5">
                      Average response: Under 2 hours
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-800 flex items-center justify-center shrink-0 border border-gold-200">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-wine-950 block">Customer Service Hours</span>
                    <span className="text-charcoal-500">Monday – Saturday: 10:00 AM – 7:00 PM IST</span>
                    <span className="text-[11px] text-charcoal-400 block mt-0.5">
                      Sunday: WhatsApp Emergency Support
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-wine-950 block">Location</span>
                    <span className="text-charcoal-500">Pune & Mumbai, Maharashtra, India</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#FAF4E6] rounded-2xl border border-[#E7D6A7] text-xs text-charcoal-700">
                <span className="font-bold text-wine-900 block mb-1">
                  💡 त्वरित मदत (Instant Self-Help):
                </span>
                <span>
                  Check out our comprehensive{" "}
                  <a href="/faq" className="text-wine-800 underline font-semibold">
                    Frequently Asked Questions (FAQ)
                  </a>{" "}
                  for immediate answers to photo resizing and download formats.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-cream-border shadow-card-soft">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-wine-950 font-serif">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 max-w-md mx-auto leading-relaxed">
                    तुमचा संदेश आम्हाला प्राप्त झाला आहे. Our support executive will get back to you within 2 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-wine-800 text-white rounded-xl text-xs font-semibold hover:bg-wine-900 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-xl font-bold text-wine-950 font-serif">
                    Send Us a Message
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Your Full Name / तुमचे नाव *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="उदा. राहुल देशमुख"
                        className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Email Address / ईमेल *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Subject / विषय *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="उदा. फोटो क्रॉप किंवा PDF डाऊनलोड संबंधी प्रश्न"
                      className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Your Message / सविस्तर संदेश *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="तुमची शंका किंवा अभिप्राय येथे लिहा..."
                      className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/40 focus:border-wine-700 focus:outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-wine-700 to-wine-900 hover:from-wine-800 hover:to-wine-950 shadow-royal hover:shadow-royal-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-gold-300" />
                        <span>Send Message (संदेश पाठवा)</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
