# LUXURY ESTATES - Imobiliária Premium

## Concept & Vision

Uma experiência digital de alto padrão que transmite exclusividade, sofisticação e confiança desde o primeiro instante. O site evoca a elegância de marcas como Rolls-Royce, Sotheby's Realty e Aston Martin — onde cada pixel é intencional e cada interação comunica prestígio. Dark luxury encontra minimalismo moderno, criando uma sensação de entrar em um mundo reservado para poucos.

## Design Language

### Aesthetic Direction
Inspirado em showrooms de luxo e galerias de arte contemporânea. Fundos profundos em preto e off-white marfim criam contraste dramático. AÇÕES em dourado champagne iluminam a experiência como reflexos de luz em superfícies polidas.

### Color Palette
- **Background Primary**: #0A0A0A (preto profundo)
- **Background Secondary**: #F5F0E8 (off-white marfim)
- **Accent Gold**: #C9A84C (champagne dourado)
- **Accent Gold Gradient**: linear-gradient(135deg, #C9A84C, #D4AF37, #B8860B)
- **Text Primary**: #FFFFFF (branco puro)
- **Text Secondary**: #9CA3AF (cinza platina)
- **Accent Copper**: #B87333 (cobre para detalhes)
- **WhatsApp Green**: #25D366

### Typography
- **Headlines**: Cormorant Garamond (Google Fonts), weight 300, sizes 48-96px
- **Body**: Inter (Google Fonts), weight 400, 16-18px, line-height 1.7
- **Labels/Uppercase**: Letter-spacing 0.3em, font-weight 500

### Spatial System
- Container max-width: 1400px
- Section padding: 120px vertical (desktop), 80px (mobile)
- Element spacing: 8px base unit (multiplos de 8)
- Generous whitespace para respirar e respirar sofisticação

### Motion Philosophy
- Entrada sequencial: elementos aparecem com fade + slide-up, 0.4s ease-out, stagger 0.15s
- Hover: scale 1.03, shadow expansion, 0.3s ease
- Scroll: parallax sutil 0.5 rate, fade-in-on-scroll para seções
- Partículas: movimento orgânico lento, bokeh dourado
- Loading: fade-out 0.5s após 1.5s

### Visual Assets
- Ícones: Lucide React (linha fina, elegantes)
- Imagens: Placeholder de alta qualidade via Unsplash (arquitetura luxury)
- Decorativos: linhas douradas finas, gradientes sutis, efeitos de luz

## Layout & Structure

### Page Flow
1. **Loading Screen** (1.5s) - Logo animada em dourado
2. **Hero Section** - 3D visual, partículas, texto animado, CTAs
3. **Credibility Bar** - Números animados com contagem
4. **Featured Properties** - Grid de 3 cards com hover effects
5. **Storytelling Section** - Texto persuasivo + imagem (fundo claro)
6. **Testimonials** - Carrossel automático
7. **Final CTA** - Gradiente dourado, urgência, WhatsApp
8. **Footer** - Completo com informações de contato

### Responsive Strategy
- Mobile-first: stack vertical, fonte reduzida, menu hamburger
- Tablet: grid 2 colunas, spacing ajustado
- Desktop: layout completo, 3 colunas, animações full

## Features & Interactions

### Header
- Fixed, blur backdrop, transparente → sólido no scroll
- Logo à esquerda, menu central, botão WhatsApp verde à direita
- Menu hamburger no mobile com overlay fullscreen

### Hero Section
- Casa 3D CSS rotating (CSS 3D transforms)
- Partículas douradas animadas (CSS animations)
- Texto sequencial com stagger animation
- Parallax no hover (mouse move tracking)
- Linha dourada animada atravessando

### Property Cards
- Hover: scale 1.03, zoom na imagem, botão aparece
- Tag de destaque no canto (EXCLUSIVO/NOVIDADE)
- Ícone WhatsApp flutuante
- Informações: tipo, bairro, m², suítes, vagas, preço

### Testimonials Carousel
- Auto-scroll a cada 4 segundos
- Dots de navegação
- Fade transition entre slides
- 4 depoimentos completos

### Floating WhatsApp Button
- Posição fixa inferior direito
- Animação pulse contínua
- Tooltip no hover

### Custom Cursor
- Bolinha dourada 12px
- Segue mouse com delay 0.1s (lerp)
- Scale no hover de elementos clicáveis

### Scroll Progress
- Barra dourada no topo da página
- Width corresponde ao progresso de scroll

## Component Inventory

### Button Primary (Gold)
- Background: gradient dourado
- Text: preto #000
- Border-radius: 50px
- Padding: 16px 32px
- Shadow: 0 0 30px rgba(201, 168, 76, 0.4)
- Hover: scale 1.03, shadow expand

### Button Secondary (Outline)
- Border: 1px solid dourado
- Text: branco
- Background: transparent
- Hover: background dourado 10% opacity

### Button WhatsApp
- Background: #25D366
- Icon: WhatsApp
- Text: branco
- Pulse animation

### Property Card
- Aspect ratio: 4:3
- Border-radius: 16px
- Overflow hidden
- Image overlay gradient
- Content padding: 24px

### Testimonial Card
- Background: rgba(255,255,255,0.05)
- Border: 1px solid rgba(201,168,76,0.2)
- Border-radius: 24px
- Padding: 40px
- Stars: gold filled

### Input Fields (for future contact form)
- Background: transparent
- Border-bottom: 1px solid rgba(255,255,255,0.2)
- Focus: border-color gold
- Placeholder: cinza platina

## Technical Approach

### Stack
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Lucide React (icons)
- Framer Motion (animations)

### Architecture
- Single page application
- Component-based structure
- Custom hooks: useScrollProgress, useMousePosition, useInView
- CSS modules for complex animations

### Performance
- Lazy loading de imagens
- Intersection Observer para animações
- CSS transforms para animações GPU-accelerated
- Preconnect para Google Fonts