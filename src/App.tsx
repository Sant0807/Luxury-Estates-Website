import { useState, useEffect, useRef } from 'react';
import { 
  X, Phone, Mail, MapPin, Clock, BedDouble, Car, Maximize2,
  MessageCircle, Star, ChevronLeft, ChevronRight
} from 'lucide-react';

// SVG Icons for social media (inline to avoid import issues)
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

// WhatsApp number
const WHATSAPP_NUMBER = '5511999999999';
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const navItems = [
  { label: 'Início', href: '#início' },
  { label: 'Imóveis', href: '#imóveis' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Contato', href: '#contato' }
];

// Properties data
const properties = [
  {
    id: 1,
    title: 'Casa em Condomínio Alphaville',
    location: 'Alphaville, SP',
    area: 480,
    suites: 5,
    parking: 4,
    price: 3200000,
    tag: 'EXCLUSIVO',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    type: 'Casa'
  },
  {
    id: 2,
    title: 'Apartamento Alto Padrão Itaim',
    location: 'Itaim Bibi, SP',
    area: 210,
    suites: 3,
    parking: 2,
    price: 1850000,
    tag: 'NOVO',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    type: 'Apartamento'
  },
  {
    id: 3,
    title: 'Cobertura Duplex Jardins',
    location: 'Jardins, SP',
    area: 380,
    suites: 4,
    parking: 5,
    price: 5500000,
    tag: 'MAIS PROCURADO',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    type: 'Cobertura'
  }
];

// Testimonials data
const testimonials = [
  {
    name: 'Mariana R.',
    profession: 'Professora, São Paulo',
    text: 'Eu estava com medo de dar um passo errado. O time me explicou tudo com paciência, encontrou o apartamento perfeito e ainda negociou um preço melhor do que eu esperava. Recomendo de olhos fechados.'
  },
  {
    name: 'Carlos M.',
    profession: 'Empresário, Campinas',
    text: 'Processo 100% transparente. Sem enrolação, sem letras miúdas. Em 3 semanas minha casa estava escriturada. Nunca vi uma imobiliária tão organizada.'
  },
  {
    name: 'Juliana F.',
    profession: 'Médica, São Paulo',
    text: 'Senti que me trataram como família, não como cliente. Comprei meu primeiro apartamento com total segurança. Obrigada por tornarem esse sonho possível.'
  },
  {
    name: 'Roberto A.',
    profession: 'Diretor, Rio de Janeiro',
    text: 'Precisava vender rápido por conta de uma mudança. Em 18 dias o imóvel estava vendido pelo valor que eu queria. Impressionante.'
  }
];

// Stats data
const stats = [
  { value: 1200, suffix: '+', label: 'imóveis vendidos' },
  { value: 14, suffix: '', label: 'anos de mercado' },
  { value: 3800, suffix: '+', label: 'famílias atendidas' },
  { value: 5, suffix: '★', label: 'avaliação no Google' }
];

// Services data
const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
    title: 'Compra de Imóveis',
    description: 'Encontramos o imóvel perfeito para você e sua família com segurança e transparência total.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="16"/>
        <line x1="8" y1="12" x2="16" y2="12"/>
      </svg>
    ),
    title: 'Venda de Imóveis',
    description: 'Vendemos seu imóvel pelo melhor valor com estratégia de marketing premium e visibilidade global.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
    ),
    title: 'Locação',
    description: 'Gerenciamos sua propriedade com excelência, encontrando inquilinos qualificados e confiáveis.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    title: 'Assessoria Financeira',
    description: 'Consultoria especializada em financiamento, investimentos e planejamento patrimonial.'
  }
];

