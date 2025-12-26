import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';

// --- Fade In Animation Wrapper ---
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = "", threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
        rootMargin: '40px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const style = {
    transitionDelay: `${delay}ms`,
    willChange: 'opacity, transform, filter',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out-expo transform ${
        isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-[4px]'
      } ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

// --- Buttons ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'link' | 'icon';
  children: React.ReactNode;
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  icon = false,
  ...props 
}) => {
  // STRICT PILL SHAPE + DENSE TYPOGRAPHY + MICRO-INTERACTION SCALING
  const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 text-[0.85rem] tracking-wide leading-none font-sans active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group";
  
  const variants = {
    primary: "bg-gold-500 text-dark-950 px-8 py-4 shadow-[0_4px_25px_rgba(201,162,39,0.25)] hover:shadow-[0_8px_35px_rgba(201,162,39,0.4)] border border-transparent hover:-translate-y-0.5 hover:bg-gold-400 after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent after:translate-x-[-200%] hover:after:animate-shimmer after:z-10",
    secondary: "bg-white/5 backdrop-blur-md text-white border border-white/10 hover:bg-white/10 hover:border-gold-500/30 px-8 py-4 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]",
    outline: "border border-gold-500/50 text-gold-500 hover:bg-gold-500 hover:text-dark-950 px-6 py-3",
    link: "text-gold-500 hover:text-gold-400 p-0 bg-transparent hover:underline decoration-gold-500/30 underline-offset-4 active:scale-100",
    icon: "p-3 rounded-full border border-white/10 hover:border-gold-500 hover:text-gold-500 bg-white/5 hover:shadow-[0_0_15px_rgba(201,162,39,0.2)]"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-20 flex items-center">
        {children}
        {icon && <ChevronRight className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />}
      </span>
    </button>
  );
};

// --- Glass Card ---
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", hover = true }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`glass-card rounded-[2rem] p-8 ${className}`}
    >
      {children}
    </div>
  );
};

// --- Module Wrapper (Section Container) ---
export const SectionModule: React.FC<{ children: React.ReactNode, id?: string, className?: string }> = ({ children, id, className = "" }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <div className="container mx-auto px-6 md:px-12">
      {children}
    </div>
  </section>
);

// --- Section Header ---
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  eyebrow?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  align = 'center',
  className = '',
  eyebrow
}) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <FadeIn delay={0}>
           <div className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase font-sans mb-4 opacity-90 inline-flex items-center gap-2">
             {align === 'center' && <span className="w-8 h-px bg-gold-500/50"></span>}
             {eyebrow}
             {align === 'center' && <span className="w-8 h-px bg-gold-500/50"></span>}
           </div>
        </FadeIn>
      )}
      
      <FadeIn delay={100}>
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-6 tracking-tighter text-white leading-[1.1] font-sans">
          {title}
        </h2>
      </FadeIn>

      {subtitle && (
        <FadeIn delay={200}>
          <p className="text-muted max-w-2xl text-base md:text-lg leading-relaxed mx-auto font-light tracking-tight opacity-80 font-sans">
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  );
};

// --- Slider Component ---
interface SliderProps {
  children: React.ReactNode;
  gap?: number;
}

export const Slider: React.FC<SliderProps> = ({ children, gap = 24 }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group/slider">
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 px-4 -mx-4 md:px-0 md:mx-0 scroll-smooth"
        style={{ gap: `${gap}px` }}
      >
        {children}
      </div>
      
      {/* Navigation Buttons - Fade in on hover */}
      <div className="hidden md:flex justify-end gap-3 -mt-6 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-500">
        <button 
          onClick={() => scroll('left')}
          className="w-12 h-12 rounded-full border border-white/10 hover:border-gold-500 text-muted hover:text-gold-500 bg-dark-800 flex items-center justify-center transition-all hover:scale-110 active:scale-90"
          aria-label="Scroll left"
        >
          <ArrowLeft size={18} />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="w-12 h-12 rounded-full border border-white/10 hover:border-gold-500 text-muted hover:text-gold-500 bg-dark-800 flex items-center justify-center transition-all hover:scale-110 active:scale-90"
          aria-label="Scroll right"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};