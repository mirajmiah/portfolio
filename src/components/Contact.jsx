import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Copy, Check, Mail, MapPin, Loader2 } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required.';
    if (!formData.message.trim()) {
      errs.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide at least 10 characters.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    // Provide authentic mail client connection
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Open user's mail client with prefilled information
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Hi Miraj,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs sm:text-sm font-semibold tracking-widest font-mono uppercase mb-2 dark:text-indigo-400 light:text-indigo-600">
            Get In Touch
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans dark:text-white light:text-slate-900">
            {personalInfo.contact.title}
          </p>
          <div className="mt-3 w-12 h-1 bg-indigo-500 rounded-full mx-auto" />
          <p className="mt-4 text-base dark:text-slate-300 light:text-slate-600">
            {personalInfo.contact.subtitle}
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          {/* Direct Details & Direct Alternative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border dark:border-white/10 dark:bg-dark-card light:border-slate-200 light:bg-white shadow-sm space-y-6">
              <h3 className="text-lg font-bold font-sans dark:text-white light:text-slate-900">
                Direct Communication
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed dark:text-slate-300 light:text-slate-600">
                Whether you have an internship opportunity, project collaboration, or want to discuss technical ideas, I am always happy to respond.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-xl dark:bg-white/5 light:bg-slate-50 border dark:border-white/5 light:border-slate-100">
                  <Mail className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span className="block text-[11px] font-mono uppercase text-slate-400">Email Address</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-medium dark:text-white light:text-slate-900 hover:text-indigo-400 truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="p-1.5 rounded-lg dark:hover:bg-white/10 light:hover:bg-slate-200 text-slate-400"
                    title="Copy email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl dark:bg-white/5 light:bg-slate-50 border dark:border-white/5 light:border-slate-100">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-[11px] font-mono uppercase text-slate-400">Location</span>
                    <p className="text-xs sm:text-sm font-medium dark:text-white light:text-slate-900">
                      {personalInfo.contact.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border dark:border-white/10 dark:bg-dark-card light:border-slate-200 light:bg-white shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full mx-auto flex items-center justify-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold dark:text-white light:text-slate-900">
                    Message Prepared!
                  </h3>
                  <p className="text-sm dark:text-slate-300 light:text-slate-600 max-w-md mx-auto">
                    Your email client has been opened with your message. You can also contact me directly at{' '}
                    <span className="font-mono text-indigo-400 font-semibold">{personalInfo.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    type="button"
                    className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider mb-1.5 dark:text-slate-300 light:text-slate-700"
                    >
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-2.5 rounded-xl text-sm transition-all outline-none border ${
                        errors.name
                          ? 'border-rose-500/80 bg-rose-500/5'
                          : 'dark:border-white/10 dark:bg-white/5 dark:focus:border-indigo-500 light:border-slate-200 light:bg-slate-50 light:focus:border-indigo-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider mb-1.5 dark:text-slate-300 light:text-slate-700"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl text-sm transition-all outline-none border ${
                        errors.email
                          ? 'border-rose-500/80 bg-rose-500/5'
                          : 'dark:border-white/10 dark:bg-white/5 dark:focus:border-indigo-500 light:border-slate-200 light:bg-slate-50 light:focus:border-indigo-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-mono uppercase tracking-wider mb-1.5 dark:text-slate-300 light:text-slate-700"
                    >
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Opportunity / Collaboration / Project Inquiry"
                      className={`w-full px-4 py-2.5 rounded-xl text-sm transition-all outline-none border ${
                        errors.subject
                          ? 'border-rose-500/80 bg-rose-500/5'
                          : 'dark:border-white/10 dark:bg-white/5 dark:focus:border-indigo-500 light:border-slate-200 light:bg-slate-50 light:focus:border-indigo-500'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono uppercase tracking-wider mb-1.5 dark:text-slate-300 light:text-slate-700"
                    >
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Miraj, I would like to discuss..."
                      className={`w-full px-4 py-2.5 rounded-xl text-sm transition-all outline-none border resize-none ${
                        errors.message
                          ? 'border-rose-500/80 bg-rose-500/5'
                          : 'dark:border-white/10 dark:bg-white/5 dark:focus:border-indigo-500 light:border-slate-200 light:bg-slate-50 light:focus:border-indigo-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-6 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-indigo-500/25 active:scale-[0.99] disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
