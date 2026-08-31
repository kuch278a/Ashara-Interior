import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, MapPin, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    telephone: '',
    enquiry: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-[85vh] py-14 sm:py-20 px-6 sm:px-10 lg:px-16 animate-fade-in">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Intro Subtitle matching Figma Screen 1 */}
        <div className="text-center max-w-3xl mx-auto pt-4">
          <p className="text-gray-700 text-lg sm:text-2xl font-light leading-relaxed tracking-tight">
            If you would like to discuss your project, schedule an appointment or arrange to view more of our extensive portfolio please contact us on the details below.
          </p>
        </div>

        {/* Clean Horizontal Divider Line */}
        <div className="w-full h-[1px] bg-gray-900/90 my-10"></div>

        {/* 2-Column Section: Contact (Left) & Enquiries (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start pt-4">
          
          {/* Left Column: Contact */}
          <div className="md:col-span-5 space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl text-ashara-charcoal font-normal tracking-wide">
              Contact
            </h2>

            <div className="space-y-5 text-[13px] sm:text-sm text-gray-800 font-light">
              
              {/* Telephone */}
              <div className="flex items-start gap-3.5">
                <Phone className="w-4 h-4 text-gray-700 mt-1 shrink-0 stroke-[1.5]" />
                <p className="leading-snug">
                  Telephone <span className="font-normal text-ashara-charcoal">+251 91 219 5768</span>
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <Mail className="w-4 h-4 text-gray-700 mt-1 shrink-0 stroke-[1.5]" />
                <p className="leading-snug">
                  Email <a href="mailto:Mikasadessalegn@gmail.com" className="hover:text-ashara-teal transition">Mikasadessalegn@gmail.com</a>
                </p>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5">
                <MessageSquare className="w-4 h-4 text-gray-700 mt-1 shrink-0 stroke-[1.5]" />
                <p className="leading-snug">
                  WhatsApp <a href="https://wa.me/251907636463" target="_blank" rel="noopener noreferrer" className="hover:text-ashara-teal transition">+251 90 763 6463</a>
                </p>
              </div>

              {/* Location Address */}
              <div className="flex items-start gap-3.5 pt-2">
                <MapPin className="w-4 h-4 text-gray-700 mt-1 shrink-0 stroke-[1.5]" />
                <div className="leading-relaxed text-gray-700">
                  <p className="font-medium text-ashara-charcoal">Ashara Interiors</p>
                  <p>Megenagna</p>
                  <p>Infront of Ethio Ceramics</p>
                  <p>Bete Sahlite-Mihret Building, 4th Floor</p>
                  <p>Addis Ababa, Ethiopia</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Enquiries Form */}
          <div className="md:col-span-7 space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl text-ashara-charcoal font-normal tracking-wide">
              Enquiries
            </h2>

            {submitted ? (
              <div className="bg-[#EBF2F2] p-8 border border-ashara-teal/30 text-center space-y-4 shadow-sm animate-fade-in">
                <div className="w-12 h-12 bg-ashara-teal text-white rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-ashara-charcoal">Enquiry Submitted</h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto font-light leading-relaxed">
                  Thank you, <strong>{form.fullName || 'Valued Client'}</strong>. Our studio team in Addis Ababa will review your requirements and respond promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ fullName: '', email: '', telephone: '', enquiry: '' });
                  }}
                  className="px-6 py-2 bg-ashara-teal text-white text-xs uppercase tracking-wider font-medium hover:bg-ashara-teal-hover transition"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#EBF2F2]/70 border border-gray-300 text-xs sm:text-sm placeholder-gray-500 text-ashara-charcoal focus:outline-none focus:border-ashara-teal focus:bg-white transition"
                  />
                </div>

                {/* Email Address & Telephone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[#EBF2F2]/70 border border-gray-300 text-xs sm:text-sm placeholder-gray-500 text-ashara-charcoal focus:outline-none focus:border-ashara-teal focus:bg-white transition"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Telephone"
                      value={form.telephone}
                      onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[#EBF2F2]/70 border border-gray-300 text-xs sm:text-sm placeholder-gray-500 text-ashara-charcoal focus:outline-none focus:border-ashara-teal focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Enquiry Textarea */}
                <div>
                  <textarea
                    rows="6"
                    required
                    placeholder="Tell us about your enquiry - New construction / renovation / remodel."
                    value={form.enquiry}
                    onChange={(e) => setForm({ ...form, enquiry: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#EBF2F2]/70 border border-gray-300 text-xs sm:text-sm placeholder-gray-500 text-ashara-charcoal focus:outline-none focus:border-ashara-teal focus:bg-white transition resize-none"
                  ></textarea>
                </div>

                {/* Submit Enquiry Button (Right Aligned, Solid Teal #1E4E4E) */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-ashara-teal text-white text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-ashara-teal-hover transition duration-200 shadow-sm"
                  >
                    SUBMIT ENQUIRY
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
