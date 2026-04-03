import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, PlayCircle, Star, Users, BookOpen, Award, ShieldCheck, ArrowRight, Gift, Clock, MoreHorizontal, Globe, ThumbsUp, MessageSquare, Share2, Heart, BadgeCheck, ChevronDown, Check } from 'lucide-react';
import CountdownTimer from './components/CountdownTimer';
import SalesNotification from './components/SalesNotification';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const trackEvent = (eventName: string, params?: object) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', eventName, params);
    }
  };

  const bonuses = [
    {
      id: 1,
      title: "Velas Artesanais Como Negócio",
      description: "Aprende a elaborar lindas velas de soja, gel, aromáticas e decorativas para complementar o teu negócio.",
      value: "18€",
      image: "https://iili.io/q6ix419.jpg"
    },
    {
      id: 2,
      title: "Moldes Caseiros de Silicone",
      description: "Aprende o passo a passo para criar uma grande variedade de moldes em casa, permitindo-te poupar muito dinheiro.",
      value: "18€",
      image: "https://iili.io/q6i02v2.jpg"
    },
    {
      id: 3,
      title: "Cremes Faciais e Corporais",
      description: "Um guia completo para aprenderes a elaborar cremes para estrias, antirrugas, mãos e muito mais.",
      value: "25€",
      image: "https://iili.io/q6isKga.jpg"
    }
  ];

  const testimonials = [
    {
      name: "Ana Paula",
      text: "Amei o curso! Fiz para presentear e agora não paro de receber encomendas. O passo a passo é muito claro e as técnicas de acabamento ajudam muito a valorizar o trabalho. Recomendo demais para quem quer começar do zero!",
      days: "Há 2 dias",
      likes: 142,
      comments: 24,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
      image: "https://iili.io/BnqfUDx.jpg"
    },
    {
      name: "Juliana Silva",
      text: "Tão lindo e o método é super fácil de seguir. Este é um dos meus trabalhos preferidos! Amei cada detalhe das técnicas de forração, as caixas ficam perfeitas e o acabamento é impecável.",
      days: "Há 5 dias",
      likes: 98,
      comments: 15,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
      image: "https://iili.io/BnqxnFp.webp"
    },
    {
      name: "Carla Mendes",
      text: "Muito lindo, fácil de trabalhar, adorei! Já vendi 5 caixas só essa semana e as clientes estão pedindo mais. O investimento se pagou no primeiro dia de vendas! Realmente funciona.",
      days: "Há 9 dias",
      likes: 215,
      comments: 43,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop",
      image: "https://iili.io/BnqAMnn.jpg"
    },
    {
      name: "Maria Luiza",
      text: "Os sabonetes de glicerina são maravilhosos! O curso ensina tudo o que precisamos para começar um negócio lucrativo. Já estou a planear a minha primeira coleção!",
      days: "Há 1 dia",
      likes: 87,
      comments: 12,
      avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=150&h=150&auto=format&fit=crop",
      image: "https://iili.io/BnqaWYJ.jpg"
    },
    {
      name: "Fernanda Costa",
      text: "Estou apaixonada pelas técnicas de marmorização. Meus clientes ficaram encantados com o resultado final. O e-book é muito prático e direto ao ponto.",
      days: "Há 3 dias",
      likes: 156,
      comments: 28,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&h=150&auto=format&fit=crop",
      image: "https://iili.io/BnqNT5N.jpg"
    },
    {
      name: "Beatriz Rocha",
      text: "Nunca imaginei que poderia fazer algo tão profissional em casa. As receitas são nota 10! Recomendo a todas as minhas amigas.",
      days: "Há 4 dias",
      likes: 112,
      comments: 19,
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&h=150&auto=format&fit=crop",
      image: "https://iili.io/BnqmL6G.jpg"
    }
  ];

  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      {/* Top Banner */}
      <div className="bg-brand-primary text-white py-3 px-4 text-center text-sm font-medium">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          🚨 Acesso limitado — últimas 7 vagas disponíveis hoje
        </motion.p>
      </div>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Aprende com <span className="text-brand-accent">50 Receitas de Sabonetes de Glicerina Artesanais</span> e Cria um Rendimento em Casa
        </motion.h1>

        {/* Hero Image (Replaced Video) */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 group">
          <img 
            src="https://iili.io/BnByjFs.png" 
            alt="Workshop Preview" 
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>

        <motion.a 
          href="https://pay.hotmart.com/V104993640Q?checkoutMode=10&bid=1774391275941"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('InitiateCheckout', { content_name: 'E-book Sabonetes Artesanais (Top)', value: 10.00, currency: 'EUR' })}
          className="inline-block bg-brand-accent text-white px-12 py-4 rounded-2xl text-xl font-bold shadow-xl hover:bg-orange-600 transition-colors mb-12 no-underline"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Quero as receitas já
        </motion.a>

        <div className="grid md:grid-cols-3 gap-8 text-left py-8 border-y border-gray-200">
          <div className="flex gap-4">
            <CheckCircle2 className="text-brand-accent shrink-0" />
            <p className="text-sm font-medium text-gray-700">Aprende do zero ao avançado em tempo recorde</p>
          </div>
          <div className="flex gap-4">
            <CheckCircle2 className="text-brand-accent shrink-0" />
            <p className="text-sm font-medium text-gray-700">Cria produtos 100% naturais e personalizados</p>
          </div>
          <div className="flex gap-4">
            <CheckCircle2 className="text-brand-accent shrink-0" />
            <p className="text-sm font-medium text-gray-700">Gera rendimento extra a partir do conforto do teu lar</p>
          </div>
        </div>
      </section>

      {/* Main Offer Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-8 leading-tight text-brand-accent">
              Sentes que precisas de ganhar mais dinheiro, mas não sabes por onde começar?
            </h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-300 space-y-6 mb-10">
              <p>Muitas pessoas querem mudar a sua situação… mas acabam por desistir porque tudo parece complicado, caro ou confuso.</p>
              <p>A verdade é que existe uma forma simples de começar em casa, com algo acessível e que não exige experiência.</p>
            </div>
            <div className="max-w-2xl mx-auto bg-white/5 p-8 rounded-3xl border border-white/10">
              <ul className="space-y-6 text-left inline-block">
                {[
                  "👉 Vais aprender um método passo a passo para criar sabonetes artesanais",
                  "👉 Mesmo que nunca tenhas feito nada parecido",
                  "👉 E com potencial para começar a vender e gerar rendimento extra"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <p className="text-gray-200 font-medium">{item}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-brand-accent font-bold italic">Tudo explicado de forma prática, para que possas começar ainda hoje.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">O que vais aprender?</h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: "Sabonetes Aromáticos", image: "https://iili.io/Bn34KEg.jpg", desc: "Técnicas profissionais para criar aromas envolventes e duradouros." },
            { title: "Sabonetes para Batizados", image: "https://iili.io/Bn3sjWB.jpg", desc: "Lembranças delicadas e personalizadas para momentos especiais." },
            { title: "Sabonetes de Natal", image: "https://iili.io/Bn3DiS1.jpg", desc: "Designs festivos que são sucesso garantido de vendas em épocas festivas." },
            { title: "Sabonetes Tipo Cupcake", image: "https://iili.io/BnFdeZF.jpg", desc: "Aprende a técnica de 'confeitaria' em sabonete para resultados visuais incríveis." },
            { title: "Sabonetes Especiais", image: "https://iili.io/BnFfqzB.jpg", desc: "Fórmulas exclusivas para peles sensíveis e tratamentos específicos." },
            { title: "Efeito Mármore", image: "https://iili.io/BnFnR3X.jpg", desc: "Domina a técnica de mistura de cores para um acabamento luxuoso." },
            { title: "Sabonetes Terapêuticos", image: "https://iili.io/BnFc2DP.jpg", desc: "Uso de ervas e óleos essenciais para relaxamento e bem-estar profundo." },
            { title: "Sabonetes de Frutas", image: "https://iili.io/BnFXVIf.jpg", desc: "Criação de sabonetes con formatos e aromas realistas de frutas tropicais." }
          ].map((benefit, i) => (
            <motion.div 
              key={i}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={benefit.image} 
                  alt={benefit.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.a 
            href="https://pay.hotmart.com/V104993640Q?checkoutMode=10&bid=1774391275941"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('InitiateCheckout', { content_name: 'E-book Sabonetes Artesanais (Benefits)', value: 10.00, currency: 'EUR' })}
            className="inline-block bg-brand-accent text-white px-12 py-4 rounded-2xl text-xl font-bold shadow-xl hover:bg-orange-600 transition-colors no-underline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Quero começar agora
          </motion.a>
        </div>
      </section>

      {/* Facebook Style Testimonials */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 uppercase tracking-tight">o que os nossos alunos dizem</h2>
            <p className="text-gray-600">Mais de 3.000 pessoas já transformaram as suas vidas com o nosso método</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i} 
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* FB Header */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <h4 className="font-bold text-[15px] text-gray-900">{t.name}</h4>
                        <BadgeCheck className="w-[18px] h-[18px] text-white fill-blue-500" />
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <span>{t.days}</span>
                        <span>•</span>
                        <Globe className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-400">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>

                {/* FB Text */}
                <div className="px-4 pb-4">
                  <p className="text-[14px] text-gray-800 leading-relaxed">{t.text}</p>
                </div>

                {/* FB Image */}
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img 
                    src={t.image} 
                    alt="Testimonial work" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer" 
                  />
                </div>

                {/* FB Reactions Info */}
                <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between text-[13px] text-gray-500">
                  <div className="flex items-center gap-1">
                    <div className="flex -space-x-1">
                      <div className="bg-blue-500 rounded-full p-1 border-2 border-white">
                        <ThumbsUp className="w-2.5 h-2.5 text-white fill-white" />
                      </div>
                      <div className="bg-red-500 rounded-full p-1 border-2 border-white">
                        <Heart className="w-2.5 h-2.5 text-white fill-white" />
                      </div>
                    </div>
                    <span>{t.likes}</span>
                  </div>
                  <span>{t.comments} comentários</span>
                </div>

                {/* FB Action Buttons */}
                <div className="px-2 py-1 flex items-center justify-around text-[14px] font-semibold text-gray-600">
                  <button className="flex items-center gap-2 py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <ThumbsUp className="w-5 h-5" />
                    <span>Amei</span>
                  </button>
                  <button className="flex items-center gap-2 py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <MessageSquare className="w-5 h-5" />
                    <span>Comentar</span>
                  </button>
                  <button className="flex items-center gap-2 py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span>Partilhar</span>
                  </button>
                </div>

                {/* FB Comment Input (Visual only) */}
                <div className="p-4 bg-gray-50/50 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 relative">
                    <img 
                      src="https://iili.io/BnK1Gwl.png" 
                      alt="Me" 
                      className="w-full h-full object-cover scale-[2.5] origin-[center_35%]"
                    />
                  </div>
                  <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-500">
                    Escreva um comentário...
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Showcase Section */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Olha como vão ficar <span className="text-brand-accent">embalados e prontos para vender</span> os teus sabonetes artesanais de luxo.
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              "https://iili.io/BnBOMgf.webp",
              "https://iili.io/BnBv6ml.webp",
              "https://iili.io/BnBijmg.jpg",
              "https://iili.io/BnBQT1R.jpg"
            ].map((img, idx) => (
              <motion.div 
                key={idx}
                className="aspect-square rounded-2xl overflow-hidden shadow-sm border border-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <img src={img} alt="Soap Packaging" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
          
          <p className="text-xl font-medium text-gray-500 italic mb-12">E muito mais...</p>

          <motion.a 
            href="https://pay.hotmart.com/V104993640Q?checkoutMode=10&bid=1774391275941"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('InitiateCheckout', { content_name: 'E-book Sabonetes Artesanais (Packaging)', value: 10.00, currency: 'EUR' })}
            className="inline-block bg-brand-accent text-white px-12 py-4 rounded-2xl text-xl font-bold shadow-xl hover:bg-orange-600 transition-colors no-underline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Garantir o meu acesso
          </motion.a>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="bg-brand-secondary py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-brand-primary">Bónus Exclusivos Disponíveis HOJE</h2>
            <p className="text-gray-600">Ao adquirires o e-book hoje, recebes todos estes extras GRATUITAMENTE</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {bonuses.map((bonus) => (
              <div key={bonus.id} className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-brand-primary/10 p-4">
                <div className="h-64 flex justify-center items-center p-4">
                  <div className="relative w-40 h-56 shadow-[15px_15px_30px_rgba(0,0,0,0.3)] rounded-r-lg border-l-8 border-gray-100 overflow-hidden transform hover:-rotate-y-6 transition-transform duration-500">
                    <img src={bonus.image} alt={bonus.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-brand-primary text-white text-[10px] px-2 py-1 rounded-full uppercase font-bold">Bónus #{bonus.id}</span>
                    <span className="text-gray-400 line-through text-sm">Valor: {bonus.value}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{bonus.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 flex-1">{bonus.description}</p>
                  <div className="text-brand-accent font-bold text-lg">GRÁTIS</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Total Value Section */}
      <section className="bg-brand-secondary/30 py-16">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10 leading-tight">
            Se fosse adquirir tudo separadamente, o seu investimento seria:
          </h2>
          
          <div className="bg-white rounded-[32px] shadow-xl p-8 md:p-10 border border-gray-100">
            <div className="space-y-6">
              <div className="flex justify-between items-center text-gray-600 pb-4 border-b border-gray-50">
                <span className="text-lg">E-book 50 Receitas de Sabonetes</span>
                <span className="font-bold text-gray-900">37,00€</span>
              </div>
              <div className="flex justify-between items-center text-gray-600 pb-4 border-b border-gray-50">
                <span className="text-lg">Bónus 1: Velas Artesanais</span>
                <span className="font-bold text-gray-900">12,00€</span>
              </div>
              <div className="flex justify-between items-center text-gray-600 pb-4 border-b border-gray-50">
                <span className="text-lg">Bónus 2: Moldes de Silicone</span>
                <span className="font-bold text-gray-900">12,00€</span>
              </div>
              <div className="flex justify-between items-center text-gray-600 pb-6 border-b border-gray-50">
                <span className="text-lg">Bónus 3: Cremes Faciais</span>
                <span className="font-bold text-gray-900">19,00€</span>
              </div>
              
              <div className="flex justify-between items-center pt-4">
                <span className="text-xl font-black text-gray-900 uppercase tracking-wider">VALOR TOTAL:</span>
                <span className="text-3xl font-bold text-red-500 line-through decoration-gray-900 decoration-4">80,00€</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Award className="w-16 h-16 text-brand-accent mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 italic text-gray-900">Oferta Especial de Lançamento</h2>
          <p className="text-gray-600 mb-12 text-lg">
            O valor total deste pacote (E-book + 3 Bónus) é superior a <span className="font-bold text-gray-900">70 €</span>. 
            Mas hoje, queremos ajudar-te a começar o teu negócio com um investimento mínimo.
          </p>

          <div className="relative p-12 rounded-[40px] border-2 border-brand-accent overflow-hidden group">
            {/* Background Image Overlay */}
            <div 
              className="absolute inset-0 z-0 opacity-[0.08] group-hover:opacity-[0.12] transition-opacity duration-700"
              style={{ 
                backgroundImage: 'url(https://iili.io/BnByjFs.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="bg-brand-accent text-white px-8 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6 shadow-lg">
                70% desconto
              </div>
              
              <div className="flex flex-col items-center mb-8">
                <span className="text-gray-400 line-through text-2xl mb-2">37,00€</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl md:text-8xl font-bold text-brand-accent">10€</span>
                </div>
                <p className="text-gray-500 mt-4 font-medium uppercase tracking-widest text-xs">Pagamento Único • Acesso Vitalício</p>
              </div>

              <motion.a 
                href="https://pay.hotmart.com/V104993640Q?checkoutMode=10&bid=1774391275941"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('InitiateCheckout', { content_name: 'E-book Sabonetes Artesanais', value: 10.00, currency: 'EUR' })}
                className="w-full bg-brand-accent text-white py-6 rounded-2xl text-xl font-bold shadow-xl hover:bg-orange-600 transition-colors flex items-center justify-center gap-3 group no-underline"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Sim, quero todas as receitas mais os bónus
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <div className="mt-8 flex items-center justify-center gap-6 text-green-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase">Compra Segura</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase">Acesso Imediato</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-12">
            <CountdownTimer />
            
            <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-8 rounded-[32px] border border-gray-100 max-w-2xl">
              <div className="relative w-24 h-24 shrink-0">
                <div className="absolute inset-0 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="text-white w-12 h-12 stroke-[4px]" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Garantia Incondicional de 7 Dias</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tem 7 dias para testar o método. Se por qualquer motivo achar que não é para si, basta enviar um e-mail e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-600">Tudo o que precisas de saber antes de começar</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Como recebo o acesso ao curso?",
                a: "O acesso é imediato! Assim que o teu pagamento for confirmado, receberás um e-mail com os dados de acesso para descarregares o e-book e todos os bónus."
              },
              {
                q: "Preciso de experiência prévia para começar?",
                a: "Não! O nosso método foi desenhado para quem está a começar do zero absoluto. Explicamos tudo passo a passo, desde os materiais básicos até às técnicas avançadas."
              },
              {
                q: "O pagamento é seguro?",
                a: "Totalmente seguro. Utilizamos uma plataforma de pagamentos líder de mercado, com criptografia de ponta para garantir a segurança dos teus dados."
              },
              {
                q: "Tenho acesso vitalício?",
                a: "Sim! Uma vez adquirido, o conteúdo é teu para sempre. Podes consultar as receitas e os bónus sempre que quiseres, no teu próprio ritmo."
              },
              {
                q: "Posso vender os sabonetes que aprender a fazer?",
                a: "Com certeza! O objetivo principal é que cries o teu próprio negócio. Ensinamos técnicas profissionais para que os teus produtos tenham um acabamento de luxo pronto para o mercado."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <button 
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <h3 className="text-lg font-bold text-gray-900 flex gap-3">
                    <span className="text-brand-accent">?</span>
                    {faq.q}
                  </h3>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-gray-600 leading-relaxed pl-6 border-l-2 border-brand-accent/20">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-xs mb-4">
            Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de forma alguma. FACEBOOK é uma marca comercial da FACEBOOK, Inc.
          </p>
          <p className="mt-8 text-gray-600 text-[10px]">© 2026 Segredos dos Sabonetes de Glicerina. Todos os direitos reservados.</p>
        </div>
      </footer>

      <SalesNotification />
    </div>
  );
}
