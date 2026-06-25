import React from "react";
import {
  BadgeCheck,
  CircleDollarSign,
  Clock3,
  FileCheck2,
  LockKeyhole,
  Printer,
  Scissors,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Trophy,
} from "lucide-react";

import heroImage from "./assets/hero-promo-990.png";
import compareDepay from "./assets/real-photos/compare-depay.jpg";
import compareLeNormand from "./assets/real-photos/compare-le-normand.jpg";
import compareMbappe from "./assets/real-photos/compare-mbappe.jpg";
import packetsTable from "./assets/real-photos/packets-table.jpg";
import printGuide from "./assets/real-photos/print-guide.jpg";
import stickerVariety from "./assets/real-photos/sticker-variety.jpg";
import { CHECKOUT_URL, OFFER_PRICE, OLD_PRICE } from "./offer.mjs";

const COUNTDOWN_SECONDS = 15 * 60;

const benefits = [
  {
    icon: Trophy,
    title: "Colecao pronta para montar",
    text: "Tudo organizado para transformar folhas impressas em uma brincadeira completa.",
  },
  {
    icon: CircleDollarSign,
    title: "Sem depender de sorte",
    text: "Voce compra uma vez e imprime sem esperar vir a figurinha certa.",
  },
  {
    icon: Printer,
    title: "Imprima quando quiser",
    text: "Perdeu, rasgou ou quer repetir uma pagina? Abra o kit e imprima de novo.",
  },
  {
    icon: FileCheck2,
    title: "Paginas prontas",
    text: "Kit simples para abrir no celular, computador ou papelaria.",
  },
  {
    icon: Scissors,
    title: "Recorte facil",
    text: "Grid visual pensado para imprimir, recortar e colar com capricho.",
  },
  {
    icon: Clock3,
    title: "Entrega digital no email",
    text: "Depois do pagamento, o checkout libera o acesso digital no email.",
  },
];

const pains = [
  {
    title: "Pacotinho que pesa no bolso",
    text: "Voce compra de novo e ainda corre o risco de vir so figurinha repetida.",
  },
  {
    title: "Crianca frustrada",
    text: "A expectativa vira decepcao quando os espacos nunca preenchem.",
  },
  {
    title: "Album que nao fecha",
    text: "Comprar, trocar, procurar... e a colecao continua travada.",
  },
  {
    title: "Sorte mandando no jogo",
    text: "Em vez de brincar hoje, voce depende de banca, estoque e acaso.",
  },
];

const proofPhotos = [
  {
    image: compareMbappe,
    title: "Comparativo em mesa",
    text: "Foto enviada mostrando a figurinha impressa ao lado da original.",
  },
  {
    image: compareLeNormand,
    title: "Corte e tamanho",
    text: "Bom para mostrar proporcao, acabamento e leitura do material.",
  },
  {
    image: compareDepay,
    title: "Acabamento de perto",
    text: "Detalhe visual para reforcar que as paginas imprimem com boa presenca.",
  },
];

const heroHighlights = [
  {
    icon: FileCheck2,
    text: "Monte a colecao sem depender de sorte",
  },
  {
    icon: Clock3,
    text: "Acesso imediato no email",
  },
  {
    icon: ShieldCheck,
    text: "Imprima quando quiser",
  },
];

const trustBadges = [
  {
    icon: Clock3,
    title: "Acesso imediato",
    text: "Receba no email apos comprar.",
  },
  {
    icon: Printer,
    title: "Imprima sempre",
    text: "Use de novo quando precisar.",
  },
  {
    icon: ShieldCheck,
    title: "Compra segura",
    text: "PIX ou cartao no checkout.",
  },
];

const urgencyReasons = [
  {
    icon: CircleDollarSign,
    title: "Economia imediata",
    text: "O valor do kit custa menos que poucas idas comprando pacote fisico.",
  },
  {
    icon: Clock3,
    title: "Monte no seu ritmo",
    text: "A compra libera o kit para baixar, imprimir e montar no mesmo dia.",
  },
  {
    icon: FileCheck2,
    title: "Sem arrependimento por repetidas",
    text: "Voce sabe exatamente o que esta comprando antes de clicar no botao.",
  },
];

