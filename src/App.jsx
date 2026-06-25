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
    title: "Coleção pronta para montar",
    text: "Tudo organizado para transformar folhas impressas em uma brincadeira completa.",
  },
  {
    icon: CircleDollarSign,
    title: "Sem depender de sorte",
    text: "Você compra uma vez e imprime sem esperar vir a figurinha certa.",
  },
  {
    icon: Printer,
    title: "Imprima quando quiser",
    text: "Perdeu, rasgou ou quer repetir uma página? Abra o kit e imprima de novo.",
  },
  {
    icon: FileCheck2,
    title: "Páginas prontas",
    text: "Kit simples para abrir no celular, computador ou papelaria.",
  },
  {
    icon: Scissors,
    title: "Recorte fácil",
    text: "Grid visual pensado para imprimir, recortar e colar com capricho.",
  },
  {
    icon: Clock3,
    title: "Entrega digital no e-mail",
    text: "Depois do pagamento, o checkout libera o acesso digital no e-mail.",
  },
];

const pains = [
  {
    title: "Pacotinho que pesa no bolso",
    text: "Você compra de novo e ainda corre o risco de vir só figurinha repetida.",
  },
  {
    title: "Criança frustrada",
    text: "A expectativa vira decepção quando os espaços nunca preenchem.",
  },
  {
    title: "Álbum que não fecha",
    text: "Comprar, trocar, procurar... e a coleção continua travada.",
  },
  {
    title: "Sorte mandando no jogo",
    text: "Em vez de brincar hoje, você depende de banca, estoque e acaso.",
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
    text: "Bom para mostrar proporção, acabamento e leitura do material.",
  },
  {
    image: compareDepay,
    title: "Acabamento de perto",
    text: "Detalhe visual para reforçar que as páginas imprimem com boa presença.",
  },
];

const heroHighlights = [
  {
    icon: FileCheck2,
    text: "Monte a coleção sem depender de sorte",
  },
  {
    icon: Clock3,
    text: "Acesso imediato no e-mail",
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
    text: "Receba no e-mail após comprar.",
  },
  {
    icon: Printer,
    title: "Imprima sempre",
    text: "Use de novo quando precisar.",
  },
  {
    icon: ShieldCheck,
    title: "Compra segura",
    text: "PIX ou cartão no checkout.",
  },
];

const urgencyReasons = [
  {
    icon: CircleDollarSign,
    title: "Economia imediata",
    text: "O valor do kit custa menos que poucas idas comprando pacote físico.",
  },
  {
    icon: Clock3,
    title: "Monte no seu ritmo",
    text: "A compra libera o kit para baixar, imprimir e montar no mesmo dia.",
  },
  {
    icon: FileCheck2,
    title: "Sem arrependimento por repetidas",
    text: "Você sabe exatamente o que está comprando antes de clicar no botão.",
  },
];

