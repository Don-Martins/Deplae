/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Dumbbell, 
  Sparkles, 
  Activity, 
  User, 
  Users, 
  CheckCircle2, 
  Clock, 
  Star, 
  MapPin, 
  Phone,
  ArrowDown,
  MessageCircle,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const WHATSAPP_LINK = "https://wa.me/2347039905503?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20De%20Plae%20Gym%20%26%20Spa";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Memberships', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-gold selection:text-black bg-dark text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="font-display text-2xl font-extrabold tracking-tighter">
            DE PLAE <span className="text-gold">GYM & SPA</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-card border-b border-white/5 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-lg font-bold text-gray-300 hover:text-gold transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1920" 
            alt="Gym Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/40 to-dark"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-9xl font-extrabold mb-6 tracking-tight leading-none"
          >
            TRANSFORM <br />
            <span className="text-gold">YOUR BODY.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto uppercase tracking-[0.2em] font-light"
          >
            Abuja's Premier Fitness & Wellness Destination
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a 
              href="#services"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-dark px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all hover:bg-gold hover:scale-105"
            >
              Explore Services
              <ArrowDown className="w-4 h-4" />
            </a>
            <a 
              href="#"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/20 text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all hover:bg-white/10"
            >
              View Memberships
            </a>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <div className="bg-dark border-y border-white/5 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-gold text-2xl font-black mb-1">5.0</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500">Google Rating</div>
            </div>
            <div>
              <div className="text-white text-2xl font-black mb-1">100+</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500">Active Members</div>
            </div>
            <div>
              <div className="text-white text-2xl font-black mb-1">24/6</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500">Availability</div>
            </div>
            <div>
              <div className="text-gold text-2xl font-black mb-1">Abuja</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500">Prime Location</div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-32 bg-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <div className="text-gold font-black text-xs uppercase tracking-[0.3em] mb-4">The Experience</div>
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight">Where Elite Fitness <br /> Meets Pure Bliss.</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-10">
                De Plae Gym & Spa is more than just a fitness center; it's a sanctuary for those who demand the best for their body and mind. Located in Abuja, we offer a curated environment where high-performance training equipment meets the tranquility of a world-class spa.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-card rounded-2xl border border-white/5">
                  <Dumbbell className="text-gold mb-4" />
                  <h4 className="font-bold mb-2">Pro Gear</h4>
                  <p className="text-xs text-gray-500">Elite strength & cardio equipment.</p>
                </div>
                <div className="p-6 bg-card rounded-2xl border border-white/5">
                  <Sparkles className="text-gold mb-4" />
                  <h4 className="font-bold mb-2">Luxury Spa</h4>
                  <p className="text-xs text-gray-500">Rejuvenating body treatments.</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              {...fadeIn}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=1000" 
                alt="Gym Experience" 
                className="relative rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-card">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <div className="text-gold font-black text-xs uppercase tracking-[0.3em] mb-4">Our Expertise</div>
              <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">Premium Services <br /> For Every Goal.</h2>
            </div>
            <a href="#" className="text-sm font-bold uppercase tracking-widest border-b-2 border-gold pb-2 hover:text-gold transition-all">View All Services</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-3xl">
            {[
              { icon: <Dumbbell />, title: "Elite Fitness Training", desc: "Advanced strength and conditioning programs." },
              { icon: <Sparkles />, title: "Spa & Body Rituals", desc: "Expert massages and holistic relaxation." },
              { icon: <Activity />, title: "Cardio Performance", desc: "High-intensity endurance training zones." },
              { icon: <User />, title: "Private Coaching", desc: "Personalized roadmaps to your ideal physique." },
              { icon: <Dumbbell />, title: "Strength Lab", desc: "Heavy lifting and functional movement areas." },
              { icon: <Users />, title: "Dynamic Classes", desc: "High-energy group sessions for all levels." }
            ].map((service, i) => (
              <div 
                key={i}
                className="bg-dark p-12 hover:bg-card transition-colors group"
              >
                <div className="text-gold mb-8 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-dark overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeIn} className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern Gym" 
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-dark/20"></div>
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="order-1 lg:order-2">
              <div className="text-gold font-black text-xs uppercase tracking-[0.3em] mb-4">The Advantage</div>
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-12 leading-tight">Uncompromising <br /> Standards.</h2>
              <div className="space-y-10">
                {[
                  { title: "5-Star Rated Experience", desc: "Recognized as Abuja's top-tier fitness destination." },
                  { title: "State-of-the-Art Equipment", desc: "The latest technology in fitness and recovery." },
                  { title: "Expert Trainers & Therapists", desc: "Certified professionals dedicated to your success." },
                  { title: "Affordable Membership Plans", desc: "Premium value without the premium price tag." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center shrink-0 border border-white/5">
                      <CheckCircle2 className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-dark rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
            <div className="p-12 md:p-16 flex flex-col justify-center">
              <Clock className="w-10 h-10 text-gold mb-8" />
              <h2 className="font-display text-4xl font-bold mb-8">Operating <br /> Hours</h2>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-gray-500 uppercase tracking-widest text-xs font-bold">Mon – Sat</span>
                  <span className="font-black text-gold">06:30 – 21:00</span>
                </div>
                <div className="flex justify-between items-center pb-4">
                  <span className="text-gray-500 uppercase tracking-widest text-xs font-bold">Sunday</span>
                  <span className="text-white/30 font-black">CLOSED</span>
                </div>
              </div>
            </div>
            <div className="relative min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800" 
                alt="Gym Interior" 
                className="absolute inset-0 w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gold/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <div className="text-gold font-black text-xs uppercase tracking-[0.3em] mb-4">Community</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold">Member Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Chidi O.", text: "Best gym in Abuja! The equipment is top-notch and the spa is the perfect way to end a workout session.", rating: 5 },
              { name: "Amina K.", text: "I love the group classes. The energy is amazing and the trainers really push you to your limits.", rating: 5 },
              { name: "Segun A.", text: "Clean, professional, and great value for money. The personal training has changed my life.", rating: 5 }
            ].map((t, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="relative p-10 bg-card rounded-3xl border border-white/5"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-gold text-gold" />)}
                </div>
                <p className="text-gray-400 mb-10 text-lg leading-relaxed italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold font-black">
                    {t.name[0]}
                  </div>
                  <span className="font-bold tracking-widest uppercase text-xs">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white text-dark">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <h2 className="font-display text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-none">READY TO <br /> EVOLVE?</h2>
            <p className="text-lg md:text-xl mb-12 max-w-xl mx-auto font-medium text-dark/60 uppercase tracking-widest">Join Abuja's elite fitness community today.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#" className="w-full sm:w-auto bg-dark text-white px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest hover:bg-gold hover:text-dark transition-all">Get Started</a>
              <a href="#" className="w-full sm:w-auto border-2 border-dark/10 px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest hover:bg-dark hover:text-white transition-all">View Pricing</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact & Location */}
      <section id="contact" className="py-32 bg-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <motion.div {...fadeIn}>
              <div className="text-gold font-black text-xs uppercase tracking-[0.3em] mb-4">Get In Touch</div>
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-12">Visit The Hub.</h2>
              <div className="space-y-12">
                <div className="flex gap-8">
                  <div className="w-14 h-14 bg-card rounded-2xl flex items-center justify-center shrink-0 border border-white/5">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-gray-500 mb-2">Location</h4>
                    <p className="text-xl font-medium">8 Kusa Jisalo Crescent, Abuja, FCT, Nigeria</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="w-14 h-14 bg-card rounded-2xl flex items-center justify-center shrink-0 border border-white/5">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-gray-500 mb-2">Direct Line</h4>
                    <p className="text-xl font-medium">+234 703 990 5503</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              {...fadeIn}
              className="rounded-[3rem] overflow-hidden h-[500px] border border-white/5 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.84597780835!2d7.3820429!3d9.0338725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7dc48db1%3A0x762f275b26543f03!2sAbuja!5e0!3m2!1sen!2sng!4v1711379201234!5m2!1sen!2sng" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-dark border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <a href="#" className="font-display text-3xl font-extrabold tracking-tighter">
              DE PLAE <span className="text-gold">GYM & SPA</span>
            </a>
            <div className="flex flex-wrap justify-center gap-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-gold transition-colors">{link.name}</a>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-[10px] font-bold uppercase tracking-widest text-gray-600">
            <p>&copy; {new Date().getFullYear()} De Plae Gym & Spa. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all group flex items-center gap-3"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold text-sm">
          Chat with us
        </span>
      </a>
    </div>
  );
}
