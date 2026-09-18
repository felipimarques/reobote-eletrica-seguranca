import Image from "next/image";

const WA =
  "https://wa.me/5511943443190?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Reobote%20El%C3%A9trica%20%26%20Seguran%C3%A7a%20e%20quero%20um%20or%C3%A7amento.";
const INSTAGRAM = "https://www.instagram.com/reobote.eletri";
const GOOGLE_REVIEW = "https://share.google/kKNEklEhjMSLsNdJs";

function Etiqueta({ children, ativo }: { children: React.ReactNode; ativo?: boolean }) {
  return (
    <span
      className={`inline-block rounded-[4px] border px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-widest whitespace-nowrap ${
        ativo
          ? "bg-fuse-amber text-black border-fuse-amber"
          : "bg-night-panel text-fuse-amber border-night-edge"
      }`}
    >
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <>
      <div className="bg-night text-[11px] sm:text-[13px] font-bold text-center py-2 px-2 leading-snug flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-slate-300">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Santo André e ABC •
        </span>
        <span className="text-fuse-amber">★★★★★ 5.0 no Google</span>
        <a
          href={GOOGLE_REVIEW}
          target="_blank"
          rel="noopener"
          className="underline underline-offset-2 hover:text-white"
        >
          (33 avaliações reais — ver)
        </a>
      </div>

      <header className="sticky top-0 z-50 bg-night/95 backdrop-blur border-b border-night-edge">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 h-16 sm:h-20 flex items-center justify-between gap-2">
          <a href="#inicio" className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 shrink-0">
              <svg className="w-full h-full" fill="none" viewBox="0 0 100 120">
                <path d="M50 5 L92 22 V58 C92 88 50 115 50 115 C50 115 8 88 8 58 V22 L50 5 Z" fill="#12141A" stroke="#FFA000" strokeWidth="6" />
                <path d="M30 25 L24 38 H32 L26 50 L40 35 H31 L36 25 Z" fill="#FFA000" />
              </svg>
            </div>
            <div className="flex flex-col leading-none min-w-0">
              <span className="font-black text-lg text-white tracking-wide truncate">REOBOTE</span>
              <span className="text-[8px] font-bold tracking-[0.22em] text-fuse-amber uppercase">Elétrica & Segurança</span>
            </div>
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noopener"
            className="shrink-0 inline-flex items-center bg-fuse-amber text-black font-extrabold text-xs sm:text-sm rounded-lg px-4 sm:px-5 py-2 sm:py-2.5 hover:brightness-110 active:scale-95 transition whitespace-nowrap"
          >
            Orçamento
          </a>
        </div>
      </header>

      <main>
        {/* HERO — o número medido */}
        <section id="inicio" className="bg-night pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-night-edge">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <h1 className="font-black text-white text-[38px] sm:text-6xl lg:text-[72px] leading-[1.0] tracking-tight">
                  25,3 amperes
                  <br />
                  medidos.
                  <br />
                  <span className="text-fuse-amber">Zero improviso.</span>
                </h1>
                <p className="mt-5 max-w-lg text-lg text-slate-400 leading-relaxed">
                  A gente não chuta corrente: mede. Instalações e quadros dentro da
                  NBR 5410, CFTV e fechaduras — com o número na foto e a garantia no
                  serviço.
                </p>

                {/* navegação como etiquetas de circuito */}
                <div className="mt-7 flex flex-wrap gap-2 max-w-lg">
                  <a href="#servicos"><Etiqueta ativo>SERVIÇOS</Etiqueta></a>
                  <a href="#obras"><Etiqueta>OBRAS</Etiqueta></a>
                  <a href="#manutencao"><Etiqueta>MANUTENÇÃO</Etiqueta></a>
                  <a href={WA} target="_blank" rel="noopener"><Etiqueta>ORÇAMENTO →</Etiqueta></a>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg">
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener"
                    className="flex-1 text-center bg-fuse-amber text-black font-extrabold text-lg rounded-xl px-6 py-4 hover:brightness-110 active:scale-95 transition"
                  >
                    Chamar no WhatsApp
                  </a>
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener"
                    className="flex-1 text-center border-2 border-night-edge text-white font-bold text-lg rounded-xl px-6 py-4 hover:border-fuse-amber transition"
                  >
                    Ver obras no Instagram
                  </a>
                </div>
              </div>

              {/* instrumento: a foto real da medição, emoldurada como leitura */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border-2 border-night-edge bg-night-panel shadow-[0_0_60px_-20px_rgba(255,160,0,0.4)]">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-night-edge bg-[#0C0E12]">
                    <span className="text-[10px] font-extrabold tracking-widest text-fuse-amber uppercase">Medição em campo</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  </div>
                  <div className="relative h-72 sm:h-96">
                    <Image src="/images/medicao-253a.png" alt="Alicate amperímetro marcando 25,3 A em campo" fill className="object-cover" priority />
                  </div>
                  <div className="px-5 py-4 flex items-end justify-between">
                    <div>
                      <div className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Leitura</div>
                      <div className="font-black text-fuse-amber text-5xl sm:text-6xl leading-none tabular-nums">25,3<span className="text-2xl"> A</span></div>
                    </div>
                    <div className="text-right text-[11px] text-slate-500 font-semibold leading-tight">
                      foto real de serviço
                      <br />
                      Reobote Elétrica
                    </div>
                  </div>
                </div>
                <a
                  href={GOOGLE_REVIEW}
                  target="_blank"
                  rel="noopener"
                  className="mt-4 flex items-center justify-center gap-2 bg-night-panel border border-night-edge rounded-xl px-4 py-3 text-sm text-slate-300 hover:border-fuse-amber transition"
                >
                  <span className="text-fuse-amber">★★★★★</span>
                  <strong className="text-white">5.0 no Google</strong>
                  <span className="text-slate-500">33 avaliações reais</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS — gavetas do quadro */}
        <section id="servicos" className="bg-night py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-black text-white text-3xl sm:text-5xl leading-tight tracking-tight max-w-2xl">
              Cada circuito com a sua etiqueta.
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl">
              Nada de “fazemos de tudo” sem mostrar. O que a Reobote instala, mede e entrega:
            </p>

            <div className="mt-10 space-y-3">
              {[
                ["CHUVEIRO · TOMADAS · ILUMINAÇÃO", "Quadros e instalações", "Montagem e padronização de quadros Steck, disjuntores, DPS e IDR. Etiqueta em cada circuito, foto de cada entrega.", "/images/quadro-steck.png"],
                ["CFTV · DVR · ACESSO REMOTO", "Câmeras e monitoramento", "Sistemas Intelbras com acesso pelo celular e gravação contínua. Você vê de onde estiver.", "/images/monitor-intelbras.png"],
                ["BIOMETRIA · TAG · SENHA", "Fechaduras digitais", "Instalação e configuração sem chave na mão — para casa e escritório.", "/images/fechadura-biometrica.png"],
              ].map(([tag, t, d, img]) => (
                <div
                  key={t}
                  className="group grid sm:grid-cols-12 gap-0 rounded-2xl overflow-hidden border border-night-edge bg-night-panel hover:border-fuse-amber/60 transition"
                >
                  <div className="relative sm:col-span-4 h-48 sm:h-auto">
                    <Image src={img} alt={t} fill className="object-cover group-hover:scale-105 transition duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-night-panel/40" />
                  </div>
                  <div className="sm:col-span-8 p-6 flex flex-col justify-center">
                    <Etiqueta>{tag}</Etiqueta>
                    <h3 className="mt-3 font-extrabold text-white text-2xl">{t}</h3>
                    <p className="mt-1.5 text-slate-400 leading-relaxed">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MANUTENÇÃO — por que medir */}
        <section id="manutencao" className="bg-[#08090C] border-t border-night-edge py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-black text-white text-3xl sm:text-5xl leading-tight tracking-tight">
                Curto não avisa.
                <br />
                <span className="text-fuse-amber">Medição sim.</span>
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed max-w-md">
                Manutenção preventiva é reapertar borne, aferir corrente e equilibrar
                fase antes do problema. O alicate da foto é o nosso dia a dia.
              </p>
              <a
                href={WA}
                target="_blank"
                rel="noopener"
                className="mt-7 inline-flex bg-fuse-amber text-black font-extrabold text-lg rounded-xl px-7 py-3.5 hover:brightness-110 active:scale-95 transition"
              >
                Agendar revisão preventiva
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-56 rounded-2xl overflow-hidden border border-night-edge">
                <Image src="/images/tecnico-escada.png" alt="Técnico Reobote em instalação" fill className="object-cover object-top" />
                <span className="absolute bottom-2 left-2 bg-black/80 text-fuse-amber text-[10px] font-extrabold uppercase tracking-wider px-2 py-1 rounded">Equipe própria</span>
              </div>
              <div className="space-y-3">
                <div className="relative h-[104px] rounded-2xl overflow-hidden border border-night-edge">
                  <Image src="/images/barramento-steck.png" alt="Barramento Steck montado" fill className="object-cover" />
                </div>
                <div className="relative h-[104px] rounded-2xl overflow-hidden border border-night-edge">
                  <Image src="/images/tecnico-infra.png" alt="Infraestrutura executada" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OBRAS — prova */}
        <section id="obras" className="bg-night border-t border-night-edge py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-black text-white text-3xl sm:text-5xl tracking-tight">Obras entregues.</h2>
              <p className="text-sm text-slate-500 max-w-xs">Fotos de campo, sem banco de imagem. Passa o dedo, confere o acabamento.</p>
            </div>
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                ["/images/fechadura-quanttum.png", "Fechadura Quanttum"],
                ["/images/central-cftv.png", "Central CFTV"],
                ["/images/trilho-spots.png", "Trilho LED"],
                ["/images/refletor-portao.png", "Refletor + portão"],
              ].map(([img, alt]) => (
                <div key={alt} className="relative h-56 rounded-xl overflow-hidden border border-night-edge group">
                  <Image src={img} alt={alt} fill className="object-cover group-hover:scale-105 transition duration-500" />
                  <span className="absolute bottom-2 left-2 bg-black/80 text-slate-200 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">{alt}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-b from-[#12141A] to-night border-t border-night-edge py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-black text-white text-3xl sm:text-5xl leading-tight tracking-tight">
              Sua instalação, medida
              <br />
              <span className="text-fuse-amber">como a gente mede.</span>
            </h2>
            <a
              href={WA}
              target="_blank"
              rel="noopener"
              className="mt-8 inline-flex bg-fuse-amber text-black font-extrabold text-lg rounded-xl px-10 py-4 hover:brightness-110 active:scale-95 transition"
            >
              (11) 94344-3190
            </a>
            <p className="mt-3 text-sm text-slate-500">Santo André e ABC · orçamento sem compromisso</p>
          </div>
        </section>
      </main>

      <footer className="bg-[#060709] border-t border-night-edge py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <span className="font-extrabold text-white tracking-wide">REOBOTE <span className="text-fuse-amber font-bold">Elétrica & Segurança</span></span>
          <span>★ 5.0 no Google · 33 avaliações · Santo André</span>
        </div>
      </footer>

      <a
        href={WA}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="fixed bottom-6 left-5 md:left-auto md:right-5 md:bottom-24 z-[60] w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl shadow-2xl hover:scale-105 transition"
      >
        ✆
      </a>
    </>
  );
}
