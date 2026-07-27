import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Lightbulb,
  Compass,
  Play,
  Filter,
  Recycle,
  Microscope,
  HandHelping,
} from "lucide-react";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 35 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const processSteps = [
    {
      title: "Get An Idea",
      desc: "A magical spark that ignites creativity, innovation, and curiosity. Ideas grow into possibilities that shape exceptional products.",
      icon: Lightbulb,
      color: "bg-emerald-500/10 text-emerald-600",
    },
    {
      title: "Create It",
      desc: "We transform ideas into actionable plans, define milestones, and develop products with precision and purpose.",
      icon: Compass,
      color: "bg-emerald-500/10 text-emerald-600",
    },
    {
      title: "Execute It",
      desc: "We manufacture, refine, launch, and continuously improve every product while maintaining the highest quality standards.",
      icon: Play,
      color: "bg-emerald-500/10 text-emerald-600",
    },
  ];

  return (
    <div className="bg-[#F7F5F0] text-[#1E293B]">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F7F5F0] px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="public/source.png"
            alt="Nature Inspired Hydration Hero"
            className="w-full h-full object-cover object-center brightness-[0.75]"
          />
          {/* Subtle beige/white luxury gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F5F0]/90 via-[#F7F5F0]/65 to-transparent md:bg-gradient-to-r md:from-[#F7F5F0]/85 md:via-[#F7F5F0]/50 md:to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 py-20 md:px-12 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl space-y-8"
          >
            <h1 className="font-display font-medium text-5xl md:text-7xl text-primary leading-[1.1] tracking-tight">
              Nature's Finest. <br />
              <span className="italic font-normal text-secondary">
                Crafted
              </span>{" "}
              for Everyday Life.
            </h1>
            <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Jagusha Foods & Beverages creates premium food and beverage
              products inspired by nature, manufactured with innovation, and
              delivered with uncompromising quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/brand"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-white font-sans text-xs font-bold uppercase tracking-widest px-8 py-4.5 rounded-full transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/45 hover:-translate-y-0.5"
              >
                Explore Our Brands
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact?tab=distributor"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-primary border border-gray-200/80 font-sans text-xs font-bold uppercase tracking-widest px-8 py-4.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. About Jagusha Section
      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                OUR PHILOSOPHY
              </span>
              <h2 className="font-display font-medium text-4xl md:text-5xl text-primary leading-tight">
                Building Trust Through Nature & Innovation
              </h2>
            </div>

            <div className="h-[2px] w-20 bg-accent" />

            <p className="text-gray-650 text-base md:text-lg leading-relaxed font-light">
              At Jagusha, we sit at the intersection of natural sourcing and
              modern engineering. We manufacture clean, nutrient-preserved
              packaged beverages and food items that honor their natural origins
              while satisfying rigid international safety parameters.
            </p>
            <p className="text-gray-550 text-sm leading-relaxed">
              We continually invest in zero-touch automation, sustainable
              production networks, and green resource conservation, delivering
              safety and environmental commitment to families across India.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-secondary font-bold hover:text-secondary/85 transition-colors group text-xs uppercase tracking-wider"
              >
                Discover Our Heritage
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#F5F2EB] rounded-3xl -rotate-1.5 scale-102 -z-10" />
            <img
              src="/factory.png"
              alt="High-tech ecofriendly manufacturing facility"
              className="rounded-3xl shadow-xl w-full h-[450px] object-cover"
            />
          </motion.div>
        </div>
      </section> */}

      {/* 3. Featured Brand – Alpyra */}
      <section className="py-32 bg-[#F7F5F0] px-6">
        <div className="max-w-7xl mx-auto md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              FLAGSHIP SPOTLIGHT
            </span>
            <h2 className="font-display font-medium text-4xl text-primary leading-tight">
              Featured Brand
            </h2>
            <div className="h-[2px] w-12 bg-accent mx-auto" />
          </div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center"
          >
            {/* Description side */}
            <div className="p-8 md:p-16 lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h3 className="font-display font-medium text-3xl md:text-4xl text-primary leading-tight">
                  Alpyra
                </h3>
                <p className="text-gray-550 text-sm md:text-base leading-relaxed font-light">
                  Alpyra is thoughtfully crafted using advanced purification
                  technology to deliver water that is pure, refreshing, and
                  consistently reliable. Enriched with a balanced mineral
                  composition and exceptional quality standards, every bottle
                  offers a crisp, clean taste and dependable hydration, making
                  it the perfect companion for your everyday lifestyle.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-y-4 gap-x-8 pt-2">
                <div className="flex items-center gap-2 text-gray-700 font-sans text-xs font-semibold">
                  <HandHelping className="w-4 h-4 text-secondary" />
                  <span>Quality Check</span>
                </div>

                <div className="flex items-center gap-2 text-gray-700 font-sans text-xs font-semibold">
                  <Filter className="w-4 h-4 text-secondary" />
                  <span>5-Step Filtration</span>
                </div>

                <div className="flex items-center gap-2 text-gray-700 font-sans text-xs font-semibold">
                  <Recycle className="w-4 h-4 text-secondary" />
                  <span>Balanced Minerals</span>
                </div>

                <div className="flex items-center gap-2 text-gray-700 font-sans text-xs font-semibold">
                  <Microscope className="w-4 h-4 text-secondary" />
                  <span>Lab Tested</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/brand"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-white font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Explore Alpyra
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Visual side */}
            <div className="lg:col-span-5 relative h-full min-h-[350px] lg:min-h-[500px]">
              <img
                src="public/product-5.png"
                alt="Alpyra flagship premium bottle render"
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Our Process Section */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">
              STANDARDS
            </span>
            <h2 className="font-display font-medium text-4xl text-primary">
              Our Process
            </h2>
            <div className="h-[2px] w-12 bg-accent mx-auto" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10"
          >
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="p-8 rounded-3xl bg-[#F7F5F0] border border-gray-100 hover:border-secondary/20 hover:bg-white hover:shadow-xl transition-all duration-500 flex flex-col justify-between group h-full"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <h3 className="font-display font-semibold text-xl text-primary">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-gray-550 text-sm leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 py-24 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/source2.png"
            alt="Pristine fresh natural water source stream"
            className="w-full h-full object-cover brightness-[0.35]"
          />
          {/* Subtle nature green overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            className="space-y-4"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-accent bg-[#F5F2EB]/15 px-4 py-1.5 rounded-full inline-block border border-[#F5F2EB]/20">
              GROW WITH US
            </span>
            <h2 className="font-display font-medium text-4xl md:text-5xl leading-tight">
              Let's Build Something Meaningful Together
            </h2>
            <p className="text-white/80 font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Whether you're looking for distribution opportunities,
              private-label manufacturing, or strategic partnerships, Jagusha is
              ready to grow with you.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white border border-white/20 font-sans text-xs font-bold uppercase tracking-widest px-8 py-4.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
