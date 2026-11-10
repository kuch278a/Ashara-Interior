import React, { useState } from 'react';
import { submitConsultation } from '../services/firebaseService';
import { Loader2, CheckCircle2, AlertCircle, Phone, Mail, MessageSquare, MapPin } from 'lucide-react';

const CONTACT_INFO = [
  { icon: Phone, label: 'Telephone', value: '+251 91 219 5768', href: 'tel:+251912195768' },
  { icon: Mail, label: 'Email', value: 'birukesayas911@gmail.com', href: 'mailto:birukesayas911@gmail.com' },
  { icon: MessageSquare, label: 'WhatsApp', value: '+251 90 763 6463', href: 'https://wa.me/251907636463' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [form, setForm] = useState({ fullName: '', email: '', telephone: '', enquiry: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidationError('');
    setSubmitError(false);

    if (honeypot) {
      setSubmitted(true);
      return;
    }

    const lastSubmitTime = Number(sessionStorage.getItem('ashara_last_contact_time') || 0);
    if (Date.now() - lastSubmitTime < 20000) {
      setValidationError('Please wait a moment before sending another enquiry.');
      return;
    }

    const clean = {
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      telephone: form.telephone.trim(),
      enquiry: form.enquiry.trim()
    };

    if (!clean.fullName || clean.fullName.length > 200) {
      setValidationError('Please enter your full name (maximum 200 characters).');
      return;
    }
    if (!clean.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email)) {
      setValidationError('Please provide a valid email address.');
      return;
    }
    if (clean.telephone.length > 40) {
      setValidationError('Telephone number must not exceed 40 characters.');
      return;
    }
    if (!clean.enquiry || clean.enquiry.length > 5000) {
      setValidationError('Enquiry must be between 1 and 5000 characters.');
      return;
    }

    setIsSubmitting(true);
    try {
      await submitConsultation(clean);
      sessionStorage.setItem('ashara_last_contact_time', String(Date.now()));
      setSubmitted(true);
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-3.5 bg-[#EBF2F2]/70 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-base sm:text-sm placeholder-gray-500 dark:placeholder-gray-400 text-ashara-teal dark:text-white focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold focus:bg-white dark:focus:bg-ashara-charcoal transition rounded-sm";

  return (
    <div className="bg-[#EBF2F2] dark:bg-ashara-dark min-h-screen animate-fade-in transition-colors duration-300">
      <section aria-labelledby="contact-page-heading" className="w-full py-16 sm:py-24 lg:py-32 px-5 sm:px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 id="contact-page-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ashara-teal dark:text-white font-normal">Contact Us</h1>
          <p className="font-serif text-xl sm:text-2xl text-ashara-teal/80 dark:text-white/80 leading-relaxed">
            If you would like to discuss your project, schedule an appointment or arrange to view more of our extensive portfolio please contact us on the details below.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16" aria-hidden="true">
        <div className="h-[1px] bg-gray-300 dark:bg-white/15 w-full mb-12" />
      </div>

      <section className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 lg:gap-20 items-start pt-4">
          {/* Left Column */}
          <div className="md:col-span-5 space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl text-ashara-teal dark:text-white font-normal tracking-wide">Contact</h2>
            <div className="space-y-5 text-[13px] sm:text-sm text-ashara-teal dark:text-white font-light">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3.5">
                  <Icon className="w-4 h-4 mt-1 shrink-0 stroke-[1.5]" aria-hidden="true" />
                  <p className="leading-snug">{label} <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ashara-gold rounded-sm">{value}</a></p>
                </div>
              ))}
              <div className="flex items-start gap-3.5 pt-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0 stroke-[1.5]" aria-hidden="true" />
                <div className="leading-relaxed">
                  <p className="font-medium">Ashara Interiors</p>
                  <p>Megenagna, Infront of Ethio Ceramics</p>
                  <p>Bete Sahlite-Mihret Building, 4th Floor</p>
                  <p>Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="md:col-span-7 space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl text-ashara-teal dark:text-white font-normal tracking-wide">Enquiries</h2>

            {submitted ? (
              <div role="status" aria-live="polite" className="bg-white/50 dark:bg-white/5 p-8 border border-ashara-teal/30 dark:border-ashara-gold/20 text-center space-y-4 shadow-sm animate-fade-in">
                <div className="w-12 h-12 bg-ashara-teal dark:bg-ashara-gold text-white dark:text-ashara-dark rounded-full flex items-center justify-center mx-auto" aria-hidden="true">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-ashara-teal dark:text-white">Enquiry Submitted Successfully</h3>
                <p className="text-sm text-ashara-teal dark:text-white max-w-sm mx-auto font-light leading-relaxed">
                  Thank you, <strong>{form.fullName || 'Valued Client'}</strong>. We will review your requirements and respond promptly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ fullName: '', email: '', telephone: '', enquiry: '' }); }}
                  className="mt-4 px-6 py-2 bg-ashara-teal dark:bg-ashara-gold text-white dark:text-ashara-dark text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-ashara-teal/90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ashara-gold rounded-sm"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : submitError ? (
              <div role="alert" aria-live="assertive" className="bg-white/50 dark:bg-white/5 p-8 border border-red-300 dark:border-red-400/30 text-center space-y-4 shadow-sm animate-fade-in">
                <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto" aria-hidden="true">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-ashara-teal dark:text-white">Enquiry Submission Failed</h3>
                <p className="text-sm text-ashara-teal dark:text-white max-w-sm mx-auto font-light leading-relaxed">
                  Something went wrong and your enquiry was not sent. Please check your connection and try again.
                </p>
                <button
                  onClick={() => setSubmitError(false)}
                  className="mt-4 px-6 py-2 bg-ashara-teal dark:bg-ashara-gold text-white dark:text-ashara-dark text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-ashara-teal/90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ashara-gold rounded-sm"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {validationError && (
                  <div role="alert" aria-live="assertive" className="p-3 bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs rounded-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>{validationError}</span>
                  </div>
                )}

                <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                  <label htmlFor="companyUrl">Leave Blank</label>
                  <input id="companyUrl" type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
                </div>

                <div>
                  <label htmlFor="fullName" className="sr-only">Full Name</label>
                  <input id="fullName" type="text" required maxLength={200} placeholder="Full Name" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} className={inputClass} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="sr-only">Email Address</label>
                    <input id="email" type="email" required maxLength={320} placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="telephone" className="sr-only">Telephone</label>
                    <input id="telephone" type="tel" maxLength={40} placeholder="Telephone" value={form.telephone} onChange={(e) => setForm({ ...form, telephone: e.target.value })} className={inputClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="enquiry" className="sr-only">Enquiry</label>
                  <textarea id="enquiry" rows="6" required maxLength={5000} placeholder="Tell us about your enquiry - New construction / renovation / remodel." value={form.enquiry} onChange={(e) => setForm({ ...form, enquiry: e.target.value })} className={`${inputClass} resize-none`} />
                </div>

                <div className="flex justify-end pt-2">
                  <button type="submit" disabled={isSubmitting} className="btn-ashara-primary">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                        <span>SUBMITTING...</span>
                      </>
                    ) : (
                      <span>SUBMIT ENQUIRY</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
