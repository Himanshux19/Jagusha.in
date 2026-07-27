import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  FileText,
  UserCheck,
  Mail,
  MapPin,
} from "lucide-react";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const corporateInfo = [
    { label: "Legal Status", value: "Private Limited Company", icon: FileText },
    { label: "Incorporation Date", value: "March 16, 2024", icon: ClockIcon },
    { label: "CIN", value: "U56300UP2024PTC199473", icon: FileText },
    { label: "Registration No.", value: "199473 (RoC-Kanpur)", icon: FileText },
    {
      label: "Nature of Business",
      value: "Manufacturer of Food & Beverage Products",
      icon: Award,
    },
    { label: "GST Registration Year", value: "2024", icon: ShieldCheck },
  ];

  return (
    <div className="pt-20 bg-[#F7F5F0]">
      {/* 1. Header Section */}
      <section className="py-20 px-6 border-b border-gray-100/50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="font-display font-medium text-4xl md:text-5xl text-primary leading-tight">
            About Jagusha
          </h1>
          <div className="h-[2px] w-12 bg-accent mx-auto rounded-full" />
          <p className="text-gray-650 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Jagusha Foods And Beverages Private Limited is a leading
            manufacturer based in Roorkee. We are committed to delivering
            quality products and services, guided by nature and backed by
            innovation.
          </p>
        </div>
      </section>

      {/* 2. Corporate Governance / Directors & Registry */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="font-display font-medium text-3xl md:text-4xl text-primary leading-tight">
                Corporate Governance & Leadership
              </h2>
            </div>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
              Incorporated under the Companies Act as a company limited by
              shares, Jagusha operates with a firm dedication to consumer trust,
              product excellence, and transparent corporate governance. Our
              manufacturing practices prioritize premium raw material selection
              and safe processing operations.
            </p>

            {/* Directors Card */}
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg">
                    JS
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                      Managing Director
                    </p>

                    <h4 className="mt-1 font-display text-lg font-semibold text-gray-900">
                      Jagbeer Singh
                    </h4>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/20 hover:shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary font-bold text-lg">
                    NS
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                      Chief Executive Officer
                    </p>

                    <h4 className="mt-1 font-display text-lg font-semibold text-gray-900">
                      Nitin Kumar Saini
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#F5F2EB] rounded-3xl rotate-1 scale-102 -z-10" />
            <img
              src="/factory.png"
              alt="Industrial stainless water production lines"
              className="rounded-3xl shadow-lg w-full h-[380px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. Corporate Registry Info Cards */}
      <section className="py-24 bg-[#F7F5F0] px-6">
        <div className="max-w-7xl mx-auto md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              REGISTRY DATA
            </span>
            <h3 className="font-display font-medium text-2xl md:text-3xl text-primary">
              Company Registration Details
            </h3>
            <div className="h-[2px] w-12 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporateInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl"
                >
                  <div className="absolute left-0 top-0 h-1 w-full bg-primary scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0">
                      <Icon className="h-7 w-7" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
                        {info.label}
                      </p>

                      <h4 className="mt-3 font-display text-lg font-semibold text-gray-900 break-words">
                        {info.value}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Registered Address & Contact details */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Spring source image representing pure products */}
          <div>
            <img
              src="/factory2.png"
              alt="Natural pure water spring source"
              className="rounded-3xl shadow-xl w-full h-[360px] object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                LOCATIONS & INQUIRIES
              </span>
              <h3 className="font-display font-medium text-3xl text-primary leading-tight">
                Corporate Address & Registry Office
              </h3>
            </div>

            <div className="space-y-6">
              {/* Registered Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F7F5F0] text-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm text-gray-900 mb-1">
                    Registered Office
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">
                    CO USHA RANI, SUKH VIHAR RING ROAD, ALMASPUR,
                    <br />
                    Muzaffar Nagar City, Muzaffarnagar,
                    <br />
                    Uttar Pradesh, India - 251002
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F7F5F0] text-primary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm text-gray-900 mb-1">
                    Corporate Inquiries
                  </h4>
                  <p className="text-gray-500 text-sm font-light">
                    <a
                      href="mailto:saini.vip@gmail.com"
                      className="hover:text-secondary transition-colors font-medium"
                    >
                      saini.vip@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Small helper for missing clock icon in imports
import { Clock } from "lucide-react";
const ClockIcon = Clock;
