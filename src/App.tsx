/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Star, 
  Leaf, 
  Clock, 
  ShieldCheck, 
  Instagram, 
  Mail, 
  MessageCircle,
  Target,
  Heart,
  RotateCcw
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Collection', href: '#collection' },
    { name: 'Ritual', href: '#ritual' },
    { name: 'Shop', href: '#shop' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-cream/80 backdrop-blur-nav py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-3xl font-display tracking-widest text-espresso">SUSHYAM</a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium uppercase tracking-widest hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-espresso"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-cream z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-2xl font-display tracking-widest">SUSHYAM</span>
              <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close Menu">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-display hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-auto pt-8 border-t border-sand/30">
              <p className="text-sm uppercase tracking-widest text-bark mb-4">Since 1883</p>
              <div className="flex gap-6">
                <Instagram size={20} />
                <Mail size={20} />
                <MessageCircle size={20} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center pt-20 overflow-hidden">
      {/* Left Content */}
      <div className="w-full md:w-[55%] px-6 md:px-20 py-12 md:py-0 flex flex-col justify-center z-10">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-6"
        >
          Since 1883 · Pure Botanical Oil
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-display leading-[0.9] mb-8"
        >
          Wear your <br />
          <span className="italic">essence</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-bark max-w-md mb-10 leading-relaxed"
        >
          No alcohol. No synthetics. Just pure fragrance oil — rolled on, worn all day.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <a href="#collection" className="px-8 py-4 bg-espresso text-cream text-center uppercase tracking-widest text-sm font-semibold hover:bg-gold transition-colors duration-300">
            Shop the Collection
          </a>
          <a href="#ritual" className="px-8 py-4 border border-espresso text-espresso text-center uppercase tracking-widest text-sm font-semibold hover:bg-espresso hover:text-cream transition-all duration-300">
            Discover Ritual
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap gap-6 md:gap-10"
        >
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-bark">
            <Leaf size={16} className="text-gold" /> 100% Natural
          </div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-bark">
            <Clock size={16} className="text-gold" /> 8h+ Wear
          </div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-bark">
            <ShieldCheck size={16} className="text-gold" /> No Chemicals
          </div>
        </motion.div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-[45%] h-[50vh] md:h-screen relative flex items-center justify-center bg-warm-bg/30">
        <div className="absolute w-[80%] h-[80%] rounded-full bg-warm-bg blur-3xl opacity-50 animate-pulse" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 w-[80%] max-w-md animate-float"
        >
          <img 
            src="https://picsum.photos/seed/perfume-group/800/1000" 
            alt="Sushyam Collection Group Shot" 
            className="w-full h-auto drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <ChevronDown size={32} className="text-sand" />
      </motion.div>
    </section>
  );
};

