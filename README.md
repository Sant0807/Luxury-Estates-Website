# 🏛️ LUXURY ESTATES - Premium Real Estate Website

> Uma experiência digital de alto padrão para imobiliária premium, desenvolvida com React, TypeScript, Vite e Tailwind CSS. Inspirado em marcas de luxo como Rolls-Royce e Sotheby's Realty.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.3.2-646CFF?logo=vite)](https://vitejs.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1.17-06B6D4?logo=tailwindcss)](https://tailwindcss.com)

## ✨ Features

- **🎨 Design Luxury**: Dark luxury com toques em dourado champagne
- **🎬 Animações Avançadas**: Efeitos 3D, parallax, scroll animations e transições suaves
- **🏠 3D Mansion**: Casa 3D renderizada com CSS 3D transforms
- **🖱️ Custom Cursor**: Cursor customizado com seguimento de mouse em tempo real
- **📱 Responsive Design**: Mobile-first, otimizado para todos os dispositivos
- **⚡ Performance**: Vite + otimizações CSS para GPU acceleration
- **💬 WhatsApp Integration**: Botão flutuante e CTAs integrados com WhatsApp
- **📊 Stats Counter**: Números animados com contador de contagem
- **🏘️ Property Gallery**: Grid responsivo de imóveis com hover effects
- **💭 Testimonials Carousel**: Carrossel automático de depoimentos com navegação
- **🔄 Smooth Scroll**: Navegação suave e barra de progresso de scroll
- **🔐 Type Safety**: TypeScript em 100% do código

## 🛠️ Tech Stack

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **React** | 19.2.3 | UI Framework |
| **TypeScript** | 5.9.3 | Type Safety |
| **Vite** | 7.3.2 | Build Tool |
| **Tailwind CSS** | 4.1.17 | Styling Utility |
| **Lucide React** | 1.14.0 | Icon Library |
| **@tailwindcss/vite** | 4.1.17 | Tailwind Integration |

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0.0 ou superior
- npm ou yarn

### Installation

```bash
# Clone o repositório
git clone https://github.com/Sant0807/Luxury-Estates-Website.git
cd Luxury-Estates-Website

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:5173`

### Build para Produção

```bash
# Crie uma build otimizada
npm run build

# Preview da build
npm run preview
```

## 🎨 Paleta de Cores

```css
:root {
  --gold: #C9A84C;              /* Dourado Champagne */
  --gold-light: #D4AF37;        /* Dourado Claro */
  --gold-dark: #B8860B;         /* Dourado Escuro */
  --black: #0A0A0A;             /* Preto Profundo */
  --ivory: #F5F0E8;             /* Off-white Marfim */
  --copper: #B87333;            /* Cobre */
  --whatsapp: #25D366;          /* WhatsApp Green */
}
```

## 📝 Tipografia

- **Headlines**: Cormorant Garamond (Light 300, 48-96px)
- **Body**: Inter (Regular 400, 16-18px, line-height 1.7)
- **Labels**: Letter-spacing 0.3em, font-weight 500

## 📁 Estrutura do Projeto

```
Luxury-Estates-Website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/          # Componentes React
│   ├── utils/
│   │   └── cn.ts           # Utilidade de className
│   ├── App.tsx             # Componente principal
│   ├── index.css           # Estilos globais (CSS + Tailwind)
│   └── main.tsx            # Entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── SPEC.md                 # Especificação de design
└── README.md
```

## 📱 Responsividade

| Breakpoint | Características |
|-----------|----------------|
| **Mobile** | Stack vertical, menu hamburger, font reduzida |
| **Tablet** | Grid 2 colunas, spacing ajustado |
| **Desktop** | Layout 3 colunas, animações completas, hover effects |

## 🎯 Seções da Página

1. **Loading Screen** - Logo animada (1.5s)
2. **Header** - Navegação fixa com blur backdrop
3. **Hero Section** - 3D mansion, texto animado com stagger, CTAs
4. **Stats Bar** - Números com contador animado
5. **Featured Properties** - Grid de imóveis premium com hover
6. **Services** - 4 serviços com ícones e descrições
7. **Storytelling** - Narrativa da marca com imagem
8. **Gallery** - Galeria responsiva com overlay
9. **Partners** - Parcerias e certificações
10. **Testimonials** - Carrossel automático de 4 depoimentos
11. **Final CTA** - Call-to-action com gradiente dourado
12. **Footer** - Contato completo com links sociais

## 💬 WhatsApp Integration

Todas as CTAs estão pré-configuradas para WhatsApp. Para alterar o número:

```typescript
// src/App.tsx
const WHATSAPP_NUMBER = 'SEUNUMERO'; // Formato: 5511999999999
```

## 🎬 Animações Principais

- **Entrada**: Fade + Slide-up (0.4s ease-out, stagger 0.15s)
- **Hover**: Scale 1.03, shadow expansion (0.3s ease)
- **Scroll**: Parallax sutil (0.5), fade-in-on-scroll
- **Custom Cursor**: Seguimento com delay 0.1s (lerp)
- **Stats Counter**: Animação de contagem até o valor final
- **Carousel**: Fade transition entre slides (0.5s)

## ⚡ Performance

- ✅ CSS transforms para GPU acceleration
- ✅ Lazy loading de imagens
- ✅ Intersection Observer para animações on-demand
- ✅ Preconnect para Google Fonts
- ✅ Single file build com vite-plugin-singlefile
- ✅ Tree-shaking com Vite
- ✅ Otimização de bundle com rollup

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev      # Inicia servidor local com hot reload

# Produção
npm run build    # Build otimizado para produção
npm run preview  # Preview da build
```

## 📖 Documentação Completa

Veja `SPEC.md` para especificação completa do design, cores, tipografia, componentes e arquitetura técnica.

## 🎓 Aprendizados Técnicos

Este projeto demonstra:

- ✨ CSS 3D Transforms para elementos complexos
- 🎨 Tailwind CSS avançado com custom utilities
- 🔄 React Hooks customizados (useScrollProgress, useMousePosition, useInView)
- 📊 Intersection Observer API para scroll animations
- 🎬 RequestAnimationFrame para animações suaves
- 📱 Mobile-first responsive design
- ♿ Acessibilidade com ARIA labels
- 🚀 Vite + React best practices
- 🎯 TypeScript strict mode

## 📄 Licença

MIT License - veja LICENSE file para detalhes.

## 👨‍💻 Autor

**Sant0807**
- GitHub: [@Sant0807](https://github.com/Sant0807)

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se livre para abrir issues ou pull requests.

---

**Desenvolvido com ❤️ em 2026**

*Transformando sonhos em endereços digitais com excelência e sofisticação.*