const faqs = [
  {
    question: "Como vou receber o kit?",
    answer:
      "O produto é digital. A entrega acontece pelo checkout configurado para liberar o arquivo para imprimir depois da confirmação do pagamento.",
  },
  {
    question: "Preciso de uma impressora especial?",
    answer:
      "Não. Você pode imprimir em casa ou em uma papelaria. Para melhor resultado, use papel com boa gramatura e impressão colorida.",
  },
  {
    question: "Posso imprimir mais de uma vez?",
    answer:
      "Sim. A proposta é pagar uma vez pelo arquivo para imprimir novamente quando precisar.",
  },
  {
    question: "Esse produto é oficial?",
    answer:
      "Não. É uma página de venda independente. Marcas, nomes e imagens exibidos em fotos demonstrativas pertencem aos seus respectivos titulares.",
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
      <header className="promo-header">
        <div className="top-strip">
          <span>Promoção de lançamento</span>
          <strong>De {OLD_PRICE} por apenas {OFFER_PRICE}</strong>
        </div>
        <CountdownTimer />
      </header>

      <main>
        <section className="hero" id="topo">
          <div className="hero-content">
            <p className="eyebrow">
              <Sparkles aria-hidden="true" size={16} />
              Kit digital para completar sua coleção
            </p>
            <h1>
              Complete seu álbum 2026 hoje sem gastar com pacotinho repetido
            </h1>
            <p className="hero-copy">
              Receba o kit na hora, imprima quando quiser e monte a coleção no
              seu ritmo. Pague uma vez e transforme a brincadeira em algo
              simples, rápido e econômico.
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
                Compra segura via Cakto, com PIX ou cartão e entrega digital pelo e-mail
              </p>
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
            <img src={heroImage} alt="Arte promocional do kit digital para completar o álbum 2026" />
          </div>
        </section>

        <section className="pain-section">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">O problema que todo colecionador conhece</p>
              <h2>Pare de gastar com repetidas e avance na coleção</h2>
              <p>
                Se você já tentou completar uma coleção comprando pacotinho, sabe
                como é frustrante pagar de novo e continuar com espaços vazios.
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
              <CheckoutButton>COMEÇAR MINHA COLEÇÃO SEM REPETIDAS</CheckoutButton>
            </div>
          </div>
        </section>

        <section className="solution-section">
          <div className="section-inner split">
            <div>
              <p className="eyebrow">A solução</p>
              <h2>Receba o kit, imprima e monte no seu ritmo</h2>
              <p>
                Você recebe um kit simples de usar, com páginas coloridas e
                visual caprichado para montar a coleção hoje, sem
                esperar pela sorte do próximo pacote.
              </p>
              <ul className="check-list">
                <li>Páginas coloridas prontas para impressão.</li>
                <li>Comparativos reais para mostrar tamanho, corte e acabamento.</li>
                <li>Compra única para imprimir quando quiser.</li>
              </ul>
            </div>
            <img
              className="preview-image"
              src={stickerVariety}
              alt="Colagem com várias figurinhas e prévia de álbum"
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
                cores e acabamento das páginas.
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
              <h2>Prático para imprimir, recortar e colecionar</h2>
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
              <p className="eyebrow">Prévia do kit</p>
              <h2>Veja o tipo de material que você vai receber</h2>
              <p>
                A prévia mostra o visual do kit, as figurinhas e a ideia da
                coleção montada para você comprar sabendo o que esperar.
              </p>
              <ul className="check-list">
                <li>Páginas coloridas prontas para impressão.</li>
                <li>Visual pensado para imprimir, recortar e colar.</li>
                <li>Economia frente aos pacotes físicos repetidos.</li>
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
              <p className="eyebrow">Decisão simples</p>
              <h2>Por que liberar seu kit hoje?</h2>
              <p>
                A promoção deixa o kit acessível e você recebe as páginas
                para começar a imprimir sem esperar entrega física.
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
              <li>Páginas com visual de álbum para montar a coleção.</li>
              <li>Entrega na hora no e-mail depois da confirmação.</li>
              <li>Você pode imprimir para sempre quando precisar.</li>
              <li>Página e produto digital independente, sem vínculo oficial.</li>
            </ul>
            <div className="price-box">
              <span>De {OLD_PRICE}</span>
              <strong>{OFFER_PRICE}</strong>
              <small>Pagamento único</small>
            </div>
            <CheckoutButton>LIBERAR MEU KIT POR {OFFER_PRICE}</CheckoutButton>
            <p className="secure-line">
              <ShieldCheck aria-hidden="true" size={16} />
              Compra segura via Cakto, com PIX, cartão e entrega digital pelo e-mail
            </p>
          </div>
        </section>

        <section className="print-guide-section" id="guia-impressao">
          <div className="section-inner split guide-layout">
            <img
              className="guide-image"
              src={printGuide}
              alt="Guia de impressão e montagem das figurinhas"
              data-real-photo
            />
            <div>
              <p className="eyebrow">Guia incluso</p>
              <h2>Imprima e monte com mais segurança desde a primeira folha</h2>
              <p>
                O guia acompanha o material para ajudar com papel, escala de
                impressão, qualidade e corte das figurinhas.
              </p>
              <ul className="check-list">
                <li>Ajuda quem não sabe configurar a impressora.</li>
                <li>Mostra recomendação de papel e acabamento.</li>
                <li>Ajuda a evitar erros na impressão e no corte.</li>
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
                A comunicação deixa evidente que o kit não é oficial e que o
                comprador recebe um arquivo para imprimir.
              </p>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="section-inner narrow">
            <div className="section-heading">
              <p className="eyebrow">Dúvidas comuns</p>
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
            <h2>Complete sua coleção hoje pelo preço promocional</h2>
            <p>
              Receba o kit, imprima as páginas e comece a montar a
              coleção sem depender de sorte, troca ou pacotinho repetido.
            </p>
            <CheckoutButton>LIBERAR MEU KIT POR {OFFER_PRICE}</CheckoutButton>
          </div>
        </section>
      </main>

      <footer>
        <div className="section-inner">
          <p>Produto digital independente de figurinhas temáticas de futebol.</p>
          <p>Sem vínculo oficial com marcas, editoras, entidades esportivas ou torneios registrados.</p>
        </div>
      </footer>

      <StickyCheckoutButton />
    </>
  );
}
