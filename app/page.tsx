import Image from "next/image";

const WA =
  "https://wa.me/5511943443190?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Reobote%20El%C3%A9trica%20%26%20Seguran%C3%A7a%20e%20quero%20um%20or%C3%A7amento.";
const INSTAGRAM = "https://www.instagram.com/reobote.eletri";
const GOOGLE_REVIEW = "https://share.google/kKNEklEhjMSLsNdJs";

function ShieldLogo({ size = "w-11 h-11" }: { size?: string }) {
  return (
    <div className={`${size} relative flex-shrink-0`}>
      <svg className="w-full h-full drop-shadow-md" fill="none" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L92 22 V58 C92 88 50 115 50 115 C50 115 8 88 8 58 V22 L50 5 Z" fill="#141720" stroke="#FFA000" strokeWidth="4" />
        <path d="M50 12 V108" stroke="#FFA000" strokeDasharray="2 2" strokeWidth="2.5" />
        <path d="M15 58 H85" stroke="#FFA000" strokeDasharray="2 2" strokeWidth="2.5" />
        <path d="M30 25 L24 38 H32 L26 50 L40 35 H31 L36 25 Z" fill="#FFA000" />
        <rect fill="#FFA000" height="11" rx="2" width="18" x="62" y="27" />
        <path d="M78 30 L87 25 V40 L78 35 Z" fill="#FFA000" />
        <circle cx="28" cy="78" r="7" stroke="#FFA000" strokeWidth="2.5" />
        <circle cx="72" cy="74" fill="#FFA000" r="5" />
        <rect fill="#FFA000" height="10" width="4" x="70" y="78" />
      </svg>
    </div>
  );
}

