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

import heroImage from "./assets/kit-hero.png";
import previewImage from "./assets/preview-sheet.png";
import { CHECKOUT_URL, OFFER_PRICE, OLD_PRICE } from "./offer.mjs";

const benefits = [
  {
    icon: Trophy,
    title: "Album tematico completo",
    text: "Folhas organizadas para montar a brincadeira de futebol em casa.",
  },
  {
    icon: CircleDollarSign,
    title: "Preco de pacote pequeno",
    text: "Uma compra digital, sem repetir gasto toda semana.",
  },
  {
    icon: Printer,
    title: "Imprima quando quiser",
    text: "Perdeu, rasgou ou quer repetir uma pagina? Imprima novamente.",
  },
  {
    icon: FileCheck2,
    title: "Arquivo pronto em PDF",
    text: "Formato simples para abrir no celular, computador ou papelaria.",
  },
  {
    icon: Scissors,
    title: "Recorte facil",
    text: "Grid visual pensado para imprimir, recortar e colar com capricho.",
  },
  {
    icon: Clock3,
    title: "Entrega imediata",
    text: "Assim que o checkout estiver ativo, o acesso chega apos a compra.",
  },
];

const pains = [
  "Comprar pacotinho e receber varias repetidas.",
  "Ver espacos vazios no album por semanas.",
  "Gastar muito antes de sentir que a colecao avancou.",
  "Depender de banca, troca e sorte para completar a brincadeira.",
];

const faqs = [
  {
    question: "Como vou receber o kit?",
    answer:
      "O produto e digital. A entrega acontece pelo checkout configurado para liberar o arquivo depois da confirmacao do pagamento.",
  },
  {
    question: "Preciso de uma impressora especial?",
    answer:
      "Nao. Voce pode imprimir em casa ou em uma papelaria. Para melhor resultado, use papel com boa gramatura e impressao colorida.",
  },
  {
    question: "Posso imprimir mais de uma vez?",
    answer:
      "Sim. A proposta e pagar uma vez pelo arquivo digital e imprimir novamente quando precisar.",
  },
  {
    question: "Esse produto e oficial?",
    answer:
      "Nao. E um material digital independente, com arte generica inspirada no clima do futebol, sem vinculo com marcas, editoras ou entidades esportivas.",
  },
];

function CheckoutButton({ children, compact = false }) {
  return (
    <a
      className={compact ? "cta cta-compact" : "cta"}
      href={CHECKOUT_URL}
      data-checkout-link
      aria-label="Comprar kit digital de figurinhas"
    >
      <ShoppingCart aria-hidden="true" size={compact ? 18 : 20} />
      <span>{children}</span>
    </a>
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
        <span>Oferta de lancamento</span>
        <strong>De {OLD_PRICE} por {OFFER_PRICE}</strong>
      </div>

      <main>
        <section className="hero" id="topo">
          <div className="hero-content">
            <p className="eyebrow">
              <Sparkles aria-hidden="true" size={16} />
              Kit digital para imprimir
            </p>
            <h1>
              Figurinhas de futebol 2026 para imprimir, recortar e colecionar
            </h1>
            <p className="hero-copy">
              Um kit em PDF com cards ilustrados, paginas organizadas e visual de
              album para transformar a brincadeira em casa sem depender de
              pacotinhos repetidos.
            </p>
            <div className="hero-actions">
              <CheckoutButton>QUERO MEU KIT POR R$14,90</CheckoutButton>
              <p>
                <LockKeyhole aria-hidden="true" size={15} />
                PIX ou cartao, entrega digital e acesso imediato
              </p>
            </div>
          </div>

          <div className="hero-media" aria-label="Mockup do kit digital">
            <img src={heroImage} alt="Mockup de album e folhas de figurinhas de futebol para imprimir" />
          </div>
        </section>

        <section className="pain-section">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">O problema</p>
              <h2>Colecionar deveria ser divertido, nao uma conta sem fim</h2>
            </div>
            <div className="pain-list">
              {pains.map((pain) => (
                <div className="pain-item" key={pain}>
                  <BadgeCheck aria-hidden="true" size={20} />
                  <span>{pain}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="solution-section">
          <div className="section-inner split">
            <div>
              <p className="eyebrow">A solucao</p>
              <h2>Receba o arquivo, imprima e monte no seu ritmo</h2>
              <p>
                Voce recebe um material digital simples de usar, com paginas
                coloridas e visual caprichado para montar a brincadeira sem
                depender de sorte.
              </p>
              <ul className="check-list">
                <li>Material em PDF com paginas prontas para impressao.</li>
                <li>Arte generica, independente e sem uso de marcas oficiais.</li>
                <li>Preco promocional destacado em todas as chamadas.</li>
              </ul>
            </div>
            <img
              className="preview-image"
              src={previewImage}
              alt="Folha de figurinhas de futebol sendo preparada para impressao"
            />
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

        <section className="offer-section" id="checkout-pendente">
          <div className="offer-panel">
            <p className="eyebrow">Oferta especial</p>
            <h2>Kit Figurinhas Futebol 2026</h2>
            <ul className="offer-list">
              <li>PDF digital com folhas de figurinhas ilustradas.</li>
              <li>Paginas com visual de album para montar a colecao.</li>
              <li>Uso independente, sem marcas ou logos oficiais.</li>
              <li>Acesso preparado para checkout via link externo.</li>
            </ul>
            <div className="price-box">
              <span>De {OLD_PRICE}</span>
              <strong>{OFFER_PRICE}</strong>
              <small>Pagamento unico</small>
            </div>
            <CheckoutButton>QUERO MEU KIT POR R$14,90</CheckoutButton>
            <p className="secure-line">
              <ShieldCheck aria-hidden="true" size={16} />
              Pronto para PIX, cartao e entrega digital pelo seu checkout
            </p>
          </div>
        </section>

        <section className="guarantee-section">
          <div className="section-inner guarantee-band">
            <ShieldCheck aria-hidden="true" size={42} />
            <div>
              <h2>Compra clara, entrega digital e produto independente</h2>
              <p>
                A comunicacao deixa evidente que o kit nao e oficial e que o
                comprador recebe um arquivo digital para imprimir.
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
            <h2>Garanta o kit digital pelo preco promocional</h2>
            <p>
              Receba o arquivo, imprima as paginas e comece a montar a colecao
              no mesmo dia.
            </p>
            <CheckoutButton>QUERO MEU KIT POR R$14,90</CheckoutButton>
          </div>
        </section>
      </main>

      <footer>
        <div className="section-inner">
          <p>Kit digital independente de figurinhas tematicas de futebol.</p>
          <p>Sem vinculo com marcas, editoras, entidades oficiais ou torneios registrados.</p>
        </div>
      </footer>

      <div className="sticky-cta" aria-label="Atalho para comprar">
        <CheckoutButton compact>COMPRAR POR {OFFER_PRICE}</CheckoutButton>
      </div>
    </>
  );
}