const faqs = [
  {
    question: "Como vou receber o kit?",
    answer:
      "O produto e digital. A entrega acontece pelo checkout configurado para liberar o arquivo para imprimir depois da confirmacao do pagamento.",
  },
  {
    question: "Preciso de uma impressora especial?",
    answer:
      "Nao. Voce pode imprimir em casa ou em uma papelaria. Para melhor resultado, use papel com boa gramatura e impressao colorida.",
  },
  {
    question: "Posso imprimir mais de uma vez?",
    answer:
      "Sim. A proposta e pagar uma vez pelo arquivo para imprimir novamente quando precisar.",
  },
  {
    question: "Esse produto e oficial?",
    answer:
      "Nao. E uma pagina de venda independente. Marcas, nomes e imagens exibidos em fotos demonstrativas pertencem aos seus respectivos titulares.",
  },
];

function formatCountdown(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const remainingSeconds = String(seconds % 60).padStart(2, "0");

  return `${minutes}:${remainingSeconds}`;
}

function useCountdown(initialSeconds = COUNTDOWN_SECONDS) {
  const [secondsLeft, setSecondsLeft] = React.useState(initialSeconds);

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setSecondsLeft((current) => (current > 0 ? current - 1 : initialSeconds));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [initialSeconds]);

  return formatCountdown(secondsLeft);
}

function CountdownTimer() {
  const countdown = useCountdown();

  return (
    <div className="countdown-panel" data-countdown-timer aria-live="polite">
      <span>Oferta termina em</span>
      <strong>{countdown}</strong>
      <small>Garanta o valor promocional antes que o contador zere.</small>
    </div>
  );
}

function CheckoutButton({ children, compact = false, hero = false }) {
  return (
    <a
      className={compact ? "cta cta-compact" : "cta"}
      href={CHECKOUT_URL}
      data-checkout-link
      data-hero-cta={hero ? "true" : undefined}
      aria-label="Comprar kit digital de figurinhas"
    >
      <ShoppingCart aria-hidden="true" size={compact ? 18 : 20} />
      <span>{children}</span>
    </a>
  );
}