export default function Page() {
  return (
    <>
      {/* Topo prova social */}
      <div className="bg-[#0f172a] text-sky-300 text-[13px] font-bold text-center py-2.5 px-4 flex items-center justify-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        Santo André e Região • <span className="text-amber-400">★★★★★ 5.0 no Google</span>
        <a href={GOOGLE_REVIEW} target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-white">
          (33 avaliações reais — ver)
        </a>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#08090C]/90 backdrop-blur-md border-b border-brand-cardBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3.5">
            <ShieldLogo />
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-wider text-white leading-none">REOBOTE</span>
              <span className="text-[9px] font-bold tracking-[0.25em] text-brand-orange mt-1">ELÉTRICA & SEGURANÇA</span>
            </div>
          </a>
          <nav className="hidden md:flex items-center space-x-9 text-sm font-medium text-gray-300">
            <a href="#inicio" className="text-white border-b-2 border-brand-yellow pb-1 font-semibold">Início</a>
            <a href="#servicos" className="hover:text-brand-yellow transition-colors pb-1">Serviços</a>
            <a href="#manutencao" className="hover:text-brand-yellow transition-colors pb-1">Manutenção</a>
            <a href="#projetos" className="hover:text-brand-yellow transition-colors pb-1">Projetos</a>
            <a href="#contato" className="hover:text-brand-yellow transition-colors pb-1">Contato</a>
          </nav>
          <a href={WA} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-yellow to-brand-orange text-black font-bold text-sm shadow-lg shadow-amber-500/20 hover:brightness-110 active:scale-95 transition-all">
            Solicitar orçamento
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="inicio" className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#0B0C10] to-[#08090C]">
          <div className="absolute top-10 left-1/4 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 z-10">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-8 h-[3px] bg-brand-yellow rounded-full" />
                  <span className="text-xs font-bold tracking-[0.2em] text-brand-orange uppercase">Elétrica & Segurança — Santo André</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-white tracking-tight leading-[1.12] mb-4">
                  Proteção e energia <br />
                  <span className="text-brand-yellow text-glow-amber">para o seu negócio.</span>
                </h1>
                <a href={GOOGLE_REVIEW} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6 hover:bg-white/15">
                  <span className="text-amber-400">★★★★★</span>
                  <strong>5.0 no Google</strong>
                  <span className="text-gray-300">33 avaliações reais</span>
                </a>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mb-8">
                  Soluções completas em elétrica e segurança eletrônica para residências, comércios e empresas. Mais segurança, tranquilidade e eficiência no seu dia a dia.
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <a href={WA} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-yellow to-brand-orange text-black font-extrabold text-base shadow-lg shadow-amber-500/25 hover:brightness-110 active:scale-95 transition-all">
                    Solicitar orçamento
                  </a>
                  <a href={INSTAGRAM} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#15171E] hover:bg-[#1C1F28] border border-brand-cardBorder hover:border-brand-yellow text-white font-semibold text-base transition-all">
                    Nosso Instagram
                  </a>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-cardBorder max-w-xl">
                  {[
                    "Atendimento prioritário",
                    "Suporte técnico especializado",
                    "Qualidade e confiança",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-brand-yellow flex-shrink-0">✓</div>
                      <span className="text-xs text-gray-300 font-semibold leading-tight">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] h-[520px] sm:h-[580px] rounded-3xl overflow-hidden border-2 border-brand-cardBorder/80 shadow-2xl">
                  <Image src="/images/hero-tecnico.png" alt="Técnico REOBOTE Elétrica & Segurança" fill className="object-cover object-top" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-transparent to-black/30 pointer-events-none" />
                  <div className="absolute bottom-6 right-6 z-20 bg-[#0E1017]/95 border border-brand-cardBorder rounded-xl p-3 shadow-2xl flex items-center gap-3">
                    <ShieldLogo size="w-8 h-8" />
                    <div className="leading-tight">
                      <div className="text-xs font-black text-white tracking-wider">REOBOTE</div>
                      <div className="text-[7px] font-bold text-brand-orange tracking-widest">ELÉTRICA & SEGURANÇA</div>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 z-20 bg-brand-yellow text-black font-extrabold text-[11px] uppercase tracking-wider px-2.5 py-1 rounded">
                    Equipe própria uniformizada
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="py-20 bg-[#0A0B0E] border-t border-brand-cardBorder">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-14">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-6 h-[3px] bg-brand-yellow rounded-full" />
                  <span className="text-xs font-bold tracking-[0.2em] text-brand-orange uppercase">Nossos serviços</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                  Soluções completas para <br className="hidden sm:inline" />sua segurança e tranquilidade.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  Trabalhamos com tecnologia e experiência para oferecer sistemas eficientes e confiáveis — marcas como Intelbras, Steck e Kuarttum/Quanttum.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="service-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group">
                <div>
                  <div className="relative w-full h-44 rounded-xl overflow-hidden mb-6 border border-[#2B3042]">
                    <Image src="/images/monitor-intelbras.png" alt="Central de Monitoramento CFTV Intelbras" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded bg-black/75 border border-amber-500/30 text-[10px] font-bold text-brand-yellow uppercase tracking-wider">CFTV & Intelbras</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-yellow transition-colors">Câmeras de Segurança (CFTV)</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">Monitoramento com DVR/NVR, acesso remoto pelo celular e gravação contínua em alta resolução.</p>
                </div>
                <a href={WA} target="_blank" rel="noopener" className="inline-flex items-center text-sm font-bold text-brand-yellow group-hover:text-white transition-colors">Solicitar projeto CFTV <span className="ml-2">→</span></a>
              </div>
              <div className="service-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group">
                <div>
                  <div className="relative w-full h-44 rounded-xl overflow-hidden mb-6 border border-[#2B3042]">
                    <Image src="/images/quadro-steck.png" alt="Quadro Steck NBR 5410" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded bg-black/75 border border-amber-500/30 text-[10px] font-bold text-brand-yellow uppercase tracking-wider">NBR 5410 • Steck</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-yellow transition-colors">Instalações & Quadros Elétricos</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">Montagem e padronização de quadros, disjuntores, DPS e IDR dentro das normas técnicas.</p>
                </div>
                <a href={WA} target="_blank" rel="noopener" className="inline-flex items-center text-sm font-bold text-brand-yellow group-hover:text-white transition-colors">Fazer revisão elétrica <span className="ml-2">→</span></a>
              </div>
              <div className="service-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group">
                <div>
                  <div className="relative w-full h-44 rounded-xl overflow-hidden mb-6 border border-[#2B3042]">
                    <Image src="/images/fechadura-biometrica.png" alt="Fechadura digital biométrica" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded bg-black/75 border border-amber-500/30 text-[10px] font-bold text-brand-yellow uppercase tracking-wider">Biometria & Smart</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-yellow transition-colors">Fechaduras Digitais & Acesso</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">Instalação de fechaduras biométricas, senha e tag para residências e escritórios.</p>
                </div>
                <a href={WA} target="_blank" rel="noopener" className="inline-flex items-center text-sm font-bold text-brand-yellow group-hover:text-white transition-colors">Agendar instalação <span className="ml-2">→</span></a>
              </div>
            </div>
          </div>
        </section>

        {/* MANUTENÇÃO */}
        <section id="manutencao" className="py-20 bg-[#08090C] border-t border-brand-cardBorder">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-8 relative rounded-2xl overflow-hidden border border-brand-cardBorder h-[380px]">
                    <Image src="/images/tecnico-escada.png" alt="Técnico REOBOTE em instalação" fill className="object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="px-2.5 py-1 rounded bg-brand-yellow text-black font-extrabold text-[11px] uppercase tracking-wider">Equipe própria</span>
                      <p className="text-xs font-semibold text-white mt-1.5">Instalação com precisão e zelo pelo patrimônio</p>
                    </div>
                  </div>
                  <div className="sm:col-span-4 flex flex-col gap-4">
                    <div className="relative rounded-2xl overflow-hidden border border-brand-cardBorder h-[182px]">
                      <Image src="/images/medicao-253a.png" alt="Medição 25.3A com alicate amperímetro" fill className="object-cover" />
                      <span className="absolute bottom-2 left-2 text-[10px] font-bold text-brand-yellow uppercase bg-black/80 px-2 py-0.5 rounded">Medição 25.3A</span>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border border-brand-cardBorder h-[182px]">
                      <Image src="/images/tecnico-infra.png" alt="Infraestrutura executada pela REOBOTE" fill className="object-cover" />
                      <span className="absolute bottom-2 left-2 text-[10px] font-bold text-gray-200 uppercase bg-black/80 px-2 py-0.5 rounded">Infraestrutura</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-6 h-[3px] bg-brand-yellow rounded-full" />
                  <span className="text-xs font-bold tracking-[0.2em] text-brand-orange uppercase">Manutenção preventiva programada</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                  Mais segurança, <br />menos <span className="text-brand-yellow">imprevistos e paradas.</span>
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                  A manutenção preventiva evita sobrecargas, curtos e falhas em câmeras e energia. Com medições periódicas, garantimos conformidade e vida útil máxima.
                </p>
                <div className="space-y-4">
                  {[
                    { t: "Manutenção Preventiva e Corretiva", d: "Revisão de conexões, reaperto de bornes e integridade dos circuitos e fontes." },
                    { t: "Medições Técnicas e Conformidade", d: "Aferição de corrente, balanceamento de fases e testes com equipamentos calibrados." },
                    { t: "Zero paradas inesperadas", d: "Evite prejuízos, danos a máquinas e perda de imagens em emergências." },
                  ].map((i) => (
                    <div key={i.t} className="flex items-start gap-4 p-4 rounded-xl bg-[#111319] border border-brand-cardBorder">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-brand-yellow flex-shrink-0">✓</div>
                      <div>
                        <span className="font-bold text-white text-base block">{i.t}</span>
                        <p className="text-xs text-gray-400 mt-1">{i.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PLANOS */}
        <section className="py-20 bg-[#0B0C10] border-t border-brand-cardBorder">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-6 h-[3px] bg-brand-yellow rounded-full" />
                  <span className="text-xs font-bold tracking-[0.2em] text-brand-orange uppercase">Planos mensais</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Proteção sob medida <br /><span className="text-brand-yellow">para o seu negócio.</span>
                </h2>
                <p className="text-gray-400 text-sm mt-4 leading-relaxed">Contratos com visitas preventivas, chamados prioritários e pronto atendimento para seu estabelecimento nunca parar.</p>
                <a href={WA} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-sm font-bold text-brand-yellow hover:text-brand-orange transition-colors mt-6">
                  Consultar tabela para empresas e condomínios →
                </a>
              </div>
              <div className="lg:col-span-7">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Atendimento especializado para:</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                  {["Condomínios", "Lojas", "Academias", "Escritórios", "Clínicas", "Empresas em geral"].map((s) => (
                    <div key={s} className="bg-[#111319] border border-brand-cardBorder hover:border-brand-yellow p-4 rounded-xl flex flex-col items-center justify-center text-center gap-2 transition-colors">
                      <span className="text-xs sm:text-sm font-semibold text-gray-200">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="py-20 bg-[#08090C] border-t border-brand-cardBorder">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="w-6 h-[3px] bg-brand-yellow rounded-full" />
                  <span className="text-xs font-bold tracking-[0.2em] text-brand-orange uppercase">Projetos reais em campo</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Confira alguns dos nossos projetos reais</h2>
              </div>
              <p className="text-sm text-gray-400 max-w-md mt-3 md:mt-0">Trabalhos com acabamento de alto padrão e marcas líderes como Intelbras, Steck e Kuarttum.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { img: "/images/fechadura-quanttum.png", tag: "Fechadura Digital", title: "Controle de Acesso Quanttum", desc: "Instalação em porta de madeira com tag, senha e acabamento alinhado." },
                { img: "/images/quadro-steck.png", tag: "Elétrica NBR 5410", title: "Quadro Steck Identificado", desc: "Circuitos identificados, proteção geral, DPS e IDR contra choques." },
                { img: "/images/central-cftv.png", tag: "CFTV Comercial", title: "Sistema CFTV Multi-câmeras", desc: "Monitoramento em tempo real com cabeamento estruturado." },
                { img: "/images/trilho-spots.png", tag: "Iluminação Técnica", title: "Trilho Eletrificado com Spots LED", desc: "Iluminação direcionável moderna para lojas e salas." },
                { img: "/images/tecnico-infra.png", tag: "Equipe Técnica", title: "Instalação Residencial & Predial", desc: "Equipe uniformizada com EPIs e perfeição no acabamento." },
                { img: "/images/refletor-portao.png", tag: "Segurança Perimetral", title: "Refletores LED, Sensores & Portão", desc: "Sensor de presença e acionamento automático para garagens." },
              ].map((p) => (
                <div key={p.title} className="project-card rounded-2xl overflow-hidden group">
                  <div className="relative h-64 overflow-hidden bg-[#161822]">
                    <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101218] via-transparent to-black/30" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 border border-brand-yellow/30 text-[11px] font-bold text-brand-yellow uppercase tracking-wider">{p.tag}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-white group-hover:text-brand-yellow transition-colors">{p.title}</h3>
                    <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contato" className="py-16 bg-gradient-to-r from-[#0C0E14] via-[#12141C] to-[#0A0C10] border-y border-brand-cardBorder relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="flex-1">
                <div className="text-[11px] font-bold tracking-[0.25em] text-brand-orange uppercase mb-1.5">Fale conosco</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Solicite uma avaliação <br className="hidden sm:inline" />
                  <span className="text-brand-yellow">sem compromisso!</span>
                </h2>
                <p className="text-sm text-gray-300 mt-2 max-w-md">Atendimento rápido para residências, condomínios e empresas de Santo André e região.</p>
                <a href={WA} target="_blank" rel="noopener" className="text-2xl sm:text-3xl font-extrabold text-white hover:text-brand-yellow transition-colors tracking-tight mt-4 inline-block">
                  (11) 94344-3190
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href={INSTAGRAM} target="_blank" rel="noopener" className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#171A23] border border-brand-cardBorder hover:border-brand-yellow text-gray-200 hover:text-white transition-all text-sm font-semibold">
                  @reobote.eletri
                </a>
                <a href={WA} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-yellow to-brand-orange text-black font-extrabold text-sm shadow-lg hover:brightness-110 active:scale-95 transition-all">
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#050608] py-8 border-t border-brand-cardBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <ShieldLogo size="w-9 h-9" />
              <div>
                <div className="text-lg font-extrabold tracking-wider text-white leading-none">REOBOTE</div>
                <div className="text-[8px] font-bold tracking-[0.2em] text-brand-orange">ELÉTRICA & SEGURANÇA</div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-300">
              <a href={INSTAGRAM} target="_blank" rel="noopener" className="hover:text-brand-yellow">@reobote.eletri</a>
              <a href={WA} target="_blank" rel="noopener" className="hover:text-brand-yellow font-medium">(11) 94344-3190</a>
              <a href={GOOGLE_REVIEW} target="_blank" rel="noopener" className="hover:text-brand-yellow">★ 5.0 no Google — Santo André</a>
            </div>
            <div className="text-xs text-gray-500 font-medium">Segurança e energia para o seu dia a dia.</div>
          </div>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a href={WA} target="_blank" rel="noopener" aria-label="WhatsApp" className="fixed bottom-5 right-5 z-[60] w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl shadow-2xl hover:scale-105 transition-transform">
        ✆
      </a>
    </>
  );
}