const Marquee = () => {
  return (
    <div className="bg-espresso py-6 overflow-hidden border-y border-gold/20">
      <div className="flex whitespace-nowrap animate-marquee">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center">
            <span className="text-gold text-sm uppercase tracking-[0.4em] font-medium mx-8">Pure Botanical Oil</span>
            <span className="text-gold/40 text-sm mx-4">·</span>
            <span className="text-gold text-sm uppercase tracking-[0.4em] font-medium mx-8">Alcohol Free</span>
            <span className="text-gold/40 text-sm mx-4">·</span>
            <span className="text-gold text-sm uppercase tracking-[0.4em] font-medium mx-8">8+ Hours of Wear</span>
            <span className="text-gold/40 text-sm mx-4">·</span>
            <span className="text-gold text-sm uppercase tracking-[0.4em] font-medium mx-8">Since 1883</span>
            <span className="text-gold/40 text-sm mx-4">·</span>
            <span className="text-gold text-sm uppercase tracking-[0.4em] font-medium mx-8">Hand Crafted Fragrance</span>
            <span className="text-gold/40 text-sm mx-4">·</span>
            <span className="text-gold text-sm uppercase tracking-[0.4em] font-medium mx-8">Roll On</span>
            <span className="text-gold/40 text-sm mx-4">·</span>
            <span className="text-gold text-sm uppercase tracking-[0.4em] font-medium mx-8">Wear Your Essence</span>
            <span className="text-gold/40 text-sm mx-4">·</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="about" className="py-24 md:py-40 px-6 max-w-7xl mx-auto" ref={ref}>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-6 block">Our Story</span>
          <h2 className="text-5xl md:text-6xl font-display mb-8 leading-tight">
            A century of scent. <br />
            <span className="italic">Bottled for you.</span>
          </h2>
          <p className="text-lg text-bark leading-relaxed mb-12">
            Sushyam has been crafting pure fragrance oils since 1883. Born from a love of Indian botanical heritage, every drop is free of alcohol, synthetic fixatives, and harsh chemicals. What you get is raw, honest fragrance — exactly as nature intended.
          </p>
          
          <div className="flex gap-8 md:gap-12">
            {[
              { val: '100%', label: 'Natural Oils' },
              { val: '8h+', label: 'Wear Time' },
              { val: '0', label: 'Harsh Chemicals' }
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-4xl font-display text-espresso mb-1">{stat.val}</span>
                <div className="w-8 h-[1px] bg-gold mb-2" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-bark">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        <motion.div style={{ y }} className="relative">
          <div className="absolute inset-0 bg-warm-bg/20 -m-6 rounded-sm -z-10" />
          <img 
            src="https://picsum.photos/seed/flovera-bottle/800/1000" 
            alt="Flovera Perfume Bottle" 
            className="w-full h-auto shadow-2xl rounded-sm grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
};

interface ScentCardProps {
  scent: {
    name: string;
    tags: string;
    image: string;
    badge?: string;
  };
}

const ScentCard: React.FC<ScentCardProps> = ({ scent }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group bg-white border border-sand/20 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={scent.image} 
          alt={scent.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/10 transition-colors duration-300" />
        {scent.badge && (
          <div className="absolute top-4 right-4 bg-gold text-cream text-[10px] uppercase tracking-widest px-3 py-1 font-bold">
            {scent.badge}
          </div>
        )}
      </div>
      
      <div className="p-8">
        <h3 className="text-3xl font-display mb-2">{scent.name}</h3>
        <p className="text-xs uppercase tracking-widest text-bark/60 mb-6">{scent.tags}</p>
        
        <div className="flex gap-3 mb-8">
          <div className="flex-1 border border-sand/40 py-2 px-3 text-center rounded-full text-xs font-medium text-bark hover:border-gold hover:text-gold transition-colors cursor-pointer">
            3ml — ₹99
          </div>
          <div className="flex-1 border border-sand/40 py-2 px-3 text-center rounded-full text-xs font-medium text-bark hover:border-gold hover:text-gold transition-colors cursor-pointer">
            5ml — ₹149
          </div>
        </div>
        
        <button 
          onClick={handleAdd}
          className={`w-full py-4 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-300 ${isAdded ? 'bg-green-600 text-white' : 'bg-espresso text-cream hover:bg-gold'}`}
        >
          {isAdded ? '✓ Added!' : 'Add to Bag'}
        </button>
      </div>
    </motion.div>
  );
};

const Collection = () => {
  const scents = [
    { 
      name: 'Mahoghony', 
      tags: 'Woody · Warm · Grounded', 
      image: 'https://picsum.photos/seed/mahoghony/800/1000',
      badge: '🔥 Low Stock'
    },
    { 
      name: 'God Father', 
      tags: 'Intense · Smoky · Commanding', 
      image: 'https://picsum.photos/seed/godfather/800/1000',
      badge: '⚡ Bestseller'
    },
    { 
      name: 'Flovera', 
      tags: 'Floral · Soft · Luminous', 
      image: 'https://picsum.photos/seed/flovera/800/1000' 
    },
    { 
      name: 'Evan', 
      tags: 'Fresh · Aquatic · Clean', 
      image: 'https://picsum.photos/seed/evan/800/1000' 
    },
  ];

  return (
    <section id="collection" className="py-24 md:py-40 bg-warm-bg/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-6 block">The Collection</span>
          <h2 className="text-5xl md:text-6xl font-display mb-6">Find your signature scent</h2>
          <p className="text-bark max-w-lg mx-auto">Four distinct personalities. One pure formula.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {scents.map((scent) => (
            <ScentCard key={scent.name} scent={scent} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Ritual = () => {
  const steps = [
    { 
      num: '01', 
      icon: <Target size={32} />, 
      title: "Roll, Don't Rub", 
      desc: "Apply directly to skin. Rolling distributes the oil evenly without breaking down the molecular structure." 
    },
    { 
      num: '02', 
      icon: <Heart size={32} />, 
      title: "Pulse Points", 
      desc: "Inner wrists, behind ears, base of throat. These warm spots amplify and project your scent naturally." 
    },
    { 
      num: '03', 
      icon: <RotateCcw size={32} />, 
      title: "Layer & Linger", 
      desc: "Sushyam oils layer beautifully. Try Flovera + Evan for a fresh floral, or Mahoghony + God Father for depth." 
    },
  ];

  return (
    <section id="ritual" className="py-24 md:py-40 bg-espresso text-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-6 block">The Ritual</span>
          <h2 className="text-5xl md:text-6xl font-display mb-6">Three steps. All day scent.</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.num} className="relative p-10 border-t border-gold/30 flex flex-col items-start group">
              <span className="absolute top-4 left-0 text-xs font-bold text-gold tracking-widest">{step.num}</span>
              <div className="mb-8 text-gold group-hover:scale-110 transition-transform duration-500">{step.icon}</div>
              <h3 className="text-3xl font-display mb-6">{step.title}</h3>
              <p className="text-cream/70 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { 
      text: "I switched from expensive department store perfumes to Sushyam Evan and I'll never go back. Lasts the whole day, smells incredible.", 
      author: "Priya M., Mumbai" 
    },
    { 
      text: "God Father is my daily signature now. Rich, smoky, and unlike anything else at this price point.", 
      author: "Arjun S., Delhi" 
    },
    { 
      text: "Bought the 3ml to try — ordered 5ml the next day. Flovera is just perfect.", 
      author: "Meera K., Bangalore" 
    },
  ];

  return (
    <section className="py-24 md:py-40 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-6 block">Worn & Loved</span>
          <h2 className="text-5xl md:text-6xl font-display mb-6">What they're saying</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-10 shadow-sm border border-sand/10 flex flex-col">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} className="fill-gold text-gold" />)}
              </div>
              <p className="text-lg italic text-bark leading-relaxed mb-8 flex-grow">
                "{review.text}"
              </p>
              <p className="text-sm font-bold uppercase tracking-widest text-espresso">— {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SizeGuide = () => {
  return (
    <section id="shop" className="py-24 md:py-40 px-6 bg-warm-bg/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-display text-center mb-20 italic">Choose your size</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* 3ml */}
          <div className="bg-white p-12 border border-sand/30 flex flex-col items-center text-center">
            <span className="text-xs uppercase tracking-widest font-bold text-bark mb-4">Pocket Size</span>
            <span className="text-6xl font-display mb-2">3ml</span>
            <span className="text-2xl font-display text-gold mb-8">₹99</span>
            <p className="text-bark/70 mb-10 leading-relaxed">Perfect for trying a new scent or carrying in your bag. Approx. 90 applications.</p>
            <button className="mt-auto w-full py-4 border border-espresso text-xs uppercase tracking-widest font-bold hover:bg-espresso hover:text-cream transition-all duration-300">
              Start with 3ml
            </button>
          </div>
          
          {/* 5ml */}
          <div className="bg-espresso p-12 border-2 border-gold flex flex-col items-center text-center relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-cream text-[10px] uppercase tracking-[0.2em] px-4 py-1 font-bold">
              Most Popular
            </div>
            <span className="text-xs uppercase tracking-widest font-bold text-gold/80 mb-4">Daily Driver</span>
            <span className="text-6xl font-display text-cream mb-2">5ml</span>
            <span className="text-2xl font-display text-gold mb-8">₹149</span>
            <p className="text-cream/70 mb-10 leading-relaxed">Your everyday signature. Approx. 150 applications. Best value.</p>
            <button className="mt-auto w-full py-4 bg-gold text-cream text-xs uppercase tracking-widest font-bold hover:bg-cream hover:text-espresso transition-all duration-300">
              Get the 5ml
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-32 md:py-48 px-6 bg-espresso text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-display text-cream mb-8">Pure fragrance. <br /><span className="italic">Honest price.</span></h2>
        <p className="text-cream/60 text-lg mb-12 leading-relaxed">
          Available in two sizes — a 3ml pocket companion at ₹99, or the 5ml bottle at ₹149. Pure botanical oil, zero compromise.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#collection" className="px-10 py-5 bg-gold text-cream uppercase tracking-widest text-sm font-bold hover:bg-cream hover:text-espresso transition-all duration-300">
            Shop the Collection
          </a>
          <a href="#about" className="px-10 py-5 border border-cream/30 text-cream uppercase tracking-widest text-sm font-bold hover:bg-cream hover:text-espresso transition-all duration-300">
            Learn Our Story
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-espresso text-cream pt-24 pb-12 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div>
            <h4 className="text-3xl font-display tracking-widest mb-6">SUSHYAM</h4>
            <p className="text-cream/50 text-sm leading-relaxed mb-6 italic">"Wear your essence"</p>
            <p className="text-xs uppercase tracking-widest text-gold font-bold">Since 1883</p>
          </div>
          
          <div>
            <h5 className="text-xs uppercase tracking-[0.2em] font-bold text-gold mb-8">Quick Links</h5>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sm text-cream/60 hover:text-cream transition-colors">Home</a>
              <a href="#collection" className="text-sm text-cream/60 hover:text-cream transition-colors">Collection</a>
              <a href="#about" className="text-sm text-cream/60 hover:text-cream transition-colors">Our Story</a>
              <a href="#ritual" className="text-sm text-cream/60 hover:text-cream transition-colors">Ritual</a>
            </div>
          </div>
          
          <div>
            <h5 className="text-xs uppercase tracking-[0.2em] font-bold text-gold mb-8">Contact</h5>
            <div className="flex flex-col gap-4">
              <a href="mailto:hello@sushyam.com" className="text-sm text-cream/60 hover:text-cream transition-colors">hello@sushyam.com</a>
              <a href="#" className="text-sm text-cream/60 hover:text-cream transition-colors">Instagram</a>
              <a href="#" className="text-sm text-cream/60 hover:text-cream transition-colors">WhatsApp Order</a>
            </div>
          </div>
          
          <div>
            <h5 className="text-xs uppercase tracking-[0.2em] font-bold text-gold mb-8">Trust</h5>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-medium text-cream/70">
                <Leaf size={16} className="text-gold" /> 100% Natural
              </div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-medium text-cream/70">
                <ShieldCheck size={16} className="text-gold" /> Alcohol Free
              </div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-medium text-cream/70">
                <span className="text-gold font-bold">🇮🇳</span> Made in India
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-cream/10 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-cream/30">© 2026 Sushyam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const StickyBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      className="fixed bottom-0 left-0 w-full z-[100] bg-espresso text-cream p-4 md:p-6 shadow-2xl flex items-center justify-between border-t border-gold/30"
    >
      <div className="flex items-center gap-4">
        <div className="hidden sm:block">
          <p className="text-xs uppercase tracking-widest font-bold text-gold">Sushyam Roll-On</p>
          <p className="text-sm font-display italic">From ₹99</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <a href="#collection" className="px-6 py-3 bg-gold text-cream text-[10px] uppercase tracking-widest font-bold hover:bg-cream hover:text-espresso transition-all duration-300">
          Shop Now
        </a>
        <button onClick={() => setIsDismissed(true)} className="text-cream/50 hover:text-cream">
          <X size={20} />
        </button>
      </div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  // Fade-in animation for sections
  const Section = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="selection:bg-gold selection:text-cream">
      <Navbar />
      
      <main>
        <Hero />
        <Marquee />
        
        <Section>
          <About />
        </Section>
        
        <Section>
          <Collection />
        </Section>
        
        <Section>
          <Ritual />
        </Section>
        
        <Section>
          <Testimonials />
        </Section>
        
        <Section>
          <SizeGuide />
        </Section>
        
        <Section>
          <FinalCTA />
        </Section>
      </main>
      
      <Footer />
      <StickyBar />
    </div>
  );
}