function StickyCheckoutButton() {
  const [showSticky, setShowSticky] = React.useState(false);

  React.useEffect(() => {
    const heroCta = document.querySelector("[data-hero-cta]");

    if (!heroCta || typeof IntersectionObserver === "undefined") {
      setShowSticky(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSticky(!entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(heroCta);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`sticky-cta ${showSticky ? "is-visible" : ""}`}
      aria-label="Atalho para comprar"
      aria-hidden={!showSticky}
    >
      <CheckoutButton compact>LIBERAR KIT POR {OFFER_PRICE}</CheckoutButton>
    </div>
  );
}

function IconLine({ icon: Icon, title, text }) {
  return (
    <article className="benefit-card">
      <div className="icon-box">
        <Icon aria-hidden="true" size={22} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

export function App() {
  return (
    <>
      <div className="top-strip">
        <span>Promocao de lancamento</span>
        <strong>De {OLD_PRICE} por apenas {OFFER_PRICE}</strong>
      </div>

      <main>
        <section className="hero" id="topo">
          <div className="hero-content">
            <p className="eyebrow">
              <Sparkles aria-hidden="true" size={16} />
              Kit digital para completar sua colecao
            </p>
            <h1>
              Complete seu album 2026 hoje sem gastar com pacotinho repetido
            </h1>
            <p className="hero-copy">
              Receba o kit na hora, imprima quando quiser e monte a colecao no
              seu ritmo. Pague uma vez e transforme a brincadeira em algo
              simples, rapido e economico.
            </p>
            <div className="hero-highlights" aria-label="Destaques da oferta">
              {heroHighlights.map(({ icon: Icon, text }) => (
                <div className="hero-highlight" key={text}>
                  <Icon aria-hidden="true" size={17} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <div className="hero-actions">
              <CheckoutButton hero>LIBERAR MEU KIT POR {OFFER_PRICE}</CheckoutButton>
              <p>
                <LockKeyhole aria-hidden="true" size={15} />
                Compra segura via Cakto, com PIX ou cartao e entrega digital pelo email
              </p>
              <CountdownTimer />
            </div>
            <div className="hero-trust">
              {trustBadges.map(({ icon: Icon, title, text }) => (
                <div className="trust-pill" key={title}>
                  <Icon aria-hidden="true" size={18} />
                  <div>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-media" aria-label="Arte promocional do kit digital">
            <img src={heroImage} alt="Arte promocional do kit digital para completar o album 2026" />
          </div>
        </section>

        <section className="pain-section">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">O problema que todo colecionador conhece</p>
              <h2>Pare de gastar com repetidas e avance na colecao</h2>
              <p>
                Se voce ja tentou completar uma colecao comprando pacotinho, sabe
                como e frustrante pagar de novo e continuar com espacos vazios.
              </p>
            </div>
            <div className="pain-list">
              {pains.map((pain) => (
                <div className="pain-item" key={pain.title}>
                  <BadgeCheck aria-hidden="true" size={20} />
                  <div>
                    <strong>{pain.title}</strong>
                    <span>{pain.text}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="section-cta">
              <CheckoutButton>COMECAR MINHA COLECAO SEM REPETIDAS</CheckoutButton>
            </div>
          </div>
        </section>

        <section className="solution-section">
          <div className="section-inner split">
            <div>
              <p className="eyebrow">A solucao</p>
              <h2>Receba o kit, imprima e monte no seu ritmo</h2>
              <p>
                Voce recebe um kit simples de usar, com paginas coloridas e
                visual caprichado para montar a colecao hoje, sem
                esperar pela sorte do proximo pacote.
              </p>
              <ul className="check-list">
                <li>Paginas coloridas prontas para impressao.</li>
                <li>Comparativos reais para mostrar tamanho, corte e acabamento.</li>
                <li>Compra unica para imprimir quando quiser.</li>
              </ul>
            </div>
            <img
              className="preview-image"
              src={stickerVariety}
              alt="Colagem com varias figurinhas e previa de album"
              data-real-photo
            />
          </div>
        </section>

        <section className="real-proof-section" id="resultado-real">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">Resultado real</p>
              <h2>Veja o material impresso comparado com a figurinha original</h2>
              <p>
                Antes de comprar, veja exemplos impressos para entender tamanho,
                cores e acabamento das paginas.
              </p>
            </div>
            <div className="proof-grid">
              {proofPhotos.map((photo) => (
                <article className="proof-card" key={photo.title}>
                  <img src={photo.image} alt={photo.title} data-real-photo />
                  <div>
                    <h3>{photo.title}</h3>
                    <p>{photo.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="benefits-section">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">O que vem no kit</p>
              <h2>Pratico para imprimir, recortar e colecionar</h2>
            </div>
            <div className="benefit-grid">
              {benefits.map((benefit) => (
                <IconLine key={benefit.title} {...benefit} />
              ))}
            </div>
          </div>
        </section>

        <section className="kit-preview-section" id="previa-kit">
          <div className="section-inner split">
            <div>
              <p className="eyebrow">Previa do kit</p>
              <h2>Veja o tipo de material que voce vai receber</h2>
              <p>
                A previa mostra o visual do kit, as figurinhas e a ideia da
                colecao montada para voce comprar sabendo o que esperar.
              </p>
              <ul className="check-list">
                <li>Paginas coloridas prontas para impressao.</li>
                <li>Visual pensado para imprimir, recortar e colar.</li>
                <li>Economia frente aos pacotes fisicos repetidos.</li>
              </ul>
            </div>
            <div className="kit-photo-stack">
              <img
                className="wide-photo"
                src={packetsTable}
                alt="Mesa com pacotes e figurinhas de futebol"
                data-real-photo
              />
            </div>
          </div>
        </section>

        <section className="urgency-section">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">Decisao simples</p>
              <h2>Por que liberar seu kit hoje?</h2>
              <p>
                A promocao deixa o kit acessivel e voce recebe as paginas
                para comecar a imprimir sem esperar entrega fisica.
              </p>
            </div>
            <div className="urgency-grid">
              {urgencyReasons.map(({ icon: Icon, title, text }) => (
                <article className="urgency-card" key={title}>
                  <div className="icon-box">
                    <Icon aria-hidden="true" size={22} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="section-cta">
              <CheckoutButton>LIBERAR MEU KIT AGORA POR {OFFER_PRICE}</CheckoutButton>
            </div>
          </div>
        </section>

        <section className="offer-section" id="checkout-pendente">
          <div className="offer-panel">
            <p className="eyebrow">Oferta especial</p>
            <h2>Kit Figurinhas Futebol 2026</h2>
            <ul className="offer-list">
              <li>Produto digital com folhas de figurinhas ilustradas.</li>
              <li>Paginas com visual de album para montar a colecao.</li>
              <li>Entrega na hora no email depois da confirmacao.</li>
              <li>Voce pode imprimir para sempre quando precisar.</li>
              <li>Pagina e produto digital independente, sem vinculo oficial.</li>
            </ul>
            <div className="price-box">
              <span>De {OLD_PRICE}</span>
              <strong>{OFFER_PRICE}</strong>
              <small>Pagamento unico</small>
            </div>
            <CheckoutButton>LIBERAR MEU KIT POR {OFFER_PRICE}</CheckoutButton>
            <p className="secure-line">
              <ShieldCheck aria-hidden="true" size={16} />
              Compra segura via Cakto, com PIX, cartao e entrega digital pelo email
            </p>
          </div>
        </section>

        <section className="print-guide-section" id="guia-impressao">
          <div className="section-inner split guide-layout">
            <img
              className="guide-image"
              src={printGuide}
              alt="Guia de impressao e montagem das figurinhas"
              data-real-photo
            />
            <div>
              <p className="eyebrow">Guia incluso</p>
              <h2>Imprima e monte com mais seguranca desde a primeira folha</h2>
              <p>
                O guia acompanha o material para ajudar com papel, escala de
                impressao, qualidade e corte das figurinhas.
              </p>
              <ul className="check-list">
                <li>Ajuda quem nao sabe configurar a impressora.</li>
                <li>Mostra recomendacao de papel e acabamento.</li>
                <li>Ajuda a evitar erros na impressao e no corte.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="guarantee-section">
          <div className="section-inner guarantee-band">
            <ShieldCheck aria-hidden="true" size={42} />
            <div>
              <h2>Compra clara, entrega digital e produto independente</h2>
              <p>
                A comunicacao deixa evidente que o kit nao e oficial e que o
                comprador recebe um arquivo para imprimir.
              </p>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="section-inner narrow">
            <div className="section-heading">
              <p className="eyebrow">Duvidas comuns</p>
              <h2>Perguntas frequentes</h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-section">
          <div className="section-inner narrow">
            <Star aria-hidden="true" size={38} />
            <h2>Complete sua colecao hoje pelo preco promocional</h2>
            <p>
              Receba o kit, imprima as paginas e comece a montar a
              colecao sem depender de sorte, troca ou pacotinho repetido.
            </p>
            <CheckoutButton>LIBERAR MEU KIT POR {OFFER_PRICE}</CheckoutButton>
          </div>
        </section>
      </main>

      <footer>
        <div className="section-inner">
          <p>Produto digital independente de figurinhas tematicas de futebol.</p>
          <p>Sem vinculo oficial com marcas, editoras, entidades esportivas ou torneios registrados.</p>
        </div>
      </footer>

      <StickyCheckoutButton />
    </>
  );
}
