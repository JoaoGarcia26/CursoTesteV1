import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Users, 
  TrendingUp, 
  Download, 
  Hash, 
  Type, 
  Shield, 
  Gift, 
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Star,
  Zap,
  Eye,
  Heart,
  Share2
} from 'lucide-react';

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          return 15 * 60; // Reset to 15 minutes
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Testimonial carousel
  const testimonials = [
    {
      name: "Ana Silva",
      handle: "@anaviraliza",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Saí de 200 para +50K seguidores em 2 meses!",
      metrics: "+2.5M views no último mês"
    },
    {
      name: "João Pedro",
      handle: "@jpconteudo",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Faturei R$ 12K só com os primeiros clipes!",
      metrics: "+180K seguidores em 60 dias"
    },
    {
      name: "Mariana Costa",
      handle: "@mariviralcontent",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Meus Reels passaram de 100 para +800K views!",
      metrics: "Taxa de engajamento: 15%"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const scrollToOrder = () => {
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col justify-center items-center px-4 py-8">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="inline-block bg-gradient-to-r from-[#00FF5A] to-green-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
              🔥 OFERTA LIMITADA
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
              Transforme qualquer perfil em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF5A] to-green-400">
                máquina de views
              </span>{' '}
              e renda
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              +650 clipes prontos para Reels & TikTok — por apenas{' '}
              <span className="text-[#00FF5A] font-bold">R$ 10</span>
            </p>
          </div>

          {/* Phone Mockups */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative">
                <div className="bg-gray-800 rounded-3xl p-2 shadow-2xl">
                  <div className="bg-black rounded-2xl aspect-[9/16] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 opacity-80"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-12 h-12 text-white" fill="white" />
                    </div>
                    {/* Mock content */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Heart className="w-4 h-4 text-white" />
                        <span className="text-xs text-white">125K</span>
                        <Share2 className="w-4 h-4 text-white ml-auto" />
                      </div>
                      <div className="text-xs text-white">
                        Viral em 24h! 🚀 #trending
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollToOrder}
            className="bg-gradient-to-r from-[#00FF5A] to-green-400 text-black px-8 py-4 rounded-full font-black text-lg hover:shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 animate-pulse"
          >
            ⚡ QUERO VIRALIZAR AGORA!
          </button>
        </div>
      </section>

      {/* Social Proof Carousel */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-12">
            Quem já está <span className="text-[#00FF5A]">VIRALIZANDO</span>
          </h2>
          
          <div className="relative">
            <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl">
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full mb-4 border-2 border-[#00FF5A]"
                />
                <h3 className="text-lg font-bold text-white mb-1">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-[#00FF5A] text-sm mb-4">
                  {testimonials[currentTestimonial].handle}
                </p>
                <p className="text-xl font-bold mb-2">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-[#00FF5A] font-semibold">
                  {testimonials[currentTestimonial].metrics}
                </p>
              </div>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-[#00FF5A]' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-4">
            O que tem <span className="text-[#00FF5A]">DENTRO</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Tudo que você precisa para dominar o algoritmo
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <Play className="w-8 h-8 text-[#00FF5A] mb-4" />
              <h3 className="text-xl font-bold mb-2">650+ Clipes em HD</h3>
              <p className="text-gray-400">Vídeos virais categorizados por nicho</p>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <Type className="w-8 h-8 text-[#00FF5A] mb-4" />
              <h3 className="text-xl font-bold mb-2">Legendas Prontas</h3>
              <p className="text-gray-400">Copies que convertem e engajam</p>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <Hash className="w-8 h-8 text-[#00FF5A] mb-4" />
              <h3 className="text-xl font-bold mb-2">Hashtags Virais</h3>
              <p className="text-gray-400">Tags testadas para máximo alcance</p>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <Download className="w-8 h-8 text-[#00FF5A] mb-4" />
              <h3 className="text-xl font-bold mb-2">Download Instantâneo</h3>
              <p className="text-gray-400">Acesso imediato após o pagamento</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#00FF5A] to-green-400 text-black rounded-2xl p-6 text-center">
            <Zap className="w-8 h-8 mx-auto mb-3" />
            <h3 className="text-xl font-black mb-2">ATUALIZAÇÕES VITALÍCIAS</h3>
            <p className="font-semibold">Novos clipes adicionados toda semana!</p>
          </div>
        </div>
      </section>

      {/* Before/After with Social Proof */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-12">
            ANTES <span className="text-red-500">vs</span> <span className="text-[#00FF5A]">DEPOIS</span>
          </h2>
          
          {/* Social Proof Profile */}
          <div className="bg-gray-800 rounded-2xl p-6 mb-8 text-center border border-gray-700">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                alt="Lucas Mendes"
                className="w-16 h-16 rounded-full border-2 border-[#00FF5A]"
              />
              <div className="text-center md:text-left">
                <h3 className="text-lg font-bold text-white">Lucas Mendes</h3>
                <p className="text-[#00FF5A] text-sm mb-2">@lucasviralcontent</p>
                <p className="text-gray-300 italic">
                  "Em 30 dias usando o Vault Viral, meu perfil explodiu! 
                  Olha a diferença nos números..."
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold text-red-400 mb-4">😔 ANTES</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Views:</span>
                  <span className="text-red-400">150 views</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Seguidores:</span>
                  <span className="text-red-400">89 seguidores</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Engajamento:</span>
                  <span className="text-red-400">2.1%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Renda:</span>
                  <span className="text-red-400">R$ 0</span>
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-400">
                📅 Janeiro 2024
              </div>
            </div>
            
            <div className="bg-green-900/20 border border-[#00FF5A]/30 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold text-[#00FF5A] mb-4">🚀 DEPOIS</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Views:</span>
                  <span className="text-[#00FF5A] font-bold">+800K views</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Seguidores:</span>
                  <span className="text-[#00FF5A] font-bold">+50K seguidores</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Engajamento:</span>
                  <span className="text-[#00FF5A] font-bold">15.8%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Renda:</span>
                  <span className="text-[#00FF5A] font-bold">R$ 12K+</span>
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-400">
                📅 Fevereiro 2024
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button
              onClick={scrollToOrder}
              className="bg-gradient-to-r from-[#00FF5A] to-green-400 text-black px-8 py-4 rounded-full font-black text-lg hover:shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300"
            >
              🚀 QUERO OS MESMOS RESULTADOS!
            </button>
          </div>
        </div>
      </section>

      {/* Bonus */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-4">
            <span className="text-[#00FF5A]">BÔNUS</span> Exclusivos
          </h2>
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-lg mb-2">
              🎁 GRÁTIS PARA VOCÊ
            </div>
            <p className="text-gray-400">
              Você não paga nada a mais por estes bônus!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-2xl p-6 text-center">
              <Gift className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Templates de Stories</h3>
              <p className="text-sm text-gray-400 mb-3">50+ templates editáveis</p>
              <div className="relative">
                <p className="text-gray-400 line-through text-lg">Valor: R$ 49</p>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold transform rotate-12">
                    GRÁTIS
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border border-blue-500/30 rounded-2xl p-6 text-center">
              <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Guia de Algoritmo</h3>
              <p className="text-sm text-gray-400 mb-3">Estratégias secretas</p>
              <div className="relative">
                <p className="text-gray-400 line-through text-lg">Valor: R$ 97</p>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold transform rotate-12">
                    GRÁTIS
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 border border-orange-500/30 rounded-2xl p-6 text-center">
              <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Grupo VIP</h3>
              <p className="text-sm text-gray-400 mb-3">Comunidade exclusiva</p>
              <div className="relative">
                <p className="text-gray-400 line-through text-lg">Valor: R$ 197</p>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold transform rotate-12">
                    GRÁTIS
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <div className="bg-gradient-to-r from-[#00FF5A] to-green-400 text-black rounded-2xl p-4 inline-block font-bold text-lg">
              💰 TOTAL EM BÔNUS: <span className="line-through">R$ 343</span> → GRÁTIS!
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-white text-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-12 h-12 text-[#00FF5A]" />
          </div>
          <h2 className="text-3xl font-black mb-4">
            GARANTIA <span className="text-[#00FF5A]">7 DIAS</span>
          </h2>
          <p className="text-lg mb-6">
            Se não conseguir seus primeiros 10K views em 7 dias, 
            devolvemos 100% do seu dinheiro!
          </p>
          <div className="bg-[#00FF5A] text-black rounded-2xl p-4 inline-block font-bold">
            💰 RISCO ZERO GARANTIDO
          </div>
        </div>
      </section>

      {/* Pricing & Scarcity */}
      <section id="order" className="py-16 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-8">
            <span className="text-red-500">OFERTA LIMITADA</span>
          </h2>
          
          <div className="bg-gray-800 rounded-2xl p-8 mb-8 border-2 border-[#00FF5A]">
            <div className="mb-6">
              <div className="text-gray-400 line-through text-2xl mb-2">
                De R$ 147
              </div>
              <div className="text-5xl font-black text-[#00FF5A] mb-2">
                R$ 10
              </div>
              <div className="text-gray-400">
                93% de desconto - HOJE APENAS
              </div>
            </div>
            
            <div className="bg-red-900/30 border border-red-500/50 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Clock className="w-5 h-5 text-red-400" />
                <span className="text-lg font-bold">Oferta expira em:</span>
              </div>
              <div className="text-3xl font-black text-red-400">
                {formatTime(timeLeft)}
              </div>
              <div className="text-sm text-gray-400 mt-1">
                minutos restantes
              </div>
            </div>
            
            <button
              onClick={scrollToOrder}
              className="w-full bg-gradient-to-r from-[#00FF5A] to-green-400 text-black px-8 py-6 rounded-full font-black text-xl hover:shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300"
            >
              🚀 GARANTIR AGORA POR R$ 10
            </button>
            
            <div className="mt-4 text-sm text-gray-400">
              ✅ Acesso imediato • ✅ Garantia 7 dias • ✅ Suporte incluso
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-12">
            Dúvidas <span className="text-[#00FF5A]">Frequentes</span>
          </h2>
          
          <div className="space-y-4">
            {[
              {
                q: "É legal usar esses clipes?",
                a: "Sim! Todos os clipes são royalty-free e podem ser usados comercialmente."
              },
              {
                q: "Posso usar nos meus clientes?",
                a: "Claro! Você pode usar para qualquer projeto pessoal ou comercial."
              },
              {
                q: "É difícil de usar?",
                a: "Não! Basta baixar, postar e acompanhar os resultados. Simples assim."
              },
              {
                q: "Funciona em qual plataforma?",
                a: "TikTok, Instagram Reels, YouTube Shorts e qualquer rede social."
              },
              {
                q: "Como recebo o material?",
                a: "Imediatamente após o pagamento via link de download por email."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-bold mb-3 text-[#00FF5A]">
                  {faq.q}
                </h3>
                <p className="text-gray-300">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 p-4 z-50">
        <button
          onClick={scrollToOrder}
          className="w-full bg-gradient-to-r from-[#00FF5A] to-green-400 text-black px-6 py-4 rounded-full font-black text-lg hover:shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300"
        >
          ⚡ QUERO VIRALIZAR AGORA - R$ 10
        </button>
      </div>
    </div>
  );
}

export default App;