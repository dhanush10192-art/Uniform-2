import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import CustomPolo from '../components/CustomPolo';
import Gallery from '../components/Gallery';
import ShopByCategory from '../components/ShopByCategory';
import CustomRoundNeck from '../components/CustomRoundNeck';
import Blog from '../components/Blog';
import About from '../components/About';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <main className="pt-20">
      <Hero />

      {/* What We Do section */}
      <WhatWeDo />

      <CustomPolo />
      <ShopByCategory />
      <Gallery />
      <CustomRoundNeck />
      <Blog />
      <About />
      <Testimonials />
      {/* Unified Contact & Enquiry Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-4 uppercase tracking-tighter">
              Get In <span className="text-uniform-secondary">Touch</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Ready to start your project? Reach out to us for enquiries, custom orders, or any assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info & Form */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-navy-dark mb-8">Send us an Enquiry</h3>
              <form
                className="space-y-6"
                action="mailto:fastcolorsfashion@gmail.com"
                method="post"
                encType="text/plain"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-uniform-secondary focus:border-transparent outline-none transition-all placeholder:text-gray-400 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-uniform-secondary focus:border-transparent outline-none transition-all placeholder:text-gray-400 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-uniform-secondary focus:border-transparent outline-none transition-all placeholder:text-gray-400 font-medium resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-uniform-secondary text-white rounded-xl font-bold text-lg hover:bg-uniform-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Send Enquiry
                </button>
              </form>
            </div>

            {/* Location & Map */}
            <div className="flex flex-col gap-8">
              <div className="bg-navy-dark text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl flex-grow">
                <h3 className="text-2xl font-bold mb-6">Visit Our Facility</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <address className="not-italic text-lg text-gray-300 leading-relaxed">
                      72, KNP Subramaniam Nagar Pudur, Pirivu,<br />
                      Dharapuram Road, Tiruppur,<br />
                      Tamil Nadu 641604
                    </address>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <a href="tel:+917812865788" className="text-lg hover:text-blue-400 transition-colors uppercase font-bold tracking-widest">+91 7812 865 788</a>
                  </div>
                </div>

                <div className="mt-10 pt-10 border-t border-white/10">
                  <a
                    href="https://www.google.com/maps?q=72,+KNP+Subramaniam+Nagar+Pudur,+Pirivu,+Dharapuram+Road,+Tiruppur,+Tamil+Nadu+641604"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-white font-bold hover:text-blue-400 transition-colors group"
                  >
                    Open in Google Maps
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </div>
              </div>

              <div className="h-64 lg:h-auto rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 flex-grow relative">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps?q=72,+KNP+Subramaniam+Nagar+Pudur,+Pirivu,+Dharapuram+Road,+Tiruppur,+Tamil+Nadu+641604&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