// Gallery images
const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', alt: 'Interior luxuoso' },
  { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80', alt: 'Sala de estar' },
  { src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80', alt: 'Cozinha gourmet' },
  { src: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80', alt: 'Área externa' },
  { src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80', alt: 'Suíte master' },
  { src: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80', alt: 'Piscina' },
];

// Loading Screen
function Loader({ isLoaded, setIsLoaded }: { isLoaded: boolean; setIsLoaded: (v: boolean) => void }) {
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, [setIsLoaded]);

  return (
    <div className={`loader ${isLoaded ? 'hidden' : ''}`}>
      <div className="text-center">
        <div className="loader-logo">LUXURY ESTATES</div>
        <div className="mt-4 flex justify-center gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Custom Cursor
function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorX - 6}px, ${cursorY - 6}px)`;
      }
      
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return <div ref={cursorRef} className={`custom-cursor ${isHovering ? 'hover' : ''}`} />;
}

// Scroll Progress Bar
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}

// Header
function Header({ scrolled, mobileMenuOpen, setMobileMenuOpen }: { 
  scrolled: boolean; 
  mobileMenuOpen: boolean; 
  setMobileMenuOpen: (v: boolean) => void;
}) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-serif text-xl md:text-2xl tracking-[0.3em] text-white">
          LUXURY <span className="text-[#C9A84C]">ESTATES</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="header-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href.replace('#', ''));
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* WhatsApp Button Desktop */}
        <a
          href={`${WHATSAPP_BASE_URL}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20imóveis.`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#20BD5A] transition-all"
        >
          <MessageCircle size={18} />
          <span>Fale Conosco</span>
        </a>

        {/* Hamburger */}
        <button 
          className="hamburger md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

// Mobile Menu
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  return (
    <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
      <button 
        className="absolute top-6 right-6 text-white"
        onClick={onClose}
        aria-label="Fechar menu"
      >
        <X size={32} />
      </button>
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(item.href.replace('#', ''));
          }}
        >
          {item.label}
        </a>
      ))}
      <a
        href={`${WHATSAPP_BASE_URL}?text=Olá!%20Gostaria%20de%20saber%20mais.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full mt-4"
        onClick={onClose}
      >
        <MessageCircle size={20} />
        <span>Fale Conosco</span>
      </a>
    </div>
  );
}

// Hero Section
function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 30;
    const y = (clientY / window.innerHeight - 0.5) * 30;
    setMousePosition({ x, y });
  };

  return (
    <section id="início" className="hero" onMouseMove={handleMouseMove}>
      {/* Background Image da Mansão Real */}
      <div 
        className="mansion-bg"
        style={{
          transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px) scale(1.1)`,
          transition: 'transform 0.5s ease-out'
        }}
      />
      
      {/* Stars Background */}
      <div className="hero-stars" />
      
      {/* 3D Luxury Monogram */}
      <div 
        className="mansion-container"
        style={{ 
          transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.4}px)`,
          transition: 'transform 0.4s ease-out'
        }}
      >
        <div className="mansion-light-rays" />

        <div className="luxury-monogram-3d" aria-hidden="true">
          <div className="monogram-orbit">
            <div className="monogram-ring monogram-ring-back" />
            {[...Array(18)].map((_, index) => (
              <span
                key={index}
                className="monogram-depth"
                style={{ transform: `translateZ(${-index * 5}px)` }}
              >
                LE
              </span>
            ))}
            <div className="monogram-face monogram-face-front">
              <span className="monogram-main">LE</span>
              <span className="monogram-separator" />
              <span className="monogram-sub">Luxury Estates</span>
            </div>
            <div className="monogram-face monogram-face-back">
              <span className="monogram-main">LE</span>
              <span className="monogram-separator" />
              <span className="monogram-sub">Luxury Estates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Line */}
      <div 
        className="hero-line w-full h-px"
        style={{ top: '60%' }}
      />

      {/* Hero Content */}
      <div className="hero-content relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="hero-label text-[#C9A84C] text-xs md:text-sm tracking-[0.3em] uppercase mb-5">
          Exclusividade que você merece
        </p>
        
        <h1 className="hero-title font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-6">
          Seu novo lar está<br />esperando por você
        </h1>
        
        <p className="hero-subtitle text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Encontre o imóvel dos seus sonhos com quem entende de qualidade, 
          localização e o que realmente importa para a sua família.
        </p>
        
        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <a
            href={`${WHATSAPP_BASE_URL}?text=Olá!%20Vi%20o%20site%20e%20quero%20conhecer%20os%20imóveis%20disponíveis.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex items-center gap-3 text-lg"
          >
            <MessageCircle size={22} />
            <span>Falar com um especialista agora</span>
          </a>
          
          <a
            href="#imóveis"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('imóveis')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-outline flex items-center gap-2 text-lg"
          >
            Ver imóveis disponíveis
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs tracking-widest uppercase">Role para descobrir</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#C9A84C] to-transparent" />
      </div>
    </section>
  );
}

// Stats Bar
function StatsBar() {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = stat.value / steps;
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(timer);
              }
              setCounters(prev => {
                const newCounters = [...prev];
                newCounters[index] = Math.floor(current);
                return newCounters;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={ref} className="stats-bar py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="stat-number">
                {counters[index]}{stat.suffix}
              </div>
              <div className="stat-label mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Property Card
function PropertyCard({ property }: { property: typeof properties[0] }) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="property-card group">
      <div className="property-image aspect-[4/3]">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <span className="property-tag">{property.tag}</span>
        <div className="property-overlay">
          <a
            href={`${WHATSAPP_BASE_URL}?text=Olá!%20Tenho%20interesse%20no%20imóvel%3A%20${encodeURIComponent(property.title)}.%20Pode%20me%20passar%20mais%20detalhes%3F`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm"
          >
            Ver detalhes
          </a>
        </div>
        <a
          href={`${WHATSAPP_BASE_URL}?text=Olá!%20Tenho%20interesse%20no%20imóvel%3A%20${encodeURIComponent(property.title)}.%20Pode%20me%20passar%20mais%20detalhes%3F`}
          target="_blank"
          rel="noopener noreferrer"
          className="property-whatsapp"
          aria-label="Tenho interesse"
        >
          <MessageCircle size={24} color="white" />
        </a>
      </div>
      <div className="property-info">
        <p className="property-location flex items-center gap-2">
          <MapPin size={14} />
          {property.location}
        </p>
        <h3 className="property-title">{property.title}</h3>
        <div className="property-details">
          <span className="flex items-center gap-1">
            <Maximize2 size={14} />
            {property.area}m²
          </span>
          <span className="flex items-center gap-1">
            <BedDouble size={14} />
            {property.suites} suítes
          </span>
          <span className="flex items-center gap-1">
            <Car size={14} />
            {property.parking} vagas
          </span>
        </div>
        <div className="property-price">{formatPrice(property.price)}</div>
      </div>
    </div>
  );
}

// Properties Section
function Properties() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="imóveis" className="section-dark section-block" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`section-heading text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-4">
            Portfólio exclusivo
          </p>
          <h2 className="section-title text-white">
            Os mais desejados do momento
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Selecionados por nossos especialistas para quem não abre mão do melhor
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className={`transition-all duration-700 delay-${index * 150} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Storytelling Section
function Storytelling() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="section-light section-block" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className={`max-w-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className="text-[#B87333] text-xs tracking-[0.3em] uppercase mb-6">
              Nossa filosofia
            </p>
            <h2 className="section-title text-[#0A0A0A] leading-snug">
              Comprar um imóvel é uma das decisões<br />
              mais importantes da sua vida.<br />
              <span className="text-[#C9A84C]">Você merece quem leva isso a sério.</span>
            </h2>
            
            <div className="mt-8 md:mt-10 space-y-5 md:space-y-6 text-gray-700 leading-relaxed">
              <p>
                Sabemos que por trás de cada visita, há uma história. Um casal que quer 
                mais espaço para a família crescer. Uma mãe que sonha com quintal para 
                os filhos brincarem. Um empresário que busca segurança e status para 
                viver bem o que conquistou.
              </p>
              <p>
                Na Luxury Estates, não vendemos imóveis. Ajudamos pessoas a encontrarem 
                o lugar onde a vida vai ser vivida. Com tempo, atenção e sem pressão.
              </p>
              <p>
                Nossa equipe te acompanha do primeiro contato até a chave na mão — 
                e além disso.
              </p>
            </div>

            <a
              href={`${WHATSAPP_BASE_URL}?text=Olá!%20Quero%20conversar%20sem%20compromisso%20sobre%20um%20imóvel.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-[#C9A84C] font-medium hover:underline underline-offset-4"
            >
              Quer conversar sem compromisso? 
              <span className="flex items-center gap-1">
                Falar agora no WhatsApp
                <MessageCircle size={18} />
              </span>
            </a>
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Família em lar moderno"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-[#C9A84C]/30 rounded-2xl" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#C9A84C]/10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="section-dark section-block" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`section-heading text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-4">
            Histórias reais
          </p>
          <h2 className="section-title text-white">
            O que dizem quem já chegou em casa
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Confiança construída através de resultados
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto md:px-6">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="testimonial-card text-center">
                    <div className="stars flex justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} fill="#C9A84C" color="#C9A84C" />
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="text-white font-medium text-lg">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm mt-1">{testimonial.profession}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="testimonial-arrow testimonial-arrow-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={handleNext}
            className="testimonial-arrow testimonial-arrow-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all"
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#C9A84C] w-8' : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-dark section-block relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`section-heading text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-4">
            Nossos Serviços
          </p>
          <h2 className="section-title text-white">
            Excelência em cada detalhe
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Soluções completas para todas as suas necessidades imobiliárias
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-card group p-7 md:p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05] hover:border-[#C9A84C]/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#C9A84C]/20 to-transparent flex items-center justify-center mb-6 text-[#C9A84C] group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium text-white mb-3">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={`text-center mt-12 md:mt-14 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href={`${WHATSAPP_BASE_URL}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Luxury%20Estates.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <span>Conhecer todos os serviços</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// Gallery Section
function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-light section-block" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`section-heading text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-[#B87333] text-xs tracking-[0.3em] uppercase mb-4">
            Galeria de Imagens
          </p>
          <h2 className="section-title text-[#0A0A0A]">
            Ambientes que inspiram
          </h2>
          <p className="text-gray-600 mx-auto mt-4 max-w-xl">
            Cada espaço foi cuidadosamente pensado para oferecer o máximo em conforto e sofisticação
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.alt}
              className={`gallery-item relative rounded-xl overflow-hidden aspect-square group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className={`text-center mt-10 md:mt-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="#" 
            className="inline-flex items-center gap-3 text-[#0A0A0A] hover:text-[#C9A84C] transition-colors"
          >
            <InstagramIcon />
            <span className="font-medium">Siga @luxuryestates</span>
            <span className="text-gray-400">para mais inspirações</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// Partners/Brands Section
function Partners() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const partners = [
    'Mercedes-Benz Real Estate',
    'Porsche Design Living',
    'Ritz-Carlton Residences',
    'Trump International',
    'Four Seasons Private Residences'
  ];

  return (
    <section className="section-dark py-12 md:py-16 border-y border-white/5" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-8 md:mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-600 text-sm tracking-widest uppercase">
            Parceiros e Certificações
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-5 md:gap-x-14">
          {partners.map((partner, index) => (
            <div 
              key={partner}
              className={`text-gray-500 font-light tracking-wider text-sm md:text-base transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contato" className="final-cta section-block" ref={ref}>
      <div className={`max-w-4xl mx-auto px-6 text-center transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        {/* Decorative Element */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
        </div>

        <h2 className="section-title text-white mb-6">
          O imóvel certo não espera.<br />
          <span className="text-[#C9A84C]">Você também não deveria.</span>
        </h2>
        
        <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto mb-12">
          Nossos especialistas estão online agora mesmo. Uma conversa de 5 minutos 
          pode mudar onde você vai morar para sempre.
        </p>

        <a
          href={`${WHATSAPP_BASE_URL}?text=Olá!%20Quero%20conhecer%20os%20imóveis%20disponíveis%20e%20receber%20atendimento%20personalizado.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 btn-whatsapp text-base md:text-xl px-7 md:px-10 py-4 md:py-5 max-w-full text-center leading-tight"
        >
          <MessageCircle size={28} />
          <span>QUERO FALAR COM UM ESPECIALISTA AGORA</span>
        </a>

        <div className="flex items-center justify-center gap-2 mt-6 text-gray-500 text-sm">
          <span className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse" />
          <span>Respondemos em até 5 minutos durante o horário comercial</span>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="footer py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 md:mb-14">
          {/* Brand Column */}
          <div>
            <a href="#" className="font-serif text-2xl tracking-[0.3em] text-white">
              LUXURY <span className="text-[#C9A84C]">ESTATES</span>
            </a>
            <p className="text-gray-500 mt-4 leading-relaxed">
              Transformando sonhos em endereços desde 2010. Sua jornada imobiliária 
              começa aqui, com excelência e comprometimento.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-all" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-all" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-all" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-6 tracking-wider">Navegação</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="footer-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Imóveis */}
          <div>
            <h4 className="text-white font-medium mb-6 tracking-wider">Imóveis</h4>
            <ul className="space-y-3">
              {['Casas de luxo', 'Apartamentos', 'Coberturas', 'Empresas'].map((item) => (
                <li key={item}>
                  <a href="#imóveis" className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-6 tracking-wider">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="text-[#C9A84C] mt-1 flex-shrink-0" />
                <span>Av. Brigadeiro Faria Lima, 3477<br />Itaim Bibi, São Paulo - SP</span>
              </li>
              <li>
                <a href="tel:+551130303030" className="flex items-center gap-3 text-gray-400 hover:text-[#C9A84C] transition-all">
                  <Phone size={18} className="text-[#C9A84C]" />
                  (11) 3030-3030
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#25D366] transition-all"
                >
                  <MessageCircle size={18} className="text-[#25D366]" />
                  (11) 99999-9999
                </a>
              </li>
              <li>
                <a href="mailto:contato@luxuryestates.com.br" className="flex items-center gap-3 text-gray-400 hover:text-[#C9A84C] transition-all">
                  <Mail size={18} className="text-[#C9A84C]" />
                  contato@luxuryestates.com.br
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Clock size={18} className="text-[#C9A84C] mt-1 flex-shrink-0" />
                <span>Seg-Sex: 9h às 19h<br />Sáb: 9h às 14h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © 2024 Luxury Estates. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-2">
            <span>CRECI:</span>
            <span className="text-[#C9A84C]">29.678-J</span>
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-white transition-all">Política de Privacidade</a>
            <a href="#" className="text-gray-600 hover:text-white transition-all">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Floating WhatsApp Button
function FloatingWhatsApp() {
  return (
    <a
      href={`${WHATSAPP_BASE_URL}?text=Olá!%20Vi%20o%20site%20e%20gostaria%20de%20mais%20informações.`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} color="white" />
    </a>
  );
}

// Main App Component
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Loader isLoaded={isLoading} setIsLoaded={setIsLoading} />
      <CustomCursor />
      <ScrollProgress />
      <Header scrolled={scrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      
      <main>
        <Hero />
        <StatsBar />
        <Properties />
        <Services />
        <Storytelling />
        <Gallery />
        <Partners />
        <Testimonials />
        <FinalCTA />
      </main>
      
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}