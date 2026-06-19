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
import compareDepay from "./assets/real-photos/compare-depay.jpg";
import compareLeNormand from "./assets/real-photos/compare-le-normand.jpg";
import compareMbappe from "./assets/real-photos/compare-mbappe.jpg";
import packetsTable from "./assets/real-photos/packets-table.jpg";
import printGuide from "./assets/real-photos/print-guide.jpg";
import stickerVariety from "./assets/real-photos/sticker-variety.jpg";
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
    text: "Detalhe visual para reforcar que o PDF imprime com boa presenca.",
  },
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
      "Nao. E uma pagina de venda independente. Marcas, nomes e imagens exibidos em fotos demonstrativas pertencem aos seus respectivos titulares.",
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
                <li>Comparativos reais para mostrar tamanho, corte e acabamento.</li>
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

        <section className="real-proof-section" id="resultado-real">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">Resultado real</p>
              <h2>Veja o PDF impresso comparado com a figurinha original</h2>
              <p>
                As fotos entram aqui porque elas vendem o ponto mais importante:
                o comprador consegue visualizar tamanho, cores e acabamento antes
                de clicar no checkout.
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
              <h2>Variedade visual para deixar a oferta mais concreta</h2>
              <p>
                Esta parte mostra volume: pacotinhos, figurinhas e pagina de
                album. Ela fica antes da oferta para aumentar a confianca no que
                a pessoa esta comprando.
              </p>
              <ul className="check-list">
                <li>Mostra que o produto nao e apenas uma imagem isolada.</li>
                <li>Ajuda o comprador a imaginar o material impresso em casa.</li>
                <li>Reforca a economia frente aos pacotes fisicos.</li>
              </ul>
            </div>
            <div className="kit-photo-stack">
              <img
                className="wide-photo"
                src={packetsTable}
                alt="Mesa com pacotes e figurinhas de futebol"
                data-real-photo
              />
              <img
                className="wide-photo inset-photo"
                src={stickerVariety}
                alt="Colagem com varias figurinhas e previa de album"
                data-real-photo
              />
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
              <li>Pagina e produto digital independente, sem vinculo oficial.</li>
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
              <h2>O comprador tambem entende como imprimir e montar</h2>
              <p>
                Esta imagem entra perto da garantia porque reduz duvidas comuns:
                tamanho do papel, escala de impressao, qualidade e corte.
              </p>
              <ul className="check-list">
                <li>Ajuda quem nao sabe configurar a impressora.</li>
                <li>Mostra recomendacao de papel e acabamento.</li>
                <li>Diminui perguntas depois da compra.</li>
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
          <p>Sem vinculo oficial com marcas, editoras, entidades esportivas ou torneios registrados.</p>
        </div>
      </footer>

      <div className="sticky-cta" aria-label="Atalho para comprar">
        <CheckoutButton compact>COMPRAR POR {OFFER_PRICE}</CheckoutButton>
      </div>
    </>
  );
}
