"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Car, Package, Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="large"
        background="floatingGradient"
        cardStyle="soft-shadow"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Início",
          id: "#hero",
        },
        {
          name: "Sobre",
          id: "#about",
        },
        {
          name: "Serviços",
          id: "#services",
        },
        {
          name: "Cardápio",
          id: "#menu",
        },
        {
          name: "Depoimentos",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contato",
          id: "#contact",
        },
      ]}
      brandName="Sabores do Brasil"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-static",
      }}
      title="Sabores do Brasil Cuiabá"
      description="Autêntica culinária brasileira no coração de Cuiabá. Venha saborear tradição e frescor em cada prato, num ambiente acolhedor e familiar."
      buttons={[
        {
          text: "Ver Cardápio",
          href: "#menu",
        },
        {
          text: "Reservar Mesa",
          href: "#contact",
        },
      ]}
      carouselItems={[
        {
          id: "hero-1",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-friends-taking-selfie_23-2149212129.jpg",
          imageAlt: "Delicious Brazilian Feijoada",
        },
        {
          id: "hero-2",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-enjoying-food_23-2149304406.jpg",
          imageAlt: "Traditional Moqueca de Peixe",
        },
        {
          id: "hero-3",
          imageSrc: "http://img.b2bpic.net/free-photo/table-set-dinning-table_1339-3458.jpg",
          imageAlt: "Cozy Restaurant Interior",
        },
        {
          id: "hero-4",
          imageSrc: "http://img.b2bpic.net/free-photo/waiter-pouring-salt-lamb-rib-kebab-served-wooden-board_140725-5265.jpg",
          imageAlt: "Picanha Steak Brazilian BBQ",
        },
        {
          id: "hero-5",
          imageSrc: "http://img.b2bpic.net/free-photo/crispy-butter-cookies-with-sugar-powder-wooden-platter_114579-61781.jpg",
          imageAlt: "Variety of Brazilian Desserts",
        },
        {
          id: "hero-6",
          imageSrc: "http://img.b2bpic.net/free-photo/vegetable-salad-with-mixed-ingredients_114579-3291.jpg",
          imageAlt: "Fresh Salad Bar Selection",
        },
      ]}
      autoPlay={true}
      autoPlayInterval={4000}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Nossa História e Paixão"
      description="Há mais de uma década, o Restaurante Sabores do Brasil Cuiabá encanta paladares com receitas tradicionais e um toque de inovação. Somos uma empresa orgulhosamente liderada por empreendedoras e um espaço acolhedor para a comunidade LGBTQ+. Nossa missão é trazer a verdadeira essência da culinária brasileira para a sua mesa, com ingredientes frescos e amor em cada preparo."
      metrics={[
        {
          value: "10+",
          title: "Anos de Tradição",
        },
        {
          value: "4.5",
          title: "Estrelas no Google",
        },
        {
          value: "366+",
          title: "Avaliações Positivas",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/front-view-barista-cafe_23-2148436129.jpg"
      imageAlt="Restaurante Sabores do Brasil Cuiabá interior"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: Utensils,
          title: "Refeição no Local",
          description: "Desfrute de uma experiência gastronômica completa em nosso ambiente acolhedor e climatizado, perfeito para famílias e amigos.",
        },
        {
          icon: Package,
          title: "Para Viagem",
          description: "Leve o sabor do Brasil para casa ou para o trabalho com nossas refeições preparadas com o mesmo carinho e qualidade, prontas para você.",
        },
        {
          icon: Car,
          title: "Entrega sem Contato",
          description: "Receba seus pratos favoritos com segurança e comodidade, diretamente na sua porta. Priorizamos sua saúde e bem-estar.",
        },
      ]}
      title="Nossos Serviços para Você"
      description="Desfrute da culinária brasileira onde e como preferir. Praticidade e sabor a cada escolha, pensados para sua conveniência e segurança."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={true}
      products={[
        {
          id: "feijoada-completa",
          name: "Feijoada Completa",
          price: "R$ 38,00",
          variant: "Tradicional",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-brazilian-food-arrangement_23-2148725054.jpg",
          imageAlt: "Feijoada completa com arroz, couve e farofa",
        },
        {
          id: "moqueca-de-camarao",
          name: "Moqueca de Camarão",
          price: "R$ 45,00",
          variant: "Baiana",
          imageSrc: "http://img.b2bpic.net/free-photo/bowl-white-beans-with-parsley-blue-background_114579-39773.jpg",
          imageAlt: "Moqueca de camarão em panela de barro",
        },
        {
          id: "picanha-na-chapa",
          name: "Picanha na Chapa",
          price: "R$ 55,00",
          variant: "Grelhada",
          imageSrc: "http://img.b2bpic.net/free-photo/meat-with-lettuce-chips_1203-411.jpg",
          imageAlt: "Picanha fatiada na chapa com acompanhamentos",
        },
        {
          id: "bobo-de-camarao",
          name: "Bobó de Camarão",
          price: "R$ 42,00",
          variant: "Cremoso",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-spoons-with-spices-arrangement_23-2149439560.jpg",
          imageAlt: "Bobó de camarão cremoso com purê de mandioca",
        },
        {
          id: "salada-especial",
          name: "Salada Especial",
          price: "R$ 28,00",
          variant: "Fresco",
          imageSrc: "http://img.b2bpic.net/free-photo/salmon-salad-orange-egg-capers-sun-dried-tomato-onion-basil-side-view_141793-1827.jpg",
          imageAlt: "Salada fresca com vegetais da estação",
        },
        {
          id: "pudim-de-leite",
          name: "Pudim de Leite",
          price: "R$ 15,00",
          variant: "Caseiro",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hand-pouring-chocolate-cake_23-2148875253.jpg",
          imageAlt: "Pudim de leite condensado com calda de caramelo",
        },
      ]}
      title="Descubra Nosso Cardápio"
      description="Uma seleção de pratos que celebram a riqueza da gastronomia brasileira. Dos clássicos regionais aos nossos especiais, cada um preparado com ingredientes de alta qualidade e muito sabor."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Ana Clara",
          handle: "@anaclarafoodie",
          testimonial: "O Sabores do Brasil é parada obrigatória em Cuiabá! A feijoada é autêntica e o ambiente, uma delícia. Sinto-me em casa toda vez que venho aqui. Parabéns pela iniciativa de acolhimento!",
          imageSrc: "http://img.b2bpic.net/free-photo/friends-eating-restaurant_23-2148006619.jpg",
          imageAlt: "Ana Clara, cliente satisfeita",
        },
        {
          id: "2",
          name: "Marcos Silva",
          handle: "@marcosviagens",
          testimonial: "Viajo muito e raramente encontro um restaurante com a alma tão brasileira. A moqueca é um espetáculo à parte. Recomendo a todos que buscam a verdadeira culinária do país!",
          imageSrc: "http://img.b2bpic.net/free-photo/asian-people-having-dinner-party_23-2149552679.jpg",
          imageAlt: "Marcos Silva, viajante e apreciador de comida",
        },
        {
          id: "3",
          name: "Patrícia Ribeiro",
          handle: "@patriciacomebem",
          testimonial: "Fiquei encantada com a hospitalidade e os sabores incríveis. O pudim de leite é o melhor que já provei! E saber que é uma empresa de empreendedoras me deixa ainda mais feliz em apoiar.",
          imageSrc: "http://img.b2bpic.net/free-photo/brazilian-family-enjoying-meal-together_23-2151156152.jpg",
          imageAlt: "Patrícia Ribeiro, entusiasta da gastronomia",
        },
        {
          id: "4",
          name: "Lucas Farias",
          handle: "@lucasgourmet",
          testimonial: "A picanha na chapa é suculenta e impecável. O atendimento é sempre cordial e atencioso. É o meu restaurante favorito para um almoço de negócios ou com a família.",
          imageSrc: "http://img.b2bpic.net/free-photo/group-friends-eating-restaurant_23-2148006670.jpg",
          imageAlt: "Lucas Farias, cliente frequente",
        },
        {
          id: "5",
          name: "Renata Martins",
          handle: "@renatamartins",
          testimonial: "Desde a entrada até a sobremesa, tudo é perfeito. O cardápio tem opções para todos os gostos e a qualidade é inquestionável. Um verdadeiro achado em Cuiabá!",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-smiling-asian-girl-putting-coffee-tamper-brew-capuccino-prepare-order_1258-203400.jpg",
          imageAlt: "Renata Martins, fã da culinária brasileira",
        },
      ]}
      title="O Que Nossos Clientes Dizem"
      description="A satisfação de quem prova nossos sabores é a nossa maior recompensa. Veja alguns depoimentos de quem já se deliciou com a autêntica culinária do Sabores do Brasil Cuiabá."
      speed={40}
      topMarqueeDirection="left"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Guia Essencial de Cuiabá",
        "Sabores do Centro-Oeste",
        "Prêmios Culinários MT",
        "Foodie's Choice Magazine",
        "Gastronomia Brasil",
        "Apoiadores LGBTQ+ Culinária",
        "Jornal da Cozinha Cuiabana",
      ]}
      title="Reconhecimento e Parcerias"
      description="Orgulho de ser reconhecido pela crítica especializada e de colaborar com a comunidade local e a cena gastronômica de Cuiabá."
      speed={40}
      showCard={false}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Qual o horário de funcionamento do restaurante?",
          content: "Estamos abertos de segunda a sexta-feira, das 11:00 às 14:00, para almoço. Consulte-nos para horários especiais em feriados.",
        },
        {
          id: "2",
          title: "É necessário fazer reserva?",
          content: "Recomendamos fazer reserva, especialmente para grupos maiores, para garantir sua mesa e uma experiência mais tranquila. Você pode ligar para (65) 98119-5739.",
        },
        {
          id: "3",
          title: "Vocês têm opções vegetarianas ou veganas?",
          content: "Sim, oferecemos diversas opções vegetarianas e podemos adaptar alguns pratos para atender a dietas veganas. Por favor, informe nossa equipe sobre suas preferências.",
        },
        {
          id: "4",
          title: "O restaurante é acessível para pessoas com deficiência?",
          content: "Nosso espaço é projetado para ser inclusivo e acessível a todos os clientes, com rampas e banheiros adaptados. Sinta-se à vontade para nos contatar se precisar de assistência adicional.",
        },
      ]}
      title="Perguntas Frequentes"
      description="Encontre respostas para suas dúvidas mais comuns sobre reservas, horários, opções de cardápio e mais."
      faqsAnimation="slide-up"
      showCard={true}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      text="Estamos localizados na Av. Ayrton Senna da Silva, 3003 - São Francisco, Cuiabá - MT, 78088-800. Aberto de segunda a sexta-feira, das 11:00 às 14:00. Para reservas ou dúvidas, ligue para (65) 98119-5739."
      buttons={[
        {
          text: "Ver Rotas",
          href: "https://www.google.com/maps/dir/?api=1&destination=Av.+Ayrton+Senna+da+Silva,+3003+-+São+Francisco,+Cuiabá+-+MT,+78088-800",
        },
        {
          text: "Ligar Agora",
          href: "tel:+5565981195739",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Sobre",
          items: [
            {
              label: "Nossa História",
              href: "#about",
            },
            {
              label: "Valores",
              href: "#about",
            },
            {
              label: "Equipe",
              href: "#about",
            },
          ],
        },
        {
          title: "Cardápio",
          items: [
            {
              label: "Pratos Principais",
              href: "#menu",
            },
            {
              label: "Saladas",
              href: "#menu",
            },
            {
              label: "Bebidas",
              href: "#menu",
            },
            {
              label: "Sobremesas",
              href: "#menu",
            },
          ],
        },
        {
          title: "Contato",
          items: [
            {
              label: "Localização",
              href: "#contact",
            },
            {
              label: "Reservas",
              href: "#contact",
            },
            {
              label: "Trabalhe Conosco",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Sabores do Brasil. Todos os direitos reservados."
      bottomRightText="Feito com paixão em Cuiabá."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
