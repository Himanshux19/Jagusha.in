import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="pt-20">
      {/* 1. Medium Height Editorial Hero Banner */}
      <section className="relative h-[250px] md:h-[250px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/source.png"
            alt="Pristine Natural Water Source"
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white space-y-4 px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-bold text-4xl md:text-5xl tracking-tight"
          >
            Contact Us
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-sm text-gray-300 font-medium font-sans"
          ></motion.div>
        </div>
      </section>

      {/* 2. Form & Info Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                LET'S CONNECT
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 leading-tight">
                Send Your Message
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                Have an inquiry about Jagusha, dealership opportunities, or
                quality testing? Drop us a note below and our corporate
                relations team will get back to you shortly.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-secondary/5 border border-secondary/20 rounded-2xl p-8 text-center space-y-4"
                >
                  <div className="w-12 h-12 bg-secondary/15 text-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-gray-900">
                    Message Sent Successfully
                  </h3>
                  <p className="text-gray-500 text-sm max-w-sm mx-auto font-light leading-relaxed">
                    Thank you for reaching out. We have logged your request and
                    will contact you via email or phone within one business day.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-sans text-xs font-semibold px-6 py-3 rounded-full transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary transition-all text-sm outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary transition-all text-sm outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Your Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary transition-all text-sm outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Distribution Opportunity"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary transition-all text-sm outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please details your request or question..."
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary transition-all text-sm outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-white font-sans text-xs font-semibold tracking-wider uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Info Cards & Map */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            {/* Contact Information Cards */}
            <div className="space-y-6">
              {/* Address Card (Full width in this column) */}
              <div className="flex gap-5 p-6 rounded-2xl bg-gray-50 border border-gray-100/50 hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-base text-gray-900 mb-1">
                    Address
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">
                    Mundet, Manglore, Roorkee-Delhi Highway, Haridwar, (UK),
                    India-247656
                  </p>
                </div>
              </div>

              {/* Sub Grid for Mail and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Mail Us */}
                <div className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100/50 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-display font-semibold text-sm text-gray-900 mb-0.5">
                      Mail Us
                    </h4>
                    <a
                      href="mailto:info@jagusha.com"
                      className="text-gray-500 text-xs font-light block hover:text-primary transition-colors truncate"
                      title="info@jagusha.com"
                    >
                      info@jagusha.com
                    </a>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100/50 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm text-gray-900 mb-0.5">
                      Telephone
                    </h4>
                    <a
                      href="tel:+919259606001"
                      className="text-gray-500 text-xs font-light block hover:text-primary transition-colors whitespace-nowrap"
                    >
                      +91 925 960 6001
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Live Map Component */}
            <div className="w-full h-[320px] rounded-3xl overflow-hidden border border-gray-100 shadow-sm relative group bg-gray-100">
              <iframe
                title="Jagusha Haridwar Factory Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.5131011115166!2d77.89312137637827!3d29.993478974950663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb46e00000001%3A0xc078cf95f46bb87d!2sHaridwar%20-%20Roorkee%20Rd%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1716382103429!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter contrast-[0.9] saturate-[0.8] brightness-[0.98] transition-all duration-500"
              />
              {/* Subtle glass overlay for aesthetics */}
              <div className="absolute inset-0 bg-primary/5 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
