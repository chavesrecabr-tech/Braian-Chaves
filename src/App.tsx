import { motion } from 'motion/react';
import { CheckCircle2, PlayCircle, Star, Users, BookOpen, Award, ShieldCheck, ArrowRight, Gift, Clock } from 'lucide-react';
import CountdownTimer from './components/CountdownTimer';
import SalesNotification from './components/SalesNotification';

export default function App() {
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
      name: "Maria Helena",
      text: "Alguém já comprou? Recomendo vivamente! As instruções são muito claras e detalhadas. Já comecei a vender para a minha família e amigos!",
      days: "2d",
      likes: 187
    },
    {
      name: "Marta Judith",
      text: "Muito obrigada, já recebi os livros! Fiquei surpreendida com a rapidez. Tudo muito claro para quem não conhecia nada do tema.",
      days: "1d",
      likes: 89
    },
    {
      name: "Fabián Morales",
      text: "Excelente o livro, muito bem explicado cada detalhe. Estou a ler neste momento e estou a adorar!",
      days: "Agora",
      likes: 42
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
          Torna-te numa especialista em sabonetes artesanais em menos de 7 dias e começa o teu próprio negócio lucrativo em casa
        </motion.p>
      </div>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Transforma a tua Paixão em <span className="text-brand-accent">Lucro Real</span> com Sabonetes Artesanais
        </motion.h1>

        {/* Hero Image (Replaced Video) */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 group">
          <img 
            src="https://iili.io/q6smyB4.png" 
            alt="Workshop Preview" 
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>

        <motion.button 
          onClick={() => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-brand-accent text-white px-12 py-4 rounded-2xl text-xl font-bold shadow-xl hover:bg-orange-600 transition-colors mb-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          QUERO O E-BOOK
        </motion.button>

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
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Descarrega AGORA o E-book que te tornará uma <span className="text-brand-accent">Especialista</span>
            </h2>
            <ul className="space-y-6">
              {[
                "Desenvolverás competências de negócio para iniciar e crescer",
                "Obterás as informações necessárias para te destacares no mercado",
                "Aprenderás o passo a passo desde o mais básico até ao avançado"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="bg-brand-accent/20 p-1 rounded">
                    <CheckCircle2 className="text-brand-accent w-5 h-5" />
                  </div>
                  <p className="text-gray-300">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://iili.io/q6PnxFs.jpg" 
              alt="Ebook Cover" 
              className="rounded-lg shadow-[0_0_50px_rgba(255,99,33,0.3)] transform rotate-3 hover:rotate-0 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 bg-brand-accent p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold">10€</p>
              <p className="text-xs uppercase tracking-widest opacity-80">Único Pagamento</p>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Sabonetes Aromáticos", icon: <Star /> },
            { title: "Sabonetes para Batizados", icon: <Users /> },
            { title: "Sabonetes de Natal", icon: <Gift /> },
            { title: "Sabonetes Tipo Cupcake", icon: <BookOpen /> },
            { title: "Sabonetes Especiais", icon: <Award /> },
            { title: "Efeito Mármore", icon: <ShieldCheck /> }
          ].map((benefit, i) => (
            <motion.div 
              key={i}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
            >
              <div className="text-brand-accent mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-500 text-sm">Técnicas profissionais explicadas de forma simples para obteres resultados perfeitos desde a primeira tentativa.</p>
            </motion.div>
          ))}
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

      {/* Pricing Section */}
      <section id="pricing-section" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Award className="w-16 h-16 text-brand-accent mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 italic text-gray-900">Oferta Especial de Lançamento</h2>
          <p className="text-gray-600 mb-12 text-lg">
            O valor total deste pacote (E-book + 3 Bónus) é superior a <span className="font-bold text-gray-900">80 €</span>. 
            Mas hoje, queremos ajudar-te a começar o teu negócio com um investimento mínimo.
          </p>

          <div className="bg-brand-secondary p-12 rounded-[40px] border-2 border-brand-accent relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand-accent text-white px-6 py-2 rounded-bl-2xl text-sm font-bold uppercase tracking-widest">
              60% Desconto
            </div>
            
            <div className="flex flex-col items-center mb-8">
              <span className="text-gray-400 line-through text-2xl mb-2">38,00€</span>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl md:text-8xl font-bold text-brand-accent">10€</span>
              </div>
              <p className="text-gray-500 mt-4 font-medium uppercase tracking-widest text-xs">Pagamento Único • Acesso Vitalício</p>
            </div>

            <motion.a 
              href="https://pay.hotmart.com/V104993640Q?checkoutMode=10&bid=1774391275941"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-brand-accent text-white py-6 rounded-2xl text-xl font-bold shadow-xl hover:bg-orange-600 transition-colors flex items-center justify-center gap-3 group no-underline"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              SIM, QUERO O E-BOOK COM TODOS OS BÓNUS
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

          <div className="mt-12">
            <CountdownTimer />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="fill-brand-accent text-brand-accent w-6 h-6" />)}
            </div>
            <h2 className="text-3xl font-bold text-gray-900">O que dizem as nossas alunas</h2>
            <p className="text-gray-500 mt-2">Mais de 5.000 mulheres já transformaram as suas vidas</p>
          </div>

          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i} 
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gray-200 rounded-full shrink-0 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${t.name}`} alt={t.name} referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <span className="text-xs text-gray-400">• {t.days}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{t.text}</p>
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-400">
                    <button className="hover:text-brand-accent transition-colors">Gosto</button>
                    <button className="hover:text-brand-accent transition-colors">Responder</button>
                    <div className="flex items-center gap-1">
                      <div className="bg-brand-accent rounded-full p-0.5">
                        <Star className="w-2 h-2 text-white fill-white" />
                      </div>
                      <span>{t.likes}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-8 mb-8 opacity-50 grayscale">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Hotmart_logo.svg" alt="Hotmart" className="h-8" />
          </div>
          <p className="text-gray-500 text-xs mb-4">
            Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de forma alguma. FACEBOOK é uma marca comercial da FACEBOOK, Inc.
          </p>
          <div className="flex justify-center gap-6 text-xs text-gray-400 font-medium uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>
          <p className="mt-8 text-gray-600 text-[10px]">© 2026 Segredos dos Sabonetes de Glicerina. Todos os direitos reservados.</p>
        </div>
      </footer>

      <SalesNotification />
    </div>
  );
}
