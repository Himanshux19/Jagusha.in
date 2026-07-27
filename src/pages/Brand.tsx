import { ArrowUpRight } from "lucide-react";

export default function Brand() {
  return (
    <div className="pt-20">
      {/* Editorial Header */}
      <section className="bg-gray-50 py-20 px-6 border-b border-gray-100/50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            JAGUSHA PORTFOLIO
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 leading-tight">
            Our Flagship Brand
          </h1>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
          <p className="text-gray-550 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Jagusha Foods & Beverages Pvt. Ltd. delivers purity and quality
            through our specialized child brands. Discover our flagship offering
            in premium hydration.
          </p>
        </div>
      </section>

      {/* Brand Showcase Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto md:px-12">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-primary/5 to-secondary/5 -rotate-2 scale-105 -z-10" />

              <img
                src="/product-2.png"
                alt="Alpyra Premium Packaged Drinking Water"
                className="w-full rounded-[2rem] object-cover shadow-xl"
              />
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Alpyra
              </h2>

              <p className="text-lg leading-8 text-gray-600 max-w-3xl">
                Alpyra is the flagship packaged drinking water brand of Jagusha
                Foods & Beverages Pvt. Ltd., created with a commitment to
                purity, quality, and trust. Every bottle undergoes advanced
                multi-stage purification and rigorous quality testing to deliver
                safe, refreshing drinking water. Combining innovation,
                sustainability, and modern manufacturing, Alpyra brings nature's
                purity to every home, workplace, and journey.
              </p>

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-8 mt-10">
                <div className="border-l-2 border-primary pl-5">
                  <h4 className="font-display font-semibold text-lg text-gray-900 mb-2">
                    Satisfied Customer
                  </h4>

                  <p className="text-sm text-gray-500 leading-7">
                    Our satisfied customers trust us for quality, taste, and
                    reliability.
                  </p>
                </div>

                <div className="border-l-2 border-secondary pl-5">
                  <h4 className="font-display font-semibold text-lg text-gray-900 mb-2">
                    Standard Product
                  </h4>

                  <p className="text-sm text-gray-500 leading-7">
                    We deliver standard products with consistent quality, taste,
                    and safety assurance.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-between flex-wrap gap-6">
                <a
                  href="https://alpyra.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
                >
                  Visit Website
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